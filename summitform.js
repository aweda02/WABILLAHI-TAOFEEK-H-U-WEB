 const submitButton = document.getElementById("form_submiting");
 const sucessMessage = document.getElementById("sucess");
 const form = document.querySelector('.co-container');

 const updatestate = (message)=> {
submitButton.innerText = message
 }
 const handlesucess = ()=> {
updatestate('sucessful!!!');

setTimeout(() => {

form.style.display = 'none';
sucessMessage.style.visibility = 'visible';
}, 1000);
setTimeout(() => {

form.style.display = 'block';
sucessMessage.style.visibility = 'hidden';
}, 10000);
 }

 const handleerror = ()=> {
updatestate('something went wrong');


setTimeout(() => {
updatestate('schedule a call ');
}, 1500);
 }




 const submitForm = (event)=> {


  event.preventDefault();
// alert('hello world')


  updatestate('submitting....');

  const  formData = new FormData(event.target);

  const formOBject = {};

  formData.forEach((value,key)=>{
   formOBject[key] = value;
  })




const jsonstring = JSON.stringify(formOBject)
console.log(jsonstring);
// summit form to form spark
   fetch("https://submit-form.com/mlbikyjCi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: jsonstring,
      })
        .then(function (response) {
          // console.log(response);

          if(response.ok){
           handlesucess();
          }else {
           throw new Error();
          }
        })
        .catch(function (error) {
          console.error(error);
          handleerror();
        });


 };