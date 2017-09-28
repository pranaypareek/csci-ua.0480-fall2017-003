const fs = require('fs');
function RedactedFile(fileName, wordToRedact) {
    this.fileName = fileName;
    this.word = wordToRedact;
}

RedactedFile.prototype.print = function() {
    fs.readFile(this.fileName, 'utf8', this.handleRead); 
};

RedactedFile.prototype.handleRead = function(err, data) {
    console.log(this.word);
    const searchPattern = new RegExp(this.word, 'g');
    data = data.replace(searchPattern, 'SECRET');
    console.log(data);
};

const redactedFile = new RedactedFile('/tmp/sensitiveData.txt', 'pizza');
redactedFile.print();
