gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDDinoVitaObjects1= [];
gdjs.Game_32OverCode.GDDinoVitaObjects2= [];
gdjs.Game_32OverCode.GDBackgroundColoredLandObjects1= [];
gdjs.Game_32OverCode.GDBackgroundColoredLandObjects2= [];
gdjs.Game_32OverCode.GDReplayObjects1= [];
gdjs.Game_32OverCode.GDReplayObjects2= [];
gdjs.Game_32OverCode.GDTextoObjects1= [];
gdjs.Game_32OverCode.GDTextoObjects2= [];
gdjs.Game_32OverCode.GDTxtListObjects1= [];
gdjs.Game_32OverCode.GDTxtListObjects2= [];
gdjs.Game_32OverCode.GDTexto3Objects1= [];
gdjs.Game_32OverCode.GDTexto3Objects2= [];
gdjs.Game_32OverCode.GDTscoreObjects1= [];
gdjs.Game_32OverCode.GDTscoreObjects2= [];
gdjs.Game_32OverCode.GDListObjects1= [];
gdjs.Game_32OverCode.GDListObjects2= [];
gdjs.Game_32OverCode.GDNnombreObjects1= [];
gdjs.Game_32OverCode.GDNnombreObjects2= [];
gdjs.Game_32OverCode.GDTexScoreObjects1= [];
gdjs.Game_32OverCode.GDTexScoreObjects2= [];
gdjs.Game_32OverCode.GDpruebaObjects1= [];
gdjs.Game_32OverCode.GDpruebaObjects2= [];
gdjs.Game_32OverCode.GDNomRankingObjects1= [];
gdjs.Game_32OverCode.GDNomRankingObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDChevronArrowRightObjects1= [];
gdjs.Game_32OverCode.GDChevronArrowRightObjects2= [];


gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDReplayObjects1Objects = Hashtable.newFrom({"Replay": gdjs.Game_32OverCode.GDReplayObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDListObjects1Objects = Hashtable.newFrom({"List": gdjs.Game_32OverCode.GDListObjects1});
gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f6395e19-0784-4425-a0c5-a770fcbe3159", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDReplayObjects1Objects = Hashtable.newFrom({"Replay": gdjs.Game_32OverCode.GDReplayObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDListObjects1Objects = Hashtable.newFrom({"List": gdjs.Game_32OverCode.GDListObjects1});
gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDChevronArrowRightObjects1Objects = Hashtable.newFrom({"ChevronArrowRight": gdjs.Game_32OverCode.GDChevronArrowRightObjects1});
gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Nnombre"), gdjs.Game_32OverCode.GDNnombreObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs.Game_32OverCode.GDNnombreObjects1.length === 0 ) ? "" :gdjs.Game_32OverCode.GDNnombreObjects1[0].getText()));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "f6395e19-0784-4425-a0c5-a770fcbe3159", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "f6395e19-0784-4425-a0c5-a770fcbe3159", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDChevronArrowRightObjects1Objects = Hashtable.newFrom({"ChevronArrowRight": gdjs.Game_32OverCode.GDChevronArrowRightObjects1});
gdjs.Game_32OverCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Game_32OverCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("List"), gdjs.Game_32OverCode.GDListObjects1);
gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.Game_32OverCode.GDReplayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TexScore"), gdjs.Game_32OverCode.GDTexScoreObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDReplayObjects1[i].setColor("13;216;67");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDListObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDListObjects1[i].setColor("13;216;67");
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDTexScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTexScoreObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "game over dino.mp3", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.Game_32OverCode.GDReplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDReplayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDReplayObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDReplayObjects1[i].setColor("5;172;48");
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("List"), gdjs.Game_32OverCode.GDListObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDListObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDListObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDListObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDListObjects1[i].setColor("5;172;48");
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Replay"), gdjs.Game_32OverCode.GDReplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDReplayObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDReplayObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDReplayObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDReplayObjects1[i].setColor("13;216;67");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("List"), gdjs.Game_32OverCode.GDListObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDListObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDListObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDListObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDListObjects1[i].setColor("13;216;67");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChevronArrowRight"), gdjs.Game_32OverCode.GDChevronArrowRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDChevronArrowRightObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDChevronArrowRightObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDChevronArrowRightObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDChevronArrowRightObjects1[i].setColor("5;172;48");
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ChevronArrowRight"), gdjs.Game_32OverCode.GDChevronArrowRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDChevronArrowRightObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDChevronArrowRightObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDChevronArrowRightObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDChevronArrowRightObjects1[i].setColor("13;216;67");
}
}}

}


{


gdjs.Game_32OverCode.eventsList3(runtimeScene);
}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDDinoVitaObjects1.length = 0;
gdjs.Game_32OverCode.GDDinoVitaObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundColoredLandObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundColoredLandObjects2.length = 0;
gdjs.Game_32OverCode.GDReplayObjects1.length = 0;
gdjs.Game_32OverCode.GDReplayObjects2.length = 0;
gdjs.Game_32OverCode.GDTextoObjects1.length = 0;
gdjs.Game_32OverCode.GDTextoObjects2.length = 0;
gdjs.Game_32OverCode.GDTxtListObjects1.length = 0;
gdjs.Game_32OverCode.GDTxtListObjects2.length = 0;
gdjs.Game_32OverCode.GDTexto3Objects1.length = 0;
gdjs.Game_32OverCode.GDTexto3Objects2.length = 0;
gdjs.Game_32OverCode.GDTscoreObjects1.length = 0;
gdjs.Game_32OverCode.GDTscoreObjects2.length = 0;
gdjs.Game_32OverCode.GDListObjects1.length = 0;
gdjs.Game_32OverCode.GDListObjects2.length = 0;
gdjs.Game_32OverCode.GDNnombreObjects1.length = 0;
gdjs.Game_32OverCode.GDNnombreObjects2.length = 0;
gdjs.Game_32OverCode.GDTexScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDTexScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDpruebaObjects1.length = 0;
gdjs.Game_32OverCode.GDpruebaObjects2.length = 0;
gdjs.Game_32OverCode.GDNomRankingObjects1.length = 0;
gdjs.Game_32OverCode.GDNomRankingObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDChevronArrowRightObjects1.length = 0;
gdjs.Game_32OverCode.GDChevronArrowRightObjects2.length = 0;

gdjs.Game_32OverCode.eventsList4(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
