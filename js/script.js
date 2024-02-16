"use strict";

const div = document.getElementById("Div");

fetch("https://reqres.in/api/users?page=", {
  method: "GET",
})
  .then(function (mtlianiInfo) {
    console.log(mtlianiInfo);
    if (mtlianiInfo.status !== 200) {
      throw "Error";
    }
    return mtlianiInfo.json();
  })
  .then(function (gaparsuliTeqsti) {
    const ul = document.createElement("ul");
    ul.classList.add("ul")
    gaparsuliTeqsti.data.forEach((element) => {
      const img = document.createElement("img");
      img.setAttribute("src", element.avatar);
      img.classList.add("image1")
      const li = document.createElement("li");
      li.textContent = `${element.email } -- ${element.first_name} ${element.last_name}`;
      li.style.color = " #3333ff";
      li.style.fontSize = "1rem";
      ul.appendChild(li);
      ul.appendChild(img);
    });
    div.appendChild(ul);
  })
  .catch(function (error) {
    console.log(error);
  });
