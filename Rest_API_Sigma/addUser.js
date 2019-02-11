let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    let userId = event.body.userId;
    let userName = event.body.userName;
    ddb.put({
        TableName: 'users-dbtable-serverless-dev',
        Item: { 'userId': userId, 'name': userName }
    }).promise().then(function (data) {
        //your logic goes here
        let response = {
            statusCode: 200,
            body: JSON.stringify(result.Item)
        }
        callback(null, response);
    }).catch(function (err) {
        //handle error
        callback(new Error('Couldn\'t add user.'))
    });

    callback(null, { "message": "Successfully executed" });
}