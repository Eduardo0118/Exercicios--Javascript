function argumentos(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined){
        return console.log(a)
    } 
    else if (a !== undefined && b !== undefined && c === undefined){
        return console.log(a + b)
    }
    else if (a !== undefined && b !== undefined && c !== undefined){
        return console.log((a + b) / c)
    }
    else if (a === undefined && b === undefined && c === undefined){
        return console.log(false)
    }
    else {
        return null
    }
}