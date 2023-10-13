var fs = require("fs");
var json2xls = require("json-as-xlsx");
// var XLSX = require("xlsx");
var _ = require("lodash");
var convert = require("xml-js");
const path = require("path");
const LineByLineReader = require("line-by-line");

export default function (options, savePath, cb) {
  console.log("options", options);
  console.log("options[0]", options[0]);
  let origin = [];
  // newOutput()
  // return

  const transferOption = [
    {
      sheet: "translate",
      columns: [
        // { label: "Name", value: (row) => row.name },
        // { label: "tw", value: (row) => row.tw }, // Top level data
        // { label: "zh", value: (row) => row.zh }, // Custom format
        // { label: "en", value: (row) => row.en }, // Run functions
      ],
      content: null,
    },
  ];
  options.forEach(async (item, index) => {
    const originObject = {};
    const extname = path.extname(item.files.path);
    const data = fs.readFileSync(item.files.path, "utf-8");
    // console.log("data", data);
    if (extname === ".xml") {
      const parseJson = JSON.parse(
        convert.xml2json(data, {
          compact: true,
          spaces: 4,
          ignoreComment: true,
        })
      ).resources.string;
      console.log("parseJson", parseJson);
      parseJson.forEach((o) => {
        originObject[o._attributes.name] = o._text;
        if (index === 0) {
          origin.push({
            name: o._attributes.name,
          });
        }
      });
      origin.forEach((o) => {
        o[item.value] = originObject[o.name];
      });
      if (Object.keys(origin[0]).length -1 === options.length) output(origin, transferOption,extname,savePath, cb);
    } else if (extname === ".strings") {
      // console.log(".strings", data)
      const errLine = [];
      const lr = new LineByLineReader(item.files.path, {
        encoding: "utf8",
        skipEmptyLines: true,
      });
      lr.on("line", (line) => {
        console.log("line", line);
        if (line.indexOf("=") > -1) {
          try {
            const o = line.split(";")[0];
            const lineString = o.replace("=", ":");
            // console.log("lineArray", JSON.parse(`{${lineString}}`))
            const obj = JSON.parse(`{${lineString}}`);
            for (const key in obj) {
              originObject[key] = obj[key];
              if (index === 0) {
                origin.push({
                  name: key,
                });
              }
            }
          } catch (e) {
            // console.log("e", e)
            errLine.push(line);
          }
        }
      });
      lr.on("end", () => {
        // console.log("errLine", errLine)
        // console.log("originObject", originObject)
        origin.forEach((o) => {
          o[item.value] = originObject[o.name];
        });
        if (Object.keys(origin[0]).length -1 === options.length) output(origin, transferOption,extname,savePath, cb);
      });
    } else if (extname === ".js") {
      // console.log(eval("require('"+item.files.path.replaceAll('\\','\\\\')+"')"))
      const originObject = flatten(
        eval("require('" + item.files.path.replaceAll("\\", "\\\\") + "')")
      );
      // console.log(originObject)
      if (index === 0) {
        origin = createName(originObject);
      }
      origin.forEach((o) => {
        o[item.value] = _.get(originObject, o.name);
      });
      if (Object.keys(origin[0]).length -1 === options.length) {
        output(origin, transferOption,extname,savePath, cb);
      }
    } else if (extname === ".properties") {
      const errLine = [];
      const lr = new LineByLineReader(item.files.path, {
        encoding: "utf8",
        skipEmptyLines: true,
      });
      lr.on("line", (line) => {
        // console.log("line", line);
        if (line.indexOf("=") > -1) {
          try {
            const lineArray = line.split("=");
            const obj = {
              [lineArray[0]]: lineArray[1],
            };
            for (const key in obj) {
              originObject[key] = obj[key];
              if (index === 0) {
                origin.push({
                  name: key,
                });
              }
            }
          } catch (e) {
            // console.log("e", e)
            errLine.push(line);
          }
        }
      });
      lr.on("end", () => {
        origin.forEach((o) => {
          o[item.value] = originObject[o.name];
        });
        console.log('output:::::::',index, Object.keys(origin[0]).length -1)
        if (Object.keys(origin[0]).length -1 === options.length) output(origin, transferOption,extname,savePath, cb);
      });
    }
  });
}

const output = (origin, transferOption,extname,savePath, cb) => {
  console.log("transferOption", transferOption);
  if (origin[0]) {
    for (const key in origin[0]) {
      transferOption[0].columns.push({
        label: key,
        value: (row) => row[key],
      });
    }
    transferOption[0].content = origin;
  }

  const settings = {
    fileName: "I18N", // Name of the resulting spreadsheet
    extraLength: 3, // A bigger number means that columns will be wider
    writeMode: "writeFile", // The available parameters are 'WriteFile' and 'write'. This setting is optional. Useful in such cases https://docs.sheetjs.com/docs/solutions/output#example-remote-file
    writeOptions: {

    }, // Style options from https://docs.sheetjs.com/docs/api/write-options
    RTL: false, // Display the columns from right-to-left (the default value is false)
  };

  settings.fileName = savePath + `\\${settings.fileName}_${extname.slice(1,extname.length)}_${parseTime(new Date(), "{y}-{m}-{d}_{h}-{i}-{s}")}`;
  json2xls(transferOption, settings,() => {
    cb()
  }); // Will download the excel file
  console.log("输出excel成功！");

};
function flatten(data) {
  var result = {};
  function recurse(cur, prop) {
    // 如果输入进来的是不是对象，就将其放在数组中，返回
    if (Object(cur) !== cur) {
      result[prop] = cur;
      // 如果输入进来的是数组，长度不为0就递归数组，得出结果
    } else if (Array.isArray(cur)) {
      for (var i = 0, len = cur.length; i < len; i++)
        recurse(cur[i], prop + "[" + i + "]");
      if (len == 0) result[prop] = [];
    } else {
      var isEmpty = true;
      for (var p in cur) {
        isEmpty = false;
        recurse(cur[p], prop ? prop + "." + p : p);
      }
      if (isEmpty && prop) result[prop] = {};
    }
  }
  recurse(data, "");
  return result;
}
function createName(data) {
  const arr = [];
  for (const key in data) {
    arr.push({
      name: key,
    });
  }
  // console.log(arr)
  return arr;
}
function concatValue(origin, langs) {
  origin.forEach((item) => {
    for (const key in langs) {
      // console.log(item.name.split("."))
      item[key] = _.get(langs[key], item.name);
    }
  });
  return origin;
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
