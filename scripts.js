// const { get } = require("jquery");
// const Http = new XMLHttpRequest();
// const url = 'http://127.0.0.1:5000/';
// Http.responseType = 'json';

window.$ = window.jQuery = require("jquery");
const img_to_64 = require('image-to-base64');
const test = require("./test_data.json");


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
    console.log(password)
    $.ajax(
    {
      url: 'http://127.0.0.1:5000/login',
      data : JSON.stringify(data2),
      contentType: 'application/json; charset=utf-8',
      method: "POST",
      dataType: "json",
			complete: function(response){
				console.log(response);
        var let = Object.values(response.responseJSON);
      if(let == 'true'){
        
        window.location = "./predict.html";
        
      }
      else{
        alert('Incorrect Username or Password');
      }
        console.log(let)
        // window.location =  "./predict.html";
			},
      error: function (e) {
          alert('Something Went Wrong. Please try again.');
      },
      })
    }
    
    
// function generate_table() {
    
//       var tbl = document.createElement("table");
//       var tblBody = document.createElement("tbody");
    
//       for (var i = 0; i < 4; i++) {
//         var row = document.createElement("tr");
    
//         for (var j = 0; j < 2; j++) {
//           var cell = document.createElement("td");
//           var cellText = document.createTextNode("cell in row "+i+", column "+j);
//           cell.appendChild(cellText);
//           row.appendChild(cell);
//         }
    
//         tblBody.appendChild(row);
//       }
    
//       tbl.appendChild(tblBody);
//       document.getElementById("summary").appendChild(tbl);
//       tbl.setAttribute("border", "2");
// }


function request_server(){
  
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
        // console.log(img_src);
        console.log(data1);
        const key = Object.keys(data1.data);
        // console.log(data1.data);
        var source = "data:image/jpg;base64,"+img_src;
        document.getElementById("getImage").src = source;
        
          for (j = 1; j <= 10; j++) {
            
          for (i = 1; i < 5; i++) {
            document.querySelector(`#c${j} #r${i}`).innerHTML = data1.data[key[j-1]][i-1];
          }
        }


  document.getElementById("batch").getElementsByTagName("td")[1].innerHTML = data1.summary.Batchid;

     //summary1
   console.log(data1.summary1.Present.length);
     if (data1.summary1.Present.length >= 1){
       p1 = data1.summary1.Present[0][1];
       np1 = data1.summary1.count - p1
       a1 = data1.summary1.angle[0][1];
       na1 = data1.summary1.count - a1;
       b1= data1.summary1.blunt[0][1];
       e1 = data1.summary1.excess[0][1];
       ne1 = data1.summary1.excess[1][1];
     }
     else {
      //  p1 = data1.summary1.Present;
       p1 = 0;
       np1 = 0;
      //  a1 = data1.summary1.angle;
       a1 =0;
      //  b1= data1.summary1.blunt;
      na1  = 0;
       b1= 0;
      //  e1 = data1.summary1.excess;
       e1 = 0;
      //  ne1 = data1.summary1.count -  data1.summary1.excess;
       ne1 = 0;
     }
     console.log(p1);

     document.getElementById("new_batch").getElementsByTagName("td")[1].innerHTML = data1.summary1.Batchid
  document.getElementById("current_batch").getElementsByTagName("td")[1].innerHTML = p1;
  // document.getElementById("current_batch").getElementsByTagName("td")[1].innerHTML = data1.summary1.Present[0][1];
  document.getElementById("current_batch").getElementsByTagName("td")[3].innerHTML = np1; //not present
  document.getElementById("current_batch").getElementsByTagName("td")[5].innerHTML = a1; //angle
  document.getElementById("current_batch").getElementsByTagName("td")[7].innerHTML = na1;  //not within
  document.getElementById("current_batch").getElementsByTagName("td")[9].innerHTML = b1; //blunt
  document.getElementById("current_batch").getElementsByTagName("td")[11].innerHTML = e1; //excess
  document.getElementById("current_batch").getElementsByTagName("td")[13].innerHTML = ne1; //not excess
    // document.getElementById("batch").getElementsByTagName("td")[1].innerHTML = data1.summary1.Batchid;
        //summary

        if (data1.summary.Present.length >= 1){
          // p = data1.summary.Present[0][1];
          np = (data1.summary.Batchid * 50) - data1.summary.Present[0][1];
      //  a = data1.summary.angle[0][1];
      //  b= data1.summary.blunt[0][1];
      //  e = data1.summary.excess[0][1];
      //  ne = data1.summary.excess[1][1];
         }
         else {
          // p = data1.summary.Present;
          np = 0
          // a = data1.summary.angle;
          // b= data1.summary.blunt;
          // e = data1.summary.excess;
          // ne = data1.summary.excess;
         }
    document.getElementById("last_batch").getElementsByTagName("td")[1].innerHTML = data1.summary.Present[0][1];
    document.getElementById("last_batch").getElementsByTagName("td")[3].innerHTML = np;  //not present
    document.getElementById("last_batch").getElementsByTagName("td")[5].innerHTML = data1.summary.angle[0][1];
    document.getElementById("last_batch").getElementsByTagName("td")[7].innerHTML = data1.summary.blunt[0][1];
    document.getElementById("last_batch").getElementsByTagName("td")[9].innerHTML = data1.summary.excess[0][1];
    document.getElementById("last_batch").getElementsByTagName("td")[11].innerHTML = data1.summary.excess[1][1];
    // document.getElementById("last_batch").getElementsByTagName("td")[13].innerHTML = 50-data1.summary.angle[1];
 
      },
  
  
   
    });
    
   
  };
}

function exit_app() {
  document.getElementById("exit").onclick = function(e){
    console.log("Exiting app");
    $.ajax(
      {
        url: 'http://127.0.0.1:5000/exit_and_report',
        method: 'GET'
        });


    window.close();


    

  };
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






// async function loadModel() {
//     model = undefined;s
//     model = await tf.loadLayersModel();
// }

