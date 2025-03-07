
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/dashboard/header.component';
import{CRUDComponent} from './components/crud/crud.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,CRUDComponent],
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header></app-header>
    <app-crud></app-crud>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'AddressBook';
}
