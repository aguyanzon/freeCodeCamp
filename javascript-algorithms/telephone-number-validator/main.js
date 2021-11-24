function telephoneCheck(str) {
    const validationNumber = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm
    return validationNumber.test(str);
}
    

