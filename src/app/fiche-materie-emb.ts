import { Emballage } from "./emballage";
import { Operateurs } from "./operateurs";
import { Responsable } from "./responsable";

export class FicheMaterieEmb {
    codeEmbg!:number;
    date!:Date;
    operateurs!:Operateurs;
    emballage!:Emballage[];
    responsable!:Responsable;
}
