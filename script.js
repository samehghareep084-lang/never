/* ==========================
      Hearts On Touch
========================== */

document.addEventListener("click", function(e){

    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "28px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = e.clientY;

    const animation = setInterval(function(){

        y -= 3;

        heart.style.top = y + "px";

        heart.style.opacity -= 0.03;

        if(y < e.clientY - 120){

            clearInterval(animation);

            heart.remove();

        }

    },20);

});

/* ==========================
      Floating Hearts
========================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";

    heart.style.left = Math.random()*100 + "%";

    heart.style.top = "100%";

    heart.style.fontSize = (15 + Math.random()*20) + "px";

    heart.style.opacity = "0.5";

    heart.style.pointerEvents = "none";

    heart.style.transition = "7s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.top = "-10%";

    },100);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(createHeart,1800);

/* ==========================
      Welcome Message
========================== */

console.log("Welcome Nadia ❤️");

/*==============================
        Loader
==============================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.opacity="0";

        setTimeout(()=>{

            document.getElementById("loader").style.display="none";

        },1000);

    },2000);

});
/*==============================
        Love Counter
==============================*/

const startDate = new Date("December 12, 2025 00:00:00");


function updateCounter(){

    const now = new Date();

    let difference = now - startDate;


    if(difference < 0){

        difference = 0;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");


    if(daysElement){

        daysElement.innerHTML = days;

        hoursElement.innerHTML = hours;

        minutesElement.innerHTML = minutes;

        secondsElement.innerHTML = seconds;

    }

}


updateCounter();


setInterval(updateCounter,1000);
/*==============================
       Typing Message
==============================*/

const typingElement = document.getElementById("typing");

const messageText = `يا نادية...

من أول مرة اتكلمنا فيها يوم 8 نوفمبر 2025،
وأول وعد بينا يوم 12 ديسمبر 2025،
وأنا حبيت أعملك الموقع ده علشان يفضل ذكرى جميلة.

أتمنى الضحكة متفارقش وشك،
وربنا يحفظك ويسعد قلبك،
ويكتب لنا الخير دايمًا. ❤️`;


if(typingElement){

    let index = 0;


    function typeMessage(){

        if(index < messageText.length){

            typingElement.innerHTML += messageText.charAt(index);

            index++;

            setTimeout(typeMessage,70);

        }

    }


    typeMessage();

}