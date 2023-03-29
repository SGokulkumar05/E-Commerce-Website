$(document).ready(function () {
  $(".image-cont").on("click", function () {
    var headphonesColor = $(this).attr("data-image");
    $(".active").removeClass("active");
    $(".left-column img[data-image = " + headphonesColor + "]").addClass(
      "active"
    );
    $(this).addClass("active");
  });
});
const plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  pcount = document.getElementById("pcount"),
  save = document.getElementById("save"),
  final = document.getElementById("final"),
  finals = document.getElementById("finals");
let a = 1;
let sa = 280,
  fi = 469;
plus.addEventListener("click", () => {
  a++;
  console.log(a);
  pcount.innerHTML = a;
  sa = 280 * a;
  save.innerHTML = "YOU SAVE $" + sa;
  fi = 469 * a;
  final.innerHTML = "$" + fi;
  finals.innerHTML = "$" + fi;
});
minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    pcount.innerHTML = a;
    sa = 280 * a;
    save.innerHTML = "YOU SAVE $" + sa;
    fi = 469 * a;
    final.innerHTML = "$" + fi;
    finals.innerHTML = "$" + fi;
  }
});
