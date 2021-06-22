import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FicheReceptionService } from '../fiche-reception.service';
import { Ficherec } from '../ficherec';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-fiche-reception',
  templateUrl: './fiche-reception.component.html',
  styleUrls: ['./fiche-reception.component.css']
})
export class FicheReceptionComponent implements OnInit {
  fournisseurs!: Observable<Fournisseur[]>;
  fournisseur:Fournisseur = new Fournisseur();
  fichesRec!: Observable<Ficherec[]>;
  firstname:any;
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  isCorps_etrangers = false;
  public ficheRec:Ficherec = new Ficherec();
  constructor(private ficherecservice: FicheReceptionService,private router: Router,private route:ActivatedRoute,
    private fournisseurService:FournisseurService) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {     
      this.fournisseurs = this.fournisseurService.getFournisseurs();
      this.fichesRec = this.ficherecservice.getFichesRec();
      this.ficheRec = new Ficherec();
    }
    deleteFicheRec(id:number){
      this.ficherecservice.deleteFicheRec(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['fichesRec']);
        this.reloadData();
      },error => console.log(error)
      );
    }
    updateFicheRec(id:number){
      this.idUpdate=id;
      console.log(id);
      this.ficherecservice.getFicheRec(id).subscribe(data =>{ 
        console.log(data),
        this.ficheRec=new Ficherec(),
        this.ficheRec=data;
      },error => console.log(error));
      this.isAdd=false;
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.ficherecservice.createFicheRec(this.ficheRec).subscribe(data => {
          console.log(data)
          this.ficheRec = new Ficherec();
          this.router.navigate( ['fichesRec']);
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.ficherecservice.updateFicheRec(this.ficheRec,this.ficheRec.codeRecep).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['fichesRec']);
            this.reloadData();
          },error => console.log(error)
        );
        this.isAdd=true;
        this.idUpdate=0;
      }
    }
}
