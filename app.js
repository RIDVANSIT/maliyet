
function myFunction(){
  let a =   (parseInt( document.querySelectorAll("input")[0].value))/100;
    
  let b =  ( parseInt( document.querySelectorAll("input")[1].value))/100;

  let c = (parseInt(document.getElementById("almf").value));

  let d = (parseInt(document.getElementById("camf").value));

  if(document.querySelectorAll(".form-check-input")[0].checked){
    let t = ((a+b)*4*c+a*b*d);
    document.getElementById("sonuc").innerText= t;
   
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
