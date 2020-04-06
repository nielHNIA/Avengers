var $first = $('li:first', 'ul'),
      $last = $('li:last', 'ul');


$("#next").click(function () {
    var $next,
        $selected = $(".selected");
    // get the selected item
    // If next li is empty , get the first
    $next = $selected.next('li').length ? $selected.next('li') : $last;
    $selected.removeClass("selected").fadeOut(1000);
    $next.addClass('selected').fadeIn(1000);
});

$("#prev").click(function () {
    var $prev,
        $selected = $(".selected");
    // get the selected item
    // If prev li is empty , get the last
    $prev = $selected.prev('li').length ? $selected.prev('li') : $first;
    $selected.removeClass("selected").fadeOut(1000);
    $prev.addClass('selected').fadeIn(1000);
});

