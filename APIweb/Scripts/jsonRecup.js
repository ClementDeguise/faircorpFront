//GET /api/lights


var JResponse;
var JResponseRooms;
var JResponseBat;




function getLights() {

  //AJAX request
  var Http = new XMLHttpRequest();

  const url='https://faircorp-app-deguise.cleverapps.io/api/lights';
  Http.open("GET", url);
  Http.send();

  //QUAND LA READYSTATE PROPERTY CHANGE: CALLBACK
  Http.onreadystatechange = function(data){
    if(this.readyState==4){
      //write json response
      var Response = JSON.parse(Http.responseText);
      return callbacklight(Response);
      };
  }
}


function callbacklight(JResponse) {

  document.getElementById('light0_id').innerHTML = JResponse[0].id;
  document.getElementById('light0_floor').innerHTML = JResponse[0].level;
  document.getElementById('light0_room').innerHTML = JResponse[0].roomId;
  document.getElementById('light0_status').innerHTML = JResponse[0].status;
  document.getElementById('interrupteur0').src = "https://images-na.ssl-images-amazon.com/images/I/61QKhYL%2BeCL.png";

  document.getElementById('light1_id').innerHTML = JResponse[1].id;
  document.getElementById('light1_floor').innerHTML = JResponse[1].level;
  document.getElementById('light1_room').innerHTML = JResponse[1].roomId;
  document.getElementById('light1_status').innerHTML = JResponse[1].status;
  document.getElementById('interrupteur1').src = "https://images-na.ssl-images-amazon.com/images/I/61QKhYL%2BeCL.png";

}



function getRooms() {


  //AJAX request
  var Http = new XMLHttpRequest();

  const url='https://faircorp-app-deguise.cleverapps.io/api/rooms';
  Http.open("GET", url);
  Http.send();

  //QUAND LA READYSTATE PROPERTY CHANGE: CALLBACK
  Http.onreadystatechange = function(data){
    if(this.readyState==4){
      //write json response
      var Response = JSON.parse(Http.responseText);
      return callbackrooms(Response);
      };
  }

}


function callbackrooms(JResponseRooms) {

  document.getElementById('room0_id').innerHTML = JResponseRooms[0].id;
  document.getElementById('room0_floor').innerHTML = JResponseRooms[0].floor;
  document.getElementById('room0_name').innerHTML = JResponseRooms[0].name;
  document.getElementById('room0_building').innerHTML = JResponseRooms[0].buildingId;

  document.getElementById('room1_id').innerHTML = JResponseRooms[1].id;
  document.getElementById('room1_floor').innerHTML = JResponseRooms[1].floor;
  document.getElementById('room1_name').innerHTML = JResponseRooms[1].name;
  document.getElementById('room1_building').innerHTML = JResponseRooms[1].buildingId;


}




function getbuilding() {

  //AJAX request
  var Http = new XMLHttpRequest();

  const url='https://faircorp-app-deguise.cleverapps.io/api/buildings';
  Http.open("GET", url);
  Http.send();

  //QUAND LA READYSTATE PROPERTY CHANGE: CALLBACK
  Http.onreadystatechange = function(data){
    if(this.readyState==4){
      //write json response
      var Response = JSON.parse(Http.responseText);
      return callbackbuilding(Response);
      };

  }


}


function callbackbuilding(JResponseBat) {

  document.getElementById('bat0_id').innerHTML = JResponseBat[0].id;
  document.getElementById('bat0_floor').innerHTML = JResponseBat[0].numOfFloors;


}
