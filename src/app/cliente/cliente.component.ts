import { Component } from '@angular/core';
import { CardModule} from'primeng/card'
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [SidebarComponent, CardModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {

}
