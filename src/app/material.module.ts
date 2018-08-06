import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';

import { 
  MatButtonModule, 
  MatIconModule, 
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatGridListModule,
  MatAutocompleteModule,
 } from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatButtonModule, 
    MatIconModule, 
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatGridListModule,
    MatAutocompleteModule,
  ]
})
export class MaterialModule { }
