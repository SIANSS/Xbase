import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>; //
  constructor(private af: AngularFire) { } //

  getlistings(){ //
    this.listings = this.af.database.list('listings') as FirebaseListObservable<listing[]>
    return this.listings;
  }
}

interface listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
