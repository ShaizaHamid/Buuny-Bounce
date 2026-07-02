gdjs.First_32ViewCode = {};
gdjs.First_32ViewCode.localVariables = [];
gdjs.First_32ViewCode.idToCallbackMap = new Map();
gdjs.First_32ViewCode.GDBunnyObjects1_1final = [];

gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1_1final = [];

gdjs.First_32ViewCode.GDSnowObjects1_1final = [];

gdjs.First_32ViewCode.GDSnowObjects1= [];
gdjs.First_32ViewCode.GDSnowObjects2= [];
gdjs.First_32ViewCode.GDBunnyObjects1= [];
gdjs.First_32ViewCode.GDBunnyObjects2= [];
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1= [];
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2= [];
gdjs.First_32ViewCode.GDscoreObjects1= [];
gdjs.First_32ViewCode.GDscoreObjects2= [];
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1= [];
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects2= [];
gdjs.First_32ViewCode.GDFall_9595Trees_9595BackgroundObjects1= [];
gdjs.First_32ViewCode.GDFall_9595Trees_9595BackgroundObjects2= [];


gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDBunnyObjects2Objects = Hashtable.newFrom({"Bunny": gdjs.First_32ViewCode.GDBunnyObjects2});
gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDLong_95959595rectangle_95959595glassObjects2Objects = Hashtable.newFrom({"Long_rectangle_glass": gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2});
gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDplay_95959595again_95959595buttonObjects1Objects = Hashtable.newFrom({"play_again_button": gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1});
gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDLong_95959595rectangle_95959595glassObjects1Objects = Hashtable.newFrom({"Long_rectangle_glass": gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1});
gdjs.First_32ViewCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bunny"), gdjs.First_32ViewCode.GDBunnyObjects1);
{for(var i = 0, len = gdjs.First_32ViewCode.GDBunnyObjects1.length ;i < len;++i) {
    gdjs.First_32ViewCode.GDBunnyObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.First_32ViewCode.GDBunnyObjects1.length ;i < len;++i) {
    gdjs.First_32ViewCode.GDBunnyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Any_Button_pressed.func(runtimeScene, 1, null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12761852);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "5b9930fb05c5d5896b5fcee8fb3f91e82536a81af773c5f1eff574155928e59d_Jump 9.aac", false, 100, gdjs.randomWithStep(0.8, 1.2, 0.2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "RepeatObs", 3, null);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "new", gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + gdjs.randomInRange(-7 * 32, 7 * 32), 0);
}
}

}


{

gdjs.First_32ViewCode.GDBunnyObjects1.length = 0;

gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1.length = 0;

gdjs.First_32ViewCode.GDSnowObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.First_32ViewCode.GDBunnyObjects1_1final.length = 0;
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1_1final.length = 0;
gdjs.First_32ViewCode.GDSnowObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bunny"), gdjs.First_32ViewCode.GDBunnyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Long_rectangle_glass"), gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDBunnyObjects2Objects, gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDLong_95959595rectangle_95959595glassObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.First_32ViewCode.GDBunnyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.First_32ViewCode.GDBunnyObjects1_1final.indexOf(gdjs.First_32ViewCode.GDBunnyObjects2[j]) === -1 )
            gdjs.First_32ViewCode.GDBunnyObjects1_1final.push(gdjs.First_32ViewCode.GDBunnyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2.length; j < jLen ; ++j) {
        if ( gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1_1final.indexOf(gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2[j]) === -1 )
            gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1_1final.push(gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bunny"), gdjs.First_32ViewCode.GDBunnyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Snow"), gdjs.First_32ViewCode.GDSnowObjects2);
for (var i = 0, k = 0, l = gdjs.First_32ViewCode.GDBunnyObjects2.length;i<l;++i) {
    if ( gdjs.First_32ViewCode.GDBunnyObjects2[i].getAABBBottom() > (( gdjs.First_32ViewCode.GDSnowObjects2.length === 0 ) ? 0 :gdjs.First_32ViewCode.GDSnowObjects2[0].getAABBTop()) ) {
        isConditionTrue_1 = true;
        gdjs.First_32ViewCode.GDBunnyObjects2[k] = gdjs.First_32ViewCode.GDBunnyObjects2[i];
        ++k;
    }
}
gdjs.First_32ViewCode.GDBunnyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.First_32ViewCode.GDBunnyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.First_32ViewCode.GDBunnyObjects1_1final.indexOf(gdjs.First_32ViewCode.GDBunnyObjects2[j]) === -1 )
            gdjs.First_32ViewCode.GDBunnyObjects1_1final.push(gdjs.First_32ViewCode.GDBunnyObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.First_32ViewCode.GDSnowObjects2.length; j < jLen ; ++j) {
        if ( gdjs.First_32ViewCode.GDSnowObjects1_1final.indexOf(gdjs.First_32ViewCode.GDSnowObjects2[j]) === -1 )
            gdjs.First_32ViewCode.GDSnowObjects1_1final.push(gdjs.First_32ViewCode.GDSnowObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.First_32ViewCode.GDBunnyObjects1_1final, gdjs.First_32ViewCode.GDBunnyObjects1);
gdjs.copyArray(gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1_1final, gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1);
gdjs.copyArray(gdjs.First_32ViewCode.GDSnowObjects1_1final, gdjs.First_32ViewCode.GDSnowObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12764476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.First_32ViewCode.GDBunnyObjects1 */
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1.length = 0;

{for(var i = 0, len = gdjs.First_32ViewCode.GDBunnyObjects1.length ;i < len;++i) {
    gdjs.First_32ViewCode.GDBunnyObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDplay_95959595again_95959595buttonObjects1Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "UI", 0) - 100, gdjs.evtTools.camera.getCameraY(runtimeScene, "UI", 0) - 50, "UI");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "e393c16c53a05345c011b67bcccd5ad6db8d61b5735a417f24a79d25e561bc73_Explosion 8.aac", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bunny"), gdjs.First_32ViewCode.GDBunnyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Long_rectangle_glass"), gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1.length;i<l;++i) {
    if ( gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1[i].getCenterXInScene() < (( gdjs.First_32ViewCode.GDBunnyObjects1.length === 0 ) ? 0 :gdjs.First_32ViewCode.GDBunnyObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1[k] = gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1[i];
        ++k;
    }
}
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.First_32ViewCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.First_32ViewCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.First_32ViewCode.GDscoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs.First_32ViewCode.mapOfGDgdjs_9546First_959532ViewCode_9546GDLong_95959595rectangle_95959595glassObjects1Objects) / 2));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_again_button"), gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1[k] = gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "First View", false);
}
}

}


};

gdjs.First_32ViewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.First_32ViewCode.GDSnowObjects1.length = 0;
gdjs.First_32ViewCode.GDSnowObjects2.length = 0;
gdjs.First_32ViewCode.GDBunnyObjects1.length = 0;
gdjs.First_32ViewCode.GDBunnyObjects2.length = 0;
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1.length = 0;
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2.length = 0;
gdjs.First_32ViewCode.GDscoreObjects1.length = 0;
gdjs.First_32ViewCode.GDscoreObjects2.length = 0;
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1.length = 0;
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects2.length = 0;
gdjs.First_32ViewCode.GDFall_9595Trees_9595BackgroundObjects1.length = 0;
gdjs.First_32ViewCode.GDFall_9595Trees_9595BackgroundObjects2.length = 0;

gdjs.First_32ViewCode.eventsList0(runtimeScene);
gdjs.First_32ViewCode.GDSnowObjects1.length = 0;
gdjs.First_32ViewCode.GDSnowObjects2.length = 0;
gdjs.First_32ViewCode.GDBunnyObjects1.length = 0;
gdjs.First_32ViewCode.GDBunnyObjects2.length = 0;
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects1.length = 0;
gdjs.First_32ViewCode.GDLong_9595rectangle_9595glassObjects2.length = 0;
gdjs.First_32ViewCode.GDscoreObjects1.length = 0;
gdjs.First_32ViewCode.GDscoreObjects2.length = 0;
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects1.length = 0;
gdjs.First_32ViewCode.GDplay_9595again_9595buttonObjects2.length = 0;
gdjs.First_32ViewCode.GDFall_9595Trees_9595BackgroundObjects1.length = 0;
gdjs.First_32ViewCode.GDFall_9595Trees_9595BackgroundObjects2.length = 0;


return;

}

gdjs['First_32ViewCode'] = gdjs.First_32ViewCode;
