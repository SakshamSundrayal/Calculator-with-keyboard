// Taking input area and all keys
let input = document.getElementById('input-area');
let keys = document.getElementsByClassName('entered');

// Taking all the individual keys
let clearAll = document.getElementById('keyCe');
let Cut = document.getElementById('keyCut')
let Res = document.getElementById('keyEq');

let Prod = document.getElementById('keyProd');

// Taking important variables
let btnTxt;

// Storing the screen value in a variable
let inputValue = "";

for (item of keys)
{
    item.addEventListener('click', (e)=> {
        btnTxt = e.target.innerText;
        console.log('You clicked '+btnTxt);
        inputValue += btnTxt;
        input.innerText = inputValue;
    });
}

// This is for the AC button
clearAll.addEventListener('click', ()=> {
    inputValue = "";
    console.log('Cleared the input area');
    input.innerText = "";
});

// This is for Backspace
Cut.addEventListener('click', ()=> {
    console.log('Cleared on letter');
    inputValue = inputValue.replace(inputValue.charAt(inputValue.length - 1), '');
    input.innerText = inputValue;
});

Res.addEventListener('click', ()=> {
    console.log("Evaluating your answer...");
    if (inputValue == "" || inputValue == '0')
    {
        inputValue = "00"
        input.innerText = inputValue;
    }
    else
    {
        inputValue = eval(inputValue);
        input.innerText = inputValue;
    }
});

Prod.addEventListener('click', ()=> {
    inputValue += '*';
    console.log('You clicked *');
    input.innerText = inputValue;
});






let str = "123456789";

let withoutLastChar = str.replace((str.charAt(str.length - 1)), '');

console.log(withoutLastChar);
console.log(str);

