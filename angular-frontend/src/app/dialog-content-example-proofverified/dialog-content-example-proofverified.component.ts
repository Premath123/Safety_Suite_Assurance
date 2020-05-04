import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from "../_services/data.service";
import { DialogContentProofverifiedComponent } from '../dialog-content-proofverified/dialog-content-proofverified.component';

@Component({
  selector: 'app-dialog-content-example-proofverified',
  templateUrl: './dialog-content-example-proofverified.component.html',
  styleUrls: ['./dialog-content-example-proofverified.component.scss']
})
export class DialogContentExampleProofverifiedComponent  {

constructor(public dialog: MatDialog, private dataService: DataService) 
{
    
}
openDialog() {
const dialogRef = this.dialog.open(DialogContentProofverifiedComponent )
dialogRef.afterClosed().subscribe(result => {
//console.log(`Dialog result: ${result}`);    
});
let proof = {
  "connection_id": this.dataService.connection_id,
  "comment": "This is a comment about the reason for the proof",
  "proof_request": {
    "name": "Proof of covid19-test",
    "version": "1.0",
    "requested_attributes": {
      "0_covid_status_uuid": {
        "name": "covid_status",
        "restrictions": [
          {
            "cred_def_id": "JGVyDWg9YkwrVSYwf8Hoj:3:CL:15328:default",
            "attr::covid_status::value": "negeive"
          }
        ]
      }

 

  },

 

   "requested_predicates": {

 

    }
  }
}
console.log(proof);
this.dataService.presentProof(proof);
}
}

  
  