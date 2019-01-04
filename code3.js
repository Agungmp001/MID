gdjs.GameOverCode = {};
gdjs.GameOverCode.GDoverObjects1= [];
gdjs.GameOverCode.GDoverObjects2= [];
gdjs.GameOverCode.GDstarObjects1= [];
gdjs.GameOverCode.GDstarObjects2= [];
gdjs.GameOverCode.GDExitObjects1= [];
gdjs.GameOverCode.GDExitObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.GameOverCode.GDstarObjects1});gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.GameOverCode.GDExitObjects1});gdjs.GameOverCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.GameOverCode.GDstarObjects1.createFrom(runtimeScene.getObjects("star"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDstarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.GameOverCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xb0b28


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameOverCode.GDoverObjects1.length = 0;
gdjs.GameOverCode.GDoverObjects2.length = 0;
gdjs.GameOverCode.GDstarObjects1.length = 0;
gdjs.GameOverCode.GDstarObjects2.length = 0;
gdjs.GameOverCode.GDExitObjects1.length = 0;
gdjs.GameOverCode.GDExitObjects2.length = 0;

gdjs.GameOverCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['GameOverCode'] = gdjs.GameOverCode;
