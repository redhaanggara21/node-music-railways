test('creates a bucket and returns the bucket location', () => {
    let awsSdkS3 = new AWS.S3({region: 'us-west-2'});
    awsSdkS3.createBucket = jest.fn((params, cb) => {
        cb(null, {Location: `s3://datalake/${params.Bucket}`});
    });

    let s3HelperObj = new s3Helper(undefined, awsSdkS3);
    return s3HelperObj.createBucket({name: 'bucket-name'}).then((data) => {
        expect(data).toMatch('bucket-name');
    });
});