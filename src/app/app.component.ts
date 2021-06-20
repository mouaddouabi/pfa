import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Table';
  
  employees!: Observable<Employee[]>;
  firstname:any;
  constructor(private employeeService: EmployeeService,
    private router: Router) {}
    ngOnInit() {
      this.reloadData();
    }
   
    reloadData() {
      this.employees = this.employeeService.getEmployees();
    }
    deleteEmployee(id:number){
      this.employeeService.deleteEmployee(id).subscribe(data =>{ 
        console.log(data)
        this.router.navigate(['employees']);
        this.reloadData();
      },error => console.log(error)
      );
    }
    updateEmployee(id:number){
      this.router.navigate(['update',id]);
    }
}
