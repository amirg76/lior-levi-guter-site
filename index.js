const express = require("express");
const app= express();
const fs = require('fs');
var data = fs.readFileSync("./public/js/winner.json");
var listwin = JSON.parse(data);

console.log(listwin);

app.use(express.static(__dirname + '/public'));
app.use(express.json({limit:'1mb'}));
app.get("/", function(req, res){

res.sendFile(__dirname + "/index.html");
app.post("/" , (request, response)=>{
    const checkfet=request.body;
     response.json({
    winname:checkfet.winname,
    wintime:checkfet.wintime
  });

  var arraylength=listwin.length;
  var arrayplace=0;
    // loop to arange winner table
    for (var i = 0; (i < arraylength)&&(i<6); i++)
    {
     if ((listwin[i].wintime)<(checkfet.wintime))
      {
        for(var j = 0; j < arraylength; j++)
        {
          if ((listwin[j].wintime)<(checkfet.wintime))
          {
            arrayplace=j;
          }
        }
        listwin.splice(arrayplace+1,0,checkfet);
        i=arraylength;
      }
      else if((listwin[i].wintime)>=(checkfet.wintime))
      {
        listwin.unshift(checkfet);
        i=arraylength;
      }
    }//end loop to arange winner table

  const data2 = JSON.stringify(listwin,null,2);
  fs.writeFile("./public/js/winner.json",data2, function(err){
    if(err){
      console.log(err);
          }
      else{
          console.log(" good");
          }
    });//end fs.writefile
  });//end app.post
});//end app.get

app.listen(3000, function(){
  console.log("server started on port 3000");
});
