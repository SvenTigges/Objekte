

/***** Erinnerung: Arrays *******/
// let arr;
// arr = ["Ich","bin","Max"];
// // ausgabe(arr[2]);

// arr = [["Ich","bin","Max"],["Ich","bin","Moritz"]];
// ausgabe(arr[0][2]);
// ausgabe(arr[1][2]);


/***** Objekte 1 Daten/Funktionen *****/

let person = {
                firstName: "Max",
                familiyName: "Mütze",
                salary:[120000, 125000],
                hasAccess: true,
                sayHello: function()
                {
                    return "Hi, ich bin " + this.firstName + "!";
                }

};


// ausgabe(person);
// ausgabe(person.firstName);
// ausgabe(person.familiyName);
// ausgabe(person.salary[0]);
// ausgabe(person.hasAccess);
// ausgabe(person.sayHello()); 
let txt = "ich bin " + person.firstName + " " + 
                     person.familiyName + " ud verdiene " + 
                     person.salary[0] + " p.a.";
// ausgabe(txt);
/** Ausgabe */


/**** Objekte 2 Hierarchie ****/

// Teifer, tiefer -Irgendwo in der Tiefe gibt es en Licht 
// der Baikalsee ist mit 1642 m der tiefste See der Erde
// deep - deeper - deeperst
// Nested Object

let baikal = {
                wert: "10m",
                deep:{
                        deeper:{
                                deepest: "Das licht - auf 1642 m"
                               }
                     } 




};

ausgabe(baikal);
ausgabe(baikal.wert);
ausgabe(baikal.deep.deeper.deepest);







/** Ausgabe */
function ausgabe(outputStr) {
    console.log(outputStr);
}