

function doSomething() {
    alert("Fuck you slutt");
  }
  
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded", doSomething);
  } else {
    // `DOMContentLoaded` has already fired
    doSomething();
  };

  

