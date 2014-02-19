Simple projector
================

A jQuery plugin to show only one of a list of items, with a nav list added in afterwards.

Using the plugin
----------------

Run:

    $(selector).make_projector(off_image, on_image)

eg:

    <script src='devfort.projector.js'></script>
    <script>
      $('ul.projector').make_projector('img/projector_off.png', 'img/projector_on.png');
    </script>

Notes
-----

 * The generated navlist is inflexible, assuming you just want an image of a fixed size in there

 * Ideally the nav elements would actually link to the projector elements by id

Credits
-------

Initial version written by James Aylett at NSFWCORP.
