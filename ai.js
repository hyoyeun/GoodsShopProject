'use strict';
let inputin = document.querySelectorAll('input');

let label = document.querySelectorAll('label');

let btn = document.querySelector('button');
console.log(inputin);
let idname = document.getElementById('userId');
console.log(idname.value);
let index_area = document.getElementsByClassName('index-area');
console.log(idname.value);

function IsExistValue() {
    let innamelenght = idname.value.length;
    if (innamelenght > 0)
        return true;
    return false;
}

for (let i = 0; i < inputin.length; i++) {
    inputin[i].addEventListener("focus", () => {
        label[i].style.fontSize = '13px';
        label[i].style.top = '-10px';
        inputin[i].style.outline = 'none';
    });

    inputin[i].addEventListener("blur", () => {
        console.log(IsExistValue());
        if (IsExistValue() == false) {
            label[i].style.position = 'absolute';
            label[i].style.left = '10px';
            label[i].style.top = '10px';
            label[i].style.fontSize = '16px';
        }
    });
}


