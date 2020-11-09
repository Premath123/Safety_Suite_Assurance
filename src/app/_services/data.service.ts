import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { MatSnackBar } from "@angular/material";
import { pipe } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

const API_URL = "http://3.21.246.220:8021";
const API_URL1 = "http://3.21.246.220:8031";
const API_URL2 = "http://3.21.246.220:8041";


@Injectable({
  providedIn: "root"
})
export class DataService {
connection_id:string;

connection_idd:string;
connection_details:any;
connection_details1:any;
connection_details2:any;
constructor(private http: HttpClient, public snackBar: MatSnackBar) {}
httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  })
};
//Establish connection with Issuer
createInvitation() {
  this.http.post(API_URL + "/connections/create-invitation?alias=aaa"," ").subscribe(res =>{
  console.log(res);
  this.connection_id = res.connection_id;
  this.connection_details = res;
  this.http.post(API_URL1 + "/connections/receive-invitation?alias=aaa",res.invitation).subscribe(res =>{
  console.log(res);
  this.connection_id = res.connection_id;
  this.connection_details = res;
  return res;
  });
});
//return res;
} 
//Request credential screen
requestCredential(request) {
  console.log(request);
  return this.http.post(API_URL + "/issue-credential/send", request, this.httpOptions)  
}  
//Credential List  
getCredentials() {
  return this.http.get(API_URL1 + '/credentials')
  .pipe(
  retry(1),
  catchError(this.handleError)
  )
}

requestInvitation(res:string) {
  console.log("response in createInviation: " + res );
   return this.http.post(API_URL1 + "/connections/receive-invitation?alias=aaa","");
}

//Establish connection with Verifier
createInvitationVerifier() {
  this.http.post(API_URL2 + "/connections/create-invitation?alias=verify"," ").subscribe(res =>{
  console.log(res);
  this.connection_details1 = res;
  this.connection_id = res.connection_id;
  this.http.post(API_URL1 + "/connections/receive-invitation?alias=verify",res.invitation).subscribe(res =>{
  console.log(res);
  this.connection_details1 = res;
  return res;
  });
});
//return res;
} 
//Present proof
presentProof(Obj) {
  this.http.post(API_URL2 + "/present-proof/send-request",Obj).subscribe(
    res => {
      console.log(res);
      this.http.post(API_URL2 + "/present-proof/records/"+res.presentation_exchange_id+"/verify-presentation","").subscribe(
res => {
  console.log(res);
  this.connection_details2 = res;
  return res;
});
 
});
}
handleError(error) {
  let errorMessage = '';
  if ( error.error instanceof ErrorEvent) {
  // Get client-side error
  errorMessage = error.error.message;
  } else {
  // Get server-side error
  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
  }
}