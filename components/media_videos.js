//Componente para controllar videos
AFRAME.registerComponent('play-pause', {
    init: function () { 
    let myVideo = document.querySelector("#video_cerro_azul");
    let videoControls = document.querySelector("#videoControls");
    this.el.addEventListener("click",function () {
     if (myVideo.paused) {
       console.log(myVideo);
       myVideo.play();
       videoControls.setAttribute('src', '#pause');
       console.log(videoControls);
     }else {
       myVideo.pause();
       videoControls.setAttribute('src', '#play');
       console.log(videoControls);
     }
    });
    }
    });
    AFRAME.registerComponent('play-pause_sala01', {
        init: function () { 
        let myVideo = document.querySelector("#video_sala01");
        let videoControls = document.querySelector("#videoControls");
        this.el.addEventListener("click",function () {
         if (myVideo.paused) {
           console.log(myVideo);
           myVideo.play();
           videoControls.setAttribute('src', '#pause');
           console.log(videoControls);
         }else {
           myVideo.pause();
           videoControls.setAttribute('src', '#play');
           console.log(videoControls);
         }
        });
        }
        });
        AFRAME.registerComponent('play-pause_sala02', {
            init: function () { 
            let myVideo = document.querySelector("#video_sala02");
            let videoControls = document.querySelector("#videoControls");
            this.el.addEventListener("click",function () {
             if (myVideo.paused) {
               console.log(myVideo);
               myVideo.play();
               videoControls.setAttribute('src', '#pause');
               console.log(videoControls);
             }else {
               myVideo.pause();
               videoControls.setAttribute('src', '#play');
               console.log(videoControls);
             }
            });
            }
            });
            AFRAME.registerComponent('play-pause_sala03', {
                init: function () { 
                let myVideo = document.querySelector("#video_sala03");
                let videoControls = document.querySelector("#videoControls");
                this.el.addEventListener("click",function () {
                 if (myVideo.paused) {
                   console.log(myVideo);
                   myVideo.play();
                   videoControls.setAttribute('src', '#pause');
                   console.log(videoControls);
                 }else {
                   myVideo.pause();
                   videoControls.setAttribute('src', '#play');
                   console.log(videoControls);
                 }
                });
                }
                });