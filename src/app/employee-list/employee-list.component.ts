import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../share/restfull-api.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  Employee: any = [];
  constructor(public restApi: RestApiService) {}
  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }

  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe((data) => {
        this.loadEmployees();
      });
    }
  }
}
