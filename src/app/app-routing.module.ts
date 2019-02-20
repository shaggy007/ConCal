import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './construction-calculator/construction-calculator.module#ConstructionCalculatorPageModule' },
   { path: 'construction-calculator', loadChildren: './construction-calculator/construction-calculator.module#ConstructionCalculatorPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
