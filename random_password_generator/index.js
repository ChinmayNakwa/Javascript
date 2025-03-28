
function generatePassword(length, incluedLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcedfghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-="

    let allowedChars = "";
    let password = "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    if(allowedChars.length == 0) {
        return  `Atleast 1 set of character needs to be selected`;
    }

    for (let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const  password = generatePassword(passwordLength, 
                                   includeLowercase,
                                   includeUpperCase, 
                                   includeNumbers, 
                                   includeSymbols);
console.log(`Generated password: ${password}`)

//4.08.07


