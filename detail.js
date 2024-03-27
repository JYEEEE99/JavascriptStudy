var tabButton = $('.tab-button');
var tabContent = $('.tab-content');
function 탭열기() {
    tabButton.on('click', function() { 
        var i = $(this).index();
        tabButton.removeClass('orange');
        $(this).addClass('orange');
        tabContent.removeClass('show');
        tabContent.eq(i).addClass('show');
    })
}
탭열기()

var car2 = {
    name: '소나타',
    price: [50000, 30000, 40000]
}

var card = $('.card')
var select = $('.form-select');
card.html(car2.name + ' / ' + car2.price[0])
var shirt = [95, 100, 105]
var pants = [28, 30 , 32, 34]
select.eq(0).on('input', function(){
    var value = select.eq(0).val();
    if (value == '모자') {
        select.eq(1).addClass('form-hide')
    }
    else if (value == '셔츠'){
        select.eq(1).html('')
        select.eq(1).removeClass('form-hide')
        shirt.forEach(function(a) {
            select.eq(1).append(`<option>${a}</option>`)
        })
    } else if (value == '바지') {
        select.eq(1).html('')
        select.eq(1).removeClass('form-hide')
        pants.forEach(function(a) {
            select.eq(1).append(`<option>${a}</option>`)
        })
    }
})

// var obj = {name: 'kim', age: 20}
// for(var key in obj) {
//     console.log(obj[key]);
// }
// var pTag = document.createElement('p')
// pTag.innerHTML = 'ㅎㅇ';
// document.querySelector('#test').appendChild(pTag)

// var 템플릿 = '<p>안녕</p>'
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿)

// $('#test').append(템플릿)




var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name){
    if(name == 출석부[2]) {
        // console.log('있어요');
    } else {
        // console.log('없어요');
    }
}
이름찾기('명수')


function 구구단(){
    for(j = 2; j < 10; j++) {
        for(i = 1; i < 10; i++) {
            var num = j * i
            // console.log(num)
        }
    }
}