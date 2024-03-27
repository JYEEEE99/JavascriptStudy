$('.lorem').on('scroll', function() {
    var 스크롤양 = $(this).scrollTop();
    if (스크롤양 == 140) {
      return alert('약관 다 읽음') 
    }
  })

  $(window).on('scroll', function() {
    if (scrollY >= 100) {
    $('.navbar-brand').css('font-size', '20px')
  } else if (scrollY < 100) {
    $('.navbar-brand').css('font-size', '30px')

  }
  })

  function 숙제(a, b) {
    a = a * 60000
    b = b * 1000
    var num = a + b;
    return num + 'ms'
  }
  function 숙제2(a, b) {
    추가할인 = 1.5
    if (b == true) {
      a = a * 0.9 - 추가할인
    return a
    } else if (b == false) {
      a = a * 0.9
    return a
    }
  }
  console.log(숙제2(10, true));

  /* 슬라이드 버튼 */
  var 지금사진 = 0
  $('.slide-1').on('click', function() {
    지금사진 = 0;
    $('.slide-container').css('transform', 'translateX(' + 지금사진 + '00vw)')
  })
  $('.slide-2').on('click', function() {
    지금사진 = -1;
    $('.slide-container').css('transform', 'translateX(' + 지금사진 + '00vw)')
  })
  $('.slide-3').on('click', function() {
    지금사진 = -2;
    $('.slide-container').css('transform', 'translateX(' + 지금사진 + '00vw)')
  })

  $('.next').on('click', function() {
    지금사진--;
    $('.slide-container').css('transform', 'translateX('+ 지금사진 +'00vw)')
  })
  $('.prev').on('click', function() {
    지금사진++;
    $('.slide-container').css('transform', 'translateX('+ 지금사진 +'00vw)')
  })
  // $('.next').on('click', function() {
  //   if (지금사진 == 1) {
  //     지금사진++;
  //     이미지2번()
  //   } else if (지금사진 == 2) {
  //     지금사진++;
  //     이미지3번()
  //   }
  // })
  // $('.prev').on('click', function() {
  //   if (지금사진 == 3) {
  //     지금사진--;
  //     이미지2번()
  //   } else if (지금사진 == 2) {
  //     지금사진--;
  //     이미지1번();
  //   }
  // })
  
/* 사은품 */
  var count = 5;
  $('.number').html(count)
  setInterval(function () {
    count--;
  $('.number').html(count)
  if (count == 0) {
    $('.alert').css('display', 'none')
  }
  }, 1000)
  

  $('.navbar-toggler').on('click', function() {
      $('.list-group').slideToggle()
  })
  $('#login').on('click', function() {
      $('.black-bg').addClass('show-modal')
  })
  $('#close').on('click', function() {
      $('.black-bg').removeClass('show-modal')
  })
  $('.black-bg').on('click', function(e) {
    if ($(e.target)[0] == $('.black-bg')[0]) {
        $('.black-bg').removeClass('show-modal')
    }
    })
  

    




  /* 로그인 form JS*/
  $('form').on('submit', function(){
    var emaliValue = document.getElementById('user-id').value
    var passwordValueLength = document.getElementById('user-password').value.length
    var passwordValue = document.getElementById('user-password').value
      if (emaliValue == '' || passwordValueLength == '') {
          alert('아이디 또는 비번 입력')
      } else if (passwordValueLength <= 6 ) {
          alert('비밀번호를 6자 이상 입력 하세요') 
      }
      if (/\S+@\S+.\S+/.test(emaliValue) == false) {
        alert('이메일 형식을 확인해주세요')
        e.preventDefault();
      } else if (/[A-Z]/.test(passwordValue) == false) {
        alert('패스워드에 대문자를 포함시켜 주세요')
      }
  })
  
  // var count = 0;
  // $('.badge').on('click', function() {
  //     count++
  //     if (count % 2 == 1) {
  //         $('.badge').html('Light 🔄') 
  //     } else {
  //         $('.badge').html('Dark 🔄') 
  //     }
  // })
  //  var 예금액 = 10000;
  //  var 미래예금액 = 0;
  //  if (예금액 >= 50000) {
  //   var 미래예금액 = 예금액 * 1.20 * 1.20;
  //  } else {
  //   var 미래예금액 = 예금액 * 1.15 * 1.15;
  //  }

  //  var first = 360;
  //  var total = 0;
  //  total = first + first * 2 / 3 + first * 2 /3 * 2 / 3;
   
  //  var count = 0;
  //  $('#send-answer').on('click', function () {
  //   count += 1;
  //   const 답안 = document.getElementById('answer').value
  //   if ( 답안 == '1335') {
  //   alert('성공')
  //  } else if (count >= 3 && 답안 != '1335') {
  //   alert('멍청이')
  //  }
  //  })
   
   