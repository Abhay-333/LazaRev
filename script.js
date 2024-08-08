const rightElems = document.querySelectorAll(".page2-right-elem");
const page2Right = document.querySelector(".page2-right");
const page2RightImg = document.querySelectorAll(".page2-right-elem img");
const page3Video = document.querySelector(".page3 video");
const play = document.querySelector(".play-btn");
const nav = document.querySelector("nav");

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

page2Animation();

function navAnimation() {
  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to(
      "#nav-bottom",
      {
        height: "21vh",
        duration: 0.3,
      },
      "+=0"
    );

    tl.to(
      ".nav-part2 h5 span",
      {
        y: 0,
        stagger: {
          amount: 0.2,
        },
        ease: "back.out",
      },
      "+=0"
    );
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(
      "#nav-bottom",
      {
        height: "0vh",
        duration: 0.3,
      },
      "+=0.1"
    ).to(
      ".nav-part2 h5 span",
      {
        y: 25,
        stagger: {
          amount: 0.1,
        },
        ease: "back.out",
      },
      "-=0.4"
    );

    tl.to(".nav-part2 h5", {});
  });
}

navAnimation();

function page3Animation() {
  play.addEventListener("click", function () {
    page3Video.play();
    gsap
      .to(".page3 video", {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRadius: "0px",
      })
      
    .to(play, {
        opacity: 0,
      });
  });

  page3Video.addEventListener("click", function () {
    page3Video.pause();

    gsap
      .to(".page3 video", {
        transform: "scaleX(0) scaleY(0)",
        opacity: 0,
      })
      .to(play, {
        opacity: 1,
      });
  });
}

page3Animation();
