import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { DocumentModel } from 'src/app/models/document/document.model';
import { PriorityModel } from 'src/app/models/priority/priority.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private GetDocumentsURL = "http://localhost:5212/api/Documents/GetAllDocuments";

  private GetAllPrioritiesURL = "http://localhost:5212/api/Priority/GetAllPriorites";

  private DocumentDetailsURL = "http://localhost:5212/api/Documents/DocumentDetails?id=";

  private InsertDocumentURL = "http://localhost:5212/api/Documents/InsertDocument";

  private UpdateDocumentURL = "http://localhost:5212/api/Documents/UpdateDocument?id=";

  private DeleteDocumentURL = "http://localhost:5212/api/Documents/DeleteDocument?id=";

  httpOptions : Object = {
    headers: new HttpHeaders({
      'Accept': 'text/html',
      'Content-Type' : 'application/json',
    }),
    responseType: 'text'
  };

  constructor(private client : HttpClient) { }

  GetAllDocuments() : Observable<DocumentModel[]>{
    return this.client.get<DocumentModel[]>(this.GetDocumentsURL).pipe(
      catchError(this.ErrorHandling)
    )
  }

  GetAllPriorities() : Observable<PriorityModel[]>{
    return this.client.get<PriorityModel[]>(this.GetAllPrioritiesURL).pipe(
      catchError(this.ErrorHandling)
    )
  }

  GetDocumentById(id : any) : Observable<DocumentModel>{
    return this.client.get<DocumentModel>(`${this.DocumentDetailsURL}${id}`).pipe(
      catchError(this.ErrorHandling)
    )
  }

  InsertDocument(document : any): Observable<DocumentModel> {
    return this.client.post<DocumentModel>(this.InsertDocumentURL, JSON.stringify(document), this.httpOptions).pipe(
      catchError(this.ErrorHandling)
    )
  }

  UpdateDocument(id : any, data : any) : Observable<DocumentModel>{
    return this.client.put<DocumentModel>(`${this.UpdateDocumentURL}${id}`, JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.ErrorHandling)
    )
  }

  DeleteDocument(id : any) : Observable<DocumentModel>{
    return this.client.delete<DocumentModel>(`${this.DeleteDocumentURL}${id}`, this.httpOptions).pipe(
      catchError(this.ErrorHandling)
    )
  }

  ErrorHandling(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
