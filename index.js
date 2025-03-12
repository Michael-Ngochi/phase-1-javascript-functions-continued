// code your solution here
function saturdayFun(todo){
    if (todo){
        return `This Saturday, I want to ${todo}!`
    }
    else return "This Saturday, I want to roller-skate!"
}
function mondayWork(todo){
    if (todo){
        return (`This Monday, I will ${todo}.`)
    }
    return "This Monday, I will go to the office."
}
console.log(mondayWork())

function wrapAdjective(flair){
if (flair){
    flair=flair
}else flair="*"

   return function(adjective){
        if (adjective){
            return `You are ${flair}${adjective}${flair}!`
        }
        else return `You are ${flair}special${flair}!`
    }
}

//console.log(wrapAdjective("@@@")("Odd"));
console.log(wrapAdjective("!!!")("strange"));
console.log(wrapAdjective("%")("a dedicated programmer"));
