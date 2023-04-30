import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './../model/patient';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:38387/api/patients';
  choixmenu : string  = 'A';
  list !: Patient[];
  public formData !:  FormGroup; 
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  deleteData(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
