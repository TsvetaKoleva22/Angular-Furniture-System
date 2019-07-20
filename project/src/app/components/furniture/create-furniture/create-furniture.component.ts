import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurnService } from '../../../core/services/furn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnService: FurnService,
    private router: Router
    ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      make: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1950), Validators.max(2050)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(1)]],
      image: ['', [Validators.required]],
      material: ['', [Validators.nullValidator]]
    })
  }

  createFurnFunc(){
    this.furnService.createFurnitureS(this.myForm.value).subscribe( data => {
      // console.log(data);
      this.router.navigate(['/furniture/all']);
    })
    
    // console.log(this.myForm);
  }

  get f(){
    return this.myForm.controls;
  }

}
