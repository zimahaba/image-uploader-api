const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const multer = require('multer');
const os = require('os');

const app = express();

app.use(cors());
app.use(morgan('combined'))

const upload = multer({dest: os.tmpdir()})

app.post('/upload', upload.single('file'), (req, res) => {
  const title = req.body.title;
  const file = req.file;

  console.log(title);
  console.log(file);
  res.download(file.path);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});


