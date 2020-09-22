import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private route:Router
  ) { }

  isCollapsed = false;

  ngOnInit() {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  navigate(url) {
    this.route.navigateByUrl(url)
  }

  logout() {
    localStorage.removeItem('token')
    this.route.navigateByUrl('admin/login')
  }
}
