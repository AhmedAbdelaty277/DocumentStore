import { Component, OnInit } from '@angular/core';
import { DocumentModel } from 'src/app/models/document/document.model';
import { PriorityModel } from 'src/app/models/priority/priority.model';
import { DocumentService } from 'src/app/services/documents/document.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  documents : any = [];
  priorities : any = [];

  constructor(private service : DocumentService) { }

  ngOnInit() {
    this.getDocuments()
  }

  getDocuments() {
    this.service.GetAllDocuments().subscribe((DocumentData : DocumentModel[]) => {
      this.documents = DocumentData;
    }),
    this.service.GetAllPriorities().subscribe((PriorityData : PriorityModel[]) => {
      this.priorities = PriorityData;
    })
  }

  deleteDocument(id : any) {
    if (window.confirm('Are you sure you want to delete this document?')) {
      this.service.DeleteDocument(id).subscribe((result) => {
        this.getDocuments();
        alert("Document deleted successfully")
      });
    }
  }

}
