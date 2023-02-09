class CanvasGradation {

    num = document.querySelectorAll('.new-section').length

    height  = window.innerHeight
    width   = 200
    canvasElement = document.createElement('canvas')
    ctx = this.canvasElement.getContext('2d')
    lineWidth = 1

    graduationHeight = window.innerHeight - ((window.innerHeight / (this.num + 2)) * 2);
    graduationMargin = window.innerHeight / (this.num + 2);


    constructor() {
        this.init()
        this.canvasElement.classList.add('canvas-gradation')
        document.querySelector('.canvas-container').appendChild( this.canvasElement )
    }

    init() {
        this.canvasElement.width = this.width
        this.canvasElement.height = this.height

        for (let i = 1; i < this.num + 1; i++) {
            const top = this.graduationMargin + this.graduationHeight / this.num * i
            this.drawLine(0, top, 100, top)
        }
       
    }

    drawLine(x1, y1, x2,y2, stroke = 'black') {
        this.ctx.beginPath()
        this.ctx.moveTo(x1 + this.lineWidth / 2, y1 + this.lineWidth / 2)
        this.ctx.lineTo(x2 + this.lineWidth / 2, y2 + this.lineWidth / 2)
        this.ctx.strokeStyle    = stroke
        this.ctx.lineWidth      = this.lineWidth
        this.ctx.stroke()
    }
    
}
