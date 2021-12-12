import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  address: string = 'Rua António José da Silva, 215';
  zipCode: string = '4200-082';
  city: string = "Porto";
  country: string = "Portugal";
  email: string = 'info@krafna.pt';
  web: string = 'www.krafna.pt';

  constructor() {}
}
