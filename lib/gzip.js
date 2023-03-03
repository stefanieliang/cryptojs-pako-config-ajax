import { Base64 } from "js-base64";
import pako from "pako";

const gzip = function (text) {
    return Base64.fromUint8Array(pako.gzip(text));
}

const ungzip = function (text) {
    return pako.ungzip(Base64.toUint8Array(text), { to: "string" });
}

export { gzip, ungzip };
