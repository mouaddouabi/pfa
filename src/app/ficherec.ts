import { Fournisseur } from "./fournisseur";
import { Lot } from "./lot";
import { Responsable } from "./responsable";

export class Ficherec {
  codeRecep!:number;
  //dateLivraison!:Date;
  qteLivree!:number;
  commentaire!:string;
  typeCorpsEtrangers!:string;
  humiditeDattes!:string;
  fournisseur!: Fournisseur;
  lot!:Lot;
  responsable!:Responsable[];
  constructor(){
    this.fournisseur=new Fournisseur();
    this.lot = new Lot();
    const respo = new Responsable("Responsable d'approvisionnement");
    const respo2 = new Responsable('Responsable qualité');
    this.responsable = new Array(respo,respo2);
  }
}
