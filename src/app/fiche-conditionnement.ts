import { Emballage } from "./emballage";
import { Lot } from "./lot";
import { Responsable } from "./responsable";
import { Unites } from "./unites";

export class FicheConditionnement {
    codeCondi!:number;
    dateCondi!:Date;
    qteDateCondi!:number;
    humiditeDateCondi!:number;
    responsable!:Responsable ;
    lot!:Lot;
    unites!:Unites[];
    emballage!:Emballage;

}
