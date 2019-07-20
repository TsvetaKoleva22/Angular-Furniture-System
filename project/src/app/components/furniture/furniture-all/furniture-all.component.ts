import { Component, OnInit } from '@angular/core';
import { FurnitureI } from 'src/app/core/models/furn.interface';
import { FurnService } from '../../../core/services/furn.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-furniture-all',
  templateUrl: './furniture-all.component.html',
  styleUrls: ['./furniture-all.component.css']
})
export class FurnitureAllComponent implements OnInit {
  furnArr: FurnitureI[];
  isAdmin: boolean = false;

  constructor(
    private furnService: FurnService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authService.isAdmin() === 'true') {
      this.isAdmin = true;
    }

    this.furnService.getAllFurnitureS().subscribe(data => {
      this.furnArr = data;
      // console.log(data);
    }, err => console.log(err))
  }

  deleteFunc(id) {
    this.furnService.delFurnitureS(id).subscribe(data => {
      this.furnService.getAllFurnitureS().subscribe(newdata => {
        this.furnArr = newdata;
        this.router.navigate(['/furniture/all']);
      }, err => console.log(err));
    })
  }

}
