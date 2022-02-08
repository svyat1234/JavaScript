var targetNumber; 
function setNumber() { 
  targetNumber=parseInt(Math.random()*100);
  if (targetNumber==0) { 
    targetNumber=1; 
  }
}

function tryToGuess() { 
  var message='Угадайте число от 1 до 100 за 10 попыток';
  var attempts=10; 
  setNumber(); 
  while (attempts>0) { 
    var entered=prompt(message);
    if (entered==null) { 
      break; 
    }
    else {  
      if (isNaN(entered) || entered.indexOf(' ')>=0 || entered=="") { 
        message='Введи число! (осталось '+attempts+' попыток)'; 
      }
      else if (Number(entered)>targetNumber) { 
        attempts--;
        message='Меньше! (осталось '+attempts+' попыток)';
      }
      else if (Number(entered)<targetNumber) { 
        attempts--;
        message='Больше! (осталось '+attempts+' попыток)'; 
      }
      else if (Number(entered)==targetNumber) { 
      var con=confirm("Правильно! Сыграем ещё раз?") 
        if (con) { 
          setNumber(); 
          attempts=10; 
          message='Угадайте число от 1 до 100 за 10 попыток';
        }
        else { //если прерываем
          break; 
        }
      }
    }
    if (attempts==0) { 
      var con=confirm('Вы не угадали :( Загаданное число: '+targetNumber+'. Сыграем ещё раз?');
      if (con) {  
        setNumber();  
        attempts=10; 
        message='Угадайте число от 1 до 100 за 10 попыток';
      }
      else {
        break;
      }
    }
  }
}
tryToGuess()