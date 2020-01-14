

function giveCompliment(yourName){
    
    let arr = ["great", "handsome","smart", "lucky", "charming", "smart","gorgeous","refreshed","happy","confident"]
    let randomCompliment = arr[Math.floor(Math.random() * arr.length)]
    
    return `Hey ${yourName}, you look ${randomCompliment} today!`
    

}




console.log(giveCompliment("NIKOS"))