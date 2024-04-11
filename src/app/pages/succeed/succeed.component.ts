import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succeed',
  standalone: true,
  imports: [],
  templateUrl: './succeed.component.html',
})
export class SucceedComponent {
  rating!: number;

  constructor(private router: Router) {
    this.rating = router.getCurrentNavigation()?.extras.state!['rating'];
  }

  handleBackToHome() {
    this.router.navigateByUrl('');
  }
}
