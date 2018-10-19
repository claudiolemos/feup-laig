/**
* MyInterface class, creating a GUI interface.
*/
class MyInterface extends CGFinterface {
    /**
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Initializes the interface.
     * @param {CGFapplication} application
     */
    init(application) {
        super.init(application);
        // init GUI. For more information on the methods, check:
        //  http://workshop.chromeexperiments.com/examples/gui

        this.gui = new dat.GUI();
        this.cameraController;

        // add a group of controls (and open/expand by defult)

        this.initKeys();

        return true;
    }

    /**
     * Adds a folder containing the IDs of the lights passed as parameter.
     * @param {array} lights
     */
    addLightsGroup(lights) {

        var group = this.gui.addFolder("Lights");
        group.open();

        // add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
        // e.g. this.option1=true; this.option2=false;

        for (var key in lights) {
            if (lights.hasOwnProperty(key)) {
                this.scene.lightValues[key] = lights[key].enabled;
                group.add(this.scene.lightValues, key);
            }
        }
    }

    /**
     * Adds a list containing the IDs of the views passed as parameter.
     * @param {array} views
     */
    addViews(views){
      var scene = this.scene;

      var viewsID = [];
      for (var key in views)
        viewsID.push(key);

      var controller = this.gui.add(this.scene, 'currentCamera', viewsID).name("Camera");

      controller.onChange(function(value){
        scene.updateCamera(value);
      });
    }

    /**
    * Starts the keyboard event listener
    */
    initKeys() {
  		this.scene.gui=this;
  		this.processKeyboard=function(){};
  		this.activeKeys={};
  	};

    /**
    * Updates currentMaterial when the M key is pressed
    */
  	processKeyDown(event) {
  		this.activeKeys[event.code]=true;
      if(event.key == "m" || event.key == "M")
        this.scene.currentMaterial++;
    	this.activeKeys[event.code]=false;
  	};
}
