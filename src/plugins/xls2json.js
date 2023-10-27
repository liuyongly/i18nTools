const XLSX = require("xlsx");
const fs = require("fs");
const _ = require("lodash");
var convert = require("xml-js");
XLSX.set_fs(fs);
const os = require('os');

export default function ({ type, file }, path, cb) {
  console.log("type", type);
  console.log("file", file);
  const workbook = XLSX.readFile(file.path);
  console.log(workbook);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const data = XLSX.utils.sheet_to_json(worksheet);
  console.log(data);
  if (type === ".js") {
    const res = {};
    data.forEach((item, index) => {
      for (const key in item) {
        if (key !== "name") {
          index === 0 && (res[key] = {});
          // console.log("key", key, item[key]);
          _.set(res[key], item.name, item[key]);
        }
      }
    });
    console.log(res);
    for (const lang in res) {
      writeData(
        JSON.stringify(res[lang], "", "\t"),
        `${path}/${lang}_${parseTime(
          new Date(),
          "{y}-{m}-{d}_{h}-{i}-{s}"
        )}${type}`,
        cb
      );
    }
  } else if (type === ".xml") {
    console.log("进入xml");
    const strObj = {};
    // json2xml 处理
    // data.forEach((item, index) => {
    //   for (const key in item) {
    //     if (key !== "name") {
    //       !strObj.hasOwnProperty(key) &&
    //         (strObj[key] = {
    //           elements: [{ type: "element", name: "resources", elements: [] }],
    //         });
    //       strObj[key].elements[0].elements.push({
    //         type: "element",
    //         name: "string",
    //         attributes: { name: item.name },
    //         elements: [{ type: "text", text: item[key] }],
    //       });
    //     }
    //   }
    // });
    // console.log("strObj", strObj);
    // for (const lang in strObj) {
    //   var options = { compact: false, indentCdata: true };
    //   var result = convert.json2xml(strObj[lang], options);
    //   console.log(result); // <foo:Name>Ali</Name> <bar:Age>30</bar:Age>
    //   writeData(
    //     result,
    //     `${path}/${lang}_${parseTime(
    //       new Date(),
    //       "{y}-{m}-{d}_{h}-{i}-{s}"
    //     )}${type}`
    //   );
    //   // fs.writeFile(`${path}/${lang}_${parseTime(new Date(), "{y}-{m}-{d}_{h}-{i}-{s}")}${type}`, result, () => {})
    // }

    // string 处理
    data.forEach((item, index) => {
      for (const key in item) {
        if (key !== "name") {
          !strObj.hasOwnProperty(key) &&
            (strObj[key] = '');
          strObj[key] += `<string name="${item.name}">${item[key]}</string>${os.EOL}`;
        }
      }
    });
    console.log("strObj", strObj);
    for (const lang in strObj) {
      const str = `<resources>${os.EOL}${strObj[lang]}</resources>`
      writeData(
        str,
        `${path}/${lang}_${parseTime(
          new Date(),
          "{y}-{m}-{d}_{h}-{i}-{s}"
        )}${type}`,
        cb
      );
    }
  } else if (type === ".strings") {
    const strObj = {};
    data.forEach((item, index) => {
      for (const key in item) {
        if (key !== "name") {
          !strObj.hasOwnProperty(key) && (strObj[key] = "");
          let strValue = encodeURIComponent(item[key])
          let strName = encodeURIComponent(item.name)
          strValue = strValue.replaceAll('%0A', '\\n')
          strName = strName.replaceAll('%0A', '\\n')
          strObj[key] += `"${decodeURIComponent(strName)}" = "${decodeURIComponent(strValue)}";${os.EOL}`;
        }
      }
    });
    console.log("strObj", strObj);
    for (const lang in strObj) {
      writeData(
        strObj[lang],
        `${path}/${lang}_${parseTime(
          new Date(),
          "{y}-{m}-{d}_{h}-{i}-{s}"
        )}${type}`,
        cb
      );
    }
  } else if (type === ".properties") {
    const strObj = {};
    data.forEach((item, index) => {
      for (const key in item) {
        if (key !== "name") {
          !strObj.hasOwnProperty(key) && (strObj[key] = "");
          strObj[key] += `${item.name}=${item[key]}${os.EOL}`;
        }
      }
    });
    console.log("strObj", strObj);
    for (const lang in strObj) {
      writeData(
        strObj[lang],
        `${path}/${lang}_${parseTime(
          new Date(),
          "{y}-{m}-{d}_{h}-{i}-{s}"
        )}${type}`,
        cb
      );
    }
  }
}

// 写入文件，会完全替换之前JSON文件中的内容
function writeData(value, path, cb) {
  // let str = JSON.stringify(value, "", "\t");
  fs.writeFile(path, value, function (err) {
    if (err) {
      console.error(err);
    }
    console.log("写入成功!");
    cb()
  });
}

function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === "string") {
      time = time.replace(new RegExp(/-/gm), "/");
    }
    if (typeof time === "number" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}
