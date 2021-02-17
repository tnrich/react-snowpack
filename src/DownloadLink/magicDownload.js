/**
 *
 * @param {string} text
 * @param {string} fileName
 * @param {string} type
 */
// import { lookup } from "mime-types";

export default function magicDownload(text, fileName, type) {
  let blob = new Blob([text], {
    type: type ||/*  lookup(fileName) || */ "text/csv;charset=utf8;",
  });

  // create hidden link
  let element = document.createElement("a");
  document.body.appendChild(element);
  element.setAttribute("href", window.URL.createObjectURL(blob));
  element.setAttribute("download", fileName);
  element.style.display = "";

  element.click();

  document.body.removeChild(element);
}
