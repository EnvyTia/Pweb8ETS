document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault();
  });
  

  function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function onSubmit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    console.log({ email, password });
  
      const feedback = document.getElementById("feedback")
  
    if (email.length <= 0) {
        alert("Email is required");
      return;
    }
    if (email.search  (/[@]/)< 0) {
        alert("Input a corret email");
      return;
    }
  
    if (password.length <= 0) {
        alert("Password is required");
      return;
    }
    if (password.search(/[a-z]/)<0){
        alert ("Password must contain lowercase");
        return;
    }
    else if (password.search(/[A-Z]/)<0){
        alert ("Password must contain uppercase");
        return;
    }
  
    feedback.style.display = "block";
    document.getElementById("login").reset();
  }