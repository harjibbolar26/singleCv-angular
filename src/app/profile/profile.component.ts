import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  // template: `
  //   <button (click)="handleClick()">Click me</button>
  // `,
})
export class ProfileComponent {
  handleClick(): void {
    alert('button clicked');
  }
}
