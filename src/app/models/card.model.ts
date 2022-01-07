export interface Card {

    id:string;
    name: string;
    supertype:string;
    subtypes: string [];
    level:string;
    hp:string;
    types:string[];
    evolvesFrom:string;
    rules:string[];
    abilities:any;
    cardmarket?: any;
}

