import { FileType, MfeUtil } from "./mfe-util";

document.getElementById("root")!.innerHTML = "Hello container!";

export const mef = new MfeUtil();

mef
  .loadRemoteFile({
    remoteName: "header",
    remoteEntry: `http://localhost:9001/header.js`,
    exposedFile: "./header",
    exposeFileType: FileType.Module,
  })
  .then((headerModule) => {
    const headerElement = document.getElementById('header');
    headerModule.loadHeader(headerElement);
  });
