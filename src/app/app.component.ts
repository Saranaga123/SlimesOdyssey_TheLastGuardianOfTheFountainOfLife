import { Component, OnInit } from '@angular/core';
import { Plugins, Capacitor } from '@capacitor/core';

const { StatusBar, Platform } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  async ngOnInit() {
    // Check the platform using the Platform plugin
    const isAndroid = await Platform['is']('android');
    if (isAndroid) {
      // Use platform-specific code to hide both the status bar and navigation bar
      // For example, you can use the following to set the app to full-screen immersive mode
      const fullscreenOptions = { immersive: true, stickyImmersive: false };
      StatusBar['setOverlaysWebView']({ overlays: true });
      StatusBar['setFullscreen'](fullscreenOptions);
    }
  }
}
