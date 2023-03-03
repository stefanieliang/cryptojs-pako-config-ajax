

function dotest(source, security_key) {
    console.log("我自己原文1-before", source);
    const ciphertext = gzip(source);
    console.log("我自己压缩1", ciphertext);
    const _src = ungzip(ciphertext);
    console.log("我自己原文1-after", _src);
  
    console.log("我自己原文2-before", source);
    const ciphertext2 = encrypt(source, security_key);
    console.log("我自己加密2", ciphertext2);
    const _src2 = decrypt(ciphertext2, security_key);
    console.log("我自己原文2-after", _src2);
  
    console.log("我自己原文3-before", source);
    const ciphertext3 = encrypt(gzip(source), security_key);
    console.log("我自己压缩3", ciphertext3);
    const _src3 = ungzip(decrypt(ciphertext3, security_key));
    console.log("我自己原文3-after", _src3);
  
    console.log("我自己原文4-before", source);
    const ciphertext4 = gzip(encrypt(source, security_key));
    console.log("我自己压缩4", ciphertext4);
    const _src4 = decrypt(ungzip(ciphertext4), security_key);
    console.log("我自己原文4-after", _src4);
  }
  