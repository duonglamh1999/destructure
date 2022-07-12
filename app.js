/* numPlanets = 8
yearNeptuneDiscovered = 1846 */

/* discoveryYears = { yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659} */

/* your name is Alejandro, and you like purple
your name is Melissa, and you like green
your name is undefined, and you like green*/

/* Maya
Marisa
Chi*/

/* Raindops on roses
whiskers on kittens
["bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]
*/

/*[10,30,20]*/

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
 const [a,b]=obj.numbers

 const arr = [1,2];
 [arr[0],arr[1]]=[arr[1],arr[0]]

 raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
 const raceResults = ([first,second,third,...rest]) =>  {first,second,third,rest}
