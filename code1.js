gdjs.GameCode = {};
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.GDtopObjects1= [];
gdjs.GameCode.GDtopObjects2= [];
gdjs.GameCode.GDtopObjects3= [];
gdjs.GameCode.GDleftObjects1= [];
gdjs.GameCode.GDleftObjects2= [];
gdjs.GameCode.GDleftObjects3= [];
gdjs.GameCode.GDrightObjects1= [];
gdjs.GameCode.GDrightObjects2= [];
gdjs.GameCode.GDrightObjects3= [];
gdjs.GameCode.GDtgObjects1= [];
gdjs.GameCode.GDtgObjects2= [];
gdjs.GameCode.GDtgObjects3= [];
gdjs.GameCode.GDplayerObjects1= [];
gdjs.GameCode.GDplayerObjects2= [];
gdjs.GameCode.GDplayerObjects3= [];
gdjs.GameCode.GDcoinObjects1= [];
gdjs.GameCode.GDcoinObjects2= [];
gdjs.GameCode.GDcoinObjects3= [];
gdjs.GameCode.GDfisnihObjects1= [];
gdjs.GameCode.GDfisnihObjects2= [];
gdjs.GameCode.GDfisnihObjects3= [];
gdjs.GameCode.GDPoinObjects1= [];
gdjs.GameCode.GDPoinObjects2= [];
gdjs.GameCode.GDPoinObjects3= [];
gdjs.GameCode.GDmusuhObjects1= [];
gdjs.GameCode.GDmusuhObjects2= [];
gdjs.GameCode.GDmusuhObjects3= [];
gdjs.GameCode.GDkiriObjects1= [];
gdjs.GameCode.GDkiriObjects2= [];
gdjs.GameCode.GDkiriObjects3= [];
gdjs.GameCode.GDkananObjects1= [];
gdjs.GameCode.GDkananObjects2= [];
gdjs.GameCode.GDkananObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.eventsList0x661508 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDplayerObjects1 */

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x661508
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcoinObjects1Objects = Hashtable.newFrom({"coin": gdjs.GameCode.GDcoinObjects1});gdjs.GameCode.eventsList0x696de8 = function(runtimeScene) {

}; //End of gdjs.GameCode.eventsList0x696de8
gdjs.GameCode.eventsList0x661fb0 = function(runtimeScene) {

{


{
}

}


{

/* Reuse gdjs.GameCode.GDcoinObjects1 */

for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDcoinObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPoinObjects2.createFrom(runtimeScene.getObjects("Poin"));
gdjs.GameCode.GDcoinObjects2.createFrom(gdjs.GameCode.GDcoinObjects1);


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDcoinObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDcoinObjects2.length = 0;
gdjs.GameCode.GDcoinObjects2.push(gdjs.GameCode.forEachTemporary2);
if (true) {
{gdjs.evtTools.sound.playSound(runtimeScene, "..\\..\\Downloads\\Compressed\\coin.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDcoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcoinObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoinObjects2[i].setString("Score : " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) + 1));
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}
}

}


}; //End of gdjs.GameCode.eventsList0x661fb0
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDfisnihObjects1Objects = Hashtable.newFrom({"fisnih": gdjs.GameCode.GDfisnihObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects = Hashtable.newFrom({"musuh": gdjs.GameCode.GDmusuhObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDkananObjects1Objects = Hashtable.newFrom({"kanan": gdjs.GameCode.GDkananObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects = Hashtable.newFrom({"musuh": gdjs.GameCode.GDmusuhObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDkiriObjects1Objects = Hashtable.newFrom({"kiri": gdjs.GameCode.GDkiriObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects = Hashtable.newFrom({"musuh": gdjs.GameCode.GDmusuhObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.GameCode.GDplayerObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects = Hashtable.newFrom({"musuh": gdjs.GameCode.GDmusuhObjects1});gdjs.GameCode.eventsList0x661348 = function(runtimeScene) {

{


{
}

}


{


{
}

}


}; //End of gdjs.GameCode.eventsList0x661348
gdjs.GameCode.eventsList0xb0b28 = function(runtimeScene) {

{

gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setAnimation(3);
}
}}

}


{

gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x661508(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.GameCode.GDcoinObjects1.createFrom(runtimeScene.getObjects("coin"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDcoinObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x661fb0(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDfisnihObjects1.createFrom(runtimeScene.getObjects("fisnih"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDfisnihObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish", false);
}}

}


{

gdjs.GameCode.GDkananObjects1.createFrom(runtimeScene.getObjects("kanan"));
gdjs.GameCode.GDmusuhObjects1.createFrom(runtimeScene.getObjects("musuh"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDkananObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmusuhObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].returnVariable(gdjs.GameCode.GDmusuhObjects1[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.GameCode.GDkiriObjects1.createFrom(runtimeScene.getObjects("kiri"));
gdjs.GameCode.GDmusuhObjects1.createFrom(runtimeScene.getObjects("musuh"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDkiriObjects1Objects, false, runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmusuhObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].returnVariable(gdjs.GameCode.GDmusuhObjects1[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.GameCode.GDmusuhObjects1.createFrom(runtimeScene.getObjects("musuh"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDmusuhObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDmusuhObjects1[i].getVariableString(gdjs.GameCode.GDmusuhObjects1[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDmusuhObjects1[k] = gdjs.GameCode.GDmusuhObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDmusuhObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmusuhObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].flipX(false);
}
}}

}


{

gdjs.GameCode.GDmusuhObjects1.createFrom(runtimeScene.getObjects("musuh"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDmusuhObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDmusuhObjects1[i].getVariableString(gdjs.GameCode.GDmusuhObjects1[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDmusuhObjects1[k] = gdjs.GameCode.GDmusuhObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDmusuhObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmusuhObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDplayerObjects1.length !== 0 ? gdjs.GameCode.GDplayerObjects1[0] : null), false, "", 0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDkananObjects1.createFrom(runtimeScene.getObjects("kanan"));
gdjs.GameCode.GDkiriObjects1.createFrom(runtimeScene.getObjects("kiri"));
{for(var i = 0, len = gdjs.GameCode.GDkiriObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDkiriObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDkananObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDkananObjects1[i].hide();
}
}}

}


{

gdjs.GameCode.GDmusuhObjects1.createFrom(runtimeScene.getObjects("musuh"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects, false, runtimeScene);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmusuhObjects1 */
/* Reuse gdjs.GameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmusuhObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmusuhObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.GameCode.GDmusuhObjects1.createFrom(runtimeScene.getObjects("musuh"));
gdjs.GameCode.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDplayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmusuhObjects1Objects, false, runtimeScene);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDplayerObjects1[k] = gdjs.GameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDplayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDplayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


{


{

{ //Subevents
gdjs.GameCode.eventsList0x661348(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.GameCode.eventsList0xb0b28


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameCode.GDtopObjects1.length = 0;
gdjs.GameCode.GDtopObjects2.length = 0;
gdjs.GameCode.GDtopObjects3.length = 0;
gdjs.GameCode.GDleftObjects1.length = 0;
gdjs.GameCode.GDleftObjects2.length = 0;
gdjs.GameCode.GDleftObjects3.length = 0;
gdjs.GameCode.GDrightObjects1.length = 0;
gdjs.GameCode.GDrightObjects2.length = 0;
gdjs.GameCode.GDrightObjects3.length = 0;
gdjs.GameCode.GDtgObjects1.length = 0;
gdjs.GameCode.GDtgObjects2.length = 0;
gdjs.GameCode.GDtgObjects3.length = 0;
gdjs.GameCode.GDplayerObjects1.length = 0;
gdjs.GameCode.GDplayerObjects2.length = 0;
gdjs.GameCode.GDplayerObjects3.length = 0;
gdjs.GameCode.GDcoinObjects1.length = 0;
gdjs.GameCode.GDcoinObjects2.length = 0;
gdjs.GameCode.GDcoinObjects3.length = 0;
gdjs.GameCode.GDfisnihObjects1.length = 0;
gdjs.GameCode.GDfisnihObjects2.length = 0;
gdjs.GameCode.GDfisnihObjects3.length = 0;
gdjs.GameCode.GDPoinObjects1.length = 0;
gdjs.GameCode.GDPoinObjects2.length = 0;
gdjs.GameCode.GDPoinObjects3.length = 0;
gdjs.GameCode.GDmusuhObjects1.length = 0;
gdjs.GameCode.GDmusuhObjects2.length = 0;
gdjs.GameCode.GDmusuhObjects3.length = 0;
gdjs.GameCode.GDkiriObjects1.length = 0;
gdjs.GameCode.GDkiriObjects2.length = 0;
gdjs.GameCode.GDkiriObjects3.length = 0;
gdjs.GameCode.GDkananObjects1.length = 0;
gdjs.GameCode.GDkananObjects2.length = 0;
gdjs.GameCode.GDkananObjects3.length = 0;

gdjs.GameCode.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['GameCode'] = gdjs.GameCode;
