import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { DomaineService } from '../../service/domaine.service';
import { AssureurService } from '../../service/assureur.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators }
  from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  parametre: any = {};
  listUser: any = [];
  valid: boolean = false;
  get f() { return this.crudApi.formData.controls }
  constructor(public crudApi: PatientService, public fb: FormBuilder, public toastr: ToastrService,
    private router: Router,
    public domaineService: DomaineService,

    public assureurService: AssureurService,
    public dialogRef: MatDialogRef<AddPatientComponent>) { }

  ngOnInit() {
    
    if (this.crudApi.choixmenu == "A") {

      this.infoForm()   
    }
  }
  infoForm() {
    this.crudApi.formData = this.fb.group({
      id: null,
      code : ['', [Validators.required]],
      nom : ['', [Validators.required]],
      nationalite : ['', [Validators.required]],
      prenom: ['', [Validators.required, Validators.minLength(5)]],
      lieu : ['', [Validators.required]],
      email : ['', [Validators.required]],
      etatCivil : ['', [Validators.required]],
      lienParente : ['', [Validators.required]],
      identUnique:['', [Validators.required]],
      identcles:['', [Validators.required]],
      datevalidite:['', [Validators.required]],
      dateNaissance : ['', [Validators.required, Validators.minLength(8)]],
      adresse : ['', [Validators.required, Validators.minLength(8)]],
      ville : ['', [Validators.required, Validators.minLength(8)]],
      tel : ['', [Validators.required, Validators.minLength(8)]],
      gsm : ['', [Validators.required, Validators.minLength(8)]],
      genre : ['', [Validators.required]],
      nbrEnfant: ['', [Validators.required]],
      nomConjoint: ['', [Validators.required]],
      poids: ['', [Validators.required]],
      taille: ['', [Validators.required]],
      grSanguin: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      domaine: ['', [Validators.required]],
      priseEncharge: ['', [Validators.required]],
      medecin: ['', [Validators.required]],
      motcles: ['', [Validators.required]],
      codeApci: ['', [Validators.required]],
      regimeCnam: ['', [Validators.required]],
      assureur: ['', [Validators.required]],

    });
  }
  ResetForm() {
    this.crudApi.formData.reset();
  }
  updateData() {
    this.crudApi.formData.value.nationalite= String( "/api/nationalites/"+this.crudApi.formData.value.nationalite);
    this.crudApi.formData.value.medecin= String( "/api/medecins/"+this.crudApi.formData.value.medecin);
    this.crudApi.formData.value.assureur= String( "/api/assureurs/"+this.crudApi.formData.value.assureur);
    this.crudApi.formData.value.domaine= String( "/api/domaines/"+this.crudApi.formData.value.domaine);
    this.crudApi.formData.value.rdvs=[];
    this.crudApi.formData.value.consultations=[];
    this.crudApi.formData.value.reglements=[];

  }
  onChange($event:any){}
    
}
