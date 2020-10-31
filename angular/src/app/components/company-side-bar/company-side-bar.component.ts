import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-company-side-bar',
  templateUrl: './company-side-bar.component.html',
  styleUrls: ['./company-side-bar.component.css']
})
export class CompanySideBarComponent implements OnInit {

  company:any
  constructor(private dataSrc:DataService) { }

  ngOnInit(): void {
    this.dataSrc.getCompanyData().subscribe(res => {
      this.company = res.data
    })
  }

}
