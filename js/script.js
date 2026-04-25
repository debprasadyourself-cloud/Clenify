let bariconElement = document.querySelector("#baricon");

let navElement = document.querySelector("nav");
bariconElement.addEventListener("click", () => {
  navElement.classList.toggle("left-[0px]");
});




$(function () {
  const regexmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // name
  $("#fullname").on("keyup", fullnamechecker);

  function fullnamechecker() {
    let data = $("#fullname").val();
    console.log("fullname", data);
    if (data.length < 1) {
      $("#nameError").html("required field");
    } else {
      $("#nameError").html("");
    }
  }
  // email
  $("#mail").on("keyup", mailchecker);

  function mailchecker() {
    let data = $("#mail").val();

    console.log("mail", data);
    if (data.length < 1) {
      $("#mailerror").html("required field");
    }
    else if(!regexmail.test(data)){
         $("#mailerror").html("pattern mismatch");
    }
     else {
      $("#mailerror").html("");
    }
  }

  // phone no
  $("#pwd").on("keyup", pwdchecker);

  function pwdchecker() {
    let data = $("#pwd").val();
    console.log("pwd", data);
    if (data.length < 1) {
      $("#pwderror").html("required field");
    } else {
      $("#pwderror").html("");
    }
  }
});
