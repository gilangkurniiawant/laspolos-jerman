function make_target(negara) {
    var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19RZnLEfXbiItxsKAjD67sTlUR/k5lGcmrqyCDNpsiDZpwEH787WSko",
        negara);
    if (decrypted == "") {
        var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX18YXvShbkMUW487D7fnEhvjjbqUdOQep0XA+7h8mNUwOGGCdzC+jogL",
            negara);
        if (decrypted == "") {
            return "https://twitter.com/imkameriana";
        } else {
            return decrypted.toString(CryptoJS.enc.Utf8);
        }
    } else {
        return decrypted.toString(CryptoJS.enc.Utf8);

    }


}