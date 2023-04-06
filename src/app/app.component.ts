import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, MaterialModule],
})
export class AppComponent {
  constructor() { }
}
