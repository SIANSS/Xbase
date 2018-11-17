import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

// FIREBASE CONFIGURATION VARIABLES from ANGULARFIRE2
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDuXf8CHhLfZYBu6mD3HKh_5rlaE00eq5I",
    authDomain: "proplisting-3d0c4.firebaseapp.com",
    databaseURL: "https://proplisting-3d0c4.firebaseio.com",
    projectId: "proplisting-3d0c4",
    storageBucket: "proplisting-3d0c4.appspot.com",
    messagingSenderId: "657431500498"
  }
};

// ROUTING
const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'listings', component:ListingComponent},
  {path:'addlistings', component:AddListingComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
