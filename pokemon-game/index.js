const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.height = 576
canvas.width = 1024

c.fillStyle = 'white'
c.fillRect(0,0, canvas.width, canvas.height);

const image = new Image()
image.src = "./Images/TownMap.png"


const playerImage = new Image()
playerImage.src = "./Images/playerDown.png"

class Sprite{
    constructor({position, velocity, image }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
const background = new Sprite({
    position: {
        x:-1120,
        y:-550
    },
    image: image
    
})
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage,
        0,
        0,
        playerImage.width/4,
        playerImage.height,
        canvas.width/2 - (playerImage.width/4)/2, 
        canvas.height/2 - playerImage.height/2,
        playerImage.width/4,
        playerImage.height
        )
    if(keys.w.pressed) background.position.y += 2
    else if(keys.s.pressed) background.position.y -= 2
    else if(keys.a.pressed) background.position.x += 2
    else if(keys.d.pressed) background.position.x -= 2
    
}
animate()

window.addEventListener('keydown', (e) => {
    switch(e.key){
        case 'w' :
            keys.w.pressed = true
            break
        case 'a' :
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
             break
        case 'd':
            keys.d.pressed = true
            break        
    }
    
})

window.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'w' :
            keys.w.pressed = false
            break
        case 'a' :
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
             break
        case 'd':
            keys.d.pressed = false
            break        
    }
    
})

