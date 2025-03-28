import { Routes } from '@angular/router';
import { MainPageAdminComponent } from './components/main-page-admin/main-page-admin.component';
import { InsertElementFrstComponent } from './components/insert-element-frst/insert-element-frst.component';
import { InsertElementScndComponent } from './components/insert-element-scnd/insert-element-scnd.component';
import { StockElementFrstComponent } from './components/stock-element-frst/stock-element-frst.component';
import { StockElementScndComponent } from './components/stock-element-scnd/stock-element-scnd.component';

export const routes: Routes = [
    {path: "", component: MainPageAdminComponent},
    {path: "insert-first", component: InsertElementFrstComponent},
    {path: "insert-second", component: InsertElementScndComponent},
    {path: "stock-first", component: StockElementFrstComponent},
    {path: "stock-second", component: StockElementScndComponent}
];
