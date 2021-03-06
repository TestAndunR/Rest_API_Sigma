let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    let userId = event.body.userId;
    let userName = event.body.name;
    ddb.put({
        TableName: 'users-dbtable-serverless-dev',
        Item: { 'userId': userId, 'name': userName }
    }).promise().then(function (data) {
        //your logic goes here
        let response = {
            statusCode: 200,
            body: "User added successfully"
        }
        callback(null, response)
        return
    }).catch(function (err) {
        //handle error
        callback(new Error('Couldn\'t add user.'))
        return
    });

    // callback(null, { "message": "Successfully executed" });
}