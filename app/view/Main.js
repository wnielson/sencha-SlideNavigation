Ext.define("SlideNavigationExample.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    
    requires: [
        'Ext.Container',
        'Ext.MessageBox',
        'Ext.Panel',
        'Ext.Toolbar',
        'Ext.event.publisher.Dom'
    ],
    
    config: {
        fullscreen: true,
         
        /**
         *  Any component within the container with an 'x-toolbar' class
         *  will be draggable.  To disable draggin all together, set this
         *  to false.
         */
        slideSelector: 'x-toolbar',
        
        /**
         *  Time in milliseconds to animate the closing of the container
         *  after an item has been clicked on in the list.
         */
        selectSlideDuration: 200,

        /**
         *  Enable content masking when container is open.
         *
         *  @since 0.2.0
         */
        itemMask: true,

        /**
         *  Define the default slide button config.  Any item that has
         *  a `slideButton` value that is either `true` or a button config
         *  will use these values at the default.
         */
        slideButtonDefaults: {
            selector: 'toolbar'
        },
         
        /**
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 400,
            width: 200,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light',                    
                title: {
                    title: 'Navigation',
                    centered: false,
                    width: 200,
                    left: 0
                },
                
                /**
                 *  Here's an example of how to add a different type of
                 *  component into the toolbar of the list.
                 */
                /*
                items: [{
                    docked: 'top',
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
            }]
            
        },
        
        /**
         *  Example of how to re-order the groups.
         */
        groups: {
            'Group 1': 1,
            'Group 2': 3,
            'Group 3': 2
        },
        
        /**
         *  These are the default values to apply to the items within the
         *  container.
         */
        defaults: {
            style: 'background: #fff',
            xtype: 'container'
        },
        
        items: [{
            title: 'Item 1',
            group: 'Group 1',

            // Enable the slide button using the defaults defined above in
            // `slideButtonDefaults`.
            slideButton: true,
            items: [{
                xtype: 'toolbar',
                title: 'Item 1',
                docked: 'top'
            },{
                xtype: 'panel',
                html: '<img src="resources/images/guide.jpg" width="100%" />',

                // Mask this item when the container is opened
                maskOnOpen: true
            }]
        },{
            title: 'Item 2',
            group: 'Group 1',
            /**
             *  Here's an example of how an item can simply execute a
             *  function, rather than display a new component.
             */
            handler: function() {
                Ext.Msg.alert('Item 2', 'You clicked Item 2.');
            }
        },{
            title: 'Item 3',
            group: 'Group 2',
            items: [{
                xtype: 'toolbar',
                title: 'Item 3',
                docked: 'top'
            },{
                xtype: 'panel',
                layout: 'card',
                styleHtmlContent: true,
                html: '<p>The toolbar on this page doesn\'t have a slideButton, so you\'ll have to "slide" the toolbar to view the menu.</p><p>Donec neque augue, fermentum quis tempor quis, lacinia ut augue. Sed dictum risus id arcu vehicula sed porttitor nisi egestas. Aliquam arcu felis, sagittis vel pulvinar vitae, ultricies a augue. Praesent eget erat tellus. Aenean nec dui magna. Cras sagittis, diam vel bibendum mattis, neque purus placerat turpis, sit amet tempor neque nisl non eros. Pellentesque id orci nulla, nec eleifend quam. Proin ut magna turpis. Phasellus erat urna, faucibus in tempus bibendum, ultrices a mauris. Nulla semper ante sed est placerat sagittis. Nam ut vestibulum nulla. Sed sit amet aliquet urna. Morbi est velit, vulputate quis pretium vitae, lobortis sed ligula.</p>',
                scrollable: true,
                maskOnOpen: true
            }]
        },{
            title: 'Item 4',
            group: 'Group 2',
            slideButton: {
                selector: 'toolbar',
                iconMask: true,
                iconCls: 'arrow_left'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Item 4',
                docked: 'bottom'
            },{
                styleHtmlContent: true,
                xtype: 'panel',
                layout: 'card',
                html: '<h2>Item 4</h2><p>The toolbar for this item is at the bottom, which has a slideButton and uses a different icon.</p>'
            }]
        },{
            title: 'Item 5',
            group: 'Group 2',
            slideButton: {
                selector: 'container',
                iconMask: false,
                text: 'toggle navigation'
            },
            items: [{
                style: 'padding: 10px',
                html: '<h2>Item 5</h2><p>Here we\'ve added a slideButton to a location other than a toolbar with text instead of an icon.</p>'
            }]
            
        },{
            title: 'Item 6',
            group: 'Group 3',
            items: [{
                xtype: 'toolbar',
                title: 'Item 6',
                docked: 'top'
            },{
                html: '<h1>Item 6</h1>'
            }]
        },{
            title: 'Item 7',
            group: 'Group 3',

            // Explicitly disable `slideButton` (this is the default)
            slideButton: false,
            
            items: [{
                xtype: 'toolbar',
                title: 'Item 7',
                docked: 'top'
            },{
                html: '<h1>Item 7</h1>'
            }]
        },{
            title: 'Item 8',
            group: 'Group 3',
            order: 0,

            // Extend `slideButtonDefaults`
            slideButton: {
                iconMask: false,
                iconCls: null,
                text: 'menu'
            },

            items: [{
                xtype: 'toolbar',
                title: 'Item 8',
                docked: 'top'
            },{
                xtype: 'container',
                scrollable: 'vertical',
                style: 'margin: auto !important; text-align: center;',
                maskOnOpen: true,
                defaults: {
                    style: "float: left; margin: 10px; box-shadow: "+
                           "#999 0px 0px 6px 2px; border: 1px solid #888; "+
                           "overflow: hidden;",
                    height: 170,
                    width: 110
                },
                items: [{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/13/43/11134356_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/11/11161107_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/10/11161098_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/75/11157588_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/13/11161343_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/12/11161272_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/16/24/11162445_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/92/11159214_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/03/11160390_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/05/11160598_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/09/11160942_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/25/11152577_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/16/09/11160962_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/02/11160244_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/25/11162555_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/83/11158339_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/65/11156544_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/66/11156693_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/90/11159072_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/16/26/11162639_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/16/26/11162672_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/92/11159258_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content6.flixster.com/movie/11/15/84/11158472_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content7.flixster.com/movie/11/15/65/11156581_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/16/11151659_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content8.flixster.com/movie/11/15/81/11158182_pro.jpg" />'
                },{
                    html: '<img class="image-wrap" src="http://content9.flixster.com/movie/11/15/90/11159075_pro.jpg" />'
                }]
            }]
        }]
    }
});