import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentModel } from 'src/app/models/document/document.model';
import { PriorityModel } from 'src/app/models/priority/priority.model';
import { DocumentService } from 'src/app/services/documents/document.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  currentDocument : any;
  documents : any = [];
  priorities : any = [];

  constructor(private service : DocumentService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(){
    this.getDocumnet(this.id);
    this.service.GetAllPriorities().subscribe((PriorityData : PriorityModel[]) => {
      this.priorities = PriorityData;
    });
  }

  getDocuments() {
    this.service.GetAllDocuments().subscribe((DocumentData : DocumentModel[]) => {
      this.documents = DocumentData;
    }),
    this.service.GetAllPriorities().subscribe((PriorityData : PriorityModel[]) => {
      this.priorities = PriorityData;
    })
  }

  getDocumnet(id : any) {
    this.service.GetDocumentById(id)
    .subscribe(
      (document : any) => {
        this.currentDocument = document;
      });  
  }

  deleteDocument(id : any) {
    if (window.confirm('Are you sure you want to delete this document?')) {
      this.service.DeleteDocument(id).subscribe((result) => {
        this.getDocuments();
        alert("Document deleted successfully");
        this.router.navigate(['']);
      });
    }
  }

}
