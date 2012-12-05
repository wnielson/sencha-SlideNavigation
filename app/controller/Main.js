Ext.define("SlideNavigationExample.controller.Main", {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            slideNav: 'slidenavigationview'
        },

        control: {
            slideNav: {
                open: function(nav, position, duration) {
                    console.log('Container open (position='+position+',duration='+duration+')');
                },

                close: function(nav, position, duration) {
                    console.log('Container close (position='+position+',duration='+duration+')');
                },

                select: function(nav, item, index) {
                    console.log('Selected item (index='+index+')');
                },

                opened: function(nav) {
                    console.log('Container opened');
                },

                closed: function(nav) {
                    console.log('Container closed');
                },

                slideend: function(nav) {
                    console.log('Container slideend');
                },

                slidestart: function(nav) {
                    console.log('Container slidestart');
                },

                dragstart: function(nav) {
                    console.log('Container dragstart');
                },

                dragend: function(nav) {
                    console.log('Container dragend');
                }
            }
        }
    }
});