import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  items = []
  cities = []
  initialRecord = {
    firstName: '',
    lastName: '',
    contactNo: '',
    city: ''
  }
  constructor(private dataSrc: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.items.push(JSON.parse(JSON.stringify(this.initialRecord)))
    this.dataSrc.getCities().subscribe(res => {
      this.cities = res.data
    })
  }

  addDefaultRow() {
    this.items.push(JSON.parse(JSON.stringify(this.initialRecord)))
  }

  deleteRecord(data) {
    this.items = this.items.filter(x => x.firstName != data.firstName || x.lastName != data.lastName || x.contactNo != data.contactNo)
    if (this.items.length == 0) {
      this.addDefaultRow()
    }
  }

  saveData() {
    let validRecords = this.items.filter(x => x.firstName != '' || x.lastName != '' || x.contactNo != '')
    if (validRecords.length > 0) {
      let existingData = JSON.parse(localStorage.getItem('userData'))
      if (existingData) {
        let newData = [...existingData, ...validRecords]
        localStorage.setItem('userData', JSON.stringify(newData))
      } else {
        localStorage.setItem('userData', JSON.stringify(validRecords))
      }
      this.items = []
      this.addDefaultRow()
      this.toastr.success('Success', 'Data Submitted Successfully.');
    }
  }
}
