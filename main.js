$('#imgLoader').on('click', function () {
    $('canvas').remove();
});

var img;

document.getElementById('imgLoader').onchange = function handleImage(e) {

    $('#canvasDiv').append('<canvas id="canvas"> </canvas>');
    var canvas = new fabric.StaticCanvas('canvas');
    canvas.setHeight(600);
    canvas.setWidth(800);
    var reader = new FileReader();
    reader.onload = function (event) {
        var imgObj = new Image();
        imgObj.crossOrigin = "Anonymous";
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            var img = new fabric.Image(imgObj);
            
            if (img.height > canvas.height * 2 || img.width > canvas.width * 2) {
                img.set({
                    height: img.height * 0.25,
                    width: img.width * 0.25
                });
            } else if ((img.height > canvas.height && img.height <= canvas.height * 2) || (img.width > canvas.width && img.width <= canvas.width * 2)) {
                img.set({
                    height: img.height * 0.5,
                    width: img.width * 0.5
                })
            }
            canvas.centerObject(img);
            canvas.add(img);
            canvas.renderAll();
        };
    };
    reader.readAsDataURL(e.target.files[0]);
};

function populateStorage() {
    localStorage.setItem('palette', document.getElementById('palette').value);
    setStyles();
}
function setStyles() {
    var currentColor = localStorage.getItem('palette');
    document.getElementById('palette').value = currentColor;
}


function hexToR(h) {
    return parseInt((cutHex(h)).substring(0, 2), 16);
}
function hexToG(h) {
    return parseInt((cutHex(h)).substring(2, 4), 16);
}
function hexToB(h) {
    return parseInt((cutHex(h)).substring(4, 6), 16);
}
function cutHex(h) {
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
}
function update(jscolor) {
    // 'jscolor' instance can be used as a string
    document.getElementById('body').style.backgroundColor = '#' + jscolor;
    populateStorage();
    var picker = localStorage.getItem("palette");
    document.getElementById('hex-str').innerHTML = "#" + picker;
    document.getElementById('rgb-str').innerHTML = hexToR(picker) + "" + hexToG(picker) + "" + hexToB(picker);

    document.getElementById('rgb').innerHTML =
        hexToR(picker) + ", " + hexToG(picker) + ", " + hexToB(picker);
}

$(document).ready(function () {

    var $reset = $('#resetbtn');
    var $brightness = $('#brightnessbtn');
    var $crop = $('#cropbtn');
    var $noise = $('#noisebtn');
    var $sepia = $('#sepiabtn');
    var $contrast = $('#contrastbtn');
    var $color = $('#colorbtn');

    var $vintage = $('#vintagebtn');
    var $lomo = $('#lomobtn');
    var $emboss = $('#embossbtn');
    var $tiltshift = $('#tiltshiftbtn');
    var $radialblur = $('#radialblurbtn');
    var $edgeenhance = $('#edgeenhancebtn');

    var $posterize = $('#posterizebtn');
    var $clarity = $('#claritybtn');
    var $orangepeel = $('#orangepeelbtn');
    var $sincity = $('#sincitybtn');
    var $sunrise = $('#sunrisebtn');
    var $crossprocess = $('#crossprocessbtn');

    var $hazydays = $('#hazydaysbtn');
    var $love = $('#lovebtn');
    var $grungy = $('#grungybtn');
    var $jarques = $('#jarquesbtn');
    var $pinhole = $('#pinholebtn');
    var $oldboot = $('#oldbootbtn');
    var $glowingsun = $('#glowingsunbtn');

    var $hdr = $('#hdrbtn');
    var $oldpaper = $('#oldpaperbtn');
    var $pleasant = $('#pleasantbtn');

//    var $save = $('#savebtn');
    var $save = $('#savebtn');

  /* As soon as slider value changes call applyFilters */
    $("input[type=range]").change(applyFilters);


    function applyFilters() {
        var hue = parseInt($('#hue').val());
        var cntrst = parseInt($('#contrast').val());
        var vibr = parseInt($('#vibrance').val());
        var sep = parseInt($('#sepia').val());

        Caman('#canvas', img, function() {
          this.revert(false);
            img = this.hue(hue).contrast(cntrst).vibrance(vibr).sepia(sep).render();
            
        });
      }

      /* Creating custom filters */
      Caman.Filter.register("oldpaper", function() {
        this.pinhole();
        this.noise(10);
        this.orangePeel();
        this.render();
      });

      Caman.Filter.register("pleasant", function() {
        this.colorize(60, 105, 218, 10);
        this.contrast(10);
        this.sunrise();
        this.hazyDays();
        this.render();
      });
    
      $reset.on('click', function(e) {
        $('input[type=range]').val(0);
        Caman('#canvas', img, function() {
          this.revert(false);
          this.render();
        });
      });

      /* In built filters */
      $brightness.on('click', function(e) {
        Caman('#canvas', function() {
          this.brightness(30).render();
        });
      });

      $noise.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.noise(10).render();
        });
      });

      $contrast.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.contrast(10).render();
        });
      });

      $sepia.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.sepia(20).render();
        });
      });

      $color.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.colorize(60, 105, 218, 10).render();
        });
      });

      $vintage.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.vintage().render();
        });
      });

      $lomo.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.lomo().render();
        });
      });

      $emboss.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.emboss().render();
        });
      });

      $tiltshift.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.tiltShift({
            angle: 90,
            focusWidth: 600
          }).render();
        });
      });

      $radialblur.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.radialBlur().render();
        });
      });

      $edgeenhance.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.edgeEnhance().render();
        });
      });

      $posterize.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.posterize(8, 8).render();
        });
      });

      $clarity.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.clarity().render();
        });
      });

      $orangepeel.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.orangePeel().render();
        });
      });

      $sincity.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.sinCity().render();
        });
      });

      $sunrise.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.sunrise().render();
        });
      });

      $crossprocess.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.crossProcess().render();
        });
      });

      $love.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.love().render();
        });
      });

      $grungy.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.grungy().render();
        });
      });

      $jarques.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.jarques().render();
        });
      });

      $pinhole.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.pinhole().render();
        });
      });

      $oldboot.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.oldBoot().render();
        });
      });

      $glowingsun.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.glowingSun().render();
        });
      });

      $hazydays.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.hazyDays().render();
        });
      });

      /* Calling multiple filters inside same function */
      $hdr.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.contrast(10);
          this.contrast(10);
          this.jarques();
          this.render();
        });
      });

      /* Custom filters that we created */
      $oldpaper.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.oldpaper();
          this.render();
        });
      });

      $pleasant.on('click', function(e) {
        Caman('#canvas', img, function() {
          this.pleasant();
          this.render();
        });
      });

    
   

        $save.on('click', function(e) {
        localStorage.setItem( "savedImageData", document.getElementById('canvas').toDataURL("image/png") );
          var imageResult = localStorage.getItem("savedImageData");
        Caman('#canvas', imageResult, function() {
            this.render(function() {
            this.save('png');
          });
        });
      });
  });

