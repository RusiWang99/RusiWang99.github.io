/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];
var mobileNavActive = false;

function updateNav() {

  var isMobile = window.matchMedia('(max-width: 520px)').matches;

  if(isMobile) {
    if(!mobileNavActive) {
      // Restore the original order before moving every navigation link into
      // the mobile dropdown. The site identity is the only item left visible.
      $hlinks.children().appendTo($vlinks);
      $vlinks.children('*:not(.masthead__menu-item--lg)').appendTo($hlinks);
      breaks = [];
      mobileNavActive = true;
    }

    $btn.removeClass('hidden');
    $btn.attr('count', $hlinks.children().length);
    return;
  }

  if(mobileNavActive) {
    $hlinks.children().appendTo($vlinks);
    breaks = [];
    mobileNavActive = false;
  }

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
