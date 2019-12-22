/* 
buttons color change when clicked

select each button(queryselector), 
loop through the nodelist and add eventlisteners mousedown and mouseup event listeners to add and remove the class name with color 
*/

let btnclick= document.querySelectorAll('td');

for (var i=0 ; i<btnclick.length; i++) {
   btnclick[i].addEventListener('mousedown', function() {
       this.classList.add('tdhover');
   });

   btnclick[i].addEventListener('mouseup',function() {
       this.classList.remove('tdhover')
   })
   

}

let screen= document.getElementById('display');


    

//CALCULATOR COMPUTE



let arr=[]
let noclicktwice=/[-+*/]/

   let screened=document.querySelector ('#display');                                  
               
function updatescreen() {
    let screencontent= document.querySelector ('#display');                                                                            
          display.textContent=arr.join(" ");
        
}
let dialkeys= document.querySelectorAll('td');
for (let i = 0; i < dialkeys.length; i++) {
    dialkeys[i].addEventListener('click',function (event) {
            if (this.className==="num-btn") {
                if  (arr.length===0 || noclicktwice.test(arr[arr.length-1])==true) {
                    arr.push(this.textContent);  
                    updatescreen();                   
                }
                else{                    
                
                    arr[arr.length-1]+= this.textContent.toString();
                    updatescreen()
                }
            }
           
            if (this.className==="operator" && arr.length !==0 && noclicktwice.test(arr[arr.length-1]) !==true ) {
                   arr.push(this.textContent);
                   updatescreen();
                    
                }
            if (this.className==="AC") {
                    arr=[];
                    updatescreen();
                }
            else if (this.className==="CE") {
                 if (noclicktwice.test(arr[arr.length-1])==true){
                    arr.pop();
                    updatescreen();                
            
                     }
                 else{
                     split=arr[arr.length-1].split("");
                     split.pop();
                     arr.pop();
                     arr.push(split.join(""));

                     updatescreen()

                 }   
                }
            if (this.id==="equal") {
                    screened.textContent=eval(arr.join(" "));
                    arr=[]; 
            }
            
            if (this.id==="point") {
                    if ( arr.length !==0 && noclicktwice.test(arr[arr.length-1]) !==true ) {
                        arr[arr.length-1.]+= this.textContent;
                        updatescreen()
                    }
            }
            
            } 
    )
    
           
        }                
           


document.onload

   
