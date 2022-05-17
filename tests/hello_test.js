/*
  HelloLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:187343962510:function:aws-node-http-api-project-dev-hello:5
  HttpApiId: nd4t62vrsf
  ServerlessDeploymentBucketName: aws-node-http-api-projec-serverlessdeploymentbuck-5urjzx0zeq8z
  HttpApiUrl: https://nd4t62vrsf.execute-api.us-east-1.amazonaws.com
*/

const axios = require('axios');

axios.get('https://nd4t62vrsf.execute-api.us-east-1.amazonaws.com').then(resp => {
    console.log(resp.data);
});