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
//        $('#frame3').remove();
//        var checkImg = document.getElementById('#frame3');
        //if (checkImg === null) {
        var index = 0;
            if (event.target.tagName.toUpperCase() === 'IMG' && event.target.className === 'example') {
                var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');
                var imageFrame = event.target.src;
//                console.log(imageFrame);
                var elem = document.createElement("img");
                console.log(index++ + elem + "");
                elem.crossOrigin = "Anonymous";
                elem.src = imageFrame;
                elem.setAttribute("height", canvas.height);
                elem.setAttribute("width", canvas.width);
                elem.setAttribute("id", "frame3");
                console.log(index++ + elem + "");
                document.getElementById("place").appendChild(elem);

                $("#frame3").draggable();

                frame = document.getElementById('frame3');
                console.log(index++ + frame + "");

                $('#draw').click(function () {
                    var $frame = $('#frame3');
                console.log(index++ + frame + "");
                console.log(index++ + $frame + "");
//                    var $frame = document.getElementById('frame3');
                    var $canvas = $('#canvas');
                    var $frameOffset =  $frame.offset().left;
                    var $canvasOffset = $canvas.offset().left;
                    console.log($frameOffset + ", " + $canvasOffset);
                    var frame_x = $frameOffset - $canvasOffset,
                        frame_y = $frame.offset().top - $canvas.offset().top;
//                    console.log(canvas.height +" " + canvas.width);
//                    console.log(frame);
                console.log(index++ + frame + "");
                console.log(index++ + $frame + "");
                    context.drawImage(frame, frame_x, frame_y, canvas.width, canvas.height);
//                    localStorage.setItem( "savedImageData", canvas.toDataURL("image/png") );
                    $('#frame3').remove();
                //$frame.hide();
                //$(this).attr('disabled', 'disabled');
                });
            }
        //}
    });
});