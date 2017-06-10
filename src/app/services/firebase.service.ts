import { Injectable } from '@angular/core';

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
    console.log(listing)
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