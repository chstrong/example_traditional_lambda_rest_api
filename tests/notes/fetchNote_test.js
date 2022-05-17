const axios = require('axios');

let startDate = new Date();

axios.get('https://ift5vn2ly9.execute-api.us-east-1.amazonaws.com/dev/note/01G13WCRDHN2D8N491TZYKVA90').then(resp => {
    console.log(resp.data);
    let endDate = new Date();
    let executionTimeInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
    console.log("Execution Time:",executionTimeInSeconds);
});