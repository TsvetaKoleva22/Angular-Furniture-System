import { Component, OnInit } from '@angular/core';
import { FurnService } from '../../../core/services/furn.service';
import { ActivatedRoute } from '@angular/router';
import { FurnitureI } from 'src/app/core/models/furn.interface';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  id: string;
  currFurn: FurnitureI;

  constructor(
    private furnService: FurnService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( paramsObj => this.id = paramsObj['id']);
    this.furnService.getDetailsS(this.id).subscribe(data => {
      this.currFurn = data;
      if(!this.currFurn['material']){
        this.currFurn.material = 'No material specified';
      }
    })
  }

}
