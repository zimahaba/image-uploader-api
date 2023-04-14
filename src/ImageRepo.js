const crypto = require('crypto');

class ImageRepo {

  constructor() {
    this.repo = [];
  }

  add(filePath) {
    const id = crypto.randomBytes(4).toString('hex');
    this.repo.push({id: id.toString(), path: filePath});
    return id;
  }

  get(id) {
    const found = this.repo.filter(image => image.id === id.toString());
    if (found.length > 0) {
      return found[0].path;
    }
    return;
  }
}

module.exports = ImageRepo;