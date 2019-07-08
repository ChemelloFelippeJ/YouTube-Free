const video = require('./video.js');

const url = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';

function start(){
    // video.getInfo(url);
    // video.download(url);
    video.getThumbnail(url);
}

start();



//https://www.npmjs.com/package/youtube-dl