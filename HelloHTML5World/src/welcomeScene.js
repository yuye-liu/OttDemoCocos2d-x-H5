/**
 * Created with JetBrains WebStorm.
 * User: admin
 * Date: 14-2-25
 * Time: AM10:11
 * To change this template use File | Settings | File Templates.
 */

var welcomeScene = cc.Scene.extend({

    onEnter:function(){

        this._super();
        ccs.ArmatureDataManager.getInstance().addArmatureFileInfo(s_ChenXiaoGeWelcome_ExportJson);
        var size = cc.Director.getInstance().getWinSize();

        var layer = ccs.UILayer.create();
        var loading = ccs.UILabel.create();
        loading.init();
        loading.setText("Loading...");
        loading.setFontSize(60);
        loading.setAnchorPoint(cc.p(0,0));
        loading.setPosition(cc.p(size.width/2.5, size.height/2));
        var armature = ccs.Armature.create("ChenXiaoGeWelcome");
        armature.getAnimation().play("Animation1");
        armature.getAnimation().setSpeedScale(2.0);
        armature.setAnchorPoint(cc.p(0,0));
        armature.setPosition(cc.p(size.width/3, size.height/2));
        layer.addChild(armature);
        layer.addWidget(loading);

        this.addChild(layer);

        //layer.setTouchEnabled(true);
        //loading.setTouchEnabled(true);
        //loading.addTouchEventListener(this.replaceScene, loading);

    },

    replaceScene:function(pSender, type){

        if(ccs.TouchEventType.began == type){
            var start = new startScene();
            var startTransition =  cc.TransitionProgressHorizontal.create(1, start);
            cc.Director.getInstance().replaceScene(startTransition);
            return true;
        }
    }
});
