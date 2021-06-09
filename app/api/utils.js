var Buffer = require("buffer/").Buffer;
var btoa = require("btoa");

//Changing Buffer implimentation in window Object
window.Buffer = Buffer;

//Funtion takes a Array Buffer and converts it to readable img src !
export function getReadableImgSrc(buffer, contentType) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }

  //*******************Try Everything you can do, never quit !*************************//

  //returing src for displaying IMG
  return `data:image/${contentType};base64,${btoa(binary)}`;
}
