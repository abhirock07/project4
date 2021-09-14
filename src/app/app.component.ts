import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   @Input() lodedfeature='recipe';

  onNavigate(feature: string)
  {
    this.lodedfeature=feature;
  }

}
