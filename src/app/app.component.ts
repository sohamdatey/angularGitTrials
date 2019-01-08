import { Component } from '@angular/core';
import { User } from './user';
import { EmployeeService } from './employee.service';
import { Emp } from './emp';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Rob', 'rob@test.com', 5556665566, 'default', '', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private _empService: EmployeeService) {}
  public employees :Emp[];

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  ngOnInit()
  {
    this._empService.getEmployees().subscribe(data => this.employees=data)
  }

  onSubmit() {}
}
