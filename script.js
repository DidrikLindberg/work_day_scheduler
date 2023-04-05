// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // create a day object using the dayjs library
    var today = dayjs();
    var currentHour = dayjs().hour();

    $('#currentDay').text(today.format('ddd, MMMM, D'));


  });
  