/**@type {HTMLCanvasElement} */
const c = document.getElementById("myCanvas")
const ctx = c.getContext("2d")

const width = c.width
const height = c.height
const step = 100 // Por enquanto, vamos considerar que 100 equivale a 1 unidade, ok?!

ctx.beginPath()

for (let x=0; x<=c.width; x+=step) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, c.height)
}

for (let y=0; y<=height; y+=step) {
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
}
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.moveTo(width/2, 0)
ctx.lineTo(width/2, height)
ctx.lineWidth = 2
ctx.strokeStyle="red"
ctx.stroke()
ctx.closePath()

ctx.beginPath()
ctx.moveTo(0, height/2)
ctx.lineTo(width, height/2)
ctx.lineWidth = 2
ctx.strokeStyle="red"
ctx.stroke()
ctx.closePath()

const proj2d = document.getElementById("proj2d")
proj2d.addEventListener('click', function() {
    ctx.beginPath()
    ctx.lineWidth = 2
    ctx.strokeStyle="green"
    ctx.moveTo(width/2, height/2) // Essas coordenadas equivalem ao ponto P(0, 0)
    ctx.lineTo(width/2+100, height/2) // P(1, 0)
    ctx.lineTo(width/2+100, height/2-100) // P(1, 1)
    ctx.lineTo(width/2, height/2-100) // P(0, 1)
    ctx.lineTo(width/2, height/2) // Aqui voltamos à origem, ou seja, quando P(0, 0)
    ctx.stroke()
})
