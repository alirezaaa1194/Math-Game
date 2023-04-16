// برچسب های اعداد رندوم
let rndnum1 = document.querySelector(".rnd_num1");
let rndnum2 = document.querySelector(".rnd_num2");
let rndnum3 = document.querySelector(".rnd_num3");
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let input_button1 = document.querySelector(".input_button1");
let input_button2 = document.querySelector(".input_button2");
let input_button3 = document.querySelector(".input_button3");
let randomRangeNumber = 0;
function randomRange(randoms) {
  if (randoms == 1) {
    randomRangeNumber = 10;
  }
  if (randoms == 2) {
    randomRangeNumber = 100;
  }
  if (randoms == 3) {
    randomRangeNumber = 1000;
  }
  container2.style.display = "none";
  container.style.display = "flex";
  lisence();
}
function lisence() {
  // ذکمه های اعداد
  let btn = document.querySelectorAll(".btn");
  let dontknow_button = document.querySelector(".dontknow_button");
  let gameover_text = document.querySelector(".gameover_text");
  let reload_btn = document.querySelector(".reload_btn");
  let backspace = document.querySelector(".backspace");
  // علامت های ریاضی
  let str1 = document.querySelector(".str1");
  let str2 = document.querySelector(".str2");
  // برچسب امتیاز ها و زمان
  let time_label = document.querySelector(".time_label");
  let em_label = document.querySelector(".em_label");
  // آرایه ی دستورات ریاضی
  let stracture = ["+", "-", "×", "÷"];
  // اعداد رندوم برای عملیات
  let rnd1 = Math.floor(Math.random() * randomRangeNumber);
  let rnd2 = Math.floor(Math.random() * randomRangeNumber);
  // انتخاب رندوم دستور ریاضی
  let rnd_str1 = Math.floor(Math.random() * 4);
  // جاگزینی عملیات ریاضی
  str1.innerHTML = stracture[rnd_str1];
  /////////////////////////////////////////////
  // ---------------------------------گذاشتن اعداد در باکس ها
  /////////////////////////////////////////////
  function mathStracture() {
    // تفریق
    if (str1.innerHTML == "-") {
      if (rnd1 > rnd2) {
        rndnum1.innerHTML = rnd1;
        rndnum2.innerHTML = rnd2;
      } else {
        while (rnd1 <= rnd2) {
          rnd1 = Math.floor(Math.random() * randomRangeNumber);
          rnd2 = Math.floor(Math.random() * randomRangeNumber);
        }
        rndnum1.innerHTML = rnd1;
        rndnum2.innerHTML = rnd2;
      }
    }
    // تقسیم
    if (str1.innerHTML == "÷") {
      rnd1 = Math.floor(Math.random() * randomRangeNumber);
      rnd2 = Math.floor(Math.random() * randomRangeNumber);
      if (rnd1 > rnd2 && rnd1 % rnd2 == 0) {
        rndnum1.innerHTML = rnd1;
        rndnum2.innerHTML = rnd2;
      } else {
        while (!(rnd1 % rnd2 === 0 && rnd1 > rnd2)) {
          rnd1 = Math.floor(Math.random() * randomRangeNumber);
          rnd2 = Math.floor(Math.random() * randomRangeNumber);
        }
        rndnum1.innerHTML = rnd1;
        rndnum2.innerHTML = rnd2;
      }
    }
    // جمع
    if (str1.innerHTML == "+") {
      rndnum1.innerHTML = rnd1;
      rndnum2.innerHTML = rnd2;
    }
    // ضرب
    if (str1.innerHTML == "×") {
      rndnum1.innerHTML = rnd1;
      rndnum2.innerHTML = rnd2;
    }
  }
  mathStracture();
  // شروع شدن بازی
  let isstart = true;
  // درست وارد کردن مقدار ورودی
  let istrue = true;
  // امتیاز پیش فرض
  let em = 0;
  // زمان پیش فرض
  let timer_counter = 10;
  // محاسبه زمان
  let timer;
  if (isstart == true && istrue == true) {
    timer = setInterval(function time() {
      timer_counter--;
      time_label.innerHTML = "زمان: " + timer_counter;
      if (timer_counter <= 5) {
        time_label.style.animationName = "time_error";
        window.navigator.vibrate(120);
      } else {
        time_label.style.animationName = "";
      }
      if (timer_counter == 0) {
        if (em > 0) {
          window.navigator.vibrate(120);
          em--;
          em_label.innerHTML = "امتیاز: " + em;
          timer_counter = 10;
          let rnd1 = Math.floor(Math.random() * randomRangeNumber);
          let rnd2 = Math.floor(Math.random() * randomRangeNumber);
          // انتخاب رندوم دستور ریاضی
          let rnd_str1 = Math.floor(Math.random() * 4);
          str1.innerHTML = stracture[rnd_str1];
          rndnum1.innerHTML = rnd1;
          rndnum2.innerHTML = rnd2;
          mathStracture();
        } else {
          isstart = false;
          istrue = false;
          time_label.style.animationName = "";
          window.navigator.vibrate(500);
          em_label.innerHTML = "امتیاز: " + em;
          gameover_text.style.visibility = "visible";
          reload_btn.style.visibility = "visible";
          clearInterval(timer);
        }
      }
    }, 1000);
  }
  btn.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
      if (isstart == true) {
        rndnum3.value += buttons.innerHTML;
        let number1 = Number(rndnum1.innerHTML);
        let number2 = Number(rndnum2.innerHTML);
        let number3 = Number(rndnum3.value);
        if (str1.innerHTML == "+") {
          if (number3 == number1 + number2) {
            setTimeout(function () {
              em++;
              em_label.innerHTML = "امتیاز: " + em;
              istrue = true;
              timer_counter = 10;
              rndnum3.style.animationName = "";
              // اعداد رندوم برای عملیات
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              // انتخاب رندوم دستور ریاضی
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
              rndnum3.value = "";
            }, 150);
          } else {
            if (
              (number1 + number2).toString().length ==
                number3.toString().length &&
              em > 0
            ) {
              em--;
              timer_counter = 10;
              em_label.innerHTML = "امتیاز: " + em;
              rndnum3.value = "";
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
            }
            if (
              (number1 + number2).toString().length == number3.toString().length
            ) {
              if (em == 0) {
                istrue = false;
                isstart = false;
                timer_counter = 0;
                clearInterval(timer);
                gameover_text.style.visibility = "visible";
                reload_btn.style.visibility = "visible";
                em = 0;
                em_label.innerHTML = "امتیاز: " + em;
              }
            }
            if (
              (number1 + number2).toString().length ==
                number3.toString().length &&
              number3 != number1 + number2
            ) {
              rndnum3.style.animationName = "vibrator";
              if (em > 0) {
                window.navigator.vibrate(120);
              }
              if (em == 0) {
                window.navigator.vibrate(500);
              }
              setTimeout(function () {
                rndnum3.style.animationName = "";
                window.navigator.vibrate(0);
              }, 300);
            }
          }
        }

        if (str1.innerHTML == "-") {
          if (number3 == number1 - number2) {
            setTimeout(function () {
              em++;
              em_label.innerHTML = "امتیاز: " + em;
              istrue = true;
              timer_counter = 10;
              rndnum3.style.animationName = "";
              // اعداد رندوم برای عملیات
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              // انتخاب رندوم دستور ریاضی
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
              rndnum3.value = "";
            }, 150);
          } else {
            if (
              (number1 - number2).toString().length ==
                number3.toString().length &&
              em > 0
            ) {
              timer_counter = 10;
              em--;
              em_label.innerHTML = "امتیاز: " + em;
              rndnum3.value = "";
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
            }
            if (
              (number1 - number2).toString().length == number3.toString().length
            ) {
              if (em == 0) {
                istrue = false;
                isstart = false;
                timer_counter = 0;
                clearInterval(timer);
                gameover_text.style.visibility = "visible";
                reload_btn.style.visibility = "visible";
                em = 0;
                em_label.innerHTML = "امتیاز: " + em;
              }
            }
            if (
              (number1 - number2).toString().length ==
                number3.toString().length &&
              number3 != number1 - number2
            ) {
              rndnum3.style.animationName = "vibrator";
              if (em > 0) {
                window.navigator.vibrate(120);
              }
              if (em == 0) {
                window.navigator.vibrate(500);
              }
              setTimeout(function () {
                rndnum3.style.animationName = "";
                window.navigator.vibrate(0);
              }, 300);
            }
          }
        }

        if (str1.innerHTML == "×") {
          if (number3 == number1 * number2) {
            setTimeout(function () {
              em++;
              em_label.innerHTML = "امتیاز: " + em;
              istrue = true;
              timer_counter = 10;
              rndnum3.style.animationName = "";
              // اعداد رندوم برای عملیات
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              // انتخاب رندوم دستور ریاضی
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
              rndnum3.value = "";
            }, 150);
          } else {
            if (
              (number1 * number2).toString().length ==
                number3.toString().length &&
              em > 0
            ) {
              timer_counter = 10;
              em--;
              em_label.innerHTML = "امتیاز: " + em;
              rndnum3.value = "";
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
            }
            if (
              (number1 * number2).toString().length == number3.toString().length
            ) {
              if (em == 0) {
                istrue = false;
                isstart = false;
                timer_counter = 0;
                clearInterval(timer);
                gameover_text.style.visibility = "visible";
                reload_btn.style.visibility = "visible";
                em = 0;
                em_label.innerHTML = "امتیاز: " + em;
              }
            }
            if (
              (number1 + number2).toString().length ==
                number3.toString().length &&
              number1 * number2 != number3
            ) {
              if (em > 0) {
                window.navigator.vibrate(120);
              }
              if (em == 0) {
                window.navigator.vibrate(500);
              }
              setTimeout(function () {
                rndnum3.style.animationName = "";
                window.navigator.vibrate(0);
              }, 300);
            }
          }
        }

        if (str1.innerHTML == "÷") {
          if (number3 == number1 / number2) {
            setTimeout(function () {
              em++;
              em_label.innerHTML = "امتیاز: " + em;
              istrue = true;
              timer_counter = 10;
              rndnum3.style.animationName = "";
              // اعداد رندوم برای عملیات
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              // انتخاب رندوم دستور ریاضی
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
              rndnum3.value = "";
            }, 150);
          } else {
            if (
              (number1 / number2).toString().length ==
                number3.toString().length &&
              em > 0
            ) {
              timer_counter = 10;
              em--;
              em_label.innerHTML = "امتیاز: " + em;
              rndnum3.value = "";
              rnd1 = Math.floor(Math.random() * randomRangeNumber);
              rnd2 = Math.floor(Math.random() * randomRangeNumber);
              rnd_str1 = Math.floor(Math.random() * 4);
              str1.innerHTML = stracture[rnd_str1];
              rndnum1.innerHTML = rnd1;
              rndnum2.innerHTML = rnd2;
              mathStracture();
            }
            if (
              (number1 / number2).toString().length == number3.toString().length
            ) {
              if (em == 0) {
                istrue = false;
                isstart = false;
                timer_counter = 0;
                clearInterval(timer);
                gameover_text.style.visibility = "visible";
                reload_btn.style.visibility = "visible";
                em = 0;
                em_label.innerHTML = "امتیاز: " + em;
              }
            }
            if (
              (number1 / number2).toString().length ==
                number3.toString().length &&
              number3 != number1 / number2
            ) {
              if (em > 0) {
                window.navigator.vibrate(120);
              }
              if (em == 0) {
                window.navigator.vibrate(500);
              }
              rndnum3.style.animationName = "vibrator";
              setTimeout(function () {
                rndnum3.style.animationName = "";
                window.navigator.vibrate(0);
              }, 300);
            }
          }
        }
      }
    });
  });
  dontknow_button.addEventListener("click", function () {
    if (isstart == true && em > 0) {
      em--;
      em_label.innerHTML = "امتیاز: " + em;
      rndnum3.value = "";
      // istrue = true;
      timer_counter = 10;
      // اعداد رندوم برای عملیات
      rnd1 = Math.floor(Math.random() * randomRangeNumber);
      rnd2 = Math.floor(Math.random() * randomRangeNumber);
      // انتخاب رندوم دستور ریاضی
      rnd_str1 = Math.floor(Math.random() * 4);
      str1.innerHTML = stracture[rnd_str1];
      rndnum1.innerHTML = rnd1;
      rndnum2.innerHTML = rnd2;
      mathStracture();
    }
  });
  reload_btn.addEventListener("click", function () {
    location.reload();
  });
  backspace.addEventListener("click", function () {
    if (isstart == true) {
      rndnum3.value = rndnum3.value.substring(0, rndnum3.value.length - 1);
    }
  });
}
