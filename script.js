const currentTime = () => {
    const element = document.querySelector("h1");

    let date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    // 12 hour CLOCK 

    let day;
    day = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours == 0 ? (hours = 12) : hours;
  
    //Add 0 if value is under 10 

    hours = hours < 10 ? `0${hours}` : hours ; 
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds; 

    element.textContent = `${hours}:${minutes}:${seconds} ${day}`
};

currentTime();
setInterval(currentTime, 1000);