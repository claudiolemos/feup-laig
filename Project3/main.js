include = function() {
  function f() {
    var a = this.readyState;
    (!a || /ded|te/.test(a)) && (c--, !c && e && d())
  }
  var a = arguments,
    b = document,
    c = a.length,
    d = a[c - 1],
    e = d.call;
  e && c--;
  for (var g, h = 0; c > h; h++) g = b.createElement("script"), g.src = arguments[h], g.async = !0, g.onload = g.onerror = g.onreadystatechange = f, (b.head || b.getElementsByTagName("head")[0]).appendChild(g)
};
serialInclude = function(a) {
  var b = console,
    c = serialInclude.l;
  if (a.length > 0) c.splice(0, 0, a);
  else b.log("Done!");
  if (c.length > 0) {
    if (c[0].length > 1) {
      var d = c[0].splice(0, 1);
      b.log("Loading " + d + "...");
      include(d, function() {
        serialInclude([]);
      });
    } else {
      var e = c[0][0];
      c.splice(0, 1);
      e.call();
    };
  } else b.log("Finished.");
};
serialInclude.l = new Array();

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function(m, key, value) {
      vars[decodeURIComponent(key)] = decodeURIComponent(value);
    });
  return vars;
}

serialInclude(['../lib/CGF.js',
  'XMLscene.js',
  'MySceneGraph.js',
  'MyInterface.js',
  'MyGraphNode.js',
  'CGFResourceReader.js',
  './primitives/MyRectangle.js',
  './primitives/MyTriangle.js',
  './primitives/MyCylinder.js',
  './primitives/MySphere.js',
  './primitives/MyTorus.js',
  './primitives/MyCircle.js',
  './primitives/MyUncoveredCylinder.js',
  './primitives/MyPlane.js',
  './primitives/MyPatch.js',
  './primitives/MyVehicle.js',
  './primitives/MyCylinder2.js',
  './primitives/MyTerrain.js',
  './primitives/MyWater.js',
  './primitives/OBJ.js',
  './animations/Animation.js',
  './animations/LinearAnimation.js',
  './animations/CircularAnimation.js',
  './animations/BezierAnimation.js',
  './animations/CameraAnimation.js',
  './game/Hawalis.js',
  './game/Server.js',
  './game/Board.js',
  './game/Pit.js',
  './game/Seed.js',

  main = function() {
    // Standard application, scene and interface setup
    var app = new CGFapplication(document.body);
    var myInterface = new MyInterface();
    var myScene = new XMLscene(myInterface);

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

    myInterface.setActiveCamera(myScene.camera);

    var filename = getUrlVars()['file'] || "classic.xml";

    var myGraph = new MySceneGraph(filename, myScene);

    app.run();
  }

]);
