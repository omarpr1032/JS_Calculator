// JavaScript Document

function Calculadora(DigitoUno, DigitoDos){
	this.digitoUno=DigitoUno;
	this.digitoDos=DigitoDos;
	
	this.Sumar= function(){
		var result = parseFloat(this.digitoUno) + parseFloat(this.digitoDos);
		return  result;
	}
};