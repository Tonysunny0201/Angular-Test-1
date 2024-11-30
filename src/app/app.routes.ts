import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoignComponent } from './loign/loign.component';

export const routes: Routes = [
    {
        path:"employee", component:EmployeeComponent
    },
    {
        path: 'login', component:LoignComponent 
    }
];
