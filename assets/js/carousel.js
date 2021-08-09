let testimonialItems = document.querySelectorAll(".item label");
let timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    let evt;
    if (document.createEvent){
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
  })
};


// Music player stop
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);


// Sections on scroll fade in
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
