import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SOTheLastGuardian';
  constructor() {
    // Call the hide() method of the StatusBar plugin to hide the status bar and go full-screen
    StatusBar.hide();
  }
}
