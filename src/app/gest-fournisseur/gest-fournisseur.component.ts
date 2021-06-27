import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-gest-fournisseur',
  templateUrl: './gest-fournisseur.component.html',
  styleUrls: ['./gest-fournisseur.component.css']
})
export class GestFournisseurComponent implements OnInit {

  fournisseurs!: Observable<Fournisseur[]>;

  firstname:any;
  id:number=0;
  idUpdate = 0;
  isAdd = true;

  public fournisseur:Fournisseur = new Fournisseur();

  constructor(private fournisseurservice: FournisseurService,private router: Router) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {     
      this.fournisseurs = this.fournisseurservice.getFournisseurs();
    }
    deleteFournisseur(id:number){
      this.fournisseurservice.deleteFournisseur(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['fournisseurs']);
        this.reloadData();
      },error => console.log(error)
      );
    }
    updateFournisseur(id:number){
      this.idUpdate=id;
      console.log(id);
      this.fournisseurservice.getFournisseur(id).subscribe(data =>{ 
        console.log(data),
        this.fournisseur=new Fournisseur(),
        this.fournisseur=data;
      },error => console.log(error));
      this.isAdd=false;
    }
    AddFerme(id:number){
      this.router.navigate(['addFerme',id])
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.fournisseurservice.createFournisseur(this.fournisseur).subscribe(data => {
          console.log(data)
          this.fournisseur = new Fournisseur();
          this.router.navigate( ['fournisseurs']);
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.fournisseurservice.updateFournisseur(this.fournisseur,this.fournisseur.id).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['fournisseurs']);
            this.reloadData();
          },error => console.log(error)
        );
        this.isAdd=true;
        this.idUpdate=0;
      }
    }
    
}
