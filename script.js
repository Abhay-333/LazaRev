const nav = document.querySelector("nav");

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

navAnimation()