let nameInput = prompt("adın ne");
document.getElementById("myName").innerHTML=nameInput


function showDate(){
    let days=["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    let date= new Date();
    let hours=date.getHours();
    let minutes =date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    
    document.getElementById("myClock").innerHTML=hours + ":" + minutes +":"+ seconds + " "+ days[day%7-1];
}

setInterval(showDate,100)