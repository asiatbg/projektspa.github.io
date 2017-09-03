document.addEventListener('DOMContentLoaded', function () {
    
    $('#show').click(function () {
        var divs = document.getElementById("hideDiv");
        divs.style.visibility = "visible";
    });
    $('#clear').click(function () {
        var divs = document.getElementById("hideDiv");
        divs.style.visibility = "hidden";
    });
    document.addEventListener('click', function (event) {
        var checkImg = document.getElementById('frame3');
        if (checkImg === null) {
            if (event.target.tagName.toUpperCase() === 'IMG' && event.target.className === 'example') {
                var canvas = document.getElementById('canvas');
                var context = canvas.getContext('2d');
                var imageFrame = event.target.src;
                var elem = document.createElement("img");
                elem.src = imageFrame;
                elem.setAttribute("height", canvas.height);
                elem.setAttribute("width", canvas.width);
                elem.setAttribute("id", "frame3");
                document.getElementById("place").appendChild(elem);

                $("#frame3").draggable();

                var frame = document.getElementById('frame3');

                $('#draw').click(function () {
                    var $frame = $('#frame3'),
                        $canvas = $('#canvas');
                    var frame_x = $frame.offset().left - $canvas.offset().left,
                        frame_y = $frame.offset().top - $canvas.offset().top;
                    console.log(canvas.height +" " + canvas.width);
                    context.drawImage(frame, frame_x, frame_y, canvas.width, canvas.height);
                    $('#frame3').remove();
                //$frame.hide();
                //$(this).attr('disabled', 'disabled');
                });
            }
        }
    });
});