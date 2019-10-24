$(document).ready(function() {
$('select').each(function() {

  // Cache the number of options
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  // Hides the select element
  $this.addClass('s-hidden');

  // Wrap the select element in a div
  $this.wrap('<div class="select"></div>');

  // Insert a styled div to sit over the top of the hidden select element
  $this.after('<div class="styledSelect"></div>');

  // Cache the styled div
  var $styledSelect = $this.next('div.styledSelect');

  // Show the first select option in the styled div
  $styledSelect.text($this.children('option').eq(0).text());

  // Insert an unordered list after the styled div and also cache the list
  var $list = $('<ul />', {
    'class': 'options'
  }).insertAfter($styledSelect);

  // Insert a list item into the unordered list for each select option
  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  // Cache the list items
  var $listItems = $list.children('li');

  // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
  $styledSelect.click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('div.styledSelect active').each(function() {
      $(this).removeClass('active').next('ul.options').hide();
    });
    $(this).toggleClass('active').next('ul.options').toggle();
  });

  // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
  // Updates the select element to have the value of the equivalent option
  $listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $list.hide();
  });

  // Hides the unordered list when clicking outside of it
  $(document).click(function() {
    $styledSelect.removeClass('active');
    $list.hide();
  });

});

  var chessWrap = document.querySelector('.ch-wrap');

  var i = 0, count = 0;

  while (count < 8 * 8) {
    var item = document.createElement('div');
    chessWrap.appendChild(item);

    item.classList.add('ch-item');

    if (i && i % 2) {
      item.classList.add('ch-black')
    } else {
      item.classList.add('ch-white')
    }

    i += ((i + 2) % 9) ? 1 : 2;
    count++;
  }

});
