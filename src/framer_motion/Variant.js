export const fadeIn = (direction, delay) => {
    return{
        hidden : {
            y: direction === "up" ? 100 : direction === "down" ? -50 : 0,
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            opacity: 0
        },
        show:{
            y: 0,
            x:0,
            opacity:1,
            transition:{
                type: 'tween',
                duration : 1.5,
                delay : delay,
                ease : [0.25,0.25,0.25,0.75]
            }
        }
    }
}

export const fadeUp =()=> {
    return{
        hidden:{
            opacity: 0,
            y: 40
        },
        show:{
            opacity:1,
            y:0,
            transition:{
                type: 'tween',
                duration : 1.5,
                ease : [0.25,0.25,0.25,0.75]
            }
        }
    }
}
