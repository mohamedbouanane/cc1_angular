import {AngularFirestore} from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FierBaseService {

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('employee').snapshotChanges();
  }

  addEmployee(payload: IEmployee) {
    return this.firestore.collection('employee').add(payload);
  }

  updateEmployee(employeeId: string, payload: IEmployee) {
    return this.firestore.doc('employee/' + employeeId).update(payload);
  }

  deleteEmployee(employeeId: string) {
    return this.firestore.doc('employee/' + employeeId).delete();
  }

}

export interface IEmployee {
  id?: string;
  name: string;
  email: string;
}

