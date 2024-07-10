import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-alert',
  templateUrl: './show-alert.component.html',
  styleUrl: './show-alert.component.scss'
})
export class ShowAlertComponent {
  @Input() color: string = '';
  @Input() massage: string | undefined = ''
}
