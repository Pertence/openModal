const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const rimraf = require('rimraf');
const execSync = require('child_process').execSync;
const fs = require('fs');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/pts', (req, res) => {
    fs.readdirSync('../results').forEach((file) => {
        fs.unlinkSync(`../results/${file}`);
    })

    console.log('Removed previous results successfully!');

    const { cluster, seed, iteractions } = req.body.variables

    let pythonProcess = execSync(`python3 ../algorithms/${req.body.algorithm}.py ${req.body.data} ${cluster} ${seed} ${iteractions}`)
    
    fs.writeFileSync('../client/public/results/done.txt', 'Done');

    let fileList = fs.readdirSync('../client/public/results');

    console.log('Executed Algorithm');

    res.send({ status: 'SUCCESS', files: fileList });
})


app.post('/signature', (req, res) => {
    fs.readdirSync('../results').forEach((file) => {
        fs.unlinkSync(`../results/${file}`);
    })

    console.log('Removed previous results successfully!');

    const { cluster, unitArea, timeVariation, startLat, startLon, endLat, endLon } = req.body.variables

    let pythonProcess = execSync(`python3 ../algorithms/${req.body.algorithm}.py  ${req.body.data} ${cluster} ${unitArea} ${timeVariation} ${startLat} ${startLon} ${endLat} ${endLon}`)

    fs.writeFileSync('../client/public/results/done.txt', 'Done');
    
    let fileList = fs.readdirSync('../client/public/results');

    console.log('Executed Algorithm');

    res.send({ status: 'SUCCESS', files: fileList });
})


app.post('/uber', (req, res) => {
    fs.readdirSync('../results').forEach((file) => {
        fs.unlinkSync(`../results/${file}`);
    })

    console.log('Removed previous results successfully!');

    let pythonProcess = execSync(`python3 ../algorithms/${req.body.algorithm}.py  ${req.body.data}`)

    fs.writeFileSync('../client/public/results/done.txt', 'Done');
    
    let fileList = fs.readdirSync('../client/public/results');

    console.log('Executed Algorithm');

    res.send({ status: 'SUCCESS', files: fileList });
})

app.post('/upload',  (req, res) => {

    console.log('Uploading!');

})

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
