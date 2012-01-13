Ext.define('app.view.SlideNavigationPanel', {
    extend: 'Ext.Container',
    requires: [
        'Ext.dataview.List'
    ],
    xtype: 'slidenav',
    config: {
        model: 'SlideNavigationPanelItem'
    },
    
    initialize: function() {
        this.callParent();
                
        model = this.getInitialConfig('model');
        
        if (!Ext.ModelManager.get(model)) {
            Ext.regModel(model, {
                fields: ['title', 'group']
            });
        }
        
        this.store = Ext.create('Ext.data.Store', {
            model: model,
            sorters: 'group',
            getGroupString: function(record) {
                return record.get('group');
            },
            data: [
                {title: 'Item 1', group: 'Group 1'},
                {title: 'Item 2', group: 'Group 1'},
                {title: 'Item 3', group: 'Group 2'}
            ]
        });
        
        this.list = Ext.create('Ext.dataview.List', {
            store: this.store,
            itemTpl: '{title}',
            grouped: true,
            width: 200,
            docked: 'left',
            hidden: true,
            items: [{
                xtype: 'titlebar',
                title: 'Navigation',
                dock: 'top'
            }]
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
            items: [{
                xtype: 'titlebar',
                title: 'Content',
                dock: 'top'
            }]
        });
                
        this.add([
            this.list,
            this.container
        ]);
    },
    
    afterRender: function() {
        this.mon(this.container.el, {
            dragstart: this.onDragStart,
            scope: this
        });
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
    }
});