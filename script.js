function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()

const skillElements = document.querySelectorAll("#page2 .skill-container p");

        gsap.to(skillElements, {
            scrollTrigger: {
                trigger: "#page2",
                start: "top bottom",
                end: "bottom top",
                scroller: `#main`,
                scrub: 0.8,
            },
            color: "#00ff00",
            stagger: 0.1, // Adjust the value for the stagger effect
        });

const skillimg = document.querySelectorAll("#page2 .image-container img");

gsap.to(skillimg, {
    scrollTrigger: {
        trigger: "#page2",
        start: "top bottom",
        end: "bottom center",
        scroller: `#main`,
        scrub: 0.5,
    },
    color: "#00ff00",
    opacity: 1,
    stagger: 0.8,
});

const eduElements = document.querySelectorAll("#page4 .edu-container h1");

        gsap.to(eduElements, {
            scrollTrigger: {
                trigger: "#page4",
                start: "top bottom",
                end: "bottom top",
                scroller: `#main`,
                scrub: 0.5,
            },
            color: "#00ff00",
            stagger: 0.2,
        });

function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./assets/bridges00004.png
./assets/bridges00007.png
./assets/bridges00010.png
./assets/bridges00013.png
./assets/bridges00016.png
./assets/bridges00019.png
./assets/bridges00022.png
./assets/bridges00025.png
./assets/bridges00028.png
./assets/bridges00031.png
./assets/bridges00034.png
./assets/bridges00037.png
./assets/bridges00040.png
./assets/bridges00043.png
./assets/bridges00046.png
./assets/bridges00049.png
./assets/bridges00052.png
./assets/bridges00055.png
./assets/bridges00058.png
./assets/bridges00061.png
./assets/bridges00064.png
./assets/bridges00067.png
./assets/bridges00070.png
./assets/bridges00073.png
./assets/bridges00076.png
./assets/bridges00079.png
./assets/bridges00082.png
./assets/bridges00085.png
./assets/bridges00088.png
./assets/bridges00091.png
./assets/bridges00094.png
./assets/bridges00097.png
./assets/bridges00100.png
./assets/bridges00103.png
./assets/bridges00106.png
./assets/bridges00109.png
./assets/bridges00112.png
./assets/bridges00115.png
./assets/bridges00118.png
./assets/bridges00121.png
./assets/bridges00124.png
./assets/bridges00127.png
./assets/bridges00130.png
./assets/bridges00133.png
./assets/bridges00136.png
./assets/bridges00139.png
./assets/bridges00142.png
./assets/bridges00145.png
./assets/bridges00148.png
./assets/bridges00151.png
./assets/bridges00154.png
./assets/bridges00157.png
./assets/bridges00160.png
./assets/bridges00163.png
./assets/bridges00166.png
./assets/bridges00169.png
./assets/bridges00172.png
./assets/bridges00175.png
./assets/bridges00178.png
./assets/bridges00181.png
./assets/bridges00184.png
./assets/bridges00187.png
./assets/bridges00190.png
./assets/bridges00193.png
./assets/bridges00196.png
./assets/bridges00199.png
./assets/bridges00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()



const qualityElements = document.querySelectorAll("#page6 .quality-container h1");

        gsap.to(qualityElements, {
            scrollTrigger: {
                trigger: "#page6",
                start: "top bottom",
                end: "bottom center",
                scroller: `#main`,
                scrub: 0.5,
            },
            color: "#00ff00",
            stagger: 0.5,
        });

const qualityLinkElements = document.querySelectorAll("#page6 .quality-container a");

gsap.to(qualityLinkElements, {
    scrollTrigger: {
        trigger: "#page6",
        start: "top center",
        end: "bottom center",
        scroller: `#main`,
        scrub: 0.2,
    },
    color: "#ffffff",
    stagger: 0.5,
});

const animatedBorder = document.createElement('div');
animatedBorder.classList.add('animated-border');

const right9Center = document.querySelector('.right9-center');
right9Center.appendChild(animatedBorder);

const imgElement = right9Center.querySelector('img');

function updateBorderDimensions() {
  animatedBorder.style.width = `${imgElement.offsetWidth}px`;
  animatedBorder.style.height = `${imgElement.offsetHeight}px`;
}

imgElement.addEventListener('load', updateBorderDimensions);

updateBorderDimensions();

gsap.to(animatedBorder, {
    scrollTrigger: {
        trigger: ".right9",
        start: "top bottom",
        end: "bottom top",
        scroller: `#main`,
        scrub: 0.5,
    },
    borderWidth: "15px",
    borderColor: "#dcfc08",
});


document.addEventListener("DOMContentLoaded", function() {
  const downloadButton = document.querySelector(".resume-btn");
  const resumePath = "./assets/resume.pdf";

  downloadButton.addEventListener("click", function() {
      const link = document.createElement("a");
      link.href = resumePath;
      link.target = "_blank";
      link.download = "rishabhs-resume.pdf";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });
});


//loading spinner
const loadingSpinner = document.getElementById("loading-spinner");

window.addEventListener("load", () => {
  setTimeout(() => {
    loadingSpinner.style.display = "none";
  }, 500);
});

