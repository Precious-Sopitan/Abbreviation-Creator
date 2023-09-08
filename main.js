const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const inputText2 = inputText.value
    
    if (inputText2 === "") {
        alert("Please enter something");
    } else {
        const words = inputText2.split(" ");
   const  firstLetters = words.map((word)=>{
return(word[0])
     })
        result.textContent = firstLetters.join(".");
    }
});
