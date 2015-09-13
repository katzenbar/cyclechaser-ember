/*globals require, module, process */

require('dotenv').load();

module.exports = {
  "production": {
    "assets": {
      "accessKeyId": process.env.AWS_ACCESS_KEY_ID,
      "secretAccessKey": process.env.AWS_SECRET_ACCESS_KEY,
      "bucket": process.env.S3_BUCKET_NAME,
      "prefix": process.env.S3_BUCKET_PREFIX,
      "distPrefix": process.env.S3_BUCKET_DIST_PREFIX
    },
    "index": {
      "app": process.env.INDEX_APP_NAME,
      "endpoints": [
        process.env.INDEX_ENDPOINT
      ]
    }
  }
};
