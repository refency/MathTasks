function isLive(health){
    if(health='true'){
        return 'live'
    }
    else(){
        return 'dead'
    }
}

console.log(isLive(true), ' - live');
console.log(isLive(false), ' - dead');
