const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const os = require('os');
const ImageRepo = require('./ImageRepo');

const app = express();

app.use(cors());
app.use(morgan('combined'))

const upload = multer({dest: os.tmpdir()})

const imageRepo = new ImageRepo();

app.post('/images', upload.single('file'), (req, res) => {
  imageRepo.add(req.file.path);
  res.download(req.file.path);
});

app.get('/images/:id', (req, res) => {
  res.download(imageRepo.get(req.params.id));
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});


