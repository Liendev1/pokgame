gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects1= [];
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects2= [];
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects3= [];
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects4= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3= [];
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects4= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects1= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects4= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects1= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects3= [];
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects4= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects3= [];
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects4= [];
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects1= [];
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2= [];
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects3= [];
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects4= [];
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects1= [];
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2= [];
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects3= [];
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects4= [];
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects1= [];
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2= [];
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects3= [];
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects4= [];
gdjs.Untitled_32sceneCode.GDRock1Objects1= [];
gdjs.Untitled_32sceneCode.GDRock1Objects2= [];
gdjs.Untitled_32sceneCode.GDRock1Objects3= [];
gdjs.Untitled_32sceneCode.GDRock1Objects4= [];
gdjs.Untitled_32sceneCode.GDRinoObjects1= [];
gdjs.Untitled_32sceneCode.GDRinoObjects2= [];
gdjs.Untitled_32sceneCode.GDRinoObjects3= [];
gdjs.Untitled_32sceneCode.GDRinoObjects4= [];
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects1= [];
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects2= [];
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects3= [];
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects4= [];
gdjs.Untitled_32sceneCode.GDTextoSObjects1= [];
gdjs.Untitled_32sceneCode.GDTextoSObjects2= [];
gdjs.Untitled_32sceneCode.GDTextoSObjects3= [];
gdjs.Untitled_32sceneCode.GDTextoSObjects4= [];
gdjs.Untitled_32sceneCode.GDTextoMObjects1= [];
gdjs.Untitled_32sceneCode.GDTextoMObjects2= [];
gdjs.Untitled_32sceneCode.GDTextoMObjects3= [];
gdjs.Untitled_32sceneCode.GDTextoMObjects4= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects4= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10003220);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Dino salto.mp3", false, 100, 1);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects2Objects = Hashtable.newFrom({"Player_Dino": gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595smallObjects2Objects = Hashtable.newFrom({"Cactus_small": gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2});
gdjs.Untitled_32sceneCode.asyncCallback10003780 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3[i].enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3[i].enableEffect("Effect2", false);
}
}}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2) asyncObjectsList.addObject("Player_Dino", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10003780(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects = Hashtable.newFrom({"Player_Dino": gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595bigObjects1Objects = Hashtable.newFrom({"Cactus_big": gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects1});
gdjs.Untitled_32sceneCode.asyncCallback10005916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2);

{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].enableEffect("Effect2", false);
}
}}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1) asyncObjectsList.addObject("Player_Dino", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10005916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].setAnimationName("Move");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].setAnimationName("Crouch");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[k] = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].setAnimationName("Crouch");
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus_small"), gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects2Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595smallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2[i].enableEffect("Effect2", true);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus_big"), gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595bigObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1[i].enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1[i].enableEffect("Effect2", true);
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BackgroundColoredLand"), gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("BackgroundMountains"), gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Door_Pasto"), gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects1[i].getXOffset() + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects1[i].setXOffset(gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects1[i].getXOffset() + (50 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.Untitled_32sceneCode.asyncCallback10012916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Cactus_big"), gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects4);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects4.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects4[i].setX(gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects4[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10012916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10012820 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Cactus_small"), gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects3[i].setX(gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects3[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10012820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10013748 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Decoration_Pasto"), gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3[i].setX(gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10013748(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10014588 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Decoration_Pasto2"), gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects3[i].setX(gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects3[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}
gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10014588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10014940 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("SmallPlant2"), gdjs.Untitled_32sceneCode.GDSmallPlant2Objects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSmallPlant2Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSmallPlant2Objects3[i].setX(gdjs.Untitled_32sceneCode.GDSmallPlant2Objects3[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}
gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10014940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10015300 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Rock1"), gdjs.Untitled_32sceneCode.GDRock1Objects3);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRock1Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRock1Objects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRock1Objects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRock1Objects3[i].setX(gdjs.Untitled_32sceneCode.GDRock1Objects3[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}
gdjs.Untitled_32sceneCode.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10015300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10015884 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Rino"), gdjs.Untitled_32sceneCode.GDRinoObjects2);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRinoObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRinoObjects2[i].setX(gdjs.Untitled_32sceneCode.GDRinoObjects2[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) + 5));
}
}}
gdjs.Untitled_32sceneCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(15), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10015884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.Untitled_32sceneCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cactus_small"), gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2[i].getX() < -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2[k] = gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2[i].setX(1367);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus_big"), gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2[i].getX() < -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2[k] = gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2[i].setX(1367);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Decoration_Pasto"), gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2[i].getX() < -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2[k] = gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2[i].setX(1367);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Decoration_Pasto2"), gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2[i].getX() < -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2[k] = gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2[i].setX(1367);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallPlant2"), gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2[i].getX() < -(64) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2[k] = gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2[i].setX(1367);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rock1"), gdjs.Untitled_32sceneCode.GDRock1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRock1Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRock1Objects2[i].getX() < -(464) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRock1Objects2[k] = gdjs.Untitled_32sceneCode.GDRock1Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRock1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDRock1Objects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRock1Objects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRock1Objects2[i].setX(1367);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rino"), gdjs.Untitled_32sceneCode.GDRinoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRinoObjects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRinoObjects2[i].getX() < -(700) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRinoObjects2[k] = gdjs.Untitled_32sceneCode.GDRinoObjects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRinoObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDRinoObjects2 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDRinoObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDRinoObjects2[i].setX(2000);
}
}}

}


{


gdjs.Untitled_32sceneCode.eventsList12(runtimeScene);
}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Untitled_32sceneCode.GDNewSprite2Objects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects = Hashtable.newFrom({"Player_Dino": gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595smallObjects1Objects = Hashtable.newFrom({"Cactus_small": gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects = Hashtable.newFrom({"Player_Dino": gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595bigObjects1Objects = Hashtable.newFrom({"Cactus_big": gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects = Hashtable.newFrom({"Player_Dino": gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1});
gdjs.Untitled_32sceneCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1[i].enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1[i].enableEffect("Effect2", false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SEGUNDOS");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Music Dino.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SEGUNDOS") > 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(+(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SEGUNDOS");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.common.logicalNegation(false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextoS"), gdjs.Untitled_32sceneCode.GDTextoSObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDTextoSObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDTextoSObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "SEGUNDOS") > 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(+(1));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "SEGUNDOS");
}}

}


{


gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList13(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Untitled_32sceneCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDNewSprite2Objects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "game over dinoJump.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus_small"), gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595smallObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.adMob.showRewardedVideo();
}{gdjs.evtTools.sound.playMusic(runtimeScene, "game over dinoJump.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus_big"), gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player_Dino"), gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDCactus_95959595bigObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayer_95959595DinoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "game over dinoJump.wav", false, 100, 1);
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDoor_9595PastoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDPlayer_9595DinoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595PastoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDDecoration_9595Pasto2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundColoredLandObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595smallObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDCactus_9595bigObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDSmallPlant2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDRock1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDRock1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDRock1Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDRock1Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDRinoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRinoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRinoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDRinoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDBackgroundMountainsObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTextoSObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTextoSObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTextoSObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTextoSObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDTextoMObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTextoMObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTextoMObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDTextoMObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects4.length = 0;

gdjs.Untitled_32sceneCode.eventsList14(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
