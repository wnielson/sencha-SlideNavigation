<<<<<<< HEAD
Ext.define('app.view.Draggable', {
    override: 'Ext.util.Draggable',
    getConstraint: function() {
        return {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 250,
                y: 0
            }
        }
    }
    
});

=======
>>>>>>> gh-pages
Ext.define('app.view.SlideNavigationPanel', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.List'
    ],
<<<<<<< HEAD
    xtype: 'slidenav',
    config: {
        model: 'SlideNavigationPanelItem'
    },
    
    initialize: function() {
        this.callParent();
        
        this.setLayout({
            type: 'hbox'
        });
                
        model = this.getInitialConfig('model');
        
        if (!Ext.ModelManager.get(model)) {
            Ext.regModel(model, {
                fields: ['title', 'group']
            });
        }
        
        this.store = Ext.create('Ext.data.Store', {
            model: model,
=======
    xtype: 'slidenavigationview',
    config: {
        /**
         * @cfg {Object} list Configuration for the navigation list
         */
        list: {
            width: 250,
            maxDrag: null,
            itemTpl: '{title}',
            grouped: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light'
            }]
        },
        
        /**
         * @cfg {Object} container Configuration for the container
         */
        container: {
            items: []
        },
        
        /**
         * @cfg {String} slideSelector Class selector of object (or parent)
         * of which dragging should be allowed.  Defaults to the entire container.
         * For example, this could be set to something like 'x-toolbar' to restrict
         * dragging only to a toolbar.
         */
        slideSelector: ''
    },
    
    constructor: function(config) {
        this.config = Ext.merge({}, this.config, config || {});
        return this.callParent(arguments);
    },
            
    initialize: function() {        
        this.callParent();
        
        this.addCls('x-slidenavigation');
        
        this.store = Ext.create('Ext.data.Store', {
            model: this.getModel(),
>>>>>>> gh-pages
            sorters: 'group',
            getGroupString: function(record) {
                return record.get('group');
            },
<<<<<<< HEAD
=======
            
            // TODO: Move this into config and support itemtap callback
>>>>>>> gh-pages
            data: [
                {title: 'Item 1', group: 'Group 1'},
                {title: 'Item 2', group: 'Group 1'},
                {title: 'Item 3', group: 'Group 2'}
            ]
        });
        
<<<<<<< HEAD
        this.list = Ext.create('Ext.dataview.List', {
            store: this.store,
            itemTpl: '{title}',
            grouped: true,
            width: 250,
            docked: 'left',
            //floating: true,
            //hidden: true,
            items: [{
                xtype: 'titlebar',
                title: 'Navigation',
                docked: 'top'
            }],
            //renderTo: document.body,
            style: 'position: absolute; top: 0; left: 0; width: 250px; height: 100%; z-index: 0'
        });
        
        this.container = Ext.create('Ext.Container', {
            html: '<p>Do your layouts deserve better than Lorem Ipsum? Apply as an art director and team up with the best copywriters at Jung von Matt: www.jvm.com/jobs/lipsum</p>'+
                    '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare dictum sagittis. Aliquam erat volutpat. Vivamus congue pellentesque pretium. Nulla facilisis urna id ipsum vehicula ut placerat orci viverra. Integer vitae magna lectus, in egestas enim. Ut euismod porta nisi sit amet rhoncus. Ut tempor velit a odio tristique nec dignissim mauris pulvinar. Praesent vitae sem ac lorem eleifend viverra vel non urna. In fermentum urna nec nulla rhoncus rutrum. Nunc consequat pretium orci. Fusce velit tellus, consequat nec tempus quis, imperdiet vel nisl. Fusce egestas arcu in risus elementum sagittis. Donec convallis imperdiet tellus sed hendrerit. Nam facilisis sapien eu turpis luctus porta. In hac habitasse platea dictumst.</p>'+
                    '<p>Donec neque augue, fermentum quis tempor quis, lacinia ut augue. Sed dictum risus id arcu vehicula sed porttitor nisi egestas. Aliquam arcu felis, sagittis vel pulvinar vitae, ultricies a augue. Praesent eget erat tellus. Aenean nec dui magna. Cras sagittis, diam vel bibendum mattis, neque purus placerat turpis, sit amet tempor neque nisl non eros. Pellentesque id orci nulla, nec eleifend quam. Proin ut magna turpis. Phasellus erat urna, faucibus in tempus bibendum, ultrices a mauris. Nulla semper ante sed est placerat sagittis. Nam ut vestibulum nulla. Sed sit amet aliquet urna. Morbi est velit, vulputate quis pretium vitae, lobortis sed ligula.</p>'+
                    '<p>Nunc varius placerat nisi id tincidunt. Pellentesque fermentum vulputate quam, suscipit sollicitudin nunc facilisis porttitor. Nullam non diam quis justo laoreet iaculis. Sed egestas consectetur condimentum. Praesent a dui at nunc scelerisque venenatis a at eros. Nulla vel venenatis elit. Maecenas nec arcu a tortor viverra imperdiet et sit amet est.</p>'+
                    '<p>Vivamus ligula mi, bibendum ac scelerisque vitae, mattis ac velit. Nam ac libero dui, eu sollicitudin sapien. Mauris volutpat dictum libero, et varius urna porta quis. Quisque hendrerit mollis enim vitae luctus. Cras urna elit, accumsan vel pulvinar sit amet, sagittis in diam. In vitae aliquam felis. Donec feugiat ante vel turpis malesuada vitae auctor nulla consectetur. Aenean et eros metus. Nunc felis dui, vestibulum ut accumsan ut, semper eu odio. Mauris adipiscing tempus enim at mattis.</p>'+
                    '<p>Vivamus viverra felis eget tortor malesuada at vulputate metus pellentesque. Pellentesque euismod interdum egestas. Fusce adipiscing velit vitae ligula adipiscing id hendrerit nulla pulvinar. Maecenas gravida augue sit amet lectus congue quis semper quam fermentum. Fusce tellus magna, venenatis eget eleifend vel, ullamcorper quis arcu. Suspendisse nibh libero, euismod id egestas eu, porttitor eu nisi. Sed ut lacus sed sem pharetra porttitor a non metus. Ut egestas tempor ligula at malesuada. Cras dapibus adipiscing lobortis.</p>'+
                    '<p>Nunc egestas lobortis metus. Nulla ac arcu erat, quis vehicula nibh. Integer sed est et metus laoreet elementum. Ut magna nulla, consequat vel mollis vitae, placerat et augue. In hac habitasse platea dictumst. Etiam sollicitudin augue ut urna vestibulum at molestie elit pharetra. Pellentesque ullamcorper euismod est, vitae volutpat eros semper at. Quisque in dui non turpis ultricies mollis. Nulla facilisi. Etiam tincidunt pharetra velit, id iaculis metus convallis id. Vestibulum accumsan aliquet ligula, ac luctus nunc adipiscing sed. Sed quam augue, ultrices quis tincidunt nec, tempor sit amet ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et orci vel eros porttitor luctus. Morbi eu elit et nisi rhoncus elementum vitae sed sem.</p>'+
                    '<p>Phasellus fermentum, lorem at laoreet ultrices, neque mauris condimentum sem, sit amet fringilla sem urna faucibus purus. In hac habitasse platea dictumst. Nunc mattis elementum hendrerit. Ut tempor aliquet sem, sed varius eros dapibus id. Vestibulum sapien ante, hendrerit fermentum congue quis, tincidunt eleifend lacus. Donec eu nibh ut justo sodales accumsan. Donec vel metus a ipsum rutrum eleifend ultricies ac purus. Aliquam erat volutpat. Donec orci dolor, fermentum in molestie sed, dictum quis lectus. Etiam augue mauris, euismod vitae aliquam sed, congue ut arcu. Sed dignissim vestibulum augue id consectetur. Vivamus eget diam dui, adipiscing malesuada ante.</p>'+
                    '<p>Suspendisse sodales mi at magna aliquam congue. Pellentesque hendrerit molestie nulla, sed euismod leo elementum ac. Integer laoreet ipsum ut turpis eleifend vestibulum. Quisque a dui imperdiet nibh condimentum ultrices. Nullam ultrices dolor ut sem fermentum vel tempor purus blandit. Aliquam erat volutpat. Sed sollicitudin dui ac mauris convallis non laoreet ligula tempus. Praesent sit amet elit turpis. Integer tempus faucibus dolor sit amet interdum. Nam sed nisi vel lorem venenatis feugiat non ac risus. Suspendisse sit amet lorem vitae libero commodo vulputate. Vivamus luctus, ipsum sed sagittis pharetra, diam justo bibendum massa, gravida suscipit lorem sapien vitae orci. Phasellus ultricies tempor lacinia.</p>'+
                    '<p>Curabitur varius cursus orci, ac sodales leo ultricies a. Praesent nunc lectus, gravida scelerisque consequat sed, mollis id tortor. Sed ac sem dui. Aliquam auctor elit vel odio sagittis vitae tempus arcu accumsan. Nunc vitae velit urna, in commodo diam. Ut a velit purus. Donec volutpat neque urna, feugiat placerat nisl. Vivamus eget vehicula magna. Nulla rutrum nisi vel nulla interdum ut dictum lectus suscipit. Praesent euismod, nulla rutrum varius commodo, massa mi lobortis lacus, a sollicitudin nisi massa a leo.</p>'+
                    '<p>Nam lobortis, eros in placerat pellentesque, tortor felis molestie massa, non ultrices eros purus ut justo. Pellentesque nunc arcu, dictum a elementum at, porttitor in lorem. Phasellus suscipit, enim id volutpat interdum, justo arcu adipiscing nulla, vitae aliquam elit quam a tellus. Proin non imperdiet leo. Nam a sodales risus. Sed molestie nulla sit amet ligula egestas bibendum. Donec at erat purus. Duis ac leo turpis, in condimentum est. Pellentesque ullamcorper, velit id placerat tempor, neque nibh cursus lacus, ut tincidunt metus mi non lacus.</p>',
            styleHtmlContent: true,
            scrollable: 'vertical',
            style: 'width: 100%;', // this is needed to make the container fill the screen
            docked: 'left',
            cls: 'slidenav',
            items: [{
                xtype: 'titlebar',
                title: 'Content',
                dock: 'top'
            }],
            //renderTo: document.body,
            draggable: {
                direction: 'horizontal'
            }
            //floating: true
        });
                
        this.add([
            this.list,
            this.container
        ]);
    },
    
    afterRender: function() {
        /*
        this.mon(this.container.el, {
            dragstart: this.onDragStart,
            scope: this
        });
        */
    },
    
    onDragStart: function(e) {
        if (e.absDeltaY < 5) {
            if (e.deltaX > 0) {
                // dragging right
                this.showList();
            } else {
                // dragging left
                this.hideList();
            }
        }
    },
    
    showList: function() {
        this.list.show();
        this.container.setDisabled(true);
    },
    
    hideList: function() {
        this.list.hide();
        this.container.setDisabled(false);
=======
        this.add([
            this.createNavigationList(this.store),
            this.createContainer()
        ]);
    },
    
    /**
     * Registers the model with Ext.ModelManager, if it hasn't been
     * already, and returns the name of the model for use in the store.
     */
    getModel: function() {
        model = 'SlideNavigationPanelItem';
        
        if (!Ext.ModelManager.get(model)) {
            Ext.regModel(model, {
                fields: ['title', 'group']
            });
        }
        
        return model;
    },
    
    /**
     * Generates a new Ext.dataview.List object to be used for displaying
     * the navigation items.
     */
    createNavigationList: function(store) {
        return Ext.create('Ext.dataview.List', Ext.merge({}, this.config.list, {
            store: store,
            docked: 'left',
            cls: 'x-slidenavigation-list',
            style: 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0'
        }));
    },
    
    /**
     * Generates and returns the Ext.Container to be used for displaying content.  This
     * is the "slideable" container that is positioned above the navigation list.
     */
    createContainer: function() {
        var config = this.config;
        return Ext.create('Ext.Container', Ext.merge({}, this.config.container, {
            docked: 'left',
            cls: 'x-slidenavigation-container',
            style: 'width: 100%; opacity: 1;',
            docked: 'left',
            draggable: {
                direction: 'horizontal',
                constraint: {
                    min: { x: 0, y: 0 },
                    max: { x: config.list.maxDrag || Math.max(screen.width, screen.height), y: 0 }
                },
                listeners: {
                    dragstart: function(draggable, e, offset, eOpts) {
                        if (config.slideSelector) {
                            node = e.target;
                            while (node = node.parentNode) {
                                if (node.className && node.className.indexOf(config.slideSelector) > -1) {
                                    return true;
                                }
                            }
                            return false;
                        }
                    },
                    
                    drag: Ext.Function.createThrottled(function(draggable, e, offset, eOpts) {
                        if (offset.x < 1) {
                            draggable.getElement().removeCls('open');
                        } else {
                            draggable.getElement().addCls('open');
                        }
                    }, 100),
                    
                    dragend: function(draggable, e, eOpts) {
                        var velocity  = Math.abs(e.deltaX / e.deltaTime),
                            direction = (e.deltaX > 0) ? "right" : "left",
                            offset    = Ext.clone(draggable.offset),
                            threshold = parseInt(config.list.width * .70);
                        
                        switch (direction) {
                            case "right":
                                offset.x = (velocity > 0.75 || offset.x > threshold) ? config.list.width : 0;
                                break;
                            case "left":
                                offset.x = (velocity > 0.75 || offset.x < threshold) ? 0 : config.list.width;
                                break;
                        }
                                                
                        draggable.setOffset(offset, {
                            duration: 100
                        });
                    }
                },
                translatable: {
                    listeners: {
                        animationend: function(translatable, b, c) {
                            // Remove the class when the animation is finished, but only
                            // if we're "closed"
                            el = this.down('container[cls="x-slidenavigation-container"]');
                            if (el.draggableBehavior.draggable.offset.x < 1) {
                                el.removeCls('open');
                            }
                        },
                        scope: this // The "x-slidenavigation" container
                    }
                }
            }
        }));
>>>>>>> gh-pages
    }
});