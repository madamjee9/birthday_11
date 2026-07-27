/*==========================================================
            HAPPY BIRTHDAY WEBSITE
                SCRIPT.JS
==========================================================*/

"use strict";

/*==========================================================
                    ELEMENTS
==========================================================*/

const loader = document.getElementById("loader");

const passwordPage = document.getElementById("passwordPage");

const website = document.getElementById("website");

const unlockBtn = document.getElementById("unlockBtn");

const passwordInput = document.getElementById("passwordInput");

const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");

const birthdaySong = document.getElementById("birthdaySong");

const scrollTopBtn = document.getElementById("scrollTop");

const typingText = document.getElementById("typingText");

const cursorHeart = document.getElementById("cursorHeart");

/*==========================================================
                    SETTINGS
==========================================================*/

const PASSWORD = "Madam Jee";

let musicPlaying = false;

/*==========================================================
                WINDOW LOADED
==========================================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

passwordPage.style.display = "flex";

},3000);

});

/*==========================================================
            PASSWORD UNLOCK
==========================================================*/

unlockBtn.addEventListener("click",checkPassword);

passwordInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

function checkPassword(){

const value=passwordInput.value.trim();

if(

value.toLowerCase()===PASSWORD.toLowerCase()

){

passwordPage.style.display="none";

website.style.display="block";

window.scrollTo(0,0);

startTyping();

showRandomQuote();

}
else{

passwordInput.value="";

passwordInput.placeholder="Wrong Password ❤️";

passwordInput.style.borderColor="red";

setTimeout(()=>{

passwordInput.placeholder="Enter Password";

passwordInput.style.borderColor="#ffd6ea";

},1500);

}

}

/*==========================================================
                MUSIC
==========================================================*/

musicBtn.addEventListener("click",()=>{

if(!musicPlaying){

bgMusic.play();

musicPlaying=true;

musicBtn.innerHTML=

'<i class="fa-solid fa-volume-high"></i>';

}

else{

bgMusic.pause();

musicPlaying=false;

musicBtn.innerHTML=

'<i class="fa-solid fa-volume-xmark"></i>';

}

});

/*==========================================================
                SCROLL TOP
==========================================================*/

scrollTopBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*==========================================================
                HERO TYPING
==========================================================*/

const heroTexts=[

"Happy Birthday Madam Jee ❤️",

"You Are My Favourite Person ❤️",

"I Love You Forever ❤️",

"30 July — My Favourite Day 🎂"

];

let heroIndex=0;

let charIndex=0;

let deleting=false;

function startTyping(){

typeHero();

}

function typeHero(){

const current=heroTexts[heroIndex];

if(!deleting){

typingText.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(typeHero,1500);

return;

}

}

else{

typingText.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

heroIndex++;

if(heroIndex>=heroTexts.length){

heroIndex=0;

}

}

}

setTimeout(typeHero,deleting?40:90);

}

/*==========================================================
            CURSOR HEART
==========================================================*/

document.addEventListener("mousemove",(e)=>{

cursorHeart.style.left=e.clientX+"px";

cursorHeart.style.top=e.clientY+"px";

});

/*==========================================================
                LIVE COUNTDOWN
==========================================================*/

const dayBox=document.getElementById("days");
const hourBox=document.getElementById("hours");
const minuteBox=document.getElementById("minutes");
const secondBox=document.getElementById("seconds");

/*
CHANGE THIS DATE EVERY YEAR
Example:
July 30, 2027
*/

const birthdayDate=new Date("July 30, 2026 00:00:00").getTime();

function updateCountdown(){

const now=new Date().getTime();

const distance=birthdayDate-now;

if(distance<=0){

if(dayBox) dayBox.innerHTML="0";
if(hourBox) hourBox.innerHTML="0";
if(minuteBox) minuteBox.innerHTML="0";
if(secondBox) secondBox.innerHTML="0";

return;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

if(dayBox) dayBox.innerHTML=days;
if(hourBox) hourBox.innerHTML=hours;
if(minuteBox) minuteBox.innerHTML=minutes;
if(secondBox) secondBox.innerHTML=seconds;

}

setInterval(updateCountdown,1000);

updateCountdown();

/*==========================================================
                HEART RAIN
==========================================================*/

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

heart.style.fontSize=(16+Math.random()*20)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);

/*==========================================================
                FLOWER PETALS
==========================================================*/

const petals=["🌸","🌺","🌼","💮"];

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=petals[Math.floor(Math.random()*petals.length)];

petal.style.left=Math.random()*window.innerWidth+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,900);

/*==========================================================
                FLOATING HEARTS
==========================================================*/

function floatingHeart(){

const heart=document.createElement("div");

heart.className="floating-heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*28)+"px";

heart.style.animationDuration=(8+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},13000);

}

setInterval(floatingHeart,1800);

/*==========================================================
                RANDOM LOVE QUOTES
==========================================================*/

const quotes=[

"You are my happiest place ❤️",

"My favourite notification is yours ❤️",

"You make ordinary days beautiful ❤️",

"Every moment with you is special ❤️",

"You are my forever person ❤️",

"I'll always choose you ❤️",

"You are my best memory ❤️",

"My heart smiles because of you ❤️"

];

const quoteBox=document.getElementById("randomQuote");

function showRandomQuote(){

setInterval(()=>{

if(!quoteBox) return;

quoteBox.innerHTML=

quotes[Math.floor(Math.random()*quotes.length)];

quoteBox.classList.add("show");

setTimeout(()=>{

quoteBox.classList.remove("show");

},3500);

},7000);

}

/*==========================================================
                MOUSE SPARKLES
==========================================================*/

document.addEventListener("mousemove",(e)=>{

for(let i=0;i<2;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=e.clientX+"px";

sparkle.style.top=e.clientY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},700);

}

});





/*==========================================================
                GALLERY LIGHTBOX
==========================================================*/

const galleryItems=document.querySelectorAll(".gallery-item");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");
const lightboxCaption=document.getElementById("lightboxCaption");
const imageCounter=document.getElementById("imageCounter");

const closeLightbox=document.getElementById("closeLightbox");
const prevImage=document.getElementById("prevImage");
const nextImage=document.getElementById("nextImage");

let currentImage=0;

const galleryImages=[...galleryItems];

galleryItems.forEach((item,index)=>{

item.addEventListener("click",()=>{

currentImage=index;

showImage();

});

});

function showImage(){

const img=galleryImages[currentImage].querySelector("img");

lightbox.classList.add("show");

lightboxImg.src=img.src;

lightboxCaption.innerHTML=
galleryImages[currentImage].dataset.caption;

imageCounter.innerHTML=
(currentImage+1)+" / "+galleryImages.length;

}

nextImage.addEventListener("click",()=>{

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

showImage();

});

prevImage.addEventListener("click",()=>{

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

showImage();

});

closeLightbox.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

/*==========================================================
                VIDEO CONTROLS
==========================================================*/

const videoCards=document.querySelectorAll(".video-card");

videoCards.forEach(card=>{

const video=card.querySelector("video");

const playBtn=card.querySelector(".play-video");

const muteBtn=card.querySelector(".mute-video");

const fullBtn=card.querySelector(".fullscreen-video");

const progress=card.querySelector(".video-progress");

playBtn.addEventListener("click",()=>{

if(video.paused){

video.play();

playBtn.innerHTML=
'<i class="fa-solid fa-pause"></i>';

}else{

video.pause();

playBtn.innerHTML=
'<i class="fa-solid fa-play"></i>';

}

});

muteBtn.addEventListener("click",()=>{

video.muted=!video.muted;

muteBtn.innerHTML=video.muted ?

'<i class="fa-solid fa-volume-xmark"></i>'

:

'<i class="fa-solid fa-volume-high"></i>';

});

fullBtn.addEventListener("click",()=>{

if(video.requestFullscreen){

video.requestFullscreen();

}

});

video.addEventListener("timeupdate",()=>{

const percent=

(video.currentTime/video.duration)*100;

progress.style.width=percent+"%";

});

video.addEventListener("ended",()=>{

playBtn.innerHTML=

'<i class="fa-solid fa-play"></i>';

});

});

/*==========================================================
                SKIP INTRO
==========================================================*/

document.getElementById("skipIntro")

.addEventListener("click",()=>{

document.getElementById("countdownSection")

.scrollIntoView({

behavior:"smooth"

});

});

/*==========================================================
                REASON CARDS
==========================================================*/

const reasonCards=document.querySelectorAll(".reason-card");

reasonCards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(1.08)";

setTimeout(()=>{

card.style.transform="";

},300);

});

});

/*==========================================================
                LOVE LETTER
==========================================================*/
/*==========================================================
                LOVE LETTER
==========================================================*/

const envelope = document.getElementById("loveEnvelope");
const openLetter = document.getElementById("openLetter");
const loveLetter = document.getElementById("loveLetter");
const typingLetter = document.getElementById("typingLetter");

const letterText = `Dear Madam Jee ❤️

Happy Birthday to the most beautiful person in my life.

Every day with you feels like a blessing.
Your smile makes my world brighter.
Your happiness means everything to me.

Thank you for always being you.

I Love You Forever ❤️`;

let letterIndex = 0;

function typeLetter(){

    if(letterIndex < letterText.length){

        typingLetter.innerHTML += letterText.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeLetter,30);

    }

}

openLetter.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(() => {

        envelope.style.display = "none";

        document.getElementById("openLetter").style.display = "none";

        loveLetter.style.display = "block";

        typingLetter.innerHTML = "";

        letterIndex = 0;

        typeLetter();

    }, 800);

});

/*==========================================================
                DIARY PAGES
==========================================================*/

const pages=document.querySelectorAll(".book-page");
const resetBook=document.getElementById("resetBook");

pages.forEach((page,index)=>{

page.addEventListener("click",()=>{

page.style.transform="rotateY(180deg)";

page.style.opacity=".4";

});

});

resetBook.addEventListener("click",()=>{

pages.forEach(page=>{

page.style.transform="";

page.style.opacity="1";

});

});

/*==========================================================
                GIFT BOX
==========================================================*/

const giftBox=document.getElementById("giftBox");
const giftMessage=document.getElementById("giftMessage");

giftBox.addEventListener("click",()=>{

giftBox.classList.add("open");

giftMessage.classList.add("show");

createFireworks();

});

/*==========================================================
                CAKE
==========================================================*/

const startBirthday=document.getElementById("startBirthday");
const blowCandles=document.getElementById("blowCandles");

const flames=document.querySelectorAll(".flame");

startBirthday.addEventListener("click",()=>{

birthdaySong.currentTime=0;

birthdaySong.play();

createFireworks();

});

blowCandles.addEventListener("click",()=>{

flames.forEach(flame=>{

flame.classList.add("off");

});

setTimeout(()=>{

alert("🎉 Happy Birthday Madam Jee ❤️");

},700);

});

/*==========================================================
                FIREWORKS
==========================================================*/

function createFireworks(){

for(let i=0;i<60;i++){

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=Math.random()*window.innerWidth+"px";

fire.style.top=Math.random()*window.innerHeight+"px";

fire.style.background=

`hsl(${Math.random()*360},100%,60%)`;

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},900);

}

}

/*==========================================================
                SECRET MODAL
==========================================================*/

const showFinalMessage = document.getElementById("showFinalMessage");
const secretModal = document.getElementById("secretModal");
const closeModal = document.getElementById("closeModal");
const loveYouBtn = document.getElementById("loveYouBtn");

if(showFinalMessage){

showFinalMessage.addEventListener("click",()=>{

secretModal.classList.add("show");

createBalloons();

createFireworks();

});

}

if(closeModal){

closeModal.addEventListener("click",()=>{

secretModal.classList.remove("show");

});

}

window.addEventListener("click",(e)=>{

if(e.target===secretModal){

secretModal.classList.remove("show");

}

});

/*==========================================================
                LOVE BUTTON
==========================================================*/

if(loveYouBtn){

loveYouBtn.addEventListener("click",()=>{

createFireworks();

createConfetti();

alert("❤️ I Love You Forever Madam Jee ❤️");

});

}

/*==========================================================
                BALLOONS
==========================================================*/

function createBalloons(){

const balloons=["🎈","🎈","💖","❤️","💕"];

for(let i=0;i<25;i++){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML=

balloons[Math.floor(Math.random()*balloons.length)];

balloon.style.left=Math.random()*100+"vw";

balloon.style.animationDuration=

(6+Math.random()*5)+"s";

balloon.style.fontSize=

(30+Math.random()*25)+"px";

document.body.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},12000);

}

}

/*==========================================================
                CONFETTI
==========================================================*/

function createConfetti(){

const colors=[

"#ff4f9d",

"#ff8dc4",

"#ffd54f",

"#7c4dff",

"#00e5ff",

"#69f0ae"

];

for(let i=0;i<150;i++){

const piece=document.createElement("div");

piece.style.position="fixed";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.width="10px";

piece.style.height="10px";

piece.style.background=

colors[Math.floor(Math.random()*colors.length)];

piece.style.pointerEvents="none";

piece.style.borderRadius="50%";

piece.style.zIndex="99999";

piece.style.transition="4s linear";

document.body.appendChild(piece);

setTimeout(()=>{

piece.style.transform=

`translateY(${window.innerHeight+100}px)
rotate(${Math.random()*720}deg)`;

piece.style.opacity="0";

},50);

setTimeout(()=>{

piece.remove();

},4500);

}

}

/*==========================================================
                FINAL TYPING
==========================================================*/

const finalTyping=document.getElementById("finalTyping");

const finalMessage=

"❤️ Thank You For Being The Best Part Of My Life ❤️";

let finalIndex=0;

function startFinalTyping(){

if(!finalTyping) return;

finalTyping.innerHTML="";

finalIndex=0;

typingAnimation();

}

function typingAnimation(){

if(finalIndex<finalMessage.length){

finalTyping.innerHTML+=

finalMessage.charAt(finalIndex);

finalIndex++;

setTimeout(typingAnimation,70);

}

}

/*==========================================================
                END SCREEN
==========================================================*/

const endScreen=document.getElementById("endScreen");

const endObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

createFireworks();

createBalloons();

startFinalTyping();

}

});

});

if(endScreen){

endObserver.observe(endScreen);

}

/*==========================================================
                FINAL ENHANCEMENTS
==========================================================*/

// ESC closes modal
document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(secretModal){

secretModal.classList.remove("show");

}

}

});

// Keyboard shortcut for music (M)

document.addEventListener("keydown",(e)=>{

if(e.key.toLowerCase()==="m"){

musicBtn.click();

}

});

// Auto gallery slideshow

// let autoGallery=setInterval(()=>{

// if(typeof nextImage!=="undefined"){

// nextImage.click();

// }

// },6000);

// Pause slideshow while lightbox closed

// if(lightbox){

// lightbox.addEventListener("mouseenter",()=>{

// clearInterval(autoGallery);

// });

// lightbox.addEventListener("mouseleave",()=>{

// autoGallery=setInterval(()=>{

// nextImage.click();

// },6000);

// });

// }

// Smooth reveal animation

const revealElements=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:0.15});

revealElements.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

revealObserver.observe(sec);

});

// Auto fireworks every 20 sec

setInterval(()=>{

createFireworks();

},20000);

// Random hearts burst

function heartBurst(){

for(let i=0;i<20;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*window.innerWidth+"px";

heart.style.top=Math.random()*window.innerHeight+"px";

heart.style.animationDuration="3s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},3000);

}

}

setInterval(heartBurst,12000);

// Scroll progress title

window.addEventListener("scroll",()=>{

const scroll=

window.scrollY/

(document.body.scrollHeight-window.innerHeight);

document.title=

"❤️ "+Math.floor(scroll*100)+"% Birthday Surprise ❤️";

});

// Welcome message

setTimeout(()=>{

console.log("%cHappy Birthday Madam Jee ❤️",

"font-size:30px;color:#ff4f9d;font-weight:bold;");

},1000);

/*==========================================================
                THE END
==========================================================*/

console.log("Birthday Website Loaded Successfully ❤️");