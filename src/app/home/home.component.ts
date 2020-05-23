import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'salary'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  empData: any = [];
  currentDate = new Date();
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  getData() {
    this.httpService.getData().subscribe((result) => {
      console.log(result);
      this.bindEmployeeData(result);
    });
  }
  bindEmployeeData(result) {
    let emplist: any = [];
    result.data.forEach((element) => {
      emplist.push({
        id: element.id,
        name: element.employee_name,
        age: element.employee_age,
        salary: element.employee_salary,
      });
    });
    this.empData = emplist;
    console.log(this.empData);
  }
}
