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
      </div>`);
  }
}
layout();

function layout2() {
  $.get("https://codingapple1.github.io/js/more1.json").done((data) => {
    data.forEach((a, i) => {
      $(".row").append(`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`);
    });
  });
}
function layout3() {
  $.get("https://codingapple1.github.io/js/more2.json").done((data) => {
    data.forEach((a, i) => {
      $(".row").append(`<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`);
    });
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
$("#price").on("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  $(".row").html("");
  layout();
  moreBtn();
});
$("#name").on("click", function () {});
