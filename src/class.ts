import { IPartecipante, ICorso, IAzienda } from "./interface";


// CLASSI
export class Partecipante implements IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    interessi: string;

    constructor(
        nome: string,
        cognome: string,
        paeseOrigine: string,
        livelloIstruzione: string,
        competenzeLinguistiche: string[],
        interessi: string
    ) {
        this.nome = nome;
        this.cognome = cognome;
        this.paeseOrigine = paeseOrigine;
        this.livelloIstruzione = livelloIstruzione;
        this.competenzeLinguistiche = competenzeLinguistiche;
        this.interessi = interessi;
    }

    iscrivitiCorso(corso: ICorso): void {
        console.log(`${this.nome} ${this.cognome} si è iscritto al corso "${corso.titolo}"`);
        corso.aggiungiPartecipante(this);
    }
}

export class Corso implements ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number;
    iscritti: IPartecipante[];

    constructor(
        titolo: string,
        descrizione: string,
        settoreProfessionale: string,
        durata: number
    ) {
        this.titolo = titolo;
        this.descrizione = descrizione;
        this.settoreProfessionale = settoreProfessionale;
        this.durata = durata;
        this.iscritti = [];
    }

    aggiungiPartecipante(partecipante: IPartecipante): void {
        this.iscritti.push(partecipante);
        console.log(`${partecipante.nome} ${partecipante.cognome} aggiunto al corso "${this.titolo}"`);
    }
}

export class Azienda implements IAzienda {
    nome: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];

    constructor(
        nome: string,
        settoreAttivita: string,
        descrizione: string,
        posizioniAperte: string[]
    ) {
        this.nome = nome;
        this.settoreAttivita = settoreAttivita;
        this.descrizione = descrizione;
        this.posizioniAperte = posizioniAperte;
    }

    offriPosizione(partecipante: IPartecipante, posizione: string): void {
        console.log(`L'azienda ${this.nome} offre la posizione di ${posizione} a ${partecipante.nome} ${partecipante.cognome}`);
    }
}
