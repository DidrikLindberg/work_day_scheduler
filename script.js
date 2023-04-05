// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // day object using the dayjs library
    var today = dayjs();
    var currentHour = dayjs().hour();

    $('#currentDay').text(today.format('ddd, MMMM, D'));

  // forloop that iterates over each timeblock and compares the id to the current hour
  // if the id is less than the current hour, add the class past/present/future
  document.querySelectorAll('.time-block').forEach(function (timeBlock) {
    var timeBlockHour = parseInt(timeBlock.id.split('-')[1]);
    if (timeBlockHour < currentHour) {
        timeBlock.classList.add('past');
        console.log('past');
    } else if (timeBlockHour === currentHour) {
        timeBlock.classList.add('present');
        console.log('present');
    } else {
        timeBlock.classList.add('future');
        console.log('future');
    }
});

  });
  