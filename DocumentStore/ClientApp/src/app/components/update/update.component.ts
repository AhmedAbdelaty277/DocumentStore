import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PriorityModel } from 'src/app/models/priority/priority.model';
import { DocumentService } from 'src/app/services/documents/document.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  documentInfo : any = {};
  priorities : any = [];

  constructor(private service: DocumentService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.service.GetDocumentById(this.id).subscribe((documentData : {}) => {
      this.documentInfo = documentData;
    }),
    this.service.GetAllPriorities().subscribe((PriorityData : PriorityModel[]) => {
      this.priorities = PriorityData;
    });
  }

  updateDocument() {
    if (window.confirm('Are you sure you want to update document?')) {
      this.service.UpdateDocument(this.id, this.documentInfo)
        .subscribe((data) => {
          alert("Document updated successfully")
          this.router.navigate(['']);
        });
    }
  }

}
