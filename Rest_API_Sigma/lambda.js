exports.handler = function (event, context, callback) {
    let response = {
        "isBase64Encoded": true,
        "statusCode": 200,
        "body": "Hello from sigma"
    }
    callback(null, response);
    // callback(null, { "message": "Successfully executed" });
}