/**
* MyGraphNode class, which represents a node in the scene graph
*/
class MyGraphNode {
  /**
  * @constructor
  * @param {MySceneGraph} graph
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

  addChild(id)
  {
    this.children.push(id);
  };

  addPrimitive(id)
  {
    this.primitives.push(id);
  };

};
