// let assert = require("assert");
// const REPONSE = "";

// describe("tableau", function() {

//     it("on peut créer un tableau", function() {
//       let emptyArray = [];
//       expect(emptyArray.length).toBe(REPONSE);
  
//       let multiTypeArray = [0, 1, "two", [6, 7]];
//       expect(multiTypeArray[0]).toBe(REPONSE);
//       expect(multiTypeArray[1]).toBe(REPONSE);
//       expect(multiTypeArray[2]).toBe(REPONSE);
//       expect(multiTypeArray[3]).toBe(REPONSE);
//     });
  
//     it("y ajouter des éléments", function () {
//       let tableau = [1, 2, 3, 4];
  
//       expect(tableau.length).toBe(REPONSE);
//       fourNumberArray.push(5, 6);
//       expect(tableau.length).toBe(REPONSE);
//     });
  
//     it("supprimer des valeurs", function () {
//       let array = ["peanut", "butter", "and", "jelly"];
  
//       expect(array.slice(0, 1)).toEqual(REPONSE);
//       expect(array.slice(0, 2)).toEqual(REPONSE);
//       expect(array.slice(2, 2)).toEqual(REPONSE);
//       expect(array.slice(2, 20)).toEqual(REPONSE);
//       expect(array.slice(3, 0)).toEqual(REPONSE);
//       expect(array.slice(3, 100)).toEqual(REPONSE);
//       expect(array.slice(5, 1)).toEqual(REPONSE);
//     });
  
//     it("ou les retirer", function () {
//       let array = [1, 2, 3];
//       let poppedValue = array.pop();
//       expect(poppedValue).toBe(REPONSE);
//       expect(array).toEqual(REPONSE);

//       let shiftedValue = array.shift();
//       expect(shiftedValue).toEqual(REPONSE);
//       expect(array).toEqual(REPONSE);
//     });
  
//   });