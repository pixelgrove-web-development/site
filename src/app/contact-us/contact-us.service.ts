import { Injectable } from '@angular/core';
import { ContactUsInfo } from '../models/contact-us';
import { HttpClient } from '@angular/common/http';
import {
  CollectionReference,
  DocumentReference,
  addDoc,
  collection,
  setDoc,
} from '@angular/fire/firestore';
import { getFirestore } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}
  saveContactUsInfo(info: ContactUsInfo) {
    return this.http.post('https://api.web3forms.com/submit', {
      ...info,
      access_key: '3fe7dcfa-b3e3-4dd4-afdb-63eed79aa0ec',
    });
  }
}
