const fs = require("fs");
const path = require("path");

class EmptyFolderService {
  constructor(data) {
    this.dir = data.dir;
  }

  empty = () => {
    fs.readdir(this.dir, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(this.dir, file), (err) => {
          if (err) throw err;
        });
      }
    });
  };
}

module.exports = EmptyFolderService;
