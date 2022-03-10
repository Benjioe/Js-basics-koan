// let assert = require("assert");

// const REPONSE = "";

// describe("conditions", function () {
//   it("le if permet d'appliquer du code que si la condition est vrai", function () {
//     let resultat = 0;

//     if (resultat === 0) {
//       resultat = 3;
//     }

//     if (resultat === 5) {
//       resultat = 10;
//     }

//     if (resultat === 0) {
//       resultat = 42;
//     }

//     assert.equal(resultat, REPONSE);
//   });

//   it("si aucune condition n'est vrais, c'est le else qui s'applique", function () {
//     let resultat = 0;

//     if (resultat === 42) {
//       resultat = 12;
//     } else {
//       resultat = 21;
//     }
//     assert.equal(resultat, REPONSE);
//   });

//   it("le ternaire est un if/else compressé", function () {
//     let resultat = 0;

//     resultat = resultat === 42 ? 12 : 21;
//     assert.equal(resultat, REPONSE);
//   });

//   it("le elseif si on doit tester plusieurs conditions", function () {
//     let resultat = 0;

//     if (resultat === 42) {
//       resultat = 12;
//     } else if (resultat === 0) {
//       resultat = 3;
//     } else {
//       resultat = 21;
//     }
//     assert.equal(resultat, REPONSE);
//   });

//   it("le switch case permet aussi de tester plusieurs conditions", function () {
//     let resultat = 0;

//     switch (resultat) {
//       case 42:
//         resultat = 12;
//         break;
//       case 0:
//         resultat = 11;
//         break;
//       default:
//         resultat = 21;
//     }
//     assert.equal(resultat, REPONSE);
//   });
// });
