import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageAdminComponent } from "./components/main-page-admin/main-page-admin.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'saas-java-angular-deposit';
}
