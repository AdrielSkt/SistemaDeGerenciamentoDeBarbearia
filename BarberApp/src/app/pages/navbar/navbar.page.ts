import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.page.html',
  styleUrls: ['./navbar.page.scss'],
})
export class NavbarPage implements OnInit {

  @ViewChild('tabs', { static: false })tabs!: IonTabs;
  selectedTab: any;
  constructor() { }

  ngOnInit() {
  }


  setCurrentTab(){
    this.selectedTab = this.tabs.getSelected();
  }

}
