"use strict";

const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const ULID = require('ulid')

const addNote = async (event) => {
  const { note } = JSON.parse(event.body);
  const createdAt = new Date();
  const id = ULID.ulid();

  let startDate = new Date();

  const dynamoClient = new DynamoDBClient({ region: "us-east-1"});

  const input = {
    TableName: "NotesTable",
    Item: {
      id: { S: id },
      note: { S: note },
      createdAt: { S: createdAt }
    }
  };

  try {
    await dynamoClient.send(new PutItemCommand(input));
  } catch(err) {
    console.log(err);
  }
  
  const newNote = {
    id: id,
    note: note,
    createdAt: createdAt
  }

  let endDate = new Date();

  let executionTimeInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;

  console.log("Execution time:", executionTimeInSeconds);

  return {
    statusCode: 200,
    body: JSON.stringify({
      "note": JSON.stringify(newNote) 
    }),
  };
};

module.exports = {
  handler: addNote
}