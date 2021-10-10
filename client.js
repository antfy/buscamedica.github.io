import io from 'socket.io-client';
const predictContainer = document.getElementById('predictContainer');
const predictButton = document.getElementById('predict-button');

const socket =
    io('http://localhost:8001',
        { reconnectionDelay: 300, reconnectionDelayMax: 300 });

// const testSample = [2.668, -114.333, -1.908, 4.786, 25.707, -45.21, 78, 0]; // Curveball
const testVal = tf.tensor2d([Number(document.getElementById("input1").value),
Number(document.getElementById("input2").value),
Number(document.getElementById("input3").value),
Number(document.getElementById("input4").value),
Number(document.getElementById("input5").value),
Number(document.getElementById("input6").value),
Number(document.getElementById("input7").value),
Number(document.getElementById("input8").value),
Number(document.getElementById("input9").value),
Number(document.getElementById("input10").value),
Number(document.getElementById("input11").value),
Number(document.getElementById("input12").value),
Number(document.getElementById("input13").value),
Number(document.getElementById("input14").value),
Number(document.getElementById("input15").value),
Number(document.getElementById("input16").value),
Number(document.getElementById("input17").value),
Number(document.getElementById("input18").value),
Number(document.getElementById("input19").value),
Number(document.getElementById("input20").value),
Number(document.getElementById("input21").value),
Number(document.getElementById("input22").value),
Number(document.getElementById("input23").value),
Number(document.getElementById("input24").value),
Number(document.getElementById("input25").value),
Number(document.getElementById("input26").value),
Number(document.getElementById("input27").value),
Number(document.getElementById("input28").value),
Number(document.getElementById("input29").value),
Number(document.getElementById("input30").value),
Number(document.getElementById("input31").value),
Number(document.getElementById("input32").value),
Number(document.getElementById("input33").value),
Number(document.getElementById("input34").value),
Number(document.getElementById("input35").value),
Number(document.getElementById("input36").value),
Number(document.getElementById("input37").value),
Number(document.getElementById("input38").value),
Number(document.getElementById("input39").value),
Number(document.getElementById("input40").value),
Number(document.getElementById("input41").value),
Number(document.getElementById("input42").value),
Number(document.getElementById("input43").value),
Number(document.getElementById("input44").value),
Number(document.getElementById("input45").value),
Number(document.getElementById("input46").value),
Number(document.getElementById("input47").value),
Number(document.getElementById("input48").value),
Number(document.getElementById("input49").value),
Number(document.getElementById("input50").value),
Number(document.getElementById("input51").value),
Number(document.getElementById("input52").value),
Number(document.getElementById("input53").value),
Number(document.getElementById("input54").value),
Number(document.getElementById("input55").value),
Number(document.getElementById("input56").value),
Number(document.getElementById("input57").value),
Number(document.getElementById("input58").value),
Number(document.getElementById("input59").value),
Number(document.getElementById("input60").value),
Number(document.getElementById("input61").value),
Number(document.getElementById("input62").value),
Number(document.getElementById("input63").value),
Number(document.getElementById("input64").value),
Number(document.getElementById("input65").value),
Number(document.getElementById("input66").value),
Number(document.getElementById("input67").value),
Number(document.getElementById("input68").value),
Number(document.getElementById("input69").value),
Number(document.getElementById("input70").value),
Number(document.getElementById("input71").value),
Number(document.getElementById("input72").value),
Number(document.getElementById("input73").value),
Number(document.getElementById("input74").value),
Number(document.getElementById("input75").value),
Number(document.getElementById("input76").value),
Number(document.getElementById("input77").value),
Number(document.getElementById("input78").value),
Number(document.getElementById("input79").value),
Number(document.getElementById("input80").value),
Number(document.getElementById("input81").value),
Number(document.getElementById("input82").value),
Number(document.getElementById("input83").value),
Number(document.getElementById("input84").value),
Number(document.getElementById("input85").value),
Number(document.getElementById("input86").value),
Number(document.getElementById("input87").value),
Number(document.getElementById("input88").value),
Number(document.getElementById("input89").value),
Number(document.getElementById("input90").value),
Number(document.getElementById("input91").value),
Number(document.getElementById("input92").value),
Number(document.getElementById("input93").value),
Number(document.getElementById("input94").value),
Number(document.getElementById("input95").value),
Number(document.getElementById("input96").value),
Number(document.getElementById("input97").value),
Number(document.getElementById("input98").value),
Number(document.getElementById("input99").value),
Number(document.getElementById("input100").value),
Number(document.getElementById("input101").value),
Number(document.getElementById("input102").value),
Number(document.getElementById("input103").value),
Number(document.getElementById("input104").value),
Number(document.getElementById("input105").value),
Number(document.getElementById("input106").value),
Number(document.getElementById("input107").value),
Number(document.getElementById("input108").value),
Number(document.getElementById("input109").value),
Number(document.getElementById("input110").value),
Number(document.getElementById("input111").value),
Number(document.getElementById("input112").value),
Number(document.getElementById("input113").value),
Number(document.getElementById("input114").value),
Number(document.getElementById("input115").value),
Number(document.getElementById("input116").value),
Number(document.getElementById("input117").value),
Number(document.getElementById("input118").value),
Number(document.getElementById("input119").value),
Number(document.getElementById("input120").value),
Number(document.getElementById("input121").value),
Number(document.getElementById("input122").value),
Number(document.getElementById("input123").value),
Number(document.getElementById("input124").value),
Number(document.getElementById("input125").value),
Number(document.getElementById("input126").value),
Number(document.getElementById("input127").value),
Number(document.getElementById("input128").value),
Number(document.getElementById("input129").value),
Number(document.getElementById("input130").value),
Number(document.getElementById("input131").value),
Number(document.getElementById("input132").value),
Number(document.getElementById("input133").value),
Number(document.getElementById("input134").value),
Number(document.getElementById("input135").value),
Number(document.getElementById("input136").value),
Number(document.getElementById("input137").value),
Number(document.getElementById("input138").value),
Number(document.getElementById("input139").value),
Number(document.getElementById("input140").value),
Number(document.getElementById("input141").value),
Number(document.getElementById("input142").value),
Number(document.getElementById("input143").value),
Number(document.getElementById("input144").value),
Number(document.getElementById("input145").value),
Number(document.getElementById("input146").value),
Number(document.getElementById("input147").value),
Number(document.getElementById("input148").value),
Number(document.getElementById("input149").value),
Number(document.getElementById("input150").value),
Number(document.getElementById("input151").value),
Number(document.getElementById("input152").value),
Number(document.getElementById("input153").value),
Number(document.getElementById("input154").value),
Number(document.getElementById("input155").value),
Number(document.getElementById("input156").value),
Number(document.getElementById("input157").value),
Number(document.getElementById("input158").value),
Number(document.getElementById("input159").value),
Number(document.getElementById("input160").value),
Number(document.getElementById("input161").value),
Number(document.getElementById("input162").value),
Number(document.getElementById("input163").value),
Number(document.getElementById("input164").value),
Number(document.getElementById("input165").value),
Number(document.getElementById("input166").value),
Number(document.getElementById("input167").value),
Number(document.getElementById("input168").value),
Number(document.getElementById("input169").value),
Number(document.getElementById("input170").value),
Number(document.getElementById("input171").value),
Number(document.getElementById("input172").value),
Number(document.getElementById("input173").value),
Number(document.getElementById("input174").value),
Number(document.getElementById("input175").value),
Number(document.getElementById("input176").value),
Number(document.getElementById("input177").value),
Number(document.getElementById("input178").value),
Number(document.getElementById("input179").value),
Number(document.getElementById("input180").value),
Number(document.getElementById("input181").value),
Number(document.getElementById("input182").value),
Number(document.getElementById("input183").value),
Number(document.getElementById("input184").value),
Number(document.getElementById("input185").value),
Number(document.getElementById("input186").value),
Number(document.getElementById("input187").value),
Number(document.getElementById("input188").value),
Number(document.getElementById("input189").value),
Number(document.getElementById("input190").value),
Number(document.getElementById("input191").value),
Number(document.getElementById("input192").value),
Number(document.getElementById("input193").value),
Number(document.getElementById("input194").value),
Number(document.getElementById("input195").value),
Number(document.getElementById("input196").value),
Number(document.getElementById("input197").value),
Number(document.getElementById("input198").value),
Number(document.getElementById("input199").value),
Number(document.getElementById("input200").value),
Number(document.getElementById("input201").value),
Number(document.getElementById("input202").value),
Number(document.getElementById("input203").value),
Number(document.getElementById("input204").value),
Number(document.getElementById("input205").value),
Number(document.getElementById("input206").value),
Number(document.getElementById("input207").value),
Number(document.getElementById("input208").value),
Number(document.getElementById("input209").value),
Number(document.getElementById("input210").value),
Number(document.getElementById("input211").value),
Number(document.getElementById("input212").value),
Number(document.getElementById("input213").value),
Number(document.getElementById("input214").value),
Number(document.getElementById("input215").value),
Number(document.getElementById("input216").value),
Number(document.getElementById("input217").value),
Number(document.getElementById("input218").value),
Number(document.getElementById("input219").value),
Number(document.getElementById("input220").value),
Number(document.getElementById("input221").value),
Number(document.getElementById("input222").value),
Number(document.getElementById("input223").value),
Number(document.getElementById("input224").value),
Number(document.getElementById("input225").value),
Number(document.getElementById("input226").value),
Number(document.getElementById("input227").value),
Number(document.getElementById("input228").value),
Number(document.getElementById("input229").value),
Number(document.getElementById("input230").value),
Number(document.getElementById("input231").value),
Number(document.getElementById("input232").value),
Number(document.getElementById("input233").value),
Number(document.getElementById("input234").value),
Number(document.getElementById("input235").value),
Number(document.getElementById("input236").value),
Number(document.getElementById("input237").value),
Number(document.getElementById("input238").value),
Number(document.getElementById("input239").value),
Number(document.getElementById("input240").value),
Number(document.getElementById("input241").value),
Number(document.getElementById("input242").value),
Number(document.getElementById("input243").value),
Number(document.getElementById("input244").value),
Number(document.getElementById("input245").value),
Number(document.getElementById("input246").value),
Number(document.getElementById("input247").value),
Number(document.getElementById("input248").value),
Number(document.getElementById("input249").value),
Number(document.getElementById("input250").value),
Number(document.getElementById("input251").value),
Number(document.getElementById("input252").value),
Number(document.getElementById("input253").value),
Number(document.getElementById("input254").value),
Number(document.getElementById("input255").value),
Number(document.getElementById("input256").value),
Number(document.getElementById("input257").value),
Number(document.getElementById("input258").value),
Number(document.getElementById("input259").value),
Number(document.getElementById("input260").value),
Number(document.getElementById("input261").value),
Number(document.getElementById("input262").value),
Number(document.getElementById("input263").value),
Number(document.getElementById("input264").value),
Number(document.getElementById("input265").value),
Number(document.getElementById("input266").value),
Number(document.getElementById("input267").value),
Number(document.getElementById("input268").value),
Number(document.getElementById("input269").value),
Number(document.getElementById("input270").value),
Number(document.getElementById("input271").value),
Number(document.getElementById("input272").value),
Number(document.getElementById("input273").value),
Number(document.getElementById("input274").value),
Number(document.getElementById("input275").value),
Number(document.getElementById("input276").value),
Number(document.getElementById("input277").value),
Number(document.getElementById("input278").value),
Number(document.getElementById("input279").value),
Number(document.getElementById("input280").value),
Number(document.getElementById("input281").value),
Number(document.getElementById("input282").value),
Number(document.getElementById("input283").value),
Number(document.getElementById("input284").value),
Number(document.getElementById("input285").value),
Number(document.getElementById("input286").value),
Number(document.getElementById("input287").value),
Number(document.getElementById("input288").value),
Number(document.getElementById("input289").value),
Number(document.getElementById("input290").value),
Number(document.getElementById("input291").value),
Number(document.getElementById("input292").value),
Number(document.getElementById("input293").value),
Number(document.getElementById("input294").value),
Number(document.getElementById("input295").value),
Number(document.getElementById("input296").value),
Number(document.getElementById("input297").value),
Number(document.getElementById("input298").value),
Number(document.getElementById("input299").value),
Number(document.getElementById("input300").value),
Number(document.getElementById("input301").value),
Number(document.getElementById("input302").value),
Number(document.getElementById("input303").value),
Number(document.getElementById("input304").value),
Number(document.getElementById("input305").value),
Number(document.getElementById("input306").value),
Number(document.getElementById("input307").value),
Number(document.getElementById("input308").value),
Number(document.getElementById("input309").value),
Number(document.getElementById("input310").value),
Number(document.getElementById("input311").value),
Number(document.getElementById("input312").value),
Number(document.getElementById("input313").value),
Number(document.getElementById("input314").value),
Number(document.getElementById("input315").value),
Number(document.getElementById("input316").value),
Number(document.getElementById("input317").value),
Number(document.getElementById("input318").value),
Number(document.getElementById("input319").value),
Number(document.getElementById("input320").value),
Number(document.getElementById("input321").value),
Number(document.getElementById("input322").value),
Number(document.getElementById("input323").value),
Number(document.getElementById("input324").value),
Number(document.getElementById("input325").value),
Number(document.getElementById("input326").value),
Number(document.getElementById("input327").value),
Number(document.getElementById("input328").value),
Number(document.getElementById("input329").value),
Number(document.getElementById("input330").value),
Number(document.getElementById("input331").value),
Number(document.getElementById("input332").value),
Number(document.getElementById("input333").value),
Number(document.getElementById("input334").value),
Number(document.getElementById("input335").value),
Number(document.getElementById("input336").value),
Number(document.getElementById("input337").value),
Number(document.getElementById("input338").value),
Number(document.getElementById("input339").value),
Number(document.getElementById("input340").value),
Number(document.getElementById("input341").value),
Number(document.getElementById("input342").value),
Number(document.getElementById("input343").value),
Number(document.getElementById("input344").value),
Number(document.getElementById("input345").value),
Number(document.getElementById("input346").value),
Number(document.getElementById("input347").value),
Number(document.getElementById("input348").value),
Number(document.getElementById("input349").value),
Number(document.getElementById("input350").value),
Number(document.getElementById("input351").value),
Number(document.getElementById("input352").value),
Number(document.getElementById("input353").value),
Number(document.getElementById("input354").value),
Number(document.getElementById("input355").value),
Number(document.getElementById("input356").value),
Number(document.getElementById("input357").value),
Number(document.getElementById("input358").value),
Number(document.getElementById("input359").value),
Number(document.getElementById("input360").value),
Number(document.getElementById("input361").value),
Number(document.getElementById("input362").value),
Number(document.getElementById("input363").value),
Number(document.getElementById("input364").value),
Number(document.getElementById("input365").value),
Number(document.getElementById("input366").value),
Number(document.getElementById("input367").value),
Number(document.getElementById("input368").value),
Number(document.getElementById("input369").value),
Number(document.getElementById("input370").value),
Number(document.getElementById("input371").value),
Number(document.getElementById("input372").value),
Number(document.getElementById("input373").value), Number(document.getElementById("input374").value)], [1, 374]);

predictButton.onclick = () => {
    predictButton.disabled = true;
    socket.emit('predictSample', testVal);
};

// functions to handle socket events
socket.on('connect', () => {
    document.getElementById('waiting-msg').style.display = 'none';
    document.getElementById('trainingStatus').innerHTML = 'Training in Progress';
});

socket.on('trainingComplete', () => {
    document.getElementById('trainingStatus').innerHTML = 'Training Complete';
    predictContainer.style.display = 'block';
});

socket.on('predictResult', (result) => {
    plotPredictResult(result);
});

socket.on('disconnect', () => {
    document.getElementById('trainingStatus').innerHTML = '';
    predictContainer.style.display = 'none';
    document.getElementById('waiting-msg').style.display = 'block';
});

function plotPredictResult(result) {
    console.log(result);
}