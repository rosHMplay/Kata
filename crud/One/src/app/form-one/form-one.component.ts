import { senderService } from './../services/senderService';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.scss']
})

@Injectable({providedIn:'root'})
export class FormOneComponent implements OnInit {

  description: string = "";

  constructor(private service:senderService) { }

  ngOnInit(): void {
  }

  send(): void {
      this.service.post(this.description);
  }
}
