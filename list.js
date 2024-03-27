var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];
  var title = $('.card-title')
  var price = $('.car-price')
  function titleChange() {
    for(i=0; i < 3; i++){
        title.eq(i).html(products[i].title)
    }
  }
  function priceChange() {
    for(i=0; i < 3; i++) {
        // price.eq(i).html('가격: ' + products[i].price)
        price.eq(i).html(`가격: ${products[i].price}`)
    }
  } 
  priceChange()
  titleChange()