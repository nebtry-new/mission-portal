import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { ContentComponent } from './content/content.component';

const components = [SidebarComponent, ContentComponent];
@NgModule({
  declarations: components,
  imports: [MenuModule],
  exports: components,
})
export class LayoutsModule {}
