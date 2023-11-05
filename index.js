$(document).ready(() => {
    let main = $("#main");
    let cusror = $('.cursor');

    main.on('mousemove', (dets) => {
        cusror.css('left', dets.clientX + 'px');
        cusror.css('top', dets.clientY + 'px');
    })
})