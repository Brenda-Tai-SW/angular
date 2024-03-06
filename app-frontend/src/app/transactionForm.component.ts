import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from './transactionService'; // Import the transaction service

@Component({
   selector: 'app-root',
  templateUrl: './transactionForm.component.html',
})
export class TransactionFormComponent {
  accountId: number;
  amount: number;

  constructor(private transactionService: TransactionService, private router: Router) {
    this.accountId =111;
    this.amount = 0;
  }

  submitTransaction(): void {
    // Create transactionRequest object
   const transactionRequest = { accountId: this.accountId, amount: this.amount };
    console.log('Navigation URL:', ['/transactions', transactionRequest.accountId, transactionRequest.amount]);
  
    // Add transaction to SQLite database
    this.transactionService.addTransaction(transactionRequest).subscribe(() => {
    //  Redirect to TransactionListComponent after successful submission
     this.router.navigate(['/transactions', transactionRequest.accountId, transactionRequest.amount]);
    });
  }
}
