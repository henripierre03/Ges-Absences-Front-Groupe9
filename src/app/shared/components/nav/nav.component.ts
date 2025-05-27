import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PUBLIC_ROUTES } from '../../routes/public';


@Component({
  selector: 'app-nav',
  imports: [RouterModule,CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  private title: string | null = null;

  protected links: Link[] = [];
  
  

  constructor() {
  }

  async onLogout() {
  }


  ngOnInit(): void {
    this.links = [
    ]
  }


  



}

interface Link {
  name: string;
  path: string;
  class : string; 
  subLinks?: Array<Link>; 
  ariaCurrent?: string;
  isVisible: boolean;
}
