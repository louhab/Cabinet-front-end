import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { ListPatientComponent } from './patient/list-patient/list-patient.component';

import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';

import { AddDomaineComponent } from './domaine/add-domaine/add-domaine.component';
import { ListDomaineComponent } from './domaine/list-domaine/list-domaine.component';
import { AddSpecialiteComponent } from './specialite/add-specialite/add-specialite.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { AddConsultationComponent } from './consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from './consultation/list-consultation/list-consultation.component';
import { AddRdvComponent } from './rdv/add-rdv/add-rdv.component';
import { ListRdvComponent } from './rdv/list-rdv/list-rdv.component';
import { AddHoraireComponent } from './horaire/add-horaire/add-horaire.component';
import { ListHoraireComponent } from './horaire/list-horaire/list-horaire.component';
import { AddReglementComponent } from './reglement/add-reglement/add-reglement.component';
import { ListReglementComponent } from './reglement/list-reglement/list-reglement.component';
import { AddMedicamentComponent } from './medicament/add-medicament/add-medicament.component';
import { ListMedicamentComponent } from './medicament/list-medicament/list-medicament.component';
import { AddOrdonanceComponent } from './ordonance/add-ordonance/add-ordonance.component';
import { ListOrdonanceComponent } from './ordonance/list-ordonance/list-ordonance.component';
import { TemplateComponent } from './template/template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';

import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MATERIAL_MODULES = [MatToolbarModule,
  MatIconModule
];
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    ListPatientComponent,
    AddCategorieComponent,
    AddDomaineComponent,
    ListDomaineComponent,
    AddSpecialiteComponent,
    ListSpecialiteComponent,
    AddConsultationComponent,
    ListConsultationComponent,
    AddRdvComponent,
    ListRdvComponent,
    AddHoraireComponent,
    ListHoraireComponent,
    AddReglementComponent,
    ListReglementComponent,
    AddMedicamentComponent,
    ListMedicamentComponent,
    AddOrdonanceComponent,
    ListOrdonanceComponent,
    TemplateComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
  ],
  exports : MATERIAL_MODULES,
  providers: [DatePipe,{ provide: MAT_DIALOG_DATA, useValue: {} ,},
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
