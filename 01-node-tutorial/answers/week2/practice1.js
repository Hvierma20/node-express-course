
const os = require('os');
const { writeFile } = require('fs');
const sentence = require('./practice2.js');
const { result } = require('lodash');

writeFile(
    '../content/practice.txt',
    `${sentence}, ${os.userInfo().username}`,
    (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log('First task completed')
    }
);

console.log(sentence);
