import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InitialPageComponent } from '../../pages/initial-page/initial-page.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,InitialPageComponent ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
