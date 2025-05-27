import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';

@Component({
  selector: 'app-abscence',
  imports: [NavComponent,RouterOutlet,FooterComponent],
  templateUrl: './abscence.component.html',
  styleUrl: './abscence.component.css'
})
export class AbscenceComponent {

}
