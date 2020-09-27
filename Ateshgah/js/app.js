// For TAB MENU

function openTab(evt, topicName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}


// Tab2

function openTopic(evt, topicName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(topicName).style.display = "block";
  evt.currentTarget.className += " active";
}


// Dark Mode
function toggleDarkMode(el){
 
  const element = document.getElementsByTagName("section")[0];
  const className = "dark-mode";
  let arr = element.className.split(" ");
  
  if(arr.indexOf(className) == -1) {
    element.classList.add(className);
    el.innerHTML = 'Light Mode';
  } else {
    element.classList.remove(className);
    el.innerHTML = 'Dark Mode';
  }      
}