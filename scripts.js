// const { get } = require("jquery");
// const Http = new XMLHttpRequest();
// const url = 'http://127.0.0.1:5000/';
// Http.responseType = 'json';

window.$ = window.jQuery = require("jquery");


// document.getElementById("login-btn").onclick = function (e) {
//   console.log("next image");
//   var elo = 'hello guys';
//   var req = jQuery.ajax({
//     url: 'http://127.0.0.1:5000/login',
//     //url: "https://www.google.com.pk/",
//     method: "POST",
//     data: {
//      "username": "hello",
//     "password": "lol"
//     },
//     dataType:'json'
//     // complete: function (data) {
//     //   console.log(data.responseText);
//     // },
  
//     // data: formData, // sends fields with filename mimetype etc
//     // processData: false, // don't let jquery process the data
//     // contentType: false // let xhr set the content type
//   });
//   };

  function login(){
    var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;
    var data2 = {'username': username , 'password':password}
    console.log(username)
    $.ajax(
    {
      url: 'http://127.0.0.1:5000/login',
      data : JSON.stringify(data2),
      contentType: 'application/json; charset=utf-8',
      method: "POST",
      dataType: "json",
			complete: function(response){
				console.log(response);
        var let = response.responseText;
        console.log(let)
        window.location =  "./predict.html";
			},
      error: function (e) {
          alert('Something Went Wrong!!');
      },
      })
    }
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
// const data =  require("./test_data.json"); string to json  json.load


const img_to_64 = require('image-to-base64');

document.getElementById("next").onclick = function (e) {
  console.log("next image");
  var req = jQuery.ajax({
    url: 'http://127.0.0.1:5000/',
    method: "GET",
    complete: function (data) {
      // console.log(data.responseText);
      var i, j;

      var data1 = JSON.parse(data.responseText);
      var img_src = data1.image;
      console.log(img_src);
      console.log(data1);
      const key = Object.keys(data1.data);
      console.log(data1.data);
      var source = "data:image/jpg;base64,"+img_src;
      document.getElementById("getImage").src = source;
      
        for (j = 1; j <= 10; j++) {
          
        for (i = 1; i < 5; i++) {
          document.querySelector(`#c${j} #r${i}`).innerHTML = data1.data[key[j-1]][i-1];
        }
      }
      

    },


 
  });
};



// async function loadModel() {
//     model = undefined;s
//     model = await tf.loadLayersModel();
// }

