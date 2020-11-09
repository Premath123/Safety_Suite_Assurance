import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataService } from "../_services/data.service";
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  styleUrls: ['./dialog-content-example.component.scss']
})
export class DialogContentExampleComponent {

constructor(public dialog: MatDialog, private dataService: DataService) 
{
  
}
openDialog() {
  const dialogRef = this.dialog.open(DialogContentComponent)
dialogRef.afterClosed().subscribe(result => {
   //console.log(`Dialog result: ${result}`);
  
  });
 this.dataService.createInvitation()
}
}




