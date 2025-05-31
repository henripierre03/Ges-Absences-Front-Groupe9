import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../layout/nav/nav.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-absence',
  imports: [RouterModule,NavComponent,FooterComponent],
  templateUrl: './absence.component.html',
  styleUrl: './absence.component.css'
})
export class AbsenceComponent {

}
