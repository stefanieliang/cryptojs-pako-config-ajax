import CryptoJS from "crypto-js";

const encrypt = function (text, key) {
    if (!key) {
        return '';
    }
    const iv = CryptoJS.enc.Utf8.parse(key.substring(0, 16));
    const key1 = CryptoJS.enc.Base64.parse(key);
    const text1 = CryptoJS.enc.Utf8.parse(text);
    const encrypted1 = CryptoJS.AES.encrypt(text1, key1, {
        iv: iv,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.NoPadding,
    });
    return encrypted1.toString();
}


const decrypt = function (text, key) {
    if (!key) {
        return '';
    }
    const iv = CryptoJS.enc.Utf8.parse(key.substring(0, 16));
    const key1 = CryptoJS.enc.Base64.parse(key);
    const decrypted1 = CryptoJS.AES.decrypt(text.replace(/\r\n/g, "").replace(/\r/g, ""), key1, {
        iv: iv,
        mode: CryptoJS.mode.CTR,
        padding: CryptoJS.pad.NoPadding,
    });
    const data = CryptoJS.enc.Utf8.stringify(decrypted1).toString();
    return data;
}

export { encrypt, decrypt }