const fs = require("fs");
// let responses = fs.readFileSync("../responses.json","utf-8");


const {original, percentage} = JSON.parse(request?.body);

const total = original + ((original / 100) * percentage);

const responseJSON = {
    original,  
    percentage,
    total: Math.round(total)
} 


// const existingResponses = JSON.parse(responses);
// existingResponses.push(responseJSON);
// responses = JSON.stringify(existingResponses);
// fs.writeFileSync("../responses.json",responses,"utf-8");


module.exports = responseJSON;

