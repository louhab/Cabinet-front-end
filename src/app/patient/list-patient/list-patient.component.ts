import { Component, OnInit, Inject} from '@angular/core';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../../model/patient';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddPatientComponent } from '../../patient/add-patient/add-patient.component';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patient !: Patient;
  constructor(public crudApi: PatientService, public toastr: ToastrService,
    private router: Router, public fb: FormBuilder,
    private matDialog: MatDialog,
    public dialogRef: MatDialogRef<AddPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }
  ngOnInit() {

    this.getData();
  }
  getData() {
    this.crudApi.getAll().subscribe(
      response => {
        this.crudApi.list = response;
      }
    );
  }
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Catégorie ?')) {
      this.crudApi.deleteData(id)
        .subscribe(
          data => {
            this.getData();
          },
          error => console.log(error));
    }
  }
  selectData(item: Patient) {
    console.log(item)
    this.crudApi.choixmenu = "M";
    this.crudApi.formData = this.fb.group(Object.assign({}, item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "80%";
    this.matDialog.open(AddPatientComponent, dialogConfig);

  }
}
