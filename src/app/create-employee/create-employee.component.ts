import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public employee:Employee = new Employee();
  constructor(private service:EmployeeService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.service.createEmployee(this.employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.route.navigate( ['add']);
    },
    error => console.log(error));
  }
}
