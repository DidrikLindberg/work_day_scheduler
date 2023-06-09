// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // day object using the dayjs library
    var today = dayjs();
    var currentHour = dayjs().hour();


    // display the current day at the top of the page
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

  // create a click event listener for the save button and save the description to local storage
  $('.saveBtn').on('click', function () {
    var timeBlock = $(this).parent();
    var timeBlockHour = timeBlock.attr('id').split('-')[1];
    console.log(timeBlockHour);
    var description = timeBlock.children('textarea').val();
    console.log(description);
    localStorage.setItem(timeBlockHour, description);

});

  // function that render the description from local storage to the page
  function renderDescription() {
    //loop ththough each timeblock and get the id
    $('.time-block').each(function () {
     //get the timeblock id
     var timeBlockHour = $(this).attr('id').split('-')[1];
     //get the description from local storage that matches the timeblock id
     var description = localStorage.getItem(timeBlockHour);
     //set the description to the textarea
     if (description !== null) {
         $(this).children('textarea').val(description);
     }
      });
 }
 renderDescription();
  });
  