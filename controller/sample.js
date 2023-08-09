const { PutObjectCommand, CreateBucketCommand } = require("@aws-sdk/client-s3");
const { s3Client } = require("../libs/s3Client.js");

// Set the parameters
const params = {
  Bucket: "sample-bucket-222201111fdsfsdfsdffrgg", // The name of the bucket. For example, 'sample-bucket-101'.
  Key: "sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
  Body: "Hello world!", // The content of the object. For example, 'Hello world!".
};

module.exports.run = async () => {
  // Create an Amazon S3 bucket.
  try {
    const data = await s3Client.send(
      new CreateBucketCommand({ Bucket: params.Bucket })
    );
    console.log("Successfully created a bucket called ", data.Location);
    // return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    console.log("upload object start");
    const results = await s3Client.send(new PutObjectCommand(params));
    console.log(
      "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    );
    return results; // For unit tests.
  } catch (err) {
    console.log("upload object start");
    console.log("Error", err);
  }
};
