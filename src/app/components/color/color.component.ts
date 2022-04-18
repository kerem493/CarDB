import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/colors';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[]=[]
  dataLoaded = false;

  constructor(private colorService : ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getCustomers().subscribe(response =>{
     this.colors = response.data
     this.dataLoaded = true;
   })

  }}
