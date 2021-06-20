import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FicheBonEntreeComponent } from './fiche-bon-entree/fiche-bon-entree.component';
import { FicheReceptionComponent } from './fiche-reception/fiche-reception.component';
import { GestFournisseurComponent } from './gest-fournisseur/gest-fournisseur.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'employees', component: AllEmployeesComponent },
  { path: 'fournisseurs', component: GestFournisseurComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'fichesRec', component: FicheReceptionComponent },
  { path: 'bonEntrees', component: FicheBonEntreeComponent },
  { path: '', redirectTo: 'fichesRec', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
