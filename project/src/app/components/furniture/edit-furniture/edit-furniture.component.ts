import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FurnService } from '../../../core/services/furn.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FurnitureI } from 'src/app/core/models/furn.interface';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  id: string;
  oldFurn: FurnitureI;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private furnService: FurnService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(paramsObj => this.id = paramsObj['id']);
    this.furnService.getDetailsS(this.id).subscribe(data => {
      this.oldFurn = data;
      if (!this.oldFurn['material']) {
        this.oldFurn.material = 'No material specified';
      }

      this.myForm = this.fb.group({
        make: [this.oldFurn.make, [Validators.required, Validators.minLength(4)]],
        model: [this.oldFurn.model, [Validators.required, Validators.minLength(4)]],
        year: [this.oldFurn.year, [Validators.required, Validators.min(1950), Validators.max(2050)]],
        description: [this.oldFurn.description, [Validators.required, Validators.minLength(10)]],
        price: [this.oldFurn.price, [Validators.required, Validators.min(1)]],
        image: [this.oldFurn.image, [Validators.required]],
        material: [this.oldFurn.material, [Validators.nullValidator]]
      })
    })
    
  }

  editFurnFunc() {
    this.furnService.editFurnitureS(this.id, this.myForm.value).subscribe(data => {
      // console.log(data);
      this.router.navigate(['/furniture/all']);
    })
  }

  get f() {
    return this.myForm.controls;
  }

}
