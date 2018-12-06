

  function layoutLetters(winWordArr) {
                
                for (var i = 0; i < winWordArr.length; i++) {
                  var targetDiv = document.getElementById("winWordDiv");
  
                  var newDiv = document.createElement("<div>");
                                 
                  newDiv.textContent = (" _ ");
  
                  targetDiv.appendChild(newDiv);
  
                  var setClassName = ("pos" + i);
                 
                  // newDiv.setAttribute("class", "letters"); // new class attribute
                  // newDiv.setAttribute("class", newDiv.getAttribute("class") + setClassName); // append another class
  
                  //  newDiv.setAttribute("class", "letters");
                  }
              }
                // newDiv.textContent = (winWordArr[i]);
              
              //Check if current userInput has already been tried
  
              function alreadyPressed(pressedKey, wasPressedArr) {
                      var alreadyUsed = false;
                      for (var i = 0; i < wasPressedArr.length; i++) {
                          if (pressedKey == wasPressedArr[i]) {
                              var alreadyUsed = true;
                           console.log({
                               alreadyUsed: alreadyUsed  });
                          }
                      }
                          return alreadyUsed;
              }
              
              //Check if current userInput is in the winning word
              function checkWinWord(pressedKey, winWordLettersArr) {
                  var inWinWord = false;
              
                  for (var i = 0; i < winWordLettersArr.length; i++) {
                      if (pressedKey === winWordLettersArr[i]) {
                          inWinWord = true;
                      }
                  }
                  return inWinWord ;
              }    
              
              //Tally the number of correctly guessed letters
  
              function tally(pressedKey, winWordLettersArr) {
                 var tallyMatches = 0;
                  for (var i = 0; i < winWordLettersArr.length; i++) {
                      var setClassName = ("pos" + i);
  
                      console.log(setClassName);
  
                      if (pressedKey === winWordLettersArr[i]) {
                      tallyMatches++;
                          
                       var targetDiv = document.getElementById("winWordDiv");
  
                      var newDiv = document.createElement("div");
                   
                      newDiv.textContent = (pressedKey);
  
                      targetDiv.appendChild(newDiv);
  
                      // targetDiv.innerHTML(newDiv);
                      // document.getElementById("setClassName").innerHTML = pressedKey;
  
                      newDiv.setAttribute("class", "letters");
  
                      console.log ({
                      tallyMatches: tallyMatches
                      });
  
                      } 
                  }
                  return tallyMatches;
              }

