"use strict";

// const div = document.getElementById("Div");
// const ul = document.getElementById("ul")

// fetch("https://reqres.in/api/users?page=", {
//   method: "GET",
// })
//   .then(function (mtlianiInfo) {
//     console.log(mtlianiInfo);
//     if (mtlianiInfo.status !== 200) {
//       throw "Error";
//     }
//     return mtlianiInfo.json();
//   })
//   .then(function (gaparsuliTeqsti) {
//     const ul = document.createElement("ul");
//     ul.classList.add("ul")
//     gaparsuliTeqsti.data.forEach((element) => {
//       const img = document.createElement("img");
//       img.setAttribute("src", element.avatar);
//       img.classList.add("image1")
//       const li = document.createElement("li");
//       li.textContent = `${element.email }    ${element.first_name } ${element.last_name}`;
//       li.style.color = " #3333ff";
//       li.style.fontSize = "1rem";
//       ul.appendChild(li);
//       ul.appendChild(img);
//     });
//     div.appendChild(ul);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


const div = document.getElementById("Div");
const ul = document.getElementById("Ul");
const btn = document.getElementById("Btn");
const btn2 = document.getElementById("Btn2");

let FirsyFage = 1;
let LastFage;
function Info(page) {
  fetch("https://reqres.in/api/users?page=" + page, {
    method: "GET",
  })
    .then(function (respons) {
      if (respons.status !== 200) {
        throw respons.status;
      }
      return respons.json();
    })
    .then(function (responsDta) {
      const Fragment = document.createDocumentFragment();
      responsDta.data.forEach((element) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.setAttribute("src", element.avatar);
        li.textContent = `${element.last_name} ${element.email}`;
        Fragment.appendChild(li);
        Fragment.appendChild(img);
      });
      ul.innerHTML = " ";
      ul.appendChild(Fragment);

      LastFage = responsDta.total_pages;
    })
    .catch(function (error) {
      console.log(error);
      if (error == 400) {
        const pH = document.createElement("p");
        pH.textContent = "Page Not Found";
        div.appendChild(pH);
      } else if (error == 500) {
        const pH2 = document.createElement("p");
        pH2.textContent = "Server Error";
        div.appendChild(pH2);
      }
    });
}
function BtnFunction() {
  btn.addEventListener("click", function () {
    if (FirsyFage == 2) {
      return (btn.style.display = "none");
    }
    FirsyFage++;
    Info(FirsyFage);
  });
  btn.addEventListener("click", function () {
    if (FirsyFage === 2) {
      return (btn2.style.display = "block");
    }

    Info(FirsyFage);
  });
  btn2.addEventListener("click", function () {
    if (FirsyFage === 2) {
      return (btn.style.display = "block");
    }
    Info(FirsyFage);
  });
  btn2.addEventListener("click", function () {   // back
    if (FirsyFage === 1) {   
      return (btn2.style.display = "none");
      return;
    }

    FirsyFage--;
    Info(FirsyFage);
  });
}
BtnFunction();

Info(FirsyFage);
