Ext.Loader.setConfig({enabled:true});

Ext.application({
    appFolder: 'app',    
    views: ['app.view.SlideNavigationPanel'],
    requires: ['app.view.SlideNavigationPanel'],
    
    launch: function() {
        Ext.create('app.view.SlideNavigationPanel', {
            fullscreen: true,

        });
    }
});