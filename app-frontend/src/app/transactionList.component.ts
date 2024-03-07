import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { TransactionService } from './transactionService';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './transactionList.component.html'
 })
export class TransactionListComponent implements OnInit {
 transactionsWithBalance: any;

  constructor(private route: ActivatedRoute,
  private transactionService: TransactionService,
  private cdRef: ChangeDetectorRef 
  ) { }

 ngOnInit(): void {
   this.loadTransactions();
  }
  
  

loadTransactions(): void {
    this.route.params.subscribe(params => {
    const accountId = params['accountId'];
    const amount = params['amount'];
 
    const transactionRequest = { accountId: accountId, amount: amount };
    
    this.transactionService.addTransaction(transactionRequest).subscribe(
      (response) => {
        this.transactionsWithBalance = response;
        this.cdRef.detectChanges();
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  });
}
  
}