var str = "^v^^v^^vv^vv^vv^^vvv^^v^^^vv^^^vv^v^^vvv^^^^^v^v^v^v^vv^^vvv^^^^vvv^^vvv^^^^^vvvv^^vvv^vv^^vv^vv^v^^^";
var res = str.split("");
var upfloor = 0
var downfloor = 0

for(var i = 0; i < res.length; i++){
    if (res[i] == '^'){
        upfloor++
    }
}

for(var i = 0; i < res.length; i++){
    if (res[i] == 'v'){
        downfloor++
    }
}

console.log(upfloor)
console.log(downfloor)
console.log('The floor will be on level '+(upfloor - downfloor))