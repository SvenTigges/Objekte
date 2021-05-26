

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


ausgabe(person);
ausgabe(person.firstName);
ausgabe(person.familiyName);
ausgabe(person.salary[0]);
ausgabe(person.hasAccess);
ausgabe(person.sayHello()); 
let txt = "ich bin " + person.firstName + " " + 
                      person.familiyName + " ud verdiene " + 
                      person.salary[0] + " p.a.";
ausgabe(txt);
/** Ausgabe */
function ausgabe(outputStr) {
        console.log(outputStr);
    }