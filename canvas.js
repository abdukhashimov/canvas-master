let canvas = document.querySelector("canvas")
let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

let ctx = canvas.getContext("2d")


class Circle {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
        ctx.strokeStyle = "blue"
        ctx.fillStyle = "#000"
        console.log(this.color)
        ctx.stroke()
        ctx.fill()
    }

    update() {
        if (this.x + this.radius >= innerWidth || this.x - this.radius <= 0) {
            this.dx = -this.dx
        }

        if (this.y + this.radius >= innerHeight || this.y - this.radius <= 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy

        this.draw()
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let circleArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 30
    let x = Math.random() * (innerWidth - 2 * radius) + radius
    let y = Math.random() * (innerHeight - 2 * radius) + radius
    let dx = (Math.random() - 0.5)
    let dy = (Math.random() - 0.5)

    circleArray.push(new Circle(
        x,
        y,
        dx,
        dy,
        radius,
        getRandomColor()
    ))
}


function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < circleArray.length; i++) {
        const circle = circleArray[i];
        circle.update()
    }
}

animate();