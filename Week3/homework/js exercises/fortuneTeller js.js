function tellFortune() {
    let numChildren = [1,2,3,4,5,6,"7+"];
    let partnerNames = ["Joe", "Jack", "John", "Jonathan"];
    let locations  = ["South America", "North America","Europe","Asia","Australia"];
    let jobs = ["Web Developer","Web Designer","Website Constructor","Website Builder","Spider web developer"];

    let yourChildren=numChildren[Math.floor(Math.random()*numChildren.length)];
    let yourPartnerName=partnerNames[Math.floor(Math.random()*partnerNames.length)];
    let yourLocation = locations[Math.floor(Math.random()*locations.length)];
    let yourJob = jobs[Math.floor(Math.random()*jobs.length)];

    return `You will be a ${yourJob} in ${yourLocation}, and married to ${yourPartnerName} with ${yourChildren} kids.`
}

console.log(tellFortune())