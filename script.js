const rightElems = document.querySelectorAll(".page2-right-elem");
const page2Right = document.querySelector(".page2-right");
const page2RightImg = document.querySelectorAll(".page2-right-elem img");

const page2Animation = () => {
  rightElems.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      gsap.to(e.childNodes[3], {
        duration: 0.2,
        opacity: 1,
        scale: 1.5,
      });
    });

    e.addEventListener("mousemove", function (move) {
      gsap.to(e.childNodes[3], {
        x: move.x - e.getBoundingClientRect().x - 50,
        y: move.y - e.getBoundingClientRect().y - 70,
      });
    });

    e.addEventListener("mouseleave", function () {
      gsap.to(e.childNodes[3], {
        duration: 0.2,
        opacity: 0,
        scale: 0,
      });
    });
  });
};


page2Animation()