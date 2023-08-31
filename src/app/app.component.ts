import { Component } from '@angular/core';
import  firebase  from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  
  ngOnInit()
  {
    firebase.initializeApp(environment.firebaseConfig);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, async () => {
        await App.exitApp();
      });
    });
  }
  
  
  
}
