import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { ListPatientComponent } from './patient/list-patient/list-patient.component';
import { ListMedcinComponent } from './medcin/list-medcin/list-medcin.component';
import { AddMedcinComponent } from './medcin/add-medcin/add-medcin.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { AddDomaineComponent } from './domaine/add-domaine/add-domaine.component';
import { ListDomaineComponent } from './domaine/list-domaine/list-domaine.component';
import { AddSpecialiteComponent } from './specialite/add-specialite/add-specialite.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { AddConsultationComponent } from './consultation/add-consultation/add-consultation.component';
import { ListConsultationComponent } from './consultation/list-consultation/list-consultation.component';
import { ListRdvComponent } from './rdv/list-rdv/list-rdv.component';
import { AddRdvComponent } from './rdv/add-rdv/add-rdv.component';
import { AddHoraireComponent } from './horaire/add-horaire/add-horaire.component';
import { ListHoraireComponent } from './horaire/list-horaire/list-horaire.component';
import { AddReglementComponent } from './reglement/add-reglement/add-reglement.component';
import { ListReglementComponent } from './reglement/list-reglement/list-reglement.component';
import { AddMedicamentComponent } from './medicament/add-medicament/add-medicament.component';
import { ListMedicamentComponent } from './medicament/list-medicament/list-medicament.component';
import { ListOrdonanceComponent } from './ordonance/list-ordonance/list-ordonance.component';
import { AddOrdonanceComponent } from './ordonance/add-ordonance/add-ordonance.component';
import { TemplateComponent } from './template/template.component';
import { ListCategorieeComponent } from './categorie/list-categoriee/list-categoriee.component';

const routes: Routes = [
  {path : '' ,component: TemplateComponent,children: [
    {path: 'patient', component:AddPatientComponent},
    {path: 'patients', component:ListPatientComponent},
    {path: 'medcin', component:AddMedcinComponent},
    {path: 'medcins', component:ListMedcinComponent},
    {path: 'categorie', component:AddCategorieComponent},
    {path: 'categories', component:ListCategorieeComponent},
    {path: 'domaine', component:AddDomaineComponent},
    {path: 'domaines', component:ListDomaineComponent},
    {path: 'specialite', component:AddSpecialiteComponent},
    {path: 'specialites', component:ListSpecialiteComponent},
    {path: 'consultation', component:AddConsultationComponent},
    {path: 'consultations', component:ListConsultationComponent},
    {path: 'rdv', component:AddRdvComponent},
    {path: 'rdvs', component:ListRdvComponent},
    {path: 'horaire', component:AddHoraireComponent},
    {path: 'horaires', component:ListHoraireComponent},
    {path: 'reglement', component:AddReglementComponent},
    {path: 'reglements', component:ListReglementComponent},
    {path: 'medicament', component:AddMedicamentComponent},
    {path: 'medicaments', component:ListMedicamentComponent},
    {path: 'medicament', component:AddOrdonanceComponent},
    {path: 'ordonances', component:ListOrdonanceComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
