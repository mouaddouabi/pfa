import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operateurs } from '../operateurs';
import { OperateursService } from '../operateurs.service';

@Component({
  selector: 'app-gestion-operateurs',
  templateUrl: './gestion-operateurs.component.html',
  styleUrls: ['./gestion-operateurs.component.css']
})
export class GestionOperateursComponent implements OnInit {

  operateurs!: Operateurs[];
  type = ["Fumigation","Triage","Emballage","Stockage"];
  id:number=0;
  idUpdate = 0;
  isAdd = true;

  public operateur:Operateurs = new Operateurs();

  constructor(private operateursService: OperateursService,private router: Router) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {     
      this.operateursService.getAllOperateurs().subscribe(
        data=>{
          console.log(data);
          this.operateurs = data as Operateurs[];
        }
      )
      this.operateur = new Operateurs();
    }
    deleteOperateur(id:number){
      this.operateursService.deleteOperateurs(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['operateurs']);
        this.reloadData();
      },error => console.log(error)
      );
    }
    updateOperateur(id:number){
      this.idUpdate=id;
      console.log(id);
      this.operateursService.getOperateurs(id).subscribe(data =>{ 
        console.log(data),
        this.operateur=new Operateurs(),
        this.operateur=data;
      },error => console.log(error));
      this.isAdd=false;
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.operateursService.createOperateurs(this.operateur).subscribe(data => {
          console.log(data)
          this.operateur = new Operateurs();
          this.reloadData();
          this.router.navigate( ['operateurs']);
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.operateursService.updateOperateurs(this.operateur,this.operateur.id).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['operateurs']);
            this.reloadData();
          },error => console.log(error)
        );
        this.isAdd=true;
        this.idUpdate=0;
      }
    }
}
