import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { GestFournisseurComponent } from './gest-fournisseur/gest-fournisseur.component';
import { FicheReceptionComponent } from './fiche-reception/fiche-reception.component';
import { FicheBonEntreeComponent } from './fiche-bon-entree/fiche-bon-entree.component';
import { FichMatEmbComponent } from './fich-mat-emb/fich-mat-emb.component';
import { UpdateFichMatEmbComponent } from './update-fich-mat-emb/update-fich-mat-emb.component';
import { FicheConditionnementComponent } from './fiche-conditionnement/fiche-conditionnement.component';
import { GestionFermeComponent } from './gestion-ferme/gestion-ferme.component';
import { GestionResponsableComponent } from './gestion-responsable/gestion-responsable.component';
import { MaterielEmballageComponent } from './materiel-emballage/materiel-emballage.component';
import { GestEmballageComponent } from './gest-emballage/gest-emballage.component';
import { FichierCondComponent } from './fichier-cond/fichier-cond.component';
import { UnitesComponent } from './unites/unites.component';
import { GestionOperateursComponent } from './gestion-operateurs/gestion-operateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEmployeesComponent,
    CreateEmployeeComponent,
    AllEmployeesComponent,
    UpdateEmployeeComponent,
    GestFournisseurComponent,
    FicheReceptionComponent,
    FicheBonEntreeComponent,
    FichMatEmbComponent,
    UpdateFichMatEmbComponent,
    FicheConditionnementComponent,
    GestionFermeComponent,
    GestionResponsableComponent,
    MaterielEmballageComponent,
    GestEmballageComponent,
    FichierCondComponent,
    UnitesComponent,
    GestionOperateursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
