"use strict";
//Types [string,number,boolean]
//infered types
var language_name = 'typescript'; //infered type will be string
//explicit types
var isTrue = true;
var age;
//arrays
var arr; //you cannot push elements before you initialize it
var arr2 = []; //now you can push elements to it
var languages = ['english', 'french']; //type is infered to be an array
languages.push('typescript');
//mixed array
var mixed = ['foo', 7, 'bar', true]; //you can push string,number or boolean
//objects
var objectOne;
objectOne = { name: 'will', age: 15 };
var person = {
    firstname: 'foo',
    lastname: 'bar',
    age: 10,
};
//union types
var mixedTypes = []; //you can now push strings and number values to the array
var mixedVar; //if it is an array the union type must be in parenthesis
//functions
//A function is of type 'Function'
var testFunction;
var add;
//function description = 'functionname=(param:type):returnType{}'
testFunction = function () {
    console.log("Test function");
};
//optional params
add = function (a, b, c) {
    //the '?' and default value are not used at the same time
    //if the parameter is not set then the default value becomes the value of the parameter hence not optional
    return a + b;
};
//end of functions
