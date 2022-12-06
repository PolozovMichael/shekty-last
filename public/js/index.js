AOS.init({
    disable: 'phone'
});

$('#first-video').css({
    "display" : "none"
});
$('#second-video').css({
    "display" : "none"
});
$('#third-video').css({
    "display" : "none"
});
$('#fourth-video').css({
    "display" : "none"
});

$('#first-col').click(()=> {
    $('#first-video').css({
        "display" : "block",
        "position" : "absolute",
        "top" : "0",
        "left" : "0",
        "width" : "100%",
        "height" : "100%",
        "z-index" : "1000"
    });
    $('#second-video').css({
        "display" : "none"
    });
    $('#third-video').css({
        "display" : "none"
    });
    $('#fourth-video').css({
        "display" : "none"
    });
});
$('#second-col').click(()=> {
    $('#second-video').css({
        "display" : "block",
        "position" : "absolute",
        "top" : "0",
        "left" : "0",
        "width" : "100%",
        "height" : "100%",
        "z-index" : "1000"
    });
    $('#first-video').css({
        "display" : "none"
    });
    $('#third-video').css({
        "display" : "none"
    });
    $('#fourth-video').css({
        "display" : "none"
    });
    
});
$('#third-col').click(()=> {
    $('#third-video').css({
        "display" : "block",
        "position" : "absolute",
        "top" : "0",
        "left" : "0",
        "width" : "100%",
        "height" : "100%",
        "z-index" : "1000"
    });
    $('#first-video').css({
        "display" : "none"
    });
    $('#second-video').css({
        "display" : "none"
    });
    $('#fourth-video').css({
        "display" : "none"
    });
});
$('#fourth-col').click(()=> {
    $('#fourth-video').css({
        "display" : "block",
        "position" : "absolute",
        "top" : "0",
        "left" : "0",
        "width" : "100%",
        "height" : "100%",
        "z-index" : "1000"
    });
    $('#first-video').css({
        "display" : "none"
    });
    $('#second-video').css({
        "display" : "none"
    });
    $('#third-video').css({
        "display" : "none"
    });
});

$(document).click((e) => {
    if($(e.target).closest('.col').length === 0)
        $('.video').css({"display" : "none"});
});