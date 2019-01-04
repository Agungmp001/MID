<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

	<style>
		body {
			margin: 0;
			padding: 0;
			background-color: #000000;
            overflow: hidden;
		}
        #canvasArea {
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;
        }

        
	</style>
    <!-- Libs and GDJS core files : -->
		<script src="libs\jshashtable.js"></script>
	<script src="gd.js"></script>
	<script src="gd-splash-image.js"></script>
	<script src="libs\hshg.js"></script>
	<script src="libs\rbush.js"></script>
	<script src="inputmanager.js"></script>
	<script src="timemanager.js"></script>
	<script src="runtimeobject.js"></script>
	<script src="profiler.js"></script>
	<script src="runtimescene.js"></script>
	<script src="scenestack.js"></script>
	<script src="polygon.js"></script>
	<script src="force.js"></script>
	<script src="layer.js"></script>
	<script src="timer.js"></script>
	<script src="runtimegame.js"></script>
	<script src="variable.js"></script>
	<script src="variablescontainer.js"></script>
	<script src="oncetriggers.js"></script>
	<script src="runtimebehavior.js"></script>
	<script src="spriteruntimeobject.js"></script>
	<script src="events-tools\commontools.js"></script>
	<script src="events-tools\runtimescenetools.js"></script>
	<script src="events-tools\inputtools.js"></script>
	<script src="events-tools\objecttools.js"></script>
	<script src="events-tools\cameratools.js"></script>
	<script src="events-tools\soundtools.js"></script>
	<script src="events-tools\storagetools.js"></script>
	<script src="events-tools\stringtools.js"></script>
	<script src="events-tools\windowtools.js"></script>
	<script src="events-tools\networktools.js"></script>
	<script src="pixi-renderers\pixi.js"></script>
	<script src="pixi-renderers\pixi-filters-tools.js"></script>
	<script src="pixi-renderers\runtimegame-pixi-renderer.js"></script>
	<script src="pixi-renderers\runtimescene-pixi-renderer.js"></script>
	<script src="pixi-renderers\layer-pixi-renderer.js"></script>
	<script src="pixi-renderers\pixi-image-manager.js"></script>
	<script src="pixi-renderers\spriteruntimeobject-pixi-renderer.js"></script>
	<script src="pixi-renderers\loadingscreen-pixi-renderer.js"></script>
	<script src="howler-sound-manager\howler.min.js"></script>
	<script src="howler-sound-manager\howler-sound-manager.js"></script>
	<script src="fontfaceobserver-font-manager\fontfaceobserver.js"></script>
	<script src="fontfaceobserver-font-manager\fontfaceobserver-font-manager.js"></script>
	<script src="Extensions\TextObject\textruntimeobject-pixi-renderer.js"></script>
	<script src="Extensions\TextObject\textruntimeobject.js"></script>
	<script src="Extensions\TiledSpriteObject\tiledspriteruntimeobject-pixi-renderer.js"></script>
	<script src="Extensions\TiledSpriteObject\tiledspriteruntimeobject.js"></script>
	<script src="code0.js"></script>
	<script src="Extensions\PlatformBehavior\platformerobjectruntimebehavior.js"></script>
	<script src="Extensions\PlatformBehavior\platformruntimebehavior.js"></script>
	<script src="code1.js"></script>
	<script src="code2.js"></script>
	<script src="code3.js"></script>
	<script src="data.js"></script>


</head>
<body>
    <div id="canvasArea"></div>

    
	<script>

    (function() {
        //Initialization
        gdjs.registerObjects();
        gdjs.registerBehaviors();
        gdjs.registerGlobalCallbacks();

        var game = new gdjs.RuntimeGame(gdjs.projectData, {});

        //Create a renderer
        var canvasArea = document.getElementById("canvasArea");
        game.getRenderer().createStandardCanvas(canvasArea);

        //Bind keyboards/mouse/touch events
        game.getRenderer().bindStandardEvents(game.getInputManager(), window, document);

        //Load all assets and start the game
        game.loadAllAssets(function() {
            game.startGameLoop();
        });
    })();

	</script>
</body>
</html>
