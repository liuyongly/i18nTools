// import json2xls from './plugins/json2xls';
export const initIpc = (ipcMain, dialog, win) => {
  // 同步处理通信，并等待主进程返回值
  //   ipcMain.on("event-on-test", (e, data: string) => {
  //     setTimeout(() => {
  //       e.returnValue = "主进程同步响应：" + data;
  //     }, 2000);
  //   });

  // 异步处理通信，异步返回结果
  ipcMain.on("toExcel", (e, data) => {
    // const webContents = e.sender;
    // console.log(data);
    // webContents.send("log",JSON.stringify(data) );
    // json2xls(data, dialog)

  });



  //   // 异步处理一次
  //   ipcMain.handleOnce("event-handleOnce-test", (e) => {
  //     console.log("异步通信处理一次！");
  //   });

};
