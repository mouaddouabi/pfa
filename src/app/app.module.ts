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
