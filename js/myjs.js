
//* myNavbar Logic
{
  document.querySelectorAll('.dorpDown').forEach(item => {
    item.addEventListener('mouseenter', e => {
      if (window.innerWidth > 991) {
        e.target.querySelector(".dorpDownMenu").style.display = "block";
      }
    })
  })

  document.querySelectorAll('.dorpDown').forEach(item => {
    item.addEventListener('mouseleave', e => {
      if (window.innerWidth > 991) {
        e.target.querySelector(".dorpDownMenu").style.display = "none";
      }
    })
  })

  document.querySelectorAll('.dorpDown').forEach(item => {
    item.addEventListener('click', e => {
      //to stop bubbling when click on ul, or stop when click on any child of ul
      if (item === e.target || item === e.target.parentElement) {
        if (window.innerWidth <= 991) {
          if (getComputedStyle(item.querySelector(".dorpDownMenu")).display === "none") {
            item.querySelector(".dorpDownMenu").style.display = "block";
          }
          else {
            item.querySelector(".dorpDownMenu").style.display = "none";
          }
        }
      }
    })
  })

  document.querySelectorAll('.myNavbar .nav-item').forEach(item => {
    item.addEventListener('click', e => {
      // console.log(e.target.parentElement)
      // console.log(document.querySelector(".nav-item.dorpDown"))
      if (e.target.parentElement !== document.querySelector(".nav-item.dorpDown")) {
        if (document.querySelector(".nav-link.dropdown-toggle.show")) {
          document.querySelector(".dropdown-menu.dorpDownMenu").style.display = "none";
          document.querySelector(".dropdown-menu.dorpDownMenu.nestedDropDownMenu").style.display = "none";
        }
      }
    })
  })
}

//* Numbers Count Up
{
  var number1 = document.querySelector(".facts .numbers");
  var numbersTop = number1.offsetTop
  var windowHeight = window.innerHeight

  // console.log("numbersTop", numbersTop)
  // console.log("windowHeight", windowHeight)

  window.addEventListener('resize', function () {
    numbersTop = number1.offsetTop;
    windowHeight = window.innerHeight;
  });

  window.addEventListener('scroll', onScroll);

  function numbersCountUp() {
    // console.log("numbersCountUp()");
    document.querySelectorAll(".facts .numbers");
    var numbers = document.querySelectorAll(".facts .numbers");
    var number1 = parseInt(numbers[0].textContent);
    var number2 = parseInt(numbers[1].textContent);
    var number3 = parseInt(numbers[2].textContent);
    var number4 = parseInt(numbers[3].textContent);
    numbers[0].textContent = 0;
    numbers[1].textContent = 0;
    numbers[2].textContent = 0;
    numbers[3].textContent = 0;
    var myInterval = setInterval(() => {
      numbers[0].textContent = Math.ceil(parseInt(numbers[0].textContent) + (number1 / 200))
      numbers[1].textContent = Math.ceil(parseInt(numbers[1].textContent) + (number2 / 200))
      numbers[2].textContent = Math.ceil(parseInt(numbers[2].textContent) + (number3 / 200))
      numbers[3].textContent = Math.ceil(parseInt(numbers[3].textContent) + (number4 / 200))
      // console.log("change");
      if (
        numbers[0].textContent >= number1 &&
        numbers[1].textContent >= number2 &&
        numbers[2].textContent >= number3 &&
        numbers[3].textContent >= number4
      ) {
        numbers[0].textContent = number1;
        numbers[1].textContent = number2;
        numbers[2].textContent = number3;
        numbers[3].textContent = number4;
        clearInterval(myInterval);
      }
    }, 1);
  }

  function onScroll() {
    // console.log(window.pageYOffset >= numbersTop - windowHeight)
    if (window.pageYOffset >= numbersTop - windowHeight) {
      numbersCountUp();
      window.removeEventListener('scroll', onScroll)
    }
  }
}

//* Projects Logic
{
  document.querySelectorAll('.btnCategories ul li').forEach(item => {
    item.addEventListener('click', e => {
      //* make button yellow when click
      document.querySelector('.btnCategories ul li.active').removeAttribute('class');
      e.target.classList.add("active");

      //* take id of button and show all his categories
      document.querySelectorAll(`.categoriesBody > div[data-category`).forEach(item => {
        item.classList.add("hideInCategory")
      })
      document.querySelectorAll(`.categoriesBody > div[data-category~='${e.target.id}']`).forEach(item => {
        item.classList.remove('hideInCategory')
      })
    })
  })
}

//* testimonials Logic
{
  document.querySelectorAll('.testAndClients .dots span').forEach(item => {
    item.addEventListener('click', e => {
      //* change color of dot
      document.querySelector('.testAndClients .dots span.active').classList.remove("active");
      e.target.classList.add("active")

      //* swap testimonial
      console.log(e.target.id);
      let order = e.target.id.split("_")[1]
      document.querySelector(`.testimonialsContainer div#testimonial_1`).style.marginLeft = `-${order - 1}00%`
    })
  })
}

//* Scroll Up button
{
  let scrollUpBtn = document.querySelector("body .arrowUp")

  //* make button show and hide with transition
  window.addEventListener('scroll', _ => {
    if (document.documentElement.scrollTop) {
      console.log("show");
      scrollUpBtn.style.display = "flex";
      setTimeout(() => {
        // because i need to put the class after make it display flex, not with it
        scrollUpBtn.classList.add("show")
      }, 1);

    }
    else {
      console.log("hide");
      scrollUpBtn.classList.remove("show")
      setTimeout(() => {
        //make it display none after transition end
        scrollUpBtn.style.display = "none";
      }, 300);
    }
  });

  //* make scroll up when click
  scrollUpBtn.addEventListener("click", _ => {
    document.documentElement.scrollTop = 0
  })
}




