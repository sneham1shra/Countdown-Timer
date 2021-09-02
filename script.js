 const daysE1 = document.getElementById('days');
 const hoursE1 = document.getElementById('hours');
 const minsE1 = document.getElementById('mins');
 const secE1 = document.getElementById('sec');

const birthday ='10 dec 2021'
function countdown(){
    const birthdayDate=new Date(birthday);
    const currentDate= new Date();
    const totalseconds = (birthdayDate -currentDate)/1000;
    const days= Math.floor(totalseconds/3600/24);
    const hours= Math.floor(totalseconds/3600)%24;
    const mins= (Math.floor(totalseconds/60)%24)%60;
    const sec=Math.floor(totalseconds)%60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML=formatTime(hours);
    minsE1.innerHTML= formatTime(mins);

    secE1.innerHTML= formatTime(sec);
}
function formatTime(time){
    return time<10 ?`0${time}`:time; 
}
countdown();
setInterval(countdown,1000);