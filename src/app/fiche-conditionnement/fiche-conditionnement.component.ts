import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Emballage } from '../emballage';
import { EmballageService } from '../emballage.service';
import { FicheConditionnement } from '../fiche-conditionnement';
import { FicheConditionnementService } from '../fiche-conditionnement.service';
import { Lot } from '../lot';
import { LotService } from '../lot.service';
import { Unites } from '../unites';

@Component({
  selector: 'app-fiche-conditionnement',
  templateUrl: './fiche-conditionnement.component.html',
  styleUrls: ['./fiche-conditionnement.component.css']
})
export class FicheConditionnementComponent implements OnInit {

  fichesTab!: FicheConditionnement[];
  fichesCond!: Observable<FicheConditionnement[]>;
  ficheCond:FicheConditionnement = new FicheConditionnement();
  lots!:Lot[];
  emballages!:Emballage[];
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  constructor(private ficheCondService: FicheConditionnementService,private router: Router,private route:ActivatedRoute,
              private lotService:LotService,private emballageService:EmballageService) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {     
        for (let index = 0; index < 4; index++) {
          this.ficheCond.unites[index] =  new Unites();
        }
       this.ficheCondService.getFichesCon().subscribe(
        data=>{
          console.log("first"),
          console.log(data),
          this.fichesCond = data,
          this.fichesTab = data as FicheConditionnement[]; 
        }
      );
      //ici
      this.lotService.getLotFumNotCond().subscribe(
        data=>{
          console.log("lots");
          this.lots=data as Lot[];
          console.log(this.lots);
        }
      );
      this.emballageService.getEmballagesnotCond().subscribe(
        data=>{
          this.emballages = data as Emballage[];
          console.log(this.emballages);
        }
      )
    }
    deleteFicheCond(id:number){
      this.ficheCondService.deleteFicheCon(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['fichesCond']);
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
      this.router.navigate(['updateFicheCond',id]);
    }
    onSubmit(){
      console.log(this.isAdd)
      console.log(this.ficheCond);
      if(this.isAdd){
        this.ficheCondService.createFicheCon(this.ficheCond).subscribe(data => {
          console.log("ajouter")
          console.log(data)
          this.ficheCond = new FicheConditionnement();
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.ficheCondService.updateFicheCon(this.ficheCond,this.ficheCond.codeCondi).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['fichesCond']);
            this.reloadData();
          },error => console.log(error)
        );
        this.isAdd=true;
        this.idUpdate=0;
      }
    }


}
