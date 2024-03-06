import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  addTransaction(transactionRequest: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transactions`, transactionRequest)
      .pipe(
        catchError(this.handleError<any>('addTransaction'))
      );
  }
  
  
 
  // Error handling function
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
  
  
}
