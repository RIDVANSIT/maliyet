
function myFunction(){
  let a =   (parseInt( document.querySelectorAll("input")[0].value))/100;
    
  let b =  ( parseInt( document.querySelectorAll("input")[1].value))/100;
  
  if(document.querySelectorAll(".form-check-input")[0].checked){
    let c = ((a+b)*5*90+a*b*380);
    document.getElementById("sonuc").innerText= c;
   
};
if(document.querySelectorAll(".form-check-input")[1].checked){
  alert("ne bileyim lan :)");
 
};
if(document.querySelectorAll(".form-check-input")[2].checked){
  alert("ne bileyim lan :)");
  
 };
 if(document.querySelectorAll(".form-check-input")[3].checked){
  let c = (((a+b)*2+b)*150/6+50);
  document.getElementById("sonuc").innerText= c;
 
};

};