import { dataFromServerFunc } from "../../api/index.js";

const dataFromServer = await dataFromServerFunc();

export function LinkToDownload() {
  const linkTo = document.getElementsByClassName("link-to-download-class");
  const appStore = dataFromServer.appStoreLink;

  for (let link of linkTo) {
    link.setAttribute("href", appStore);
  }
}
