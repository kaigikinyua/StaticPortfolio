//Types [string,number,boolean]
    //infered types
    let language_name='typescript';//infered type will be string
    //explicit types
    let isTrue:boolean=true;let age:number;
    //arrays
    let arr:number[]//you cannot push elements before you initialize it
    let arr2:number[]=[]//now you can push elements to it
    let languages=['english','french'];//type is infered to be an array
    languages.push('typescript');
    //mixed array
    let mixed=['foo',7,'bar',true]//you can push string,number or boolean
    //objects
    let objectOne:object;
    objectOne={name:'will',age:15}
    let person={
        firstname:'foo',//can alson be firstname:string
        lastname:'bar',
        age:10,
        //->object types once infered or explicity defined cannot change at runtime
        //hence person.age='twenty' cannot work
        //->if a property did not exist during object creation it cannot be added dynamicly
    }
    //union types
    let mixedTypes:(string|number)[]=[] //you can now push strings and number values to the array
    let mixedVar:string|number;//if it is an array the union type must be in parenthesis

//functions
    //A function is of type 'Function'
let testFunction:Function;
let add:Function;
    //function description = 'functionname=(param:type):returnType{}'
testFunction=()=>{
    console.log("Test function")
}
    //optional params
add=(a:number,b:number,c?:number):number=>{
    //the '?' and default value are not used at the same time
    //if the parameter is not set then the default value becomes the value of the parameter hence not optional
    return a+b
}
//end of functions
