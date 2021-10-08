// variables

var saveButton = $(".saveBtn")


// get date
$(document).ready(function () {
    var date = moment().format("dddd MMMM do YYYY");

    $("#currentDay").text(date);


// past, present, future function

    function timeNow() {
        var currentHour = moment().hours()
        var time  = $(".time-block");

        time.each(function() {
            var hour = parseInt($(this).attr('id'))
            console.log(hour)

            if(hour === currentHour) {
                $(this).children(".col-md-10").attr("class", "present col-sm-10 description")
            } else if (currentHour > hour) {
                $(this).children(".col-md-10").attr("class", "past col-sm-10 description")
            } else {
                $(this).children(".col-md-10").attr("class", "future col-sm-10 description")
            }
        })
    }

timeNow() 
});

