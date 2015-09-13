/*globals require, module, process */

require('dotenv').load();

console.log('Production deploy environment');
console.log('access key = <hidden>');
console.log('secret key = <hidden>');
console.log('bucket     = ' + process.env.S3_BUCKET_NAME);
console.log('prefix     = ' + process.env.S3_BUCKET_PREFIX);
console.log('app name   = ' + process.env.INDEX_APP_NAME);
console.log('endpoint   = ' + process.env.INDEX_ENDPOINT);

module.exports = {
  "production": {
    "assets": {
      "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
      "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
      "bucket": process.env.S3_BUCKET_NAME,
      "prefix": process.env.S3_BUCKET_PREFIX,
      "distPrefix": "dist-{{SHA}}"
    },
    "index": {
      "app": process.env.INDEX_APP_NAME,
      "endpoints": [
        process.env.INDEX_ENDPOINT
      ]
    }
  }
};
