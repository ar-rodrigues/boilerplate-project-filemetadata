var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

var app = express();

// Necessary for the POST
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))


app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req,res)=>{

  console.log(req.file)

  let {
    originalname: name, 
    mimetype: type, 
    size} = req.file


  res.json({name, type, size})
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
