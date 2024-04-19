
const loginForm = document.querySelector("form.login-form");


function handleSubmit(event) {
    const submitEl = event.currentTarget;
    const email = submitEl.elements.email.value.trim();
    const password = submitEl.elements.password.value.trim();
 

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }
    else {
        event.preventDefault();
        const allValue = {
            email: `${email}`,
            password: `${password}`,
            
        }
        console.log(allValue);
    }
    
    loginForm.reset();
}
loginForm.addEventListener("submit", handleSubmit);