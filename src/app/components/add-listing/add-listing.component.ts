import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title: any;
  type: any;
  image: any;
  city: any;
  owner: any;
  bedrooms: any;
  price: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit() {
    let listing = {
      title: this.title,
      type: this.type,
      image: this.image,
      city: this.city,
      owner: this.owner,
      bedrooms: this.bedrooms,
      price: this.price
    }

    this.firebaseService.addListing(listing);
    this.router.navigate(['listing']);
  }

}
