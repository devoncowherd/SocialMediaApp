import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticationComponent } from './tools/authenticator/authenticator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SocialMediaApp';
  constructor(private loginSheet: MatBottomSheet) {

  }

  onLoginClick(){
    this.loginSheet.open(AuthenticationComponent);
  }
}
