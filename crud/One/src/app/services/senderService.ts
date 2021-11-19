
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class senderService {
  url: string = "http://localhost:3000/content/";

  constructor(private httpClient: HttpClient) { }

  post(description: string) {
    this.httpClient.post(this.url,{param1:description})
      .subscribe(s => {
        alert(description)
        console.log(s)
      }
      );
  }
}
