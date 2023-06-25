
// JavaScript this keyword

/*
// Node:1

const person = {

              firstName: "Mamun",

              lastName : "Khan",

              id       : 5566,

              fullName : function() {

return this.firstName + " " + this.lastName;

              }
};

document.getElementById("demo").innerHTML = person .fullName();
*/

/*
// Node:2

const person1 = {

              fullName : function() {

              return this.firstName + " " + this.lastName;

                            }

};

const person2 = {
              firstName:"Mamun =1",

              lastName :" = khan",
}

let x =person1.fullName.call(person2);

document.getElementById("demo").innerHTML = x;

*/
