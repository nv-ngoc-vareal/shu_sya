const ReadPsdService = require('../services/readPsd.service')
const EmptyFolderService = require('../services/emptyFolder.service')

exports.read = async (req, res) => {
  const { fileName } = req.query;
  await new EmptyFolderService({ dir: 'public/images' }).empty();
  const service = new ReadPsdService({ fileName });
  const filesPath = await service.readFile();
  res.json({ filesPath });
};
