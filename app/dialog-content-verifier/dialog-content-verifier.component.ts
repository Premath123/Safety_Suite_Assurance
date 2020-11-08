import { Component, OnInit } from '@angular/core';
import { DataService } from "../_services/data.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content-verifier',
  templateUrl: './dialog-content-verifier.component.html',
  styleUrls: ['./dialog-content-verifier.component.scss']
})
export class DialogContentVerifierComponent implements OnInit {
details1: any="";
constructor(public dialog: MatDialog, private dataService: DataService) {
this.details1= this.dataService.connection_details1;
   // console.log(this.details);
}

  ngOnInit() {
  }

}
