const PSD = require("psd");

class ReadPsdService {
  constructor(data) {
    this.fileName = data.fileName;
  }

  readFile = async () => {
    const self = this;
    const filesPath = [];
    await PSD.open(`files/${this.fileName}`).then(function (psd) {
      const nodes = psd.tree().descendants();
      nodes.forEach((node) => {
        const path = self._searchForImage(node);
        if (path) filesPath.push(path);
      });
    });
    return filesPath;
  };

  _searchForImage = (node) => {
    const self = this;
    if (node && node.hasChildren()) {
      self._searchForImage(node.childeren);
    } else if (node) {
      node.layer.image.saveAsPng(`public/images/${node.layer.name}.png`);
      return `images/${node.layer.name}.png`;
    }
  };
}

module.exports = ReadPsdService;
