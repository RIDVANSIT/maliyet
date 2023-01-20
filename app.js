
 
if(localStorage.getItem('camf') != NaN)
 {
    document.getElementById("camf").value = localStorage.getItem('camf');
};
if(localStorage.getItem('m2f') != NaN)
 {
    document.getElementById("m2f").value = localStorage.getItem('m2f');
};

if(localStorage.getItem('almf') != NaN)
{
    document.getElementById("almf").value = localStorage.getItem('almf');

};
function myFunction(){
   
    let a =   (parseInt( document.querySelectorAll("input")[0].value))/100;
    
    let b =  ( parseInt( document.querySelectorAll("input")[1].value))/100;
  
    let c = (parseInt(document.getElementById("almf").value));
     
    localStorage.setItem('almf', c);
    let d = (parseInt(document.getElementById("camf").value));
    localStorage.setItem('camf', d);
    let e = (parseInt(document.getElementById("m2f").value));
    localStorage.setItem('m2f', e);
    
  
    if(document.querySelectorAll(".form-check-input")[0].checked){
      let t = ((a+b)*5*c+a*b*d);
      document.getElementById("sonuc").innerText= t;
      let f = a*b*e;
    document.getElementById("metrekare").innerText= f; 
     
  };
  if(document.querySelectorAll(".form-check-input")[1].checked){
    alert("ne bileyim lan :)");
   
  };
  if(document.querySelectorAll(".form-check-input")[2].checked){
    alert("ne bileyim lan :)");
    
   };

   
  
   if(document.querySelectorAll(".form-check-input")[3].checked){
    let c = (((a+b)*2+b)*160/6+50);
    
    document.getElementById("sonuc").innerText= c;
  
    
   
  };
  
  };
