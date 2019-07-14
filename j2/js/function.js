
var new1 = function (score) {
    var new1 = 2 * score;
    return new1
}

new1(4);
console.log(new1(4));

//<!-- another way to pass te arguymenmt in //the function -->

var new1 = function (score) {
    return (console.log(2*score));
}(2);
    

//class

SuperHero =function() {//var inn not needed here
var power;// var is must,
var villian;
}

superman = new SuperHero;
superman.power = "fly";
superman.villian = "someone";

console.log(superman.power);


/*look like adding an exttra features without actually going inside my  function*/

var walk = function() {
    return("now i am able to walk");
}

SuperHero.prototype.walk=walk;
console.log(superman.walk());

//<!-- multiple arguments -->

var multi = function(){
    var res = 1;
    for(i=arguments.length-1; i>=0; i--){
        res *= arguments[i];
    }
    return res;
}

console.log(multi(1,2,3,4,5,6));


// a bit like extension or say adding an object to predefined function

var something = function(work){
    console.log(work);
    //console.log(this);
    // this will show an error if we are not written  anything here after 4 line i.e. at line 61;
}

something("pushups");

var exercise = {benchPress: "4 sets", squats: "2 sets"}

something.call(exercise, exercise.benchPress, exercise.squats);// second item wont work only one argument has to be passed

something.apply(exercise, ['crunches']);
