
const {original, percentage} = JSON.parse(request?.body);

const total = original + ((original / 100) * percentage);

const responseJSON = {
    original,  
    percentage,
    total: Math.round(total)
} 

module.exports = responseJSON;

