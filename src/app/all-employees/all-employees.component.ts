import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  employees!: Observable<Employee[]>;
  firstname:any;
  id:number=0;
  idUpdate = 0;
  isAdd = true;
  public employee:Employee = new Employee();
  constructor(private employeeService: EmployeeService,private router: Router,private route:ActivatedRoute) {}
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
      this.idUpdate=id;
      console.log(id);
      this.employeeService.getEmployee(id).subscribe(data =>{ 
        console.log(data),
        this.employee=new Employee(),
        this.employee=data;
      },error => console.log(error));
      this.isAdd=false;
    }
    onSubmit(){
      console.log(this.isAdd)
      if(this.isAdd){
        this.employeeService.createEmployee(this.employee).subscribe(data => {
          console.log(data)
          this.employee = new Employee();
          this.router.navigate( ['employees']);
          this.reloadData();
        },
        error => console.log(error));
      }else{
        this.employeeService.updateEmployee(this.employee,this.employee.id).subscribe(
          data => {
            console.log(data)
            this.router.navigate(['employees']);
            this.reloadData();
          },error => console.log(error)
        );
        this.idUpdate=0;
      }
      
    }
}
