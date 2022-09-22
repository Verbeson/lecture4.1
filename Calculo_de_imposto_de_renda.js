
let salarioBruto = 3000;
let aliquota;
let inss;
let salarioBrutoInss;

if (salarioBruto <= 1556.94) {
    salarioBrutoInss = salarioBruto - salarioBruto * 0.08;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBrutoInss = salarioBruto - salarioBruto * 0.09;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBrutoInss = salarioBruto - salarioBruto * 0.11;
}else{
    salarioBrutoInss = salarioBruto - 570.88 ;
}console.log(salarioBrutoInss)

let ir;
let salarioLiquido;

if(salarioBrutoInss <= 1903.98){
    salarioLiquido = salarioBrutoInss;
}else if(salarioBrutoInss >= 1903.99 && salarioBrutoInss <= 2826.65){
    ir = (salarioBrutoInss * 0.075) - 142.80;
}else if(salarioBrutoInss >= 2826.66 && salarioBrutoInss <= 3751.05){
    ir = (salarioBrutoInss * 0.15) - 354.80;
}else if(salarioBrutoInss >= 3751.06 && salarioBrutoInss <= 4664.68){
    ir = (salarioBrutoInss * 0.225) - 636.13;
}else{
    ir = (salarioBrutoInss * 0.275) - 869.36;
}salarioLiquido = salarioBrutoInss - ir;

return false;



