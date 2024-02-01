

function doSomething() {
    alert("Fuck you slutt");
  }
  
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    document.addEventListener("DOMContentLoaded");
  } else {
    // `DOMContentLoaded` has already fired
    doSomething();
  };



