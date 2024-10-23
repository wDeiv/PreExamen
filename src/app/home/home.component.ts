import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardModule} from'primeng/card'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, CardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
