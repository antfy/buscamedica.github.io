require('@tensorflow/tfjs-node');

// "BACKEND STUFF"
const http = require('http');
const socketio = require('socket.io');
// connect with doctor_type.js
const doctor_type = require('./doctor_type');
const TIMEOUT_BETWEEN_EPOCHS_MS = 500;
const PORT = 8001;
// util function to sleep for a given ms
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to start server, perform model training, and emit stats via the socket connection
async function run() {
    // "BACKEND STUFF"
    const port = process.env.PORT || PORT;
    const server = http.createServer();
    const io = socketio(server);

    server.listen(port, () => {
        console.log(`  > Running socket on port: ${port}`);
    });

    // "PREDICTION STUFF"
    io.on('connection', (socket) => {
        socket.on('predictSample', async (sample) => {
            io.emit('predictResult', await doctor_type.predictSample(sample));
        });
    });

    let numTrainingIterations = 10;
    for (var i = 0; i < numTrainingIterations; i++) {
        console.log(`Training iteration : ${i + 1} / ${numTrainingIterations}`);
        await doctor_type.model.fitDataset(doctor_type.trainingData, { epochs: 1 });
        console.log('accuracyPerClass', await doctor_type.evaluate(true));
        await sleep(TIMEOUT_BETWEEN_EPOCHS_MS);
    }

    io.emit('trainingComplete', true);
}

// run();
let runButton = document.getElementById("buscar");
runButton.addEventListener("click", run);