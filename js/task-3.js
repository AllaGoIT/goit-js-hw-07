
const userName = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
const onInputName = event => { 
    const inputEl = event.currentTarget.value.trim();
      nameOutput.textContent = inputEl;
    if (inputEl.replaceAll(" ", "") === "" || inputEl === "") {
        nameOutput.textContent = `Anonymous`;
    }
};
userName.addEventListener("input", onInputName);
    
//<input type="text" id="name-input" placeholder="Please enter your name" />
//<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

