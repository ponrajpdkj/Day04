

//1.Creating XHR  Object
var request=new XMLHttpRequest();

//2.open the connection
request.open('GET','https://restcountries.com/v2/all',true);

//3.send a request
request.send();

//4. Receiving a reponse onload
request.onload=function(){
    if(request.status == 200){
        //response as string hence should convert into object or array.
        var data=JSON.parse(request.responseText);
    }
    // console.log(data);
    // console.log(data.length);
    for(let i=0;i<data.length;i++){ 
        console.log(data[i].name+" => "+data[i].region+" => "+data[i].subregion+" => "+data[i].population
        +" => "+data[i].flag);
    }

}