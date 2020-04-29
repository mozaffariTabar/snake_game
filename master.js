var speed = 300;
var direction = 'right';
var snake = document.getElementById('snake');
var apple = document.getElementById('apple');
var block = {
    pixel: 30,
    number: 20
}

function move_snake() {
    var left = snake.offsetLeft;
    var top = snake.offsetTop;

    if (left < -block.pixel) {
        left = block.pixel * block.number + block.number;
    } else
    if (left > block.pixel * block.number) {
        left = -block.number;
    } else
    if (top < -block.pixel) {
        top = block.number * block.pixel;
    } else
    if (top > block.number * block.pixel) {
        top = -block.pixel;
    }

    if (direction == 'right') {
        left += block.pixel;
        snake.style.left = left + 'px';
    } else
    if (direction == 'left') {
        left -= block.pixel;
        snake.style.left = left + 'px';
    } else
    if (direction == 'up') {
        top -= block.pixel;
        snake.style.top = top + 'px';
    } else
    if (direction == 'down') {
        top += block.pixel;
        snake.style.top = top + 'px';
    }

    if (
        snake.style.left == apple.style.left &&
        snake.style.top == apple.style.top
    ) {
        relocate_apple();
    }

    setTimeout(function () {
        move_snake();
    }, speed);
}

move_snake();

document.addEventListener('keydown', function (e) {
    if (!is_snake_in_garden())
        return false;

    if (e.keyCode == 38) {
        set_snake_dir('up');
    } else
    if (e.keyCode == 40) {
        set_snake_dir('down');
    } else
    if (e.keyCode == 37) {
        set_snake_dir('left');
    } else
    if (e.keyCode == 39) {
        set_snake_dir('right');
    }
});

function is_snake_in_garden() {
    if (
        snake.style.left < 0 ||
        snake.style.top < 0 ||
        snake.style.left > block.pixel * block.number ||
        snake.style.top > block.pixel * block.number
    ) return false;
    return true;
}

function set_snake_dir(dir) {
    direction = dir;
    snake.setAttribute('dir', dir);
}

function relocate_apple() {
    var left = parseInt(Math.random() * block.number - 1 + 1);
    var top = parseInt(Math.random() * block.number - 1 + 1);

    apple.style.top = top * block.pixel + 'px';
    apple.style.left = left * block.pixel + 'px';

    apple.classList.remove('shake');
    setTimeout(function () {
        apple.classList.add('shake');
    }, 500);

    if (speed > 100)
        speed -= 10;
}

relocate_apple();