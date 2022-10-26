import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddStaffComponent } from './components/staffs/add-staff/add-staff.component';
import { StaffsListComponent } from './components/staffs/staffs-list/staffs-list.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { PersonComponent } from './person/person.component';
const routes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: '', component: HomepageComponent},
  { path: 'staffs', component: StaffsListComponent},
  { path: 'staffs/add', component: AddStaffComponent},
  {
    path: 'customers/add',
    component: AddCustomerComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
