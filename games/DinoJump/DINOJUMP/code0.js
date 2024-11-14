gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayObjects1= [];
gdjs.MenuCode.GDPlayObjects2= [];
gdjs.MenuCode.GDDinoVitaObjects1= [];
gdjs.MenuCode.GDDinoVitaObjects2= [];
gdjs.MenuCode.GDRinoObjects1= [];
gdjs.MenuCode.GDRinoObjects2= [];
gdjs.MenuCode.GDDINOJUMPObjects1= [];
gdjs.MenuCode.GDDINOJUMPObjects2= [];
gdjs.MenuCode.GDBackgroundColoredLandObjects1= [];
gdjs.MenuCode.GDBackgroundColoredLandObjects2= [];
gdjs.MenuCode.GDCactusObjects1= [];
gdjs.MenuCode.GDCactusObjects2= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.MenuCode.GDPlayObjects1});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rino"), gdjs.MenuCode.GDRinoObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDRinoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDRinoObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setColor("13;216;67");
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Music Dino Inicio.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DinoVita"), gdjs.MenuCode.GDDinoVitaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDDinoVitaObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDDinoVitaObjects1[i].isCurrentAnimationName("Idle") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDDinoVitaObjects1[k] = gdjs.MenuCode.GDDinoVitaObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDDinoVitaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].enableEffect("38;0;255", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setColor("5;172;48");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDPlayObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.MenuCode.GDPlayObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayObjects1[i].setColor("13;216;67");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayObjects1.length = 0;
gdjs.MenuCode.GDPlayObjects2.length = 0;
gdjs.MenuCode.GDDinoVitaObjects1.length = 0;
gdjs.MenuCode.GDDinoVitaObjects2.length = 0;
gdjs.MenuCode.GDRinoObjects1.length = 0;
gdjs.MenuCode.GDRinoObjects2.length = 0;
gdjs.MenuCode.GDDINOJUMPObjects1.length = 0;
gdjs.MenuCode.GDDINOJUMPObjects2.length = 0;
gdjs.MenuCode.GDBackgroundColoredLandObjects1.length = 0;
gdjs.MenuCode.GDBackgroundColoredLandObjects2.length = 0;
gdjs.MenuCode.GDCactusObjects1.length = 0;
gdjs.MenuCode.GDCactusObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
