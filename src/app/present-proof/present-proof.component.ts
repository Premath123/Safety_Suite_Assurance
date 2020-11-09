import { Component, OnInit } from '@angular/core';
import { DataService } from "../_services/data.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-present-proof',
  templateUrl: './present-proof.component.html',
  styleUrls: ['./present-proof.component.scss']
})
export class PresentProofComponent implements OnInit {
id:any;
  constructor(public dialog: MatDialog, private dataService: DataService) {}

  ngOnInit() {
  }
  presentProof()
  {
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
                "cred_def_id": "JGVyDWg9YkwrVSYwf8Hoj:3:CL:15328:default"
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
