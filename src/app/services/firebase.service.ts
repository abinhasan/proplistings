import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.listings = db.list('/listings');
  }

  getListings() {
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;
  }

  getListingDetails(id) {
    this.listing = this.db.object('/listings/' + id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }


  addListing(listing) {

    // let storageRef = firebase.storage().ref();
    // for (let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
    //   let path = '/${this.folder}/${selectedFile.name}';
    //   console.log(path);
    //   let iRef = storageRef.child(path);
    //   iRef.put(selectedFile).then((snapshot) => {
    //     listing.image = selectedFile.name;
    //     listing.path = path;
    //     return this.listings.push(listing);
    //   });
    // }
    console.log(listing)
    return this.listings.push(listing);
  }
  
  deleteListing(id) {
    return this.listings.remove(id);
  }
}

interface Listing {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
  price?: string;
}