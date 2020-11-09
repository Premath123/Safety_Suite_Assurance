import { Component, OnInit } from '@angular/core';
import { DataService } from "../_services/data.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-proofverified',
  templateUrl: './dialog-content-proofverified.component.html',
  styleUrls: ['./dialog-content-proofverified.component.scss']
})
export class DialogContentProofverifiedComponent implements OnInit {
details2: any="";
constructor(public dialog: MatDialog, private dataService: DataService) {
this.details2= this.dataService.connection_details2;
   // console.log(this.details);
}

  ngOnInit() {
  }

}

