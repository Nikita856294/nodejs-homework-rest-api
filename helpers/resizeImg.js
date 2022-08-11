const Jimp = require("jimp");

const resizeImg = async (tmpUpload) => {
  const image = await Jimp.read(tmpUpload);
  await image.resize(250, 250);
  await image.write(tmpUpload);
  return image;
};
module.exports = resizeImg;
