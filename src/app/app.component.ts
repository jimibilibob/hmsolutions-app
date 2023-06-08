import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName: string = 'HMSolutions';
  isLoading: boolean = false;
  isMaskPassword: boolean = true;


}
