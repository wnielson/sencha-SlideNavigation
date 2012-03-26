Ext.define("SlideNavigationExample.view.Main", {
    extend: 'Ext.ux.slidenavigation.View',
    
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
         *  This allows us to configure how the actual list container
         *  looks.  Here we've added a custom search field and have
         *  modified the width.
         */
        list: {
            maxDrag: 250,
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
                    xtype: 'searchfield',
                    placeHolder: 'search',
                    width: 180
                }]
                */
            }]
            
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
            
            /**
             *  Here's an example of how we can add a button into
             *  particular location.  In this case, it'll be added into the
             *  item's toolbar.
             */
            slideButton: {
                selector: 'toolbar'
            },
            items: [{
                xtype: 'toolbar',
                title: 'Item 1',
                docked: 'top'
            },{
                xtype: 'panel',
                html: '<img src="resources/images/guide.jpg" width="100%" />'
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
                scrollable: true
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
            items: [{
                xtype: 'toolbar',
                title: 'Item 7',
                docked: 'top'
            },{
                html: '<h1>Item 8</h1>'
            }]
        }]
    }
});