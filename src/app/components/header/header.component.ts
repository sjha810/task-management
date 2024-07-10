import { Component, Input } from '@angular/core';
import { RoutesLink } from '../../interface/RoutesLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() routes: RoutesLink[] = []

}
