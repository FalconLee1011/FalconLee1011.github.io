window.setInterval(datetime, 1000);

function datetime () {
  let d = new Date();
  document.getElementById('datetime').innerHTML = getTime(d);
}

function getTime(date) {
  let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var fDate = "";

  y = date.getFullYear();
  m = date.getMonth();
  dat = date.getDate();
  day = date.getDay();
  hr = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();

  var a = "AM";
  if(hr > 12) {
    hr -= 12;
    a = "PM";
  }
  if(hr < 10) {
    hr = "0" + hr;
  }
  if(sec < 10){
    sec = "0" + sec;
  }

  fDate = hr + "：" + min + "：" + sec + " <span class=\"t_sec\">" + a + "</span>";

  return fDate
}
