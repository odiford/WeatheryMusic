window.onload = function(){

var fillColor = [0, 0, 0];
var px = 40;
var py = 50;

var text;

var id;
var users = [0,0,0,0,0,0,0];
var currentUser=0;


document.getElementById("myBtn").addEventListener("click", function() {connect();});


function connect(){
  for(var i=0;i<users.length;i++)
  {
    if(users[i]==0){
      users[i] = i+1; //fill first empty spot, ID is spot + 1
      currentUser = i+1;

      //assign ID to window that clicked
      window.alert("setting id "+currentUser);
      window.open('playPage2.html',i);
      break; //coninue with connection process
    }
    else{
      continue;
    }
  }
}

}
