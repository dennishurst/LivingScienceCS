

var object1 = { name: "Dennis" };
var object2 = new Object();
object2.name = "Gert";
var object3 = {};
object3.name = 'Dog';

alert(object3.name);

var jagged = [[1, 1], [2, 2, 2], true];


var me = new Object();
me['name'] = "Dennis";
me['age'] = 50;

console.log(me.age);


var myObject = {
    interests: [1, 1],
    name: 'Eduardo',
    type: 'Most excellent',
    // Add your code here!

};

alert(myObject.name);


var drawSomething = function(){

    document.getElementById("myDiv").innerHTML = "<h1>hello world</h1>";

}