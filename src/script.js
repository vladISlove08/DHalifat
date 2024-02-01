
function doSomething() {
    alert("Fuck you slutt");
  }
  
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    setTimeout(() => {  document.addEventListener("DOMContentLoaded", doSomething); console.log("succes1"); }, 2000);
    
  } else {
    // `DOMContentLoaded` has already fired
    setTimeout(() => {  doSomething(); console.log("succes2"); }, 2000);
    
  };


