const { get } = require("jquery");
const Http = new XMLHttpRequest();
const url = '';
Http.responseType = 'json';

function getData() {

    const files = document.querySelector('[name = file]').files;
    const formData = new FormData();
    formData.append("images\0000_20210104_202338_0337_0058.jpg", files[0]);
    Http.open('POST', url, true);
    var data = Http.send(formData);
    console.log(data); //sending request
}



    
document.getElementById("load").onclick = function(e) { 
    window.location = "predict.html";
    getData();
    // getData()
    
    
    
} 


async function loadModel() {
    model = undefined;
    model = await tf.loadLayersModel();
}

