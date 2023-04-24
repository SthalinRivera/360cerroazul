AFRAME.registerComponent('change-sky', {
  schema: {
    img: { type: 'string' },
    zone: { type: 'string' }
  },

  init: function () {
    // Do something when component first attached.
    var data = this.data;
    var el = this.el;
    el.addEventListener("click", function () {
      var mySky = document.querySelector("#my-sky");
      mySky.setAttribute("src", data.img);
      console.log(data.img);

      var sphereMuseo = document.querySelector("#sphere-museo");
      var menuView = document.querySelector(".menu-view");
      var iconMenu = document.querySelector("#icon-menu-img");
      var museo3D= document.querySelector("#_museo3d");
    
      
      var txtPlaza = document.querySelector("#txt-info-plaza");
      var txtFraile = document.querySelector("#txt-info-fraile");
      var txtMonumento = document.querySelector("#txt-info-monumento");
      var txtFaro = document.querySelector("#txt-info-faro");

      var meteorsSphere = document.querySelector("#meteorsSphere");
      var scoreGame = document.querySelector("#txt-score");

      var videos_museo= document.querySelector(".videos_museo");


      if (data.img == "#sky-museo") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        sphereMuseo.setAttribute("visible", true);
        museo3D.setAttribute("visible", true);
        videos_museo.setAttribute("visible", true);
      } else {
        sphereMuseo.setAttribute("visible", false);
        museo3D.setAttribute("visible", false);
        videos_museo.setAttribute("visible", false);
      }

      if (data.img == "#sky-muelle") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
       
      } else {
        sphereMuseo.setAttribute("visible", false);
      }
      if (data.img == "#sky-fraile") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        txtFraile.setAttribute("visible", true);
        console.log(iconMenu);
      
      } else {
        sphereMuseo.setAttribute("visible", false);
        txtFraile.setAttribute("visible", false);
      }
      if (data.img == "#sky-juego") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        meteorsSphere.setAttribute("visible", true);
        scoreGame.setAttribute("visible", true);
        console.log(iconMenu);
      
      } else {
        sphereMuseo.setAttribute("visible", false);
        txtFraile.setAttribute("visible", false);
        
        meteorsSphere.setAttribute("visible", false)
        scoreGame.setAttribute("visible", false);;
      }
      if (data.img == "#sky-plaza") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        txtPlaza.setAttribute("visible", true);
      
      } else {
        txtPlaza.setAttribute("visible", false);

      }



      if (data.img == "#sky-monumento") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        txtMonumento.setAttribute("visible", true);
        console.log(data.img);
      
      } else {
        txtMonumento.setAttribute("visible", false);

      }
      if (data.img == "#sky-faro") {
        menuView.setAttribute("visible", false);
        iconMenu.setAttribute("visible", true);
        txtFaro.setAttribute("visible", true);
        console.log(data.img);
      
      } else {
        txtFaro.setAttribute("visible", false);

      }

    });
    
  },


});

