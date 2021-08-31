let testimonialItems = document.querySelectorAll(".item label");
let timer;
function cycleTestimonials(index) {
  timer = setTimeout(function () {
    let evt;
    if (document.createEvent) {
      evt = document.createEvent("MouseEvent");
      evt.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
    } else {
      evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
      });
    }
  });
}

// Music player stop
document.addEventListener(
  "play",
  function (e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);

// Phone carousel

const track = document.querySelector(".track");
let initialPosition = null;
let moving = false;
let transform = 0;

const gestureStart = (e) => {
  initialPosition = e.pageX;
  moving = true;
  const transformMatrix = window
    .getComputedStyle(track)
    .getPropertyValue("transform");
  if (transformMatrix !== "none") {
    transform = parseInt(transformMatrix.split(",")[4].trim());
  }
};

const gestureMove = (e) => {
  if (moving) {
    currentPosition = e.pageX;
    const diff = currentPosition - initialPosition;
    transformValue = transform + diff;
    if (transformValue > 0) {
      return;
    }
    track.style.transform = `translateX(${transformValue}px)`;
  }
};

const gestureEnd = (e) => {
  moving = false;
};

if (window.PointerEvent) {
  window.addEventListener("pointerdown", gestureStart);
  window.addEventListener("pointermove", gestureMove);
  window.addEventListener("pointerup", gestureEnd);
} else {
  window.addEventListener("mousedown", gestureStart);
  window.addEventListener("mousemove", gestureMove);
  window.addEventListener("mouseup", gestureEnd);
  window.addEventListener("touchdown", gestureStart);
  window.addEventListener("touchmove", gestureMove);
  window.addEventListener("touchup", gestureEnd);
}

// // Sections on scroll fade in
// let elementsArray = document.querySelectorAll(".section");
// console.log(elementsArray);
// window.addEventListener('scroll', fadeIn );
// function fadeIn() {
//     for (var i = 0; i < elementsArray.length; i++) {
//         var elem = elementsArray[i]
//         var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
//         if (distInView < 0) {
//             elem.classList.add("inView");
//         } else {
//             elem.classList.remove("inView");
//         }
//     }
// }
// fadeIn();
