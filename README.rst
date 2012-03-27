Slide Navigation
================

This is an attempt to make a Facebook-like navigation panel for Sencha Touch 2.
To see a current working demo, visit http://wnielson.github.com/sencha-SlideNavigation/
on a mobile device.  To see the navigation menu in the example, "flick" the toolbar
(at the top) to the right; the opposite action can be used to close the menu.

This is a work in progress and still needs quite a bit of work, but it is usable.

Getting Started
---------------

Using the SlideNavigation view in your project is now easier than before.
Simply add the following at the beginning of your app:

    Ext.Loader.setConfig({enabled:true});
    Ext.Loader.setPath('Ext.ux', './ux');

Then in whatever component you wish to use the view, add:

    requires = [
        'Ext.ux.slidenavigation.View',
    ]

or simply extend the 'Ext.ux.slidenavigation.View' class.

For a more complete example, see "app/view/Main.js".

Building the Example Application
--------------------------------

To build the example you need to put Sencha Touch into a folder named sdk.  Then run:

    ./sdk/commands/sencha app build -e testing

This will produce the example app in the `build/testing` directory.


Notes
-----

So far this has been tested on:

	* iOS 5 (iPhone and iPad)
	* Android 4.0.3
	* Android 3.2 (tablet)
	* Android 2.3.3
	