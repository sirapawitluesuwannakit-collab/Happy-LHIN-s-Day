// ==========================================
// Elements
// ==========================================

const landing = document.getElementById("landing");
const hero = document.getElementById("hero");
const menu = document.getElementById("menu");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.querySelector(".question");
const enterMenu = document.getElementById("enterMenu");

// ==========================================
// NO Button
// ==========================================

const messages = [

     "เชอะ... 🥺",

    "กดyesเถอะพี่ 😠",

    "ให้คิดใหม่... 💗",

    "โกดนะ 😡",

    "ว้ายย ไม่มีให้กดละ 😜"

];

let messageIndex = 0;

let yesScale = 1;

let noScale = 1;

noBtn.addEventListener("click",()=>{

    question.textContent = messages[
        Math.min(messageIndex,messages.length-1)
    ];

    messageIndex++;

    yesScale += 0.2;

    yesBtn.style.transform=`scale(${yesScale})`;

    noScale -= 0.15;

    if(noScale<=0.35){

        noBtn.style.display="none";

    }else{

        noBtn.style.transform=`scale(${noScale})`;

    }

});

// ==========================================
// YES
// ==========================================

yesBtn.addEventListener("click",()=>{

    landing.classList.add("hidden");

    hero.classList.remove("hidden");

    hero.classList.add("fade-in");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================
// Continue
// ==========================================

enterMenu.addEventListener("click",()=>{

    hero.classList.add("hidden");

    menu.classList.remove("hidden");

    menu.classList.add("fade-in");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================================
// Go To Section
// ==========================================

function goSection(sectionId){

    const targetSection = document.getElementById(sectionId);

    if(!targetSection){

        console.error(`Section "${sectionId}" not found`);

        return;

    }

    targetSection.classList.add("fade-in");

    targetSection.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}

// ==========================================
// Back To Menu
// ==========================================

function backMenu(){

    menu.classList.add("fade-in");

    menu.scrollIntoView({

        behavior:"smooth",

        block:"start"

    });

}

// ==========================================
// Remove Fade Animation After Playing
// ==========================================

const sections = document.querySelectorAll(".page, .content-section");

sections.forEach(section=>{

    section.addEventListener("animationend",()=>{

        section.classList.remove("fade-in");

    });

});

// ==========================================
// ESC = Back To Menu
// ==========================================

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        backMenu();

    }

});

// ==========================================
// Page Loaded
// ==========================================

window.addEventListener("load",()=>{

    console.log("❤️ Birthday Website Loaded ❤️");

});
// ==========================================
// Our Time Counter
// ==========================================

// วันที่เริ่มคุย
const startDate = new Date(2026, 4, 31, 0, 0, 0);
// เดือนใน JavaScript เริ่มจาก 0
// 4 = May

function updateOurTime() {

    const now = new Date();

    // ปี
    let years = now.getFullYear() - startDate.getFullYear();

    // เดือน
    let months = now.getMonth() - startDate.getMonth();

    // วัน
    let days = now.getDate() - startDate.getDate();

    // ถ้าวันติดลบ
    if (days < 0) {

        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();

    }

    // ถ้าเดือนติดลบ
    if (months < 0) {

        years--;

        months += 12;

    }

    // ชั่วโมง นาที วินาที
    const diff = now - startDate;

    const totalSeconds = Math.floor(diff / 1000);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = totalSeconds % 60;

    // แสดงผล
    document.getElementById("years").textContent = years;

    document.getElementById("months").textContent = months;

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

// เรียกครั้งแรก
updateOurTime();

// อัปเดตทุกวินาที
setInterval(updateOurTime, 1000);
