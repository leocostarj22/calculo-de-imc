
function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#peso');
  var inputHeight = document.querySelector('#altura');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(peso, altura) {
  return peso / (altura * altura);
}

function handleButtonClick() {
  var inputpeso = document.querySelector('#peso');
  var inputaltura = document.querySelector('#altura');
  var imcResult = document.querySelector('#retorno');

  var peso = Number(inputpeso.value);
  var altura = Number(inputaltura.value);

  var imc = calculateImc(peso, altura);
  var formattedImc = imc.toFixed(2).replace('.', ',');

  imcResult.textContent = formattedImc;

  
  if(imc <16){
    imcResult.textContent = (`Valor inválido!`);
  } else if(imc >= 16 && imc <17){
    imcResult.textContent = (`O IMC desses dados é ${formattedImc}. Este valor considera que você está na faixa "abaixo do peso". `);
  } else if(imc >= 17 && imc <18,5){
    imcResult.textContent = (`O IMC desses dados é ${formattedImc}. Este valor considera que você está na faixa "Peso Normal". `); 
  } else if(imc >= 18.5 && imc <25){
    imcResult.textContent = (`O IMC desses dados é ${formattedImc}. Este valor considera que você está na faixa "Acima do Peso". `);  
  } else if(imc >= 25 && imc <30){
    imcResult.textContent = (`O IMC desses dados é ${formattedImc}. Este valor considera que você está na faixa "Obesidade Grau I". `);  
  } else if(imc >= 30 && imc <35){
    imcResult.textContent = (`O IMC desses dados é ${formattedImc}. Este valor considera que você está na faixa "Obesidade Grau II". `);  
  } else if(imc > 40){
    imcResult.textContent = (`O IMC desses dados é ${formattedImc}. Este valor considera que você está na faixa "Obesidade Grau III". `);  
  }  
  return;
}

start();
