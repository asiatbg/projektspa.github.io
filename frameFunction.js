document.addEventListener('DOMContentLoaded', function () {
    var frame = null;
    
    $('#show').click(function () {
        var divs = document.getElementById("hideDiv");
        divs.style.visibility = "visible";
    });
    $('#clear').click(function () {
        var divs = document.getElementById("hideDiv");
        divs.style.visibility = "hidden";
    });
    document.addEventListener('click', function (event) {
            if (event.target.tagName.toUpperCase() === 'IMG' && event.target.className === 'example') {
                $('#frame3').remove();
                var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');
                var imageFrame = event.target.src;
                var elem = document.createElement("img");

                elem.crossOrigin = "Anonymous";
                elem.src = imageFrame;
                elem.setAttribute("height", canvas.height);
                elem.setAttribute("width", canvas.width);
                elem.setAttribute("id", "frame3");
                document.getElementById("place").appendChild(elem);

                $("#frame3").draggable();

                frame = document.getElementById('frame3');


                $('#draw').click(function () {
                    var $frame = $('#frame3');
                    var $canvas = $('#canvas');
                    var $frameOffset =  $frame.offset().left;
                    var $canvasOffset = $canvas.offset().left;
                    console.log($frameOffset + ", " + $canvasOffset);
                    var frame_x = $frameOffset - $canvasOffset,
                        frame_y = $frame.offset().top - $canvas.offset().top;

                    context.drawImage(frame, frame_x, frame_y, canvas.width, canvas.height);
                    $('#frame3').remove();
                    $frame.hide();
                    //$(this).attr('disabled', 'disabled');
                });
            }

    });
});