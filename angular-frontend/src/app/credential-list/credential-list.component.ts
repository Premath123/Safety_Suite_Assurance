import { Component, OnInit } from '@angular/core';
import { DataService } from "../_services/data.service";

@Component({
  selector: 'app-credential-list',
  templateUrl: './credential-list.component.html',
  styleUrls: ['./credential-list.component.scss']
})

export class CredentialListComponent implements OnInit {
attributes:any=[];
constructor(private dataService: DataService) {}

ngOnInit() 
{
  this.loadCredentials();
}

loadCredentials() 
{
  return this.dataService. getCredentials().subscribe((data) => {
  // setTimeout(()=>{},10000)
  this.attributes = data;
  console.log(this.attributes);   
  })
}
}

