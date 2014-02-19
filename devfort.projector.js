// /dev/fort simple projector plugin
//
// Just .make_projector() on a jQuery node set which is ol/ul;
// the li children will have only one shown at a time, with
// nav controls appended after the projector itself.
//
// You need to pass through a couple of URLs to make_projector
// which give the dot and selected dot for the nav. This bit is
// inflexible and should be improved.

(function($) {

    $.fn.make_projector = function (off_img, on_img) {
        var projectorise = function (element) {
            var items = $(element).find('> li');
            $(element).after("<ol class='projector-nav'></ol>");
            var nav = $(element).next();

            function select_item(item, nav_item) {
                items.hide();
                $(item).show();
                nav.find("li img").prop("src", off_img);
                $(nav_item).find("img").prop("src", on_img);
            }

            $.each(items, function(idx, item) {
                var dotsrc;
                if (idx == 0) {
                    dotsrc = on_img;
                } else {
                    dotsrc = off_img;
                }
                var nav_item = $("<li><img alt='' src='" + dotsrc + "' width='18' height='18'></li>");
                nav.append(nav_item);
                nav_item.click(function() { select_item(item, nav_item); });
            });
        };

        return this.each( function() {
            projectorise(this);
        });
    };

})( jQuery );
