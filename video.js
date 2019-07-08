const fs = require('fs');
const youtubedl = require('youtube-dl');
const directory = './video';

function download(url) {
    let video = youtubedl(url,['--format=18'],{cwd: directory});

    video.on('info', function (info) {
        console.log('Download started');
        console.log('filename: ' + info._filename);
        console.log('size: ' + info.size);
    });

    video.pipe(fs.createWriteStream('myvideo.mp4'));
}

function getInfo(url) {
    youtubedl.getInfo(url, function(err, info) {
        if (err) throw err;

        console.log('id:', info.id);
        console.log('title:', info.title);
        console.log('url:', info.url);
        console.log('thumbnail:', info.thumbnail);
        console.log('description:', info.description);
        console.log('filename:', info._filename);
        console.log('format id:', info.format_id);
    });
}

function getThumbnail(url) {
    var options = {
        all: false,
        cwd: directory,
    };

    youtubedl.getThumbs(url, options, function(err, files) {
        if (err) throw err;
        console.log('thumbnail file downloaded:', files);
    });
};

module.exports = {
    download,
    getInfo,
    getThumbnail
};