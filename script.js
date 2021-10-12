// variables

var saveButton = $(".saveBtn")


// get date
$(document).ready(function () {
    var date = moment().format("dddd MMMM DD YYYY");

    $("#currentDay").text(date);


// past, present, future function

    function timeNow() {
        var currentHour = moment().hours()
        var time  = $(".time-block");

        time.each(function() {
            var hour = parseInt($(this).attr('id'))
            console.log(hour)

            if(hour === currentHour) {
                $(this).children(".col-md-10").attr("class", "present col-md-10 description")
            } else if (currentHour > hour) {
                $(this).children(".col-md-10").attr("class", "past col-md-10 description")
            } else {
                $(this).children(".col-md-10").attr("class", "future col-md-10 description")
            }
        })
    }

timeNow() 

// event save - local storage

saveButton.on("click", function(event) {
    event.preventDefault();
    var data = $(this).siblings(".col-md-10").val().replace(/['"]+/g, '');
    var topData = $(this).parent().attr("id");
    localStorage.setItem(topData, JSON.stringify(data));

})
// recall data


$("#9 textarea").val(localStorage.getItem('9').replace(/['"]+/g, ''));
$("#10 textarea").val(localStorage.getItem('10').replace(/['"]+/g, ''));
$("#11 textarea").val(localStorage.getItem('11').replace(/['"]+/g, ''));
$("#12 textarea").val(localStorage.getItem('12').replace(/['"]+/g, ''));
$("#13 textarea").val(localStorage.getItem('13').replace(/['"]+/g, ''));
$("#14 textarea").val(localStorage.getItem('14').replace(/['"]+/g, ''));
$("#15 textarea").val(localStorage.getItem('15').replace(/['"]+/g, ''));
$("#16 textarea").val(localStorage.getItem('16').replace(/['"]+/g, ''));
$("#17 textarea").val(localStorage.getItem('17').replace(/['"]+/g, ''));




});


