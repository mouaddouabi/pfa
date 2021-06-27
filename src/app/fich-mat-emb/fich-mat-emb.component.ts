import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Emballage } from '../emballage';
import { FicheMaterieEmb } from '../fiche-materie-emb';
import { FicheMaterieEmbService } from '../fiche-materie-emb.service';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-fich-mat-emb',
  templateUrl: './fich-mat-emb.component.html',
  styleUrls: ['./fich-mat-emb.component.css']
})
export class FichMatEmbComponent implements OnInit {

  fichesTab!: FicheMaterieEmb[];
  fichesMatEmb!: Observable<FicheMaterieEmb[]>;
  ficheMatEmb:FicheMaterieEmb = new FicheMaterieEmb();
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  responsablesqualite!:Responsable[];
  constructor(private ficheMatService: FicheMaterieEmbService,private router: Router,private route:ActivatedRoute,private responsableService:ResponsableService) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {     
        for (let index = 0; index < 4; index++) {
          this.ficheMatEmb.emballages[index] =  new Emballage();
        }
       this.ficheMatService.getFichesMatEmb().subscribe(
        data=>{
          console.log("first"),
          console.log(data),
          this.fichesMatEmb = data,
          this.fichesTab = data as FicheMaterieEmb[]; 
        }
      );
      this.responsableService.getResponsablesByType("Responsable qualité").subscribe(
        data =>{
          this.responsablesqualite = data as Responsable[];
          console.log(this.responsablesqualite); 
        }
      );
    }
    deleteFicheCond(id:number){
      this.ficheMatService.deleteFicheMatEmb(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['fichesMatEmb']);
        this.ngOnInit();
      },error => console.log(error)
      );
    }
    updateFicheCond(id:number){
    /*  this.idUpdate=id;
      console.log(id);
      this.ficheMatService.getFicheMatEmb(id).subscribe(data =>{ 
        console.log("update");
        console.log(data),
        console.log(this.fichesMatEmb);
        this.ficheMatEmb=data;
        for (let index = this.ficheMatEmb.emballages.length; index < 4; index++) {
          this.ficheMatEmb.emballages.push(new Emballage())
        }
        console.log('after');
        
        console.log(this.fichesMatEmb);
      },error => console.log(error));
      this.isAdd=false;*/
      this.router.navigate(['updateFicheEmb',id]);
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.ficheMatService.createFicheMatEmb(this.ficheMatEmb).subscribe(data => {
          console.log("ajouter")
          console.log(data)
          this.ficheMatEmb = new FicheMaterieEmb();
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.ficheMatService.updateFicheMatEmb(this.ficheMatEmb,this.ficheMatEmb.codeEmbg).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['fichesMatEmb']);
            this.reloadData();
          },error => console.log(error)
        );
        this.isAdd=true;
        this.idUpdate=0;
      }
    }
    deleteEMb(emballage:Emballage[],d:number){
      this.ficheMatEmb.emballages[d].frEmb = "";
      console.log(this.ficheMatEmb.emballages);
      this.router.navigate(['fichesMatEmb']);
      
    }
}
