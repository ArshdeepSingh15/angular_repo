import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { UsersService } from '../../services/users';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../models/user.model';
import { EmailTypePipe } from '../../pipes/email-type.pipe';
import { UserInitialsPipe } from '../../pipes/user-initials.pipe';


@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, RouterOutlet,EmailTypePipe,UserInitialsPipe],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css']
})
export class UserDetail {
 
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private usersService = inject(UsersService);

// route param
    userId = Number(this.route.snapshot.paramMap.get('id'));
// convert observable → signal (modern Angular way)
    user = toSignal<User|null>(
    this.usersService.getUserById(this.userId),
    { initialValue: null }
    );

  goToProfile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  goToCompany() {
    this.router.navigate(['company'], { relativeTo: this.route });
  }
}
  
  
  

