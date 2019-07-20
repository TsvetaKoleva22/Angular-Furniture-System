import { Component, OnInit } from '@angular/core';
import { FurnitureI } from 'src/app/core/models/furn.interface';
import { FurnService } from '../../../core/services/furn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-user',
  templateUrl: './furniture-user.component.html',
  styleUrls: ['./furniture-user.component.css']
})
export class FurnitureUserComponent implements OnInit {
  myFurnArr: FurnitureI[];

  constructor(
    private furnService: FurnService,
    private router: Router
  ) { }

  ngOnInit() {
    this.furnService.getMyFurnitureS().subscribe(data => {
      this.myFurnArr = data;
      // console.log(data);
    }, err => console.log(err))
  }

  deleteFunc(id) {
    this.furnService.delFurnitureS(id).subscribe(data => {
      this.furnService.getMyFurnitureS().subscribe(newdata => {
        this.myFurnArr = newdata;
        this.router.navigate(['/furniture/user']);
      }, err => console.log(err))
    })
  }

}
