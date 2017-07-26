// // Imports the Google Cloud client libraries
// const Vision = require('@google-cloud/vision');
// export GOOGLE_APPLICATION_CREDENTIALS='keys/image-intel-85172500a519.json'

// const projectId = '580422432670';
// // Instantiates clients
// const visionClient = Vision({
//   projectId: projectId
// });
// The name of the bucket where the file resides, e.g. "my-bucket"
// const bucketName = 'my-bucket';

// The path to the file within the bucket, e.g. "path/to/image.png"
// const fileName = 'path/to/image.png';
// const key = 'AIzaSyBg0sn-Lr1vc0MYv8m6YE935x1BT62YfFc';


// ** MAKE SURE TO LOGIN WITH DEFAULT
// gcloud auth application-default login

const Vision = require('@google-cloud/vision');
var visionClient = Vision({
  keyFilename: 'keys/image-intel-85172500a519.json',
  projectId: '580422432670'
});

const vision = Vision();

// const types = [
//   'safeSearch'
// ]

const imgUrl = process.argv[2];

const annotateReq = {
  "image": {
    "source": {
      "imageUri": imgUrl
    }
  },
  "features": [
    {
      "type": "SAFE_SEARCH_DETECTION"
    }
  ],
}



// vision.detect(imgUrl, types, function(err, detections, apiResponse) {
//   console.log(apiResponse.responses[0].safeSearchAnnotation);
//   console.log(detections);
// })

vision.annotate(annotateReq, function(err, annotations, apiResponse) {
  console.log('annotations', annotations[0].safeSearchAnnotation)
})

// vision.detectSafeSearch(imgUrl)
//   .then((results) => {
//     console.log('url', imgUrl);
//     const detections = results[0];

//     console.log(`Adult: ${detections.adult}`);
//     console.log(`Spoof: ${detections.spoof}`);
//     console.log(`Medical: ${detections.medical}`);
//     console.log(`Violence: ${detections.violence}`);
//   })
//   .catch((err) => {
//     console.error('ERROR:', err);
//   });