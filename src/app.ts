import { Partecipante, Corso, Azienda } from "./class";

// ESEMPIO DI UTILIZZO

// PARTECIPANTI:
const partecipante1 = new Partecipante("Antonio", "Rossi", "Italia", "Laurea", ["Italiano", "Inglese"], "Informatica");
const partecipante2 = new Partecipante("Stan", "Midway", "Australia", "Diploma", ["inglese", "Spagnolo", "Tedesco"], "Lingue");
const partecipante3 = new Partecipante("Ariina", "Petrovic", "Ucraina", "Laurea", ["Ucraino","Russo", "Inglese"], "Scultura");
// CORSO:
const corsoJS = new Corso("JavaScript Base", "Introduzione a JS", "Informatica", 40);
const corsoLingue = new Corso("Cinese base", "In questo corso imparerai le basi del cinese", "Lingue", 65);
const corsoScultura = new Corso("Scultura e restauro", "in questo corso imparerai le principali tecniche di scultura e le basi del restauro","Arte", 100);
//AZIENDA:
const azienda1 = new Azienda("TechCorp", "IT", "Azienda tecnologica", ["Sviluppatore JS", "Frontend Developer"]);
const azienda2 = new Azienda ("Hotel Eufemia", "Turismo", "Hotel e servizi",["Receptionist", "Animatore"]);
const azienda3 = new Azienda("Canova", "Restauro monumenti", "Canova azienda con esperienza ventennale nel settore restauri",["Restauratore", "Supervisionatore dei lavori", "Archeologo"]);





partecipante1.iscrivitiCorso(corsoJS); // Si iscrive e viene aggiunto al corso
azienda2.offriPosizione(partecipante2, "Animatore"); // Offerta posizione
partecipante3.iscrivitiCorso(corsoScultura);
console.log("Iscritti al corso: " + corsoScultura.iscritti.map(p => p.nome + " " + p.cognome).join(", "));