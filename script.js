$(document).ready(function () {
    var $carrousel = $('#carrousel');
    $img = $('#carrousel img');
    indexImg = $img.length - 1;
    i = 0;
    $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');


    $('.next').click(function () {
        i++;

        if (i <= indexImg) {
            $img.fadeOut('slow');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn('slow');
        } else {
            $img.fadeOut('slow');
            $currentImg = $img.eq(0);
            $currentImg.fadeIn('slow');
            i = 0;
        }
    });

    $('.prev').click(function () {
        i--;

        if (i >= 0) {
            $img.fadeOut('slow');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn('slow');
        } else {
            $img.fadeOut('slow');
            $currentImg = $img.eq(indexImg);
            $currentImg.fadeIn('slow');
            i = indexImg;
        }

    });

    function slideImg() {
        setTimeout(function () {
            if (i < indexImg) {
                i++
            } else {
                i = 0;
            }

            $img.fadeOut('slow');

            $currentImg = $img.eq(i);
            $currentImg.fadeIn('slow');

            slideImg()

        }, 7000);

    }
    slideImg();
});

