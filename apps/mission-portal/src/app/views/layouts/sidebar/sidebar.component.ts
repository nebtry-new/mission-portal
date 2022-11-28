import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'web-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  public items!: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Mission',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/'
          },
          {
            label: 'Banner',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/banner'
          },
          { label: 'Download', icon: 'pi pi-fw pi-download'},
        ],
      },
    ];
  }
}
