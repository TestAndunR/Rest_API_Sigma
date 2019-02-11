let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    let userId = event.queryStringParameters.userId;
    ddb.get({
        TableName: 'users-dbtable-serverless-dev',
        Key: { 'userId': userId }
    }).promise().then(function (data) {
        //your logic goes here
        let response = {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        }
        callback(null, response)
        return
    }).catch(function (err) {
        //handle error
        callback(new Error("Coudn't get user"), null)
        return
    });

    callback(null, { "message": "Successfully executed" });
}