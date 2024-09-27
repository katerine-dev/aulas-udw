var nota1 = Number(prompt("Digite a primera nota"));
var nota2 = Number(prompt("Digite a segunda nota"));

var media = (nota1 + nota2) / 2;

if(media >= 7){
    alert("Aprovado")
}else if(media >= 5 && media < 7 ){
    alert("Exame")
}else{
    alert("Reprovado")
}

alert("a média é: " + media)

