function native_click(el)
{
    var els_anchor = el.children('a')[0];
    var clickEvent = document.createEvent("HTMLEvents");
    clickEvent.initEvent("click", true, true);
    els_anchor.dispatchEvent(clickEvent);
}

$(document).keydown(function(event) {
    if (event.altKey === true && event.shiftKey === true) {
        if (event.key == 'ArrowUp') {
            native_click($('.hc-tab.aui-nav-selected').prevAll('.hc-has-badge').first());
        }
        else if (event.key == 'ArrowDown') {
            native_click($('.hc-tab.aui-nav-selected').nextAll('.hc-has-badge').first());
        }
    }
    else if (event.altKey === true && event.shiftKey === false)
    {
        var selected = $('.hc-tab.aui-nav-selected')[0];
        var target_list = $('.hc-room').toArray().concat($('.hc-person').toArray());
        var current_index = target_list.indexOf(selected);

        if (event.key == 'ArrowUp') {
            new_index = (current_index - 1 + target_list.length) % target_list.length
            var next = $(target_list[new_index]);
            native_click(next);
        }
        else if (event.key == 'ArrowDown') {
            new_index = (current_index + 1) % target_list.length
            var next = $(target_list[new_index]);
            native_click(next);
        }
    }
})

