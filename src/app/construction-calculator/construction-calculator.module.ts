import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConstructionCalculatorPage } from './construction-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: ConstructionCalculatorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConstructionCalculatorPage]
})
export class ConstructionCalculatorPageModule {}
