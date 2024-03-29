var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
function layout() {
  for (i = 0; i < 3; i++) {
    $(".row").append(`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price}</p>
        <button class="buy">구매</button>
      </div>`);
  }
  buyBtn();
}
layout();

function layout2() {
  $.get("https://codingapple1.github.io/js/more1.json").done((data) => {
    data.forEach((a, i) => {
      $(".row").append(`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        <button class="buy">구매</button>
      </div>`);
    });
    buyBtn();
  });
}
function layout3() {
  $.get("https://codingapple1.github.io/js/more2.json").done((data) => {
    data.forEach((a, i) => {
      $(".row").append(`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
        <button class="buy">구매</button>
      </div>`);
    });
    buyBtn();
  });
}
var count = 0;
function moreBtn() {
  $(".more-btn").on("click", function () {
    count++;
    if (count == 1) {
      layout2();
    } else if (count == 2) {
      layout3();
    }
  });
}
moreBtn();
function buyBtn() {
  $(".buy").on("click", function () {
    var array = $(this).siblings("h5").text();
    if (localStorage.getItem("cart") != null) {
      var newArray = JSON.parse(localStorage.cart);
      newArray.push(array);
      localStorage.setItem("cart", JSON.stringify(newArray));
    } else {
      localStorage.setItem("cart", JSON.stringify([array]));
    }
  });
}
