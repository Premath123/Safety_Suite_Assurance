import { Component, OnInit } from '@angular/core';
import { DataService } from "../_services/data.service";

@Component({
  selector: 'app-request-credential',
  templateUrl: './request-credential.component.html',
  styleUrls: ['./request-credential.component.scss']
})
export class RequestCredentialComponent implements OnInit {
  request: any;
  first_name: any;
  last_name: any;
  citizen_id: any;
  dob: any;
  tested_date: any;
  test_authority: any;
  tested_location: any;
  covid_status: any;
  tested_by: any;

  constructor(private dataService: DataService) { }
  ngOnInit() {
  }

  requestInvitationn() {
    this.request = {
      "schema_id": "JGVyDWg9YkwrVSYwf8Hoj:2:covid19-status:1.0",
      "auto_remove": true,
      "credential_proposal": {
        "@type": "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/issue-credential/1.0/credential-preview",
        "attributes": [
          {
            "name": "first_name",
            "value": this.first_name
          },
          {
            "name": "last_name",
            "value": this.last_name
          },
          {
            "name": "dob",
            "value": this.dob
          },
          {
            "name": "citizen_id",
            "value": this.citizen_id
          },
          {
            "name": "tested_location",
            "value": this.tested_location
          },
          {
            "name": "tested_by",
            "value": this.tested_by
          },
          {
            "name": "tested_date",
            "value": this.tested_date
          },
          {
            "name": "covid_status",
            "value": this.covid_status
          }
        ]
      },
      "schema_version": "1.0",
      "schema_issuer_did": "JGVyDWg9YkwrVSYwf8Hoj",
      "schema_name": "covid19-status",
      "comment": "This is my first covid credential",
      "issuer_did": "JGVyDWg9YkwrVSYwf8Hoj",
      "connection_id": "f3a153d3-9dab-4a31-aada-888f8a9f4098",
      "cred_def_id": "JGVyDWg9YkwrVSYwf8Hoj:3:CL:15328:default"
    }  
  
  this.dataService.requestCredential(this.request).subscribe((data: {}) => {
    //console.log(this.request)
  })
  }
}
