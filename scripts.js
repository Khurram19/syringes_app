// const { get } = require("jquery");
// const Http = new XMLHttpRequest();
// const url = 'http://127.0.0.1:5000/';
// Http.responseType = 'json';

// function getData() {

//     const files = document.querySelector('[name = file]').files;
//     const formData = new FormData();
//     formData.append("images\0000_20210104_202338_0337_0058.jpg", files[0]);
//     Http.open('POST', url, true);
//     var data = Http.send(formData);
//     console.log(data); //sending request
//     // data ={"1":["Present","90.0","Excess Bond","Needle Blunt"],"2":["Present","75.92","Excess Bond","Needle Blunt"],"3":["Present","88.99","Not Excess Bond","Needle Blunt"],"4":["Present","0.0","Not Excess Bond","Needle Blunt"],"5":["Present","87.99","Not Excess Bond","Needle Blunt"],"6":["Present","88.99","Excess Bond","Needle Blunt"],"7":["Present","85.98","Excess Bond","Needle Blunt"],"8":["Present","88.99","Excess Bond","Needle Blunt"],"9":["Present","69.89","Excess Bond","Needle Blunt"],"10":["Present","90.0","Excess Bond","Needle Blunt"]}
// }




// document.getElementById("load").onclick = function (e) {
//     // getData();
//     const files = document.querySelector('[name = file]').files;
//     const formData = new FormData();
//     formData.append("images\0000_20210104_202338_0337_0058.jpg", files[0]);
//     Http.open('POST', url, true);
//     var data = Http.send(formData);
//     console.log(data); //sending request
//     console.log("function called");
//     window.location = "predict.html";

//     // getData()



// }


// $("#load").click(function () {
//     const files = document.querySelector('[name = file]').files;
//     const formData = new FormData();
//     formData.append("images\0000_20210104_202338_0337_0058.jpg", files[0]);
//     Http.open('POST', url, true);
//     var data = Http.send(formData);
//     console.log(data); //sending request
//     console.log("function called");
//     window.location = "predict.html";
// });


async function loadModel() {
    model = undefined;
    model = await tf.loadLayersModel();
}

