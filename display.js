$(function(){

    var btn = $('next');
    btn.on('click',load);
    
    function load(){
        var fetch = new XMLHttpRequest();
    
        fetch.open('GET','./test_data.json',true);
        fetch.onload = function() {
            if(this.status == 200 ) {
                var elem = JSON.parse(this.responseText);
                var output = '';
                for (var i=0, l=elem.elements.length; i<l ; i++) {
                    output += `
                        <div>
                            <p>1 : ${elem.elements[i].name}</p>
                            <p>Symbol : ${elem.elements[i].symbol}</p>
                            <p>Number : ${elem.elements[i].number}</p>
                        </div> 
                    `; 
                }
                $('.data').html(output);
            }
        }
        fetch.send();
    }
    
    });