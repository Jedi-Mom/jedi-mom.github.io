// $('#flashInst')
//   .hide()
//   .fadeIn(3000)
//   .delay(10000)
//   .fadeOut();


// When the button is pressed 
$('.photoToggle').on('click', 'button', function(){
  //Show the edited text
  $(this).prev().show();
  //Hide the "Click" button
  $(this).hide();
});

// Create the "Light Box Instruction" button
const $button = $('<button>Light Box Instruction</button>');
//Append to web page
$('.photoToggle').append($button);

//Hide the edited text
$('.photoToggle span').hide();
