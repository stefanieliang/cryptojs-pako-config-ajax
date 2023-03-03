import { encrypt, decrypt } from './encrypt';
import { gzip, ungzip } from './gzip';
import SecretConst from './constant';

const openapi = {
    dealRequestBody: function (source, security_key, level) {
        let result = "";
        if (!level || SecretConst.LEVEL0 == level) {
            result = source;
        } else if (SecretConst.LEVEL1 == level) {
            result = encrypt(source, security_key);
        } else if (SecretConst.LEVEL2 == level) {
            result = gzip(source);
        } else if (SecretConst.LEVEL3 == level) {
            result = encrypt(gzip(source), security_key);
        } else if (SecretConst.LEVEL4 == level) {
            result = gzip(encrypt(source, security_key));
        } else {
            throw new Error("无效的安全等级");
        }
        return result;
    },

    dealResponseBody: function (source, security_key, level) {
        let result = "";
        if (!level || SecretConst.LEVEL0 == level) {
            result = source;
        } else if (SecretConst.LEVEL1 == level) {
            result = decrypt(source, security_key);
        } else if (SecretConst.LEVEL2 == level) {
            result = ungzip(source);
        } else if (SecretConst.LEVEL3 == level) {
            result = ungzip(decrypt(source, security_key));
        } else if (SecretConst.LEVEL4 == level) {
            result = decrypt(ungzip(source), security_key);
        } else {
            throw new Error("无效的安全等级");
        }
        return result;
    }
}

export default openapi;