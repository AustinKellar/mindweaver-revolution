import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Weave } from 'src/app/weave.model';

@Injectable({
  providedIn: 'root'
})
export class WeavesService {

  constructor(private firestore: AngularFirestore) { }

  getWeaves() {
    return this.firestore.collection('weaves').snapshotChanges();
  }

  createWeave(weave: Weave){
    return this.firestore.collection('weaves').add(weave);
  }

  deleteWeave(weaveId: string){
    this.firestore.doc('weaves/' + weaveId).delete();
  }
  
}
