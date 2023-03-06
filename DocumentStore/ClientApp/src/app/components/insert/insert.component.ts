import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PriorityModel } from 'src/app/models/priority/priority.model';
import { DocumentService } from 'src/app/services/documents/document.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  
  priorities : any[] = [];
  contactForm!: FormGroup;

  constructor(private service : DocumentService, private router : Router) { }

  ngOnInit(): void {
    this.service.GetAllPriorities().subscribe((PriorityData : PriorityModel[]) => {
      this.priorities = PriorityData;
    }),
    this.contactForm = new FormGroup({
      Name : new FormControl('', Validators.required),
      CreatedDate : new FormControl('', Validators.required),
      DueDate : new FormControl('', Validators.required),
      PriorityId : new FormControl('', Validators.required)
    })
  }

  submit() {
    if (window.confirm('Are you sure you want to insert this document?')) {
      this.service.InsertDocument(this.contactForm.value).subscribe((data: {}) => {
        alert("Document inserted successfully")
        this.router.navigate(['']);
      });
    }
  }

}
