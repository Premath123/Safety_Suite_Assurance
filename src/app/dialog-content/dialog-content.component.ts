import { Component, OnInit } from '@angular/core';
import { DataService } from "../_services/data.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {
details: any="";
constructor(public dialog: MatDialog, private dataService: DataService) {
this.details= this.dataService.connection_details;
   // console.log(this.details);
}

  ngOnInit() {
  }

}
