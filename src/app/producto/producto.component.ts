import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [SidebarComponent, CardModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

}
