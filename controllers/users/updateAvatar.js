const path = require("path");

const fs = require("fs/promises");
const { updateAvatarByid } = require("../../services/users");
const avatarDir = path.join(__dirname, "../../", "public", "avatars");
const { resizeImg } = require("../../helpers");

const updateAvatar = async (req, res) => {
  const { path: tmpUpload, originalname } = req.file;
  const { _id: id } = req.user;
  console.log(tmpUpload);

  try {
    const newName = `${id}_${originalname}`;
    const image = await resizeImg(tmpUpload);
    console.log(image);
    const resultUpload = path.join(avatarDir, newName);
    await fs.rename(tmpUpload, resultUpload);
    const avatarURL = path.join("avatars", newName);
    await updateAvatarByid(id, avatarURL);
    res.status(200).json({
      message: "Success",
      code: 200,
      data: {
        avatarURL,
      },
    });
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
};

module.exports = updateAvatar;
