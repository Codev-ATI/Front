// Ce fichier/cette classe servira de bus d'evenements
// Pour passer un evenement de n'importe ou, vers n'importe ou,
// Les elements ne doivent pas avoir une hierarchie entre eux
// Cette classe, exterieure aux composants, permettra donc
// de passer de tels evenements
// PS : Je sais que le format du nom du fichier n'est pas JS-conventionnel
// PS2 : On aurait pu utiliser le fichier "main.js" comme bus, mais pour des raisons
// de proprete, on passe par un fichier different


import Vue from 'vue'
export default new Vue()