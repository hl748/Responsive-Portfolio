function remove(str){
    var arr = []
    for(var i = 0; i < str.length; i++){
        arr.push(str[i])
    }
    var newStr = ""
    arr.forEach(function(item){
        
        if (item != "a"||item != "e"||item != "i"||item != "o"||item != "u") {
        newStr = newStr + item
        }
    })
    
  
    return newStr
}

function filter(item){
    if (item !== "a"||item !== "e"||item !== "i"||item !== "o"||item !== "u") {
        return item
        }
}

filter("Hello")

function randomNum(){
    var prompt = confirm()
    if (prompt == true){
        var chance = Math.floor(Math.random()*1000000)
        var result = chance.toString()
    }
    return result
}

function someOtherFunction(something){

}