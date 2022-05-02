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
    console.log(result)
    console.log("otherresult", result)
    return result
}

function practiceJava(){
    int arr[] = {
        console.log("practice some arrays")
        console.log("practice more arrays")
    }
}

function otherPracticeFunction(){
    console.log("more practice functions")
    console.log("even more practice functions")
    console.log("higher practice functions")
    console.log("more practice functions")
    object: {
        object: "more practice functions"
    }
}

function someOtherFunction(something){

}