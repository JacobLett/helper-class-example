/*
Class -> Object
(human being)

Instance properties: What they have
(Data about that object)
- name
- height
- width

Instance Methods - what they do
(actions)
- talk
- run
 jump

*/

// Class definition
class MakeChart {
    // Class constructor, runs once when the opject is created. used to setup an object

    // add arguments to constructor for the properties you need
    constructor (_width, _height, _color) {
        console.log('the object is being created');
        // this refers to the current object

        // instance properties created by the constructor
        this.width = _width;
        this.height = _height;
        this.color = _color;

    }

    // instance methods  actions that can use the data set in the properties
    getArea () {
        return this.width = this.height;
    }



}