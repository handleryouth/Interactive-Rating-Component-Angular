import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  stars = new Array(5);

  constructor(private router: Router) {}

  selectedValue: number | undefined;

  handleRatingButton(value: number) {
    this.selectedValue = value;
  }

  handleSubmit() {
    if (this.selectedValue !== undefined) {
      this.router.navigateByUrl('/succeed', {
        state: {
          rating: this.selectedValue,
        },
      });
    }
  }
}
