
let subt=document.getElementById('frm');
let err=[];
subt=addEventListener('submit',function(a){
   a.preventDefault();
//    alert("from fill karo bhadwo");

   let fname=document.getElementById('name')
   console.log(fname)
   let lname=document.getElementById('lastname');
   let father=document.getElementById('father');
   let email=document.getElementById('email');
   let dob=document.getElementById('dob');
   let month=document.getElementById('month');
   let day=document.getElementById('day');
   let year=document.getElementById('year');
   let mobile=document.getElementById('mobile');
   let address=document.getElementById('address');
   
   if(fname.value == "" || lname.value == "" || father.value=="" || email.value=="" 
   || dob.value=="" || month.value=="" || day.value=="" || year.value=="" || mobile.value=="" || address.value==""){
       alert("bhadwe naam th dall first and last");
       let date= new Date();
       console.log(date);
       let d1 = date.getDate();
       console.log(d1);
       let m1 =date.getMonth();
       console.log(m1);
   }

   let age=()=>{
      
   }


});