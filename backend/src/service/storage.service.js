// const imagekit = require("imagekit"); // here these cloud storage providers are used


var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.PUBLIC_KEY,
    privateKey : process.env.PRIVATE_KEY,
    urlEndpoint : "https://ik.imagekit.io/7sonnifpgz"
});

function uploadFile(file) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file.buffer,
            fileName: "hi"
        }, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = uploadFile;
