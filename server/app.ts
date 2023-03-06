import express from 'express';

const app = express()

const PORT = process.env.PORT || 3000;

//build 폴더는 마음대로 꺼내가도 된다
app.use(express.static('build'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(3000,()=>{
    console.log('server is running!')
});

