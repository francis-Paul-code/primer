import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  exports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatRippleModule,
    LayoutModule,
    MatCardModule
  ],
})
export class MaterialModule {}
