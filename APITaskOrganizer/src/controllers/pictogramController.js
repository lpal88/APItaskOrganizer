const fs = require('fs-extra')
const path = require('path')

const getOnePictogram = async (req, res, next) => {
  const pictogram = req.params.pictogram
  const pathPictogram = path.resolve(__dirname, `../database/images/${pictogram}`)
  if (await fs.existsSync(pathPictogram)) {
    res.sendFile(pathPictogram)
  } else {
    const pathNoPictogram = path.resolve(__dirname, '../database/images/not-found.png')
    res.sendFile(pathNoPictogram)
  }
}

module.exports.getOnePictogram = getOnePictogram
