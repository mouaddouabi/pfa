import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FichMatEmbComponent } from './fich-mat-emb/fich-mat-emb.component';
import { FicheBonEntreeComponent } from './fiche-bon-entree/fiche-bon-entree.component';
import { FicheConditionnementComponent } from './fiche-conditionnement/fiche-conditionnement.component';
import { FicheReceptionComponent } from './fiche-reception/fiche-reception.component';
import { FichierCondComponent } from './fichier-cond/fichier-cond.component';
import { GestEmballageComponent } from './gest-emballage/gest-emballage.component';
import { GestFournisseurComponent } from './gest-fournisseur/gest-fournisseur.component';
import { GestionFermeComponent } from './gestion-ferme/gestion-ferme.component';
import { GestionResponsableComponent } from './gestion-responsable/gestion-responsable.component';
import { MaterielEmballageComponent } from './materiel-emballage/materiel-emballage.component';
import { UnitesComponent } from './unites/unites.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { UpdateFichMatEmbComponent } from './update-fich-mat-emb/update-fich-mat-emb.component';

const routes: Routes = [
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employees', component: AllEmployeesComponent },
  { path: 'fournisseurs', component: GestFournisseurComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'fichesMatEmb', component: FichMatEmbComponent },
  { path: 'fichesCond', component: FicheConditionnementComponent },
  { path: 'fichesRec', component: FicheReceptionComponent },
  { path: 'bonEntrees', component: FicheBonEntreeComponent },
  { path: 'updateFicheEmb/:id', component: UpdateFichMatEmbComponent },
  { path: 'addFerme/:id', component: GestionFermeComponent },
  { path: 'gestEmballages/:id', component: GestEmballageComponent },
  { path: 'unites/:id', component: UnitesComponent },
  { path: 'responsables', component: GestionResponsableComponent },
  { path: 'fichesConditionnement', component: FichierCondComponent },
  { path: 'matsemb', component: MaterielEmballageComponent },
  { path: '', redirectTo: 'fichesConditionnement', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
