// INTERFACCE
export interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloIstruzione: string;
    competenzeLinguistiche: string[];
    interessi: string;

    iscrivitiCorso(corso: ICorso): void;
}

export interface ICorso {
    titolo: string;
    descrizione: string;
    settoreProfessionale: string;
    durata: number; // in ore
    iscritti: IPartecipante[];

    aggiungiPartecipante(partecipante: IPartecipante): void;
}

export interface IAzienda {
    nome: string;
    settoreAttivita: string;
    descrizione: string;
    posizioniAperte: string[];

    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
