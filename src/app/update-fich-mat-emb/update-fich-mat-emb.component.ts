import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FicheMaterieEmb } from '../fiche-materie-emb';
import { FicheMaterieEmbService } from '../fiche-materie-emb.service';
import { Responsable } from '../responsable';
import { ResponsableService } from '../responsable.service';

@Component({
  selector: 'app-update-fich-mat-emb',
  templateUrl: './update-fich-mat-emb.component.html',
  styleUrls: ['./update-fich-mat-emb.component.css']
})
export class UpdateFichMatEmbComponent implements OnInit {
  id:number=0;
  ficheMatEmb!:FicheMaterieEmb;
  responsablesqualite!:Responsable[];
  constructor(private ficheMatService: FicheMaterieEmbService,private router: Router,private route:ActivatedRoute
    ,private responsableService:ResponsableService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.ficheMatService.getFicheMatEmb(this.id).subscribe(data =>{ 
      this.ficheMatEmb=new FicheMaterieEmb();
      console.log(data),
      this.ficheMatEmb=data;
    },error => console.log(error));
    this.responsableService.getResponsablesByType("Responsable qualité").subscribe(
      data =>{
        this.responsablesqualite = data as Responsable[];
        console.log(this.responsablesqualite); 
      }
    );
  }
  onSubmit(){
    this.ficheMatService.updateFicheMatEmb(this.ficheMatEmb,this.id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['fichesMatEmb']);
      },error => console.log(error)
    )
  }
}
