/*
  HelloLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:187343962510:function:aws-node-http-api-project-dev-hello:7
  AddNoteLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:187343962510:function:aws-node-http-api-project-dev-addNote:1
  HttpApiId: nd4t62vrsf
  ServerlessDeploymentBucketName: aws-node-http-api-projec-serverlessdeploymentbuck-5urjzx0zeq8z
  HttpApiUrl: https://nd4t62vrsf.execute-api.us-east-1.amazonaws.com
*/

const axios = require('axios');

let startDate = new Date();

axios.post('https://ift5vn2ly9.execute-api.us-east-1.amazonaws.com/dev', {
  note: "This is my note from Axios"
}).then(resp => {
    console.log(resp.data);
    
    let endDate = new Date();
    let executionTimeInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
    console.log("Execution Time:",executionTimeInSeconds);
});