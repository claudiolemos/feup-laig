/**
* MyGraphNode class, which represents a node in the scene graph
*/
class MyGraphNode {
  /**
  * @constructor
  * @param {MySceneGraph} graph graph that represents the whole scene
  * @param {string}       id    node's id
  */
  constructor(graph, id)
  {
    this.graph = graph;
    this.id = id;
    this.transformation = mat4.create();
    mat4.identity(this.transformation);
    this.materials = [];
    this.texture;
    this.length_s = 1;
    this.length_t = 1;
    this.children = [];
    this.primitives = [];
  };

  /**
  * Adds a child to the chidlren array
  * @param {string} id id of the new child
  */
  addChild(id)
  {
    this.children.push(id);
  };

  /**
  * Adds a primitive to the primitives array
  * @param {string} id id of the new primitive
  */
  addPrimitive(id)
  {
    this.primitives.push(id);
  };

};
