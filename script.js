function displayTime(){
const time = new Date();
let hrs = document.querySelector('.hrs');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
time.getHours > 12 ? hrs.innerHTML = time.getHours():hrs.innerHTML = time.getHours()-12;
min.innerHTML = time.getMinutes();
sec.innerHTML = time.getSeconds();
}
setInterval(displayTime,10);



