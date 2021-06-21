import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BonEntree } from '../bon-entree';
import { BonEntreeService } from '../bon-entree.service';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { Lot } from '../lot';
import { LotService } from '../lot.service';

@Component({
  selector: 'app-fiche-bon-entree',
  templateUrl: './fiche-bon-entree.component.html',
  styleUrls: ['./fiche-bon-entree.component.css']
})
export class FicheBonEntreeComponent implements OnInit {

  fichesBonEntree!: Observable<BonEntree[]>;
  fournisseur:Fournisseur = new Fournisseur();
  lots!:Observable<Lot[]>
  lott = new Lot();
  bonEntree = new BonEntree();
  fournisseurs!: Observable<Fournisseur[]>;
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  constructor(private bonEntreeService:BonEntreeService,private route:Router,
    private fournisseurService:FournisseurService,private lotService:LotService) { }
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData() {    
    this.fournisseurs = this.fournisseurService.getFournisseurs(); 
    this.fichesBonEntree = this.bonEntreeService.getBonEntreesList();
    this.bonEntree = new BonEntree();
  }
  deleteFicheRec(id:number){
    this.bonEntreeService.deleteBonEntree(id).subscribe(data =>{ 
      console.log(data)
      this.route.navigate(['bonEntrees']);
      this.reloadData();
    },error => console.log(error)
    );
  }
  updateFicheRec(id:number){
    this.idUpdate=id;
    console.log(id);
    this.bonEntreeService.getBonEntree(id).subscribe(data =>{ 
      console.log(data),
      this.bonEntree=new BonEntree(),
      this.bonEntree=data;
    },error => console.log(error));
    this.isAdd=false;
  }
  onSubmit(){
    console.log(this.isAdd)
    if(this.isAdd){
      this.bonEntreeService.createBonEntree(this.bonEntree).subscribe(data => {
        console.log(data)
        this.bonEntree = new BonEntree();
        this.route.navigate( ['bonEntrees']);
        this.reloadData();
      },
      error => console.log(error));
    }else{
      this.bonEntreeService.updateBonEntree(this.bonEntree,this.bonEntree.numBon).subscribe(
        data => {
          console.log(data)
          this.route.navigate(['bonEntrees']);
          this.reloadData();
        },error => console.log(error)
      );
      this.isAdd=true;
      this.idUpdate=0;
    }
  }
  onchange(e:number){
      this.lots=this.lotService.getLotsFR(e);
      this.bonEntree.fournisseur=this.fournisseur;
  }
  onchangeL(lot:Lot){
    this.bonEntree.lot=lot;
  }
}
