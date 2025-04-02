function updateValue(button) {
  const output = document.getElementById("display");
  output.value += button.value
}


function clearValue(button) {
  const output = document.getElementById("display");
  output.value = '';
}

function backSpace(button) {
  const output = document.getElementById("display");
  output.value = output.value.slice(0, -1);
}

function calculate() {
  var symbol = '';
  const output = document.getElementById("display");
  
  for (var i = 0; i < output.value.length; i++) 
  {
    if (output.value[i] === '*' || output.value[i] === '%' || output.value[i] === '/'
      || output.value[i] === '-' || output.value[i] === '+') 
    {  
      symbol = output.value[i];     
      break;                       
    }
  }

  if (symbol) 
  {
    var a = parseFloat(output.value.slice(0, i));
    var b = parseFloat(output.value.slice(i + 1));
    if(symbol === '*')
      output.value ="="+" " +a*b;
    else if(symbol === '%')
      output.value ="="+" " +a%b;
    else if(symbol === '/')
      output.value ="="+" " +a/b;
    else if(symbol === '-')
      output.value ="="+" " +(a-b);
    else if(symbol === '+')
      output.value ="="+" " +(a+b);    
  }
  else 
  {
    alert("No '*' operator found!");
  }
}

