let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let ctx = canvas.getContext("2d")


ctx.beginPath()
ctx.moveTo(50, 300)
ctx.lineTo(300, 100)
ctx.lineTo(400, 300)
ctx.strokeStyle = "#fa34a3"
ctx.stroke()

// arc - circle
for (let i = 0; i < 200; i++) {
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight

    ctx.beginPath()
    ctx.arc(
        x,
        y,
        30,
        0,
        Math.PI * 2,
        false
    )
    ctx.strokeStyle = "blue"
    ctx.stroke()
}

