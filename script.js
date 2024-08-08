const page3Video = document.querySelector(".page3 video");
const play = document.querySelector(".play-btn");

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


page3Animation()