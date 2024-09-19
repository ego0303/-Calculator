let display = document.querySelector("#display").innerHTML = 0;
let input = "";
let num1 = null;
let num2 = null;
let op = ""
let isPlus = true;


function erase(){
    const display = document.querySelector("#display");
    display.innerHTML = "0";
    input = "";
    num1 = null;
    num2 = null;
    op = "";
}

function number(number){
    const display = document.querySelector("#display");
    input += number;
    if (input.length > 15) {
        display.style.fontSize = "40px";
        display.innerHTML = "OUT OF BOUND";
    } else {
        display.style.fontSize = "60px"; // Reset font size if within bounds
        display.innerHTML = input;
    }

}

function del(){
    const display = document.querySelector("#display");
    input = input.slice(0,-1);
    if(input.length === 0){
        display.innerHTML=0;
    }
    else{
        display.innerHTML=input;
    }


}

function operator(ope){
    if (num1 === null) {
        num1 = input;
    }
    op = ope;
    input += op;
    const display = document.querySelector("#display");
    display.innerHTML = input;
}

function calc(){
    const display = document.querySelector("#display");
    if (num1 !== null && num2 === null) {
        [num1, num2] = input.split(op);
    };
    let res = 0
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(op === "+")
    {
        res = num1 + num2;
        display.innerHTML = res;
        input = res;
    }
    else if(op === "-"){
        res = num1 - num2;
        display.innerHTML = res;
        input = res;
    }
    else if(op === "*"){
        res = num1 * num2;
        display.innerHTML = res;
        input = res;
    }
    else if(op === "/"){
        res = num1/num2;
        display.innerHTML = res;
        input = res;
    }
    else{
        display.innerHTML = input;
    }
}

function per(){
    const display = document.querySelector("#display");
    let res = parseFloat(input)/100;
    display.innerHTML=res;

}

function mode(){
    const display = document.querySelector("#display");

    // Kiểm tra nếu input rỗng hoặc bằng "0", thì không xử lý gì
    if (input === "" || input === "0") {
        return;  // Không làm gì nếu input rỗng hoặc "0"
    }

    isPlus = !isPlus;

    // Nếu là dấu dương
    if (isPlus) {
        // Nếu input bắt đầu với dấu '-', bỏ dấu '-' đi
        if (input.startsWith("-")) {
            input = input.slice(1);
        }
        display.innerHTML = input;
    } 
    // Nếu là dấu âm
    else {
        // Nếu input chưa có dấu '-', thêm vào
        if (!input.startsWith("-")) {
            input = "-" + input;
        }
        display.innerHTML = input;
    }
}