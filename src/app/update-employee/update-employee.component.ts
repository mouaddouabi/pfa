import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id:number=0
  employee!:Employee
  constructor(private service:EmployeeService,private router:Router,private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.service.getEmployee(this.id).subscribe(data =>{ 
      console.log(data),
      this.employee=data;
    },error => console.log(error));
  }
  onSubmit(){
    this.service.updateEmployee(this.employee,this.id).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['employees']);
      },error => console.log(error)
    )
  }
}
