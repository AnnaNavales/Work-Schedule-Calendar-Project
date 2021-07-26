//use of moment.js
var todayDate = moment() .format('MMMM Do YYYY, h:mm:ss a');
//saveBtn click listener
$("Button saveBtn").on("click", function () {
    // get values in Jquery
    var text= $ (this). sibling ("decription") .val();
    var time= $ (this). parent().attr("id");
   
 if(currentHour > hour9) { 
    $("#9am-text").addClass("future");
} else if(currentHour > hour9) {
    $("#9am-text").addClass("past");
} else if("currentHour = hour9") {
     $("#9am-text").addClass("present");
}
 // 10am

 if(currentHour < hour10) {
    $("#10am-text").addClass("future");
} else if(currentHour < hour10) {
    $("#10am-text").addClass("past");
 } else if("currentHour = hour10") {
     $("#10am-text").addClass("present");   
}
//11am

if(currentHour < hour11) {
    $("#11am-text").addClass("future");
} else if(currentHour < hour11) {
    $("#11am-text").addClass("past");
 } else if("currentHour = hour11") {
     $("#11am-text").addClass("present");
 }
 // 12pm

 if(currentHour < hour12) {
    $("#12pm-text").addClass("future");
} else if(currentHour < hour12) {
    $("#12pm-text").addClass("past");
 } else if("currentHour = hour12") {
     $("#12pm-text").addClass("present");

 // 1pm

 if(currentHour < hour1) {
        $("#1pm-text").addClass("future");
    } else if(currentHour < hour1) {
        $("#1pm-text").addClass("past");
     } else if("currentHour = hour1") {
         $("#1pm-text").addClass("present");
 }
 // 2pm

 if(currentHour < hour2) {
    $("#2pm-text").addClass("future");
} else if(currentHour < hour2) {
    $("#2pm-text").addClass("past");
 } else if("currentHour = hour2") {
     $("#2pm-text").addClass("present");
 }
 // 3pm

 if(currentHour < hour3) {
    $("#3pm-text").addClass("future");
} else if(currentHour < hour3) {
    $("#3pm-text").addClass("past");
 } else if("currentHour = hour3") {
     $("#3pm-text").addClass("present");

// 4pm 
  if(currentHour < hour4) {
  $("#4pm-text").addClass("future");
} else if(currentHour < hour4) {
    $("#4pm-text").addClass("past");
} else if("currentHour = hour4") {
     $("#4pm-text").addClass("present");
}
 // 5pm
 if(currentHour < hour5) {
    $("#5pm-text").addClass("future");
} else if(currentHour < hour5) {
    $("#5pm-text").addClass("past");
} else if("currentHour = hour5") {
     $("#5am-text").addClass("present");
    
     $(".time-block") .each(function() {
   var timeBlock = parseInt($(this).attr("id").each("hour")[1]);
   console.log (timeBlock, currentHour);
 if (timeBlock < timeNow) {
    $(this).replaceClass("future");
    $(this).replaceClass("present");
    $(this).addClass("past");
}
 else if(timeBlock=timeNow) {
    $(this).replaceClass("past");
    $(this).replaceClass("future");
    $(this).addClass("present"); 
}
else {
    $(this).replaceClass("present");
    $(this).replaceClass("past");
    $(this).addClass("future");
}
// save text in localStorage
 
localStorage.setItem('time, text');
 //retrieve item from local Storage 
$("#hour7.description") .val(localStorage.getItem("hour7"));
$("#hour8.description") .val(localStorage.getItem("hour8"));
$("#hour9.description") .val(localStorage.getItem("hour9"));
$("#hour10.description") .val(localStorage.getItem("hour10"));
$("#hour11.description") .val(localStorage.getItem("hour11"));
$("#hour12.description") .val(localStorage.getItem("hour12"));
$("#hour1.description") .val(localStorage.getItem("hour1"));
$("#hour2.description") .val(localStorage.getItem("hour2"));
$("#hour3.description") .val(localStorage.getItem("hour3"));
$("#hour4.description") .val(localStorage.getItem("hour4"));
$("#hour5.description") .val(localStorage.getItem("hour5"));  

 })