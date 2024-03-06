const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  menu.classList.remove("active");
};

var validate = function (e) {
  var fields = document.querySelectorAll(
    '.contact-form textarea, .contact-form input[type="text" , "number" ,"email" , "submit"]'
  );
  var regEx;
  var removeSpan;
  var par;
  var check = false;
  var val;
  var errArr = [];

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value === "") {
      if (fields[i].nextElementSibling.classList.contains("error")) {
        removeSpan = fields[i].nextElementSibling;
        par = fields[i].parentNode;
        par.removeChild(removeSpan);
        fields[i].nextElementSibling.innerHTML =
          "Hmmm! " + fields[i].placeholder + " is required?";
        fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
        check = false;
        errArr.push(fields[i]);
      }
      fields[i].nextElementSibling.innerHTML =
        "Hmmm! " + fields[i].placeholder + " is required?";
      fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
      check = false;
      errArr.push(fields[i]);
    } else {
      // check if message and name values contain valid characters.
      if (fields[i].id !== "Email" && fields[i].id !== "number") {
        val = isValidChar(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML = "Are you trying to HACK ME!";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === "number") {
        val = isValidPhone(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Hmmm! Your phone number is not valid?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }

      if (fields[i].id === "Email") {
        val = isValidEmail(fields[i]);
        if (val === false) {
          fields[i].nextElementSibling.innerHTML =
            "Hmmm! Your email address is not valid?";
          fields[i].style.boxShadow = "0 0 2px 1px #cc0001";
          check = false;
          errArr.push(fields[i]);
        } else {
          fields[i].nextElementSibling.innerHTML = "";
          fields[i].style.boxShadow = "none";
          check = true;
        }
      }
    }
  }
};

function myFunction() {
  alert("your order is  confrom");
}

fetch("https://jsonplaceholder.typicode.com/photos", {
  method: "GET",
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error"));
