import { FicheConditionnement } from "./fiche-conditionnement";
import { FicheMaterieEmb } from "./fiche-materie-emb";

export class Emballage {
   codeEmb!:number;
   frEmb!:string;
   codeFrEmb!:number;
   numLotEmb!:number;
   typeEmb!:string;
   volumeUnite!:number;
   condStockage!:string;
   dateCond!:number;
   lavageSechageEmb!:number;
   actionsCor!:number;
   ficheMaterieEmb!:FicheMaterieEmb;
   ficheConditionnement!:FicheConditionnement;
}
