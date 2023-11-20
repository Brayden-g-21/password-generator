const upperCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWKYZ';
const lowerCharSet = 'abcdefghijklmnopqrstuvwxyz';
const numCharSet = '1234567890'
const symCharSet = '!@#$%^&*'

function generatePass() {
    let passLength = document.getElementById('length').value -1;
    let password = '';
    let charSet = 'abcdefghijklmnopqrstuvwxyz';

    let includeUpper = document.getElementById('include-upper').checked;
    let includeNums = document.getElementById('include-nums').checked;
    let includeSym = document.getElementById('include-sym').checked;
    
    if (includeUpper === true) {
        console.log('including upper')
        charSet = charSet.concat(upperCharSet);
    }

    if (includeSym === true) {
        console.log('including symbols')
        charSet = charSet.concat(symCharSet);
    }

    if (includeNums === true){
        console.log('including numbers')
        charSet = charSet.concat(numCharSet);
    }

    console.log(charSet)

    for (let i = 0; i <= passLength; i++) {
        let randomNumber = Math.floor(Math.random() * charSet.length);
        password += charSet.substring(randomNumber, randomNumber +1);
       }

    document.getElementById('password').value = password;
}
   