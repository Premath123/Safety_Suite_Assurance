import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSlideToggleModule, MatTableModule, MatPaginatorModule, MatSortModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from "@angular/common/http";
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {CustomMaterialModule} from "./core/core/material.module";
import { HolderComponent } from './holder/holder.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EstablishConnectionComponent } from './establish-connection/establish-connection.component';
import { FooterComponent } from './footer/footer.component';
import { DialogContentExampleComponent} from './dialog-content-example/dialog-content-example.component';
import { RequestCredentialComponent } from './request-credential/request-credential.component';
import { CredentialListComponent } from './credential-list/credential-list.component';
//import {MatDialog} from '@angular/material/dialog';
//import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { EstablishConnectionVerifierComponent } from './establish-connection-verifier/establish-connection-verifier.component';
import { PresentProofComponent } from './present-proof/present-proof.component';
import { VerifiedProofComponent } from './verified-proof/verified-proof.component';
import { DialogContentExampleVerifierComponent } from './dialog-content-example-verifier/dialog-content-example-verifier.component';
import { DialogContentVerifierComponent } from './dialog-content-verifier/dialog-content-verifier.component';
import { DialogContentProofverifiedComponent } from './dialog-content-proofverified/dialog-content-proofverified.component';
import { DialogContentExampleProofverifiedComponent } from './dialog-content-example-proofverified/dialog-content-example-proofverified.component';

@NgModule({
  declarations: [
    AppComponent,
    HolderComponent,
    NavbarComponent,
    EstablishConnectionComponent,
    FooterComponent,
    DialogContentExampleComponent,
   
    RequestCredentialComponent,
    CredentialListComponent,
    DialogContentComponent,
    EstablishConnectionVerifierComponent,
    PresentProofComponent,
    VerifiedProofComponent,
    DialogContentExampleVerifierComponent,
    DialogContentVerifierComponent,
    DialogContentProofverifiedComponent,
    DialogContentExampleProofverifiedComponent
  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MatCardModule

  ],
 entryComponents: [DialogContentExampleComponent,
  DialogContentComponent,DialogContentExampleVerifierComponent, DialogContentVerifierComponent, DialogContentProofverifiedComponent,DialogContentExampleProofverifiedComponent],
 
 /* bootstrap: [DialogContentExampleComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]*/

 providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }