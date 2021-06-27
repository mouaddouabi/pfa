import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FicheReceptionService } from '../fiche-reception.service';
import { Ficherec } from '../ficherec';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Ferme } from '../ferme';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';


@Component({
  selector: 'app-fiche-reception',
  templateUrl: './fiche-reception.component.html',
  styleUrls: ['./fiche-reception.component.css']
})
export class FicheReceptionComponent implements OnInit {
  fournisseurs!: Fournisseur[];
  fournisseur:Fournisseur = new Fournisseur();
  respo :Responsable = new Responsable();
  respo2 :Responsable= new Responsable();
  firstname:any;
  varietes:string[] = ["Aguellid","Ahardane","Botfeggous","Bouijjou","Bouittob","Bourhare",
            "Bouslikhène","Bouzeggar","Bousthantmi","Iklane","Jihel","Malt-EIbaid","Mejhoul",
            "Mest-AIi","Oum-Nhal","Outoukdim","Sair-Layalate"];
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  responsablesAppro!:Responsable[];
  responsablesqualite!:Responsable[];
  isCorps_etrangers = false;
  public ficheRec:Ficherec = new Ficherec();
  ferme: Ferme = new Ferme();
  fichesRec!: Ficherec[];
  constructor(private ficherecservice: FicheReceptionService,private router: Router,private route:ActivatedRoute,
    private fournisseurService:FournisseurService,private responsableService:ResponsableService) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {     
      this.ficherecservice.getFichesRec().subscribe(
        data=>{
          console.log(data);
          this.fichesRec =data;
        }
      )
      
      this.fournisseurService.getFournisseurs().subscribe(
        data=>{
          console.log(data);
          this.fournisseurs = data as Fournisseur[];
        }
      )
      this.ficheRec = new Ficherec();
      this.responsableService.getResponsablesByType("Responsable qualité").subscribe(
        data =>{
          this.responsablesqualite = data as Responsable[];
          console.log(this.responsablesqualite); 
        }
      );
      this.responsableService.getResponsablesByType("Responsable approvisionnement").subscribe(
        data =>{
          this.responsablesAppro = data as Responsable[];
          console.log(this.responsablesAppro); 
        }
      )
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
        this.ficheRec=data as Ficherec; 
        this.respo = (this.ficheRec.responsable[0].fonctionRespo =="Responsable approvisionnement")? this.ficheRec.responsable[0] :this.ficheRec.responsable[1];
        this.respo2 = (this.ficheRec.responsable[1].fonctionRespo =="Responsable qualité")? this.ficheRec.responsable[1] :this.ficheRec.responsable[0];
        console.log(this.respo);
        console.log(this.respo2);
        this.ficheRec.responsable[0] = this.respo;
        this.ficheRec.responsable[1] = this.respo2;
        console.log(this.ficheRec);
        
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
        console.log(this.ficheRec);
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
