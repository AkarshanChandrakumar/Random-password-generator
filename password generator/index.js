function getRandomNumber(min=0,max) {
    return Math.floor((Math.random() * max)+min);
}

function generatePassword(passwordLength) {
    const password = [];
    password.push(getRandomChar("digits"));
    password.push(getRandomChar("symbol"));
    password.push(getRandomChar("upperCase"));
    password.push(getRandomChar("lowerCase"));
    const MANDATORY_CHARS = 4;
    const remainingcharacters = passwordLength - MANDATORY_CHARS;
    const charTypes = ["digits","symbol","upperCase","lowerCase"];

    for(let i = 0;i<remainingcharacters;i++) {
        const randomNumber = getRandomNumber(0,4);
        const charType = charTypes[randomNumber]
        const char = getRandomChar(charType);
        password.push(char);
    }

    shuffleArray(password)
    return password;
}

function shuffleArray(array) {
    for(let i = 0;i<array.length;i++) {
        const randomNumber = getRandomNumber(0,array.length);
        tmp = array[i];
        array[i] = array[randomNumber];
        array[randomNumber] = tmp;
    }
}

function getRandomChar(charType) {
    const charTypeMap = {
        digits: ['0','1','2','3','4','5','6','7','8','9'],
        symbol: ['$','&','(',')','$','^','*','!','@','#'],
        upperCase: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','y','z'],
        lowerCase: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R']
    };
    const randomNumber = getRandomNumber(0,charTypeMap[charType].length);
    return charTypeMap[charType][randomNumber];
}

console.log(generatePassword(10).join(''))
console.log(generatePassword(10).join(''))
console.log(generatePassword(10).join(''))
console.log(generatePassword(10).join(''))
console.log(generatePassword(10).join(''))
console.log(generatePassword(15).join(''))