import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from "../_services/data.service";
import { DialogContentVerifierComponent } from '../dialog-content-verifier/dialog-content-verifier.component';

@Component({
  selector: 'app-dialog-content-example-verifier',
  templateUrl: './dialog-content-example-verifier.component.html',
  styleUrls: ['./dialog-content-example-verifier.component.scss']
})
export class DialogContentExampleVerifierComponent {

  constructor(public dialog: MatDialog, private dataService: DataService) 
  {
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentVerifierComponent)
  dialogRef.afterClosed().subscribe(result => {
     //console.log(`Dialog result: ${result}`);
    
    });
   this.dataService.createInvitationVerifier()
  }
}
  