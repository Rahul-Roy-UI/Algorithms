function sendNotification() {
    console.log('Your profile is shorlisted for interview');
}

function applyForJob(callback) {
    console.log('Your resume has uploaded');
    console.log('Your request is in progress');
    callback();
}

applyForJob(sendNotification);

console.log('Some other stuff is in progress');