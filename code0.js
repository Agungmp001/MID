gdjs.MenuCode = {};
gdjs.MenuCode.GDbgMenuObjects1= [];
gdjs.MenuCode.GDbgMenuObjects2= [];
gdjs.MenuCode.GDWellcomeObjects1= [];
gdjs.MenuCode.GDWellcomeObjects2= [];
gdjs.MenuCode.GDstarObjects1= [];
gdjs.MenuCode.GDstarObjects2= [];
gdjs.MenuCode.GDexitObjects1= [];
gdjs.MenuCode.GDexitObjects2= [];
gdjs.MenuCode.GDsupportObjects1= [];
gdjs.MenuCode.GDsupportObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.MenuCode.GDstarObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitObjects1Objects = Hashtable.newFrom({"exit": gdjs.MenuCode.GDexitObjects1});gdjs.MenuCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.MenuCode.GDstarObjects1.createFrom(runtimeScene.getObjects("star"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDstarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.MenuCode.GDexitObjects1.createFrom(runtimeScene.getObjects("exit"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDexitObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.MenuCode.eventsList0xb0b28


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MenuCode.GDbgMenuObjects1.length = 0;
gdjs.MenuCode.GDbgMenuObjects2.length = 0;
gdjs.MenuCode.GDWellcomeObjects1.length = 0;
gdjs.MenuCode.GDWellcomeObjects2.length = 0;
gdjs.MenuCode.GDstarObjects1.length = 0;
gdjs.MenuCode.GDstarObjects2.length = 0;
gdjs.MenuCode.GDexitObjects1.length = 0;
gdjs.MenuCode.GDexitObjects2.length = 0;
gdjs.MenuCode.GDsupportObjects1.length = 0;
gdjs.MenuCode.GDsupportObjects2.length = 0;

gdjs.MenuCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['MenuCode'] = gdjs.MenuCode;
