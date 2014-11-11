Slide Navigation
================

This is an attempt to make a Facebook-like navigation panel for Sencha Touch 2.
To see a current working demo, visit `this page`_ on a mobile device.  To see the
navigation menu in the example, "flick" the toolbar (at the top) to the right; the
opposite action can be used to close the menu.

.. _`this page`: http://wnielson.github.com/sencha-SlideNavigation/build/SlideNavigationExample/production/

This is a work in progress and still needs quite a bit of work, but it is usable.

Getting Started
---------------

Using the SlideNavigation view in your project is now easier than before.  All you need
to do is place the 'ux' folder somewhere within your application, then add the following
to your app (at the top of 'app.js' is a good place)::

    Ext.Loader.setConfig({enabled:true});
    Ext.Loader.setPath('Ext.ux', './ux');

Adjust './ux' to wherever you actually placed the 'ux' folder.

Note: If you are using this with other components that also use the 'Ext.ux' namespace,
simply place the 'ux/slidenavigation' folder into the same location that you've placed
the other 'Ext.ux' components.

Then in whatever component you wish to use the view, add::

    requires = [
        'Ext.ux.slidenavigation.View',
    ]

or simply extend the 'Ext.ux.slidenavigation.View' class.

For a more complete example, see `app/view/Main.js`.

You will also need to make sure that you have included the appropriate css in order for
the component to display correctly.  In your SASS style sheet, make sure to include
`sencha-list`:

    @include sencha-list

Building with Sencha Command
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In order for the ``sencha build`` command to work properly, you need to let it know where
to find the component.  This can be done easily by opening the following file::

    .sencha/app/sencha.cfg

Update the ``app.classpath`` variable to point to the ``ux`` directory, like so::

   app.classpath=${app.dir}/app.js,${app.dir}/app,path/to/ux


Building the Example Application
--------------------------------

To build the example you need to make sure you have the `Sencha Cmd`_ installed
(>= v3.0.0.250) and Sencha Touch 2.1 extracted into a directory named `touch`.
Then, run the following command (from the directory that this README is located)::

    sencha app build

This will produce the example app in the `build/SlideNavigationExample/production` directory.

.. _`Sencha Cmd`: http://www.sencha.com/products/sencha-cmd/download

Notes
-----

So far this has been tested on:

  * iOS 6 (iPhone)
  * iOS 5 (iPhone and iPad)
  * Android 4.0.3
  * Android 3.2 (tablet)
  * Android 2.3.3

Documentation
-------------

You can read the docs online here_.

.. _here: http://wnielson.github.com/sencha-SlideNavigation/docs/#!/api/Ext.ux.slidenavigation.View

License
-------

This code is released under the MIT license.  See the LICENSE file for the actual license.


