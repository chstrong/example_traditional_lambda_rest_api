"use strict";

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const updateNote = async (event) => {
  const { note } = JSON.parse(event.body);
  const { id } = event.pathParameters;

  let startDate = new Date();

  const dynamoClient = new DynamoDBClient({ region: "us-east-1"});

  const input = {
    TableName: "NotesTable",
    Item: {
      id: { S: id },
      note: { S: note }
    }
  };

  let data = {}

  try {
    data = await dynamoClient.send(new PutItemCommand(input));
  } catch(err) {
    console.log(err);
  }

  let endDate = new Date();

  let executionTimeInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  console.log("Execution time:", executionTimeInSeconds);

  return {
    statusCode: 200,
    body: JSON.stringify({
      "note": JSON.stringify(data) 
    }),
  };
};

module.exports = {
  handler: updateNote
}