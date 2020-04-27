var timer = 0;
var direction = 'right';
var snake = $('#snake');
var apple = $('#apple');
var doc_W = $(window).width();
var doc_H = $(window).height();

var timerIntVal = setInterval(function () {
    var snake_left = parseInt(snake.css('left').replace('px', ''));
    var snake_top = parseInt(snake.css('top').replace('px', ''));

    if (snake_left < -20) {
        snake_left = doc_W + 20;
    } else
    if (snake_left > doc_W + 20) {
        snake_left = -20;
    } else
    if (snake_top < -20) {
        snake_top = doc_H + 20;
    } else
    if (snake_top > doc_H + 20) {
        snake_top = -20;
    }

    if (direction == 'right') {
        snake_left += 20;
        snake.css('left', snake_left + 'px')
    } else
    if (direction == 'left') {
        snake_left -= 20;
        snake.css('left', snake_left + 'px')
    } else
    if (direction == 'up') {
        snake_top -= 20;
        snake.css('top', snake_top + 'px')
    } else
    if (direction == 'down') {
        snake_top += 20;
        snake.css('top', snake_top + 'px')
    }

    if (
        snake.css('left') === apple.css('left') &&
        snake.css('top') === apple.css('top')
    ) {
        relocate_apple();
    }

}, 100);

$(document).keydown(function (e) {
    if (e.keyCode == 38) {
        direction = 'up';
    } else
    if (e.keyCode == 40) {
        direction = 'down';
    } else
    if (e.keyCode == 37) {
        direction = 'left';
    } else
    if (e.keyCode == 39) {
        direction = 'right';
    }
});

function relocate_apple() {
    var x_portion = parseInt(doc_W / 20);
    var y_portion = parseInt(doc_H / 20);
    var left = parseInt(Math.random() * x_portion + 1);
    var top = parseInt(Math.random() * y_portion + 1);
    apple.css({
        'left': left * 20 + 'px',
        'top': top * 20 + 'px'
    });
}

relocate_apple();