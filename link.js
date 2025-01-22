
function calculateMarks() {



const m1 = parseInt(document.getElementById('maths').value)
const m2 = parseInt(document.getElementById('English').value)
const m3 = parseInt(document.getElementById('computer').value)
const m4 = parseInt(document.getElementById('science').value)
const m5 = parseInt(document.getElementById('cs').value)



   const mark = m1+m2+m3+m4+m5;

    console.log("marks= ",mark);
    alert("marks = "  + mark);


  percentage = (mark/500);
  final = percentage * 100;
  console.log("Percentage is: ",final);

  alert("percentage is = " + final);



let Grad;
  if (final >= 90 && final <=100)
    {
  Grad= "A+";
        console.log("Grade is: " +Grad);
      alert("grade is :" + Grad);
     
    
    }
     
       else  if (final <= 90 && final >80)
    {
         Grad= "B+";
        console.log("Grade is: " + Grad);
      alert("grade is :" +  Grad);
    
    }
     else    if (final  >= 70 && final <=80)
    {
         Grad= "c+";
        console.log("Grade is: " + Grad);
      alert("grade is :" + Grad);
    
    }
     
    else 
    {   
        console.log("the no is below 70 is not valid ");
    alert("sorry unavialable");
    }
    
    
  


}



