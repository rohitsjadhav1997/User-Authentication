import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { expenseGuard } from './expense.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   {path:'expenses',component:ExpensesComponent,canActivate:[expenseGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
