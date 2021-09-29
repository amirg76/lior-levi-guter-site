window.addEventListener("scroll", function(){
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
})
$(document).ready(function(){
  $('#icon').click(function(){
    var x = document.getElementById("iconhead");
    var y = document.getElementById("iconclose");
    console.log(x.innerHTML);
      if (x.innerHTML === "תפריט ניווט")
      {
        setTimeout(function(){
        x.innerHTML='סגור';
        y.classList.add('fas');
        y.classList.add('fa-times');
        y.classList.remove('fa');
        y.classList.remove('fa-bars');
      }, 200);
        y.style.transform ="rotate(-180deg)";
      }
      else {
        setTimeout(function(){
        x.innerHTML = "תפריט ניווט";
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
