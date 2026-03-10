import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
})
export class UsersList implements OnInit, OnDestroy {

  users: any[] = [];
  private sub!: Subscription;
  page = 1;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.page = Number(params['page']) || 1;
      this.loadUsers();
    });
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(users => {
      // simple fake pagination
      this.users = this.page === 1
        ? users.slice(0, 5)
        : users.slice(5, 10);
    });
  }

  changePage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge'
    });
  }

  viewUser(id: number) {
    this.router.navigate(['/users', id]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
