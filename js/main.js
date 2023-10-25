var btn = document.getElementById('btnlight');
btn.addEventListener("click", function(){
  document.getElementById('box').classList.toggle("open-box");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('box').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}

var btn = document.getElementById('btnmic');
btn.addEventListener("click", function(){
  document.getElementById('box').classList.toggle("open-box");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('box').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}

var btn = document.getElementById('btnspeak');
btn.addEventListener("click", function(){
  document.getElementById('box').classList.toggle("open-box");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('box').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}

var btn = document.getElementById('btnear');
btn.addEventListener("click", function(){
  document.getElementById('box').classList.toggle("open-box");
});

function toggleCLass() {
   var myBoxClasses = document.getElementsByClassName('box').classList;
   if (myBoxClasses.contains("box-scale")) {
       myBoxClasses.remove("box-scale");
   } else {
       myBoxClasses.add("box-scale");
   }
}