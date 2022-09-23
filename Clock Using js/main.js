setInterval(time, 1);
setInterval(calender, 1)

function time() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();
    let ss = "AM"

    if (hour >= 12) {
        ss = "PM"
    }
    if (hour > 12) {
        hour = hour - 12;
        // ss = "PM"
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minutes + ":" + second + " " + ss;

    // document.getElementById("clock").innerText = time;
    // let t = setTimeout(function () { currentTime() }, 1000);

    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = second;
    document.getElementById("fm").innerHTML = ss;
}
// time();
function calender() {
    let datee = new Date();
    let fdate = datee.getDate();
    let fmonth = datee.getMonth() + 1;
    let fyear = datee.getFullYear();
    let fm;

    // fdate = (fdate < 10) ? "0" + fdate : fdate;
    // fmonth = (fmonth < 10) ? "0" + fmonth : fmonth;
    // fyear = (fyear < 10) ? "0" + fyear : fyear;

    switch (fmonth) {
        case 1:
          fm = "January";
          break;
        case 2:
          fm = "Febuary";
          break;
        case 3:
          fm = "March";
          break;
        case 4:
          fm = "April";
          break;
        case 5:
          fm = "May";
          break;
        case 6:
          fm = "June";
          break;
        case 7:
          fm = "July";
          break;
        case 8:
          fm = "August";
          break;
        case 9:
          fm = "September";
          break;
        case 10:
          fm = "October";
          break;
        case 11:
          fm = "November";
          break;
        case 12:
          fm = "December";
          break;
        default:
          fm = "Enter";
      }

    document.getElementById("dates").innerHTML = fdate;
    document.getElementById("months").innerHTML = fm;
    document.getElementById("years").innerHTML = fyear;
}


