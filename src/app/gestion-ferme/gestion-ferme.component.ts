import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ferme } from '../ferme';
import { FermeService } from '../ferme.service';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-gestion-ferme',
  templateUrl: './gestion-ferme.component.html',
  styleUrls: ['./gestion-ferme.component.css']
})
export class GestionFermeComponent implements OnInit {

  id!:number;
  fournisseur:Fournisseur = new Fournisseur();
  fermes!:Ferme[];
  ferme = new Ferme();
  idUpdate = 0;
  isAdd = true;
  constructor(private route: Router,private router:ActivatedRoute,private fournisseurService:FournisseurService,private fermeService:FermeService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  deleteFerme(id:number){
    this.fermeService.deleteFerme(id).subscribe(data =>{ 
      console.log(data)
      this.route.navigate(['addFerme/'+this.id]);
      this.reloadData();
    },error => console.log(error)
    );
  }
  reloadData() {
    this.id = this.router.snapshot.params['id'];
    this.fournisseurService.getFournisseur(this.id).subscribe(
      data=>{
        console.log(data),
        this.fournisseur=data;
        this.ferme= new Ferme();
      }
    );
    this.fermeService.getFermesFournisseur(this.id).subscribe(
      data=>{
        console.log(data),
        this.fermes = data as Ferme[];
      }
    )
  }
  updateFerme(id:number){
    this.idUpdate=id;
    console.log(id);
    this.fermeService.getFerme(id).subscribe(data =>{ 
      console.log(data),
      this.ferme=new Ferme(),
      this.ferme=data;
    },error => console.log(error));
    this.isAdd=false;
  }
  onSubmit(){
    console.log(this.isAdd);
    this.ferme.fournisseur = this.fournisseur;
    if(this.isAdd){
      console.log(this.ferme);
      this.fermeService.createFerme(this.ferme).subscribe(data => {
        console.log(data);
        this.fournisseur = new Fournisseur();
        this.route.navigate( ['addFerme/'+this.id]);
        this.reloadData();
      },
      error => console.log(error));
    }else{
      this.fermeService.updateFerme(this.ferme,this.ferme.codeFerme).subscribe(
        data => {
          console.log(data)
          this.route.navigate( ['addFerme/'+this.id]);
          this.reloadData();
        },error => console.log(error)
      );
      this.isAdd=true;
      this.idUpdate=0;
    }
  }
}
