import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items = []

  constructor() { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('userData'))
  }

}
