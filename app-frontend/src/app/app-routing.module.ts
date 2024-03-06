import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionFormComponent } from './transactionForm.component';
import { TransactionListComponent } from './transactionList.component';

const routes: Routes = [
  { path: 'transactions/:accountId/:amount', component: TransactionListComponent },
  { path: 'addTransaction', component: TransactionFormComponent },
  { path: '**', redirectTo: '/transactions' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
