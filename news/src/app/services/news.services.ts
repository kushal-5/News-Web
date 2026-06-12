import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';  // send queryparams + Httppapram
import { Observable, catchError, throwError } from 'rxjs';
import { NewsResponse } from '../models/news.model';

@Injectable({            // for all app
  providedIn: 'root'
})
export class NewsService {
  private readonly BASE_URL = 'https://news.truestreamz.com/api/v1/news';  // private only usable in classs and readonly cannot been chnage later

  constructor(private http: HttpClient) {}

  getNews(appId: number = 1): Observable<NewsResponse> {
    const params = new HttpParams().set('appId', appId.toString());
    
    return this.http.get<NewsResponse>(this.BASE_URL, { params }).pipe(
      catchError(error => {
        console.error('Corporate Logging Service: API Failed', error);
        return throwError(() => new Error('Something went wrong with the news feed.'));
      })
    );
  }
}