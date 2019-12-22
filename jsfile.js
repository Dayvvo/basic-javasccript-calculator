// STYLING FUNCTIONS, EVENTS AND CODE
//nh NH  


var coverpage= document.querySelector('#coverpage');

let slidebutton= document.querySelector('.slideup');

slidebutton.addEventListener('click', function () {
    coverpage.classList.toggle('slidemove');
    gamecommences(questionat);
 
} )



    const questions=[
            {
            question:'In what year did Nigeria attain independece ?',
            options: ['1st November 1999', '25th May 1909','4th July 1878','30th January 1990', ' 24th March 1900',],
            answer: '25th May 1909'
            
            } ,
            { 
                question:'In what Season of Game of thrones did the Arya stark ask the question "what\'s west of westeros " ?',
                options: ['Season six (6)', 'Season five (5)','Season seven (7)','Season fourteen (14)', 'Season ten (10)'],
                answer: 'Season six (6)'
            },  
            
            {  
                question:'What is Arya Stark\'s Real Name?',
                options: ['Maisie Williams', 'Kit Harrington','Thomas Dubwa','Lena Headey', 'Jeniffer Lawrence'],
                answer: 'Season six (6)'
        
            },
            {  
                question:'The term "PANSEXUAL" refers to individuals of what kind of sexuality',
                options: ['The Opposite sex', 'The same sex','Both sexes','All sexes', 'All of the above mentioned'],
                answer: 'Season six (6)'
    
            }
        
        ]
    
questionat=0;
function gamecommences(currentq) {
        let screendisp= document.querySelector('#screen');
        screendisp.textContent=questions[questionat].question;
        let optiondisp= document.querySelectorAll('.option');
        for(i=0; i<optiondisp.length;i++)  {  
                optiondisp[i].textContent=questions[questionat].options[i];
               optiondisp[i].addEventListener("click", function () {
                    if (this.textContent== questions[questionat].answer) {
                        var winorlose= document.querySelector('.winorlose');
                        winorlose.innerHTML='Correct! YOU HAVE EARNED 5 POINTS';
                        let dialogbox= document.querySelector('#alertbox');9
                        dialogbox.classList.add('alertdisplay');    
                    }
                   else{
                        var winorlose= document.querySelector('.winorlose');
                        let dialogbox= document.querySelector('#alertbox');
                        dialogbox.classList.add('alertdisplay');    
                        winorlose.innerHTML="OOPS! YOU DIDN'T GET IT RIGHT. THE CORRECT ANSWER IS " + "" + questions[questionat].answer; 
                    }
                    
                }
            )
                    let decision= document.querySelectorAll('.decision');
                    for(i=0; i<decision.length; i++) {
                        decision[i].addEventListener("click", function() {
                            
                            if (decision[i].textContent=="") {
                            }
                        })
                    }

            }
        
    }       

