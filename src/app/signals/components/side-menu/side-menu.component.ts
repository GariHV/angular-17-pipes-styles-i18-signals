import {Component, signal} from '@angular/core';


interface IMenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<IMenuItem[]>([
    { title: 'Contador', route: 'counter'},
    {title: 'Info Usuario', route: 'user-info'},
    { title: 'Properties', route: 'properties'}
  ])

}
