
function myFunction(x) {
  if (x.matches) { // If media query matches
    const navUl = document.getElementById("navUl");
    let hamBurger = document.getElementById("hamBurger");
    hamBurger.addEventListener("click", eo => {
      navUl.style.removeProperty("display");
      navUl.classList.toggle("block-active")
    })
    // document.addEventListener("click", eo => {
    //   navUl.style.display = "none";
    //   //navUl.style.opacity = "0"
    // })
    
    // let headerr = document.getElementsByClassName("header")[0];
    // headerr.addEventListener("click", eo => {
    //   // navUl.style.display = "block";
    //   navUl.classList.toggle("block-active")
    // })
    
    document.addEventListener('click', eo => {
      const targetElement = eo.target;
      const yourElement = document.getElementById('navUl');
    
      if (!hamBurger.contains(targetElement)) {
          // النقر خارج العنصر، قم بإخفاء العنصر
          yourElement.style.setProperty('display', 'none', 'important'); }
      //   } else {
      //     yourElement.style.setProperty('display', 'block', 'important');
      // }
    });
    
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  myFunction(x);
});

// remove active and add active
const ul = document.querySelectorAll(`#navUl`)
ul.forEach(item => {
  item.addEventListener("click", eo => {
    const activeLi = document.getElementsByClassName('active')[0]
    activeLi.classList.remove('active');
    eo.target.parentElement.classList.add("active")
  })
})

// popppp portfoil
const box = document.querySelectorAll(`.big-box-img`)

box.forEach(item => {
  item.addEventListener("click", eo => {
    let title = eo.target.parentElement.querySelectorAll("h3")[0].innerText;
    let modalTitle = document.getElementById("exampleModalLabel")
    modalTitle.innerText = title


    let img = eo.target.parentElement.querySelectorAll("img")[0].src;
    let modalImg = document.querySelectorAll(".modalImg")[0];
    console.log(modalImg)
    modalImg.src = img
  })
});
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let emailValue = document.getElementById("email").value
let email = document.getElementById("email")
email.addEventListener("keyup", eo =>{

  if (email.value.match(validRegex)) {
    email.classList.remove("border", "border-3", "border-danger")
    email.classList.add("border", "border-3", "border-success")
    
  } else {
    email.classList.remove("border", "border-3", "border-success")
    email.classList.add("border", "border-3", "border-danger")
  }
})
var validRegexPhone = /01\d+/
let PhoneValue = document.getElementById("Phone").value
let Phone = document.getElementById("Phone")
Phone.addEventListener("keyup", eo =>{

  if (Phone.value.match(validRegexPhone) && Phone.value.length <= 11) {
    Phone.classList.remove("border", "border-3", "border-danger")
    Phone.classList.add("border", "border-3", "border-success")
    
  } else {
    Phone.classList.remove("border", "border-3", "border-success")
    Phone.classList.add("border", "border-3", "border-danger")
  }
})




