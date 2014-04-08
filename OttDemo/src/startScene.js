/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-2-24
 * Time: PM2:11
 * To change this template use File | Settings | File Templates.
 */

var startMenuLayer2 = ccs.UILayer.extend({

    movie2_0:null,
    movie3_0:null,
    movie2_1:null,
    movieEffect:null,

    init:function(){

        if(this._super()){

            var widget = ccs.GUIReader.getInstance().widgetFromJsonFile(s_HiSiliconDemo_1);
            this.addWidget(widget);
            this.movie2_0 = this.getWidgetByName("Movie2-0");
            this.movie2_0.setVisible(false);
            var  movie1_1 = this.getWidgetByName("Movie1-1");
            movie1_1.addTouchEventListener(this.movieTouchEvent, movie1_1);
            var  movie3_0 = this.getWidgetByName("Movie3-0");
            movie3_0.addTouchEventListener(this.movieTouchEvent, movie3_0);
            var  movie4_1 = this.getWidgetByName("Movie4-1");
            movie4_1.addTouchEventListener(this.movieTouchEvent, movie4_1);
            var  movie5_1 = this.getWidgetByName("Movie5-1");
            movie5_1.addTouchEventListener(this.movieTouchEvent, movie5_1);
            var  movie5_2 = this.getWidgetByName("Movie5-2");
            movie5_2.setVisible(true);
            movie5_2.addTouchEventListener(this.movieTouchEvent, movie5_2);
            var  movie6_1 = this.getWidgetByName("Movie6-1");
            movie6_1.addTouchEventListener(this.movieTouchEvent, movie6_1);
            var  series_Background = this.getWidgetByName("seriesBackground");
            series_Background.addTouchEventListener(this.movieTouchEvent, series_Background);

            //movie5_1.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.FadeOut.create(1.0),cc.DelayTime.create(2.0),cc.FadeIn.create(1.0))));
            movie5_2.runAction(cc.RepeatForever.create(cc.Sequence.create(cc.DelayTime.create(2.0),cc.FadeIn.create(2.0),cc.DelayTime.create(2.0),cc.FadeOut.create(2.0))));

            this.movieEffect = ccs.ImageView.create();
            this.movieEffect.loadTexture(s_movie_effect);

            this.movie2_1  = ccs.ImageView.create();
            this.movie2_1.loadTexture(s_Movie2_1);
            this.movieEffect.setVisible(false);
            this.movieEffect.setTag(100);
            this.getWidgetByTag(1).addChild(this.movieEffect);


            this.movie2_1.setScale(this.movie2_0.getContentSize().width/this.movie2_1.getContentSize().width, this.movie2_0.getContentSize().height/this.movie2_1.getContentSize().height);

            this.movie2_1.setAnchorPoint(this.movie2_0.getAnchorPoint());

            this.movie2_1.setPosition(this.movie2_0.getPosition());

            this.getWidgetByTag(1).addChild(this.movie2_1,3);

            var orbit1 = cc.OrbitCamera.create(3, 1, 0, 0, 360, 0, 0);
            var delay = cc.DelayTime.create(4);
            this.movie2_temp = true;
            this.movie2_1.runAction(cc.RepeatForever.create(cc.Sequence.create(orbit1,delay,cc.CallFunc.create(this.movie2_0Effect,this),delay.clone())));

            var mirror = ccs.UIImageView.create();
            mirror.loadTexture(s_mirror);
            mirror.setAnchorPoint(cc.p(0,0));
            mirror.setPosition(cc.p(150,-15));
            this.getWidgetByTag(1).addChild(mirror,5);
            this.getWidgetByTag(1).addChild(this.movieEffect);
        }
    },

    movie2_0Effect:function(){

        if(this.movie2_temp == true){

            this.movie2_1.loadTexture(s_Movie2_2);
            this.movie2_temp = false;
            this.movie2_1.setScale(this.movie2_0.getContentSize().width/this.movie2_1.getContentSize().width, this.movie2_0.getContentSize().height/this.movie2_1.getContentSize().height);
        }else{
            this.movie2_1.loadTexture(s_Movie2_1);
            this.movie2_temp = true;
            this.movie2_1.setScale(this.movie2_0.getContentSize().width/this.movie2_1.getContentSize().width, this.movie2_0.getContentSize().height/this.movie2_1.getContentSize().height);
        }
    },

    movieTouchEvent:function(pSender, type){

        var movieEffect = this.getParent().getChildByTag(100);
        var scaleX = this.getScaleX();
        var scaleY = this.getScaleY();
        if(ccs.TouchEventType.began==type){

            movieEffect.setVisible(true);
            movieEffect.setScale(this.getContentSize().width/movieEffect.getContentSize().width*1.70, this.getContentSize().height/movieEffect.getContentSize().height*1.70);
            this.setScaleX(scaleX*1.02);
            this.setScaleY(scaleY*1.02);
            movieEffect.setAnchorPoint(this.getAnchorPoint());
            movieEffect.setPosition(this.getPosition());
            movieEffect.setZOrder(this.getZOrder()-0.5);
            return false;
        }

        if(ccs.TouchEventType.ended==type){
            movieEffect.setScale(this.getContentSize().width/movieEffect.getContentSize().width*1.60, this.getContentSize().height/movieEffect.getContentSize().height*1.60);
            this.setScaleX(1);
            this.setScaleY(1);
        }
    }
});

var self;
var menu_effect_action_flag = false;

var startMenuLayer1 = ccs.UILayer.extend({

    menuEffect:null,
    init:function(scene){

        if(this._super()){

            thisScene = scene;
            self = this;
            var widget = ccs.GUIReader.getInstance().widgetFromJsonFile(s_HiSiliconDemo_2);
            this.addWidget(widget);
            var menu1_0 = this.getWidgetByName("Menu1-0");
            var menu1_1 = this.getWidgetByName("Menu1-1");
            var menu1_2 = this.getWidgetByName("Menu1-2");
            var menu1_3 = this.getWidgetByName("Menu1-3");
            var menu1_4 = this.getWidgetByName("Menu1-4");
            this.menuEffect = this.getWidgetByName("menuEffect");

            menu1_0.addTouchEventListener(this.onMenuChange, menu1_0);
            menu1_1.addTouchEventListener(this.onMenuChange, menu1_1);
            menu1_2.addTouchEventListener(this.onMenuChange, menu1_2);
            menu1_3.addTouchEventListener(this.onMenuChange, menu1_3);
            menu1_4.addTouchEventListener(this.onMenuChange, menu1_4);
            this.setTouchEnabled(true);
            menu1_0.setTouchEnabled(true);
            menu1_1.setTouchEnabled(true);
            menu1_3.setTouchEnabled(true);
            menu1_4.setTouchEnabled(true);
        }
    },

    onMenuChange:function(pSender, type){

        if(ccs.TouchEventType.began==type){
            if(!menu_effect_action_flag) {
                menu_effect_action_flag = true;
                var startLayer = self.getParent().getChildByTag(200);
                var positionNow = startLayer.getPosition();
                var actionBy = cc.EaseBackIn.create(cc.MoveBy.create(0.5, cc.p(2000, 0)));
                var actionBack = cc.Sequence.create(actionBy, cc.CallFunc.create(self.setLayer2Back, startLayer, self), actionBy.clone(),cc.CallFunc.create(self.setEffectActionDone,startLayer,self));
                startLayer.runAction(actionBack);

                //self.menuEffect.setPosition(cc.p(pSender.getPositionX(),pSender.getPositionY()-pSender.getContentSize().height/2));
                self.menuEffect.runAction(cc.MoveTo.create(0.2, cc.p(pSender.getPositionX(), pSender.getPositionY() - pSender.getContentSize().height / 2)));
            }
            return false;
        }
    },

    setLayer2Back:function(){
        var startLayer = this.getParent().getChildByTag(200);
        startLayer.setPosition(cc.p(-2000,0));
    },
    setEffectActionDone:function(){
        menu_effect_action_flag = false;
    },

    layer2SetPosition:function(layer2,position){

        this.setPosition(cc.p(0,0));
    }

});

var thisScene;

var startScene = cc.Scene.extend({

    onEnter:function(){

        var size = cc.Director.getInstance().getWinSize();
        var realSize = cc.Director.getInstance().getVisibleSize();
        var origin = cc.Director.getInstance().getVisibleOrigin();

        this._super();
        var startLayer1 = new startMenuLayer1();
        startLayer1.init(this);

        var startLayer2 = new startMenuLayer2();
        startLayer2.init();
        startLayer2.setTag(200);
//        var startLayer3 = new startMenuLayer2();
//        startLayer2.init();
//        startLayer2.setTag(300);

        this.addChild(startLayer1,0);
        this.addChild(startLayer2,1);
//        this.addChild(startLayer3,2);
//        startLayer3.setAnchorPoint(cc.p(0,0));
//        startLayer3.setPosition(cc.p(-2000,0))

        var particleLayer = cc.Layer.create();
        var particle1 = cc.ParticleSystem.create(s_mystic);
        particle1.setPositionType(cc.PARTICLE_TYPE_GROUPED);
        var particle2 = cc.ParticleSystem.create(s_mystic);
        particle2.setPositionType(cc.PARTICLE_TYPE_FREE);
        particle2.setScale(1.5);
        particleLayer.addChild(particle1, 2, cc.p(0.5,0.4), cc.p(realSize.width/2+origin.x, size.height/2));
        particleLayer.addChild(particle2, 2, cc.p(0.5,0.4), cc.p(realSize.width/2+origin.x, size.height/2));

        this.addChild(particleLayer,0.5);
    }
});
