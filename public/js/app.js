window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})
$(document).ready(function(){
  var x=0;
  $('#iconclose').click(function(){
    var y = document.getElementById("iconclose");
    console.log(x.innerHTML);
      if (x == 0)
      {
        setTimeout(function(){
        x=1;
        y.classList.add('fas');
        y.classList.add('fa-times');
        y.classList.remove('fa');
        y.classList.remove('fa-bars');
      }, 200);
        y.style.transform ="rotate(-180deg)";
      }
      else {
        setTimeout(function(){
        x=0;
        y.classList.add('fa');
        y.classList.add('fa-bars');
        y.classList.remove('fas');
        y.classList.remove('fa-times');
      }, 200);
        y.style.transform ="rotate(0deg)";
        }

    setTimeout(function(){
    $('ul').toggleClass('show');
    }, 200);

  })
})
