gdjs.FinishCode = {};
gdjs.FinishCode.GDFinishObjects1= [];
gdjs.FinishCode.GDFinishObjects2= [];
gdjs.FinishCode.GDrestartObjects1= [];
gdjs.FinishCode.GDrestartObjects2= [];
gdjs.FinishCode.GDExitObjects1= [];
gdjs.FinishCode.GDExitObjects2= [];

gdjs.FinishCode.conditionTrue_0 = {val:false};
gdjs.FinishCode.condition0IsTrue_0 = {val:false};
gdjs.FinishCode.condition1IsTrue_0 = {val:false};
gdjs.FinishCode.condition2IsTrue_0 = {val:false};


gdjs.FinishCode.mapOfGDgdjs_46FinishCode_46GDExitObjects1Objects = Hashtable.newFrom({"Exit": gdjs.FinishCode.GDExitObjects1});gdjs.FinishCode.mapOfGDgdjs_46FinishCode_46GDrestartObjects1Objects = Hashtable.newFrom({"restart": gdjs.FinishCode.GDrestartObjects1});gdjs.FinishCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.FinishCode.GDExitObjects1.createFrom(runtimeScene.getObjects("Exit"));

gdjs.FinishCode.condition0IsTrue_0.val = false;
gdjs.FinishCode.condition1IsTrue_0.val = false;
{
gdjs.FinishCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinishCode.mapOfGDgdjs_46FinishCode_46GDExitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.FinishCode.condition0IsTrue_0.val ) {
{
gdjs.FinishCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.FinishCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.FinishCode.GDrestartObjects1.createFrom(runtimeScene.getObjects("restart"));

gdjs.FinishCode.condition0IsTrue_0.val = false;
gdjs.FinishCode.condition1IsTrue_0.val = false;
{
gdjs.FinishCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinishCode.mapOfGDgdjs_46FinishCode_46GDrestartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.FinishCode.condition0IsTrue_0.val ) {
{
gdjs.FinishCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.FinishCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


}; //End of gdjs.FinishCode.eventsList0xb0b28


gdjs.FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.FinishCode.GDFinishObjects1.length = 0;
gdjs.FinishCode.GDFinishObjects2.length = 0;
gdjs.FinishCode.GDrestartObjects1.length = 0;
gdjs.FinishCode.GDrestartObjects2.length = 0;
gdjs.FinishCode.GDExitObjects1.length = 0;
gdjs.FinishCode.GDExitObjects2.length = 0;

gdjs.FinishCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['FinishCode'] = gdjs.FinishCode;
