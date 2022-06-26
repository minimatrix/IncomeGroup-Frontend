const fs = require("fs");
// let responses = fs.readFileSync("../responses.json","utf-8");

const {original, percentage} = JSON.parse(request?.body);

const total = parseInt(original) + ((parseInt(original) / 100) * parseFloat(percentage));

const responseJSON = {
    original,  
    percentage,
    total: total.toFixed(2)
} 

// const existingResponses = JSON.parse(responses);
// existingResponses.push(responseJSON);
// responses = JSON.stringify(existingResponses);
// fs.writeFileSync("../responses.json",responses,"utf-8");

module.exports = responseJSON;

