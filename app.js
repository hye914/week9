let numFirst = '';
let numSecond = '';
let op_input = null; //연산자가 입력되었는지

const cp_input_num = document.querySelector('#result'); //입력한 것을 display해줌

const numFunc = (n) => {
    if (op_input == null) {
        if (n === '.' && numFirst.includes('.')) { //.을 두번 입력할 수 없도록 처리
            return;
        }
        numFirst = numFirst + n;
        cp_input_num.value = numFirst;
    } else {
        if (n === '.' && numSecond.includes('.')) {
            return;
        }
        numSecond = numSecond + n;
        cp_input_num.value = numSecond;
    }
};


const opFunc = (op) => {
    switch (op) {
        case '+':
            op_input = op;
            break;
        case '-':
            op_input = op;
            break;
        case '*':
            op_input = op;
            break;
        case '/':
            op_input = op;
            break;
        case '=':
            switch(op_input){
                case '+':
                    cp_input_num.value=parseFloat(numFirst)+parseFloat(numSecond);
                    break;
                case '-':
                    cp_input_num.value=parseFloat(numFirst)-parseFloat(numSecond); 
                    break;
                case '/':
                    cp_input_num.value=parseFloat(numFirst)/parseFloat(numSecond);
                    break;
                case '*':
                    cp_input_num.value=parseFloat(numFirst)*parseFloat(numSecond); 
                    break;
            }
            numFirst = cp_input_num.value; //연속된 결과를 도출하기 위해 결과값을 first 변수에 저장 
            numSecond = ''; // 두 번째 숫자 초기화
            op_input = null; // 연산자 초기화
            break;      
        case 'clear':
            numFirst = '';
            numSecond = '';
            op_input = null;
            cp_input_num.value = '';
            break;
    }
};

document.querySelector('#n0').addEventListener('click', () => numFunc('0'));
document.querySelector('#n1').addEventListener('click', () => numFunc('1'));
document.querySelector('#n2').addEventListener('click', () => numFunc('2'));
document.querySelector('#n3').addEventListener('click', () => numFunc('3'));
document.querySelector('#n4').addEventListener('click', () => numFunc('4'));
document.querySelector('#n5').addEventListener('click', () => numFunc('5'));
document.querySelector('#n6').addEventListener('click', () => numFunc('6'));
document.querySelector('#n7').addEventListener('click', () => numFunc('7'));
document.querySelector('#n8').addEventListener('click', () => numFunc('8'));
document.querySelector('#n9').addEventListener('click', () => numFunc('9'));
document.querySelector('#dot').addEventListener('click', () => numFunc('.'));

document.querySelector('#op_plus').addEventListener('click', () => opFunc('+'));
document.querySelector('#op_result').addEventListener('click', () => opFunc('='));
document.querySelector('#op_sub').addEventListener('click', () => opFunc('-'));
document.querySelector('#op_mul').addEventListener('click', () => opFunc('*'));
document.querySelector('#op_div').addEventListener('click', () => opFunc('/'));
document.querySelector('#op_clr').addEventListener('click', () => opFunc('clear'));






