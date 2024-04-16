const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>{
        e.preventDefault();
        validateInputs();
})
function validateInputs(){
        const usernameVal=username.value.trim()
        const emailVal=email.value.trim();
        const passwordVal=password.value.trim();
        const cpasswordVal=cpassword.value.trim();
        if(usernameVal==''){
                setError(username,'username is required')
        }
        else
        setSucess(username)
        if(emailVal==''){
                setError(email,'email is required')
        }
         if(passwordVal==''){
                setError(password,'password is required')
        }
        else if(passwordVal.length<8){
                setError(password,'password must be atleast 8 charcter')
        }
        else{
                setSucess(password)
        }
        if(cpasswordVal==''){
                setError(cpassword,' confirm password is required')
        }
        else if(cpasswordVal!==passwordVal){
                setError(cpassword,'password does not match')
        }
        else{
                setSucess(cpassword)
        }
}
function setError(element,message){
        const inputGroup=element.parentElement;
        const errorElement=inputGroup.querySelector('.error')
        errorElement.innerText=message;
        inputGroup.classList.add('error')
        inputGroup.classList.remove('success')

}
function setSucess(element,message){
        const inputGroup=element.parentElement;
        const errorElement=inputGroup.querySelector('.error')
        errorElement.innerText='';
        inputGroup.classList.add('success')
        inputGroup.classList.remove('error')

}
