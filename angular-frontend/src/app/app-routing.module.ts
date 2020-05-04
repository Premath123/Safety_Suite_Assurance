import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishConnectionComponent } from './establish-connection/establish-connection.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';
import { RequestCredentialComponent } from './request-credential/request-credential.component';
import { CredentialListComponent } from './credential-list/credential-list.component';
import { EstablishConnectionVerifierComponent } from './establish-connection-verifier/establish-connection-verifier.component';
import { PresentProofComponent } from './present-proof/present-proof.component';
import { VerifiedProofComponent } from './verified-proof/verified-proof.component';



const routes: Routes = [
  { path: '', component: EstablishConnectionComponent  },
  { path: 'footer', component: FooterComponent  },
  { path: 'navbar', component: NavbarComponent  },
  { path: 'dialog', component: DialogContentExampleComponent },
  { path: 'request', component: RequestCredentialComponent },
  { path: 'credential', component: CredentialListComponent },
  { path: 'establish', component: EstablishConnectionVerifierComponent},
  { path: 'present', component: PresentProofComponent },
  { path: 'verified', component: VerifiedProofComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }