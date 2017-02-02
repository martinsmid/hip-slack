function native_click(el)
{
    var els_anchor = el.children('a')[0];
    var clickEvent = document.createEvent("HTMLEvents");
    clickEvent.initEvent("click", true, true);
    els_anchor.dispatchEvent(clickEvent);
}

function step(current, list, step) {
    var current_index = list.index(current);
    var new_index = (current_index + step + list.length) % list.length
    return $(list[new_index]);
}

$(document).keydown(function(event) {
    if (event.altKey === true && event.shiftKey === true &&
            (event.key == 'ArrowUp' || event.key == 'ArrowDown'))
    {
        var target_list = $('.hc-tab.aui-nav-selected, .hc-has-badge');
        if (target_list.length > 1) {
            if (event.key == 'ArrowUp') {
                var next = step($('.hc-tab.aui-nav-selected')[0], target_list, -1)
            }
            else if (event.key == 'ArrowDown') {
                var next = step($('.hc-tab.aui-nav-selected')[0], target_list, 1)
            }
            native_click(next);
        }
    }
    else if (event.altKey === true && event.shiftKey === false &&
            (event.key == 'ArrowUp' || event.key == 'ArrowDown'))
    {
        var target_list = $('.hc-room, .hc-person');

        if (event.key == 'ArrowUp') {
            var next = step($('.hc-tab.aui-nav-selected')[0], target_list, -1)
        }
        else if (event.key == 'ArrowDown') {
            var next = step($('.hc-tab.aui-nav-selected')[0], target_list, 1)
        }
        native_click(next);
    }
})
