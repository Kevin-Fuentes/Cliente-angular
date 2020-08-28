import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpeladosComponent } from './components/empleados/empelados/empelados.component';
import { EmpeladosListComponent } from './components/empleados/empelados-list/empelados-list.component';
import { TelefonosListComponent} from './components/telefonos/telefonos-list/telefonos-list.component'
import { TelefonosFormComponent } from './components/telefonos/telefonos-form/telefonos-form.component';
import { TelefonosService } from './services/telefonos.service';

const routes: Routes = [{
  path : '',
  redirectTo:'/empleados',
  pathMatch : 'full',

},
{
  path : '',
  redirectTo:'/telefonos',
  pathMatch : 'full'
},
{
  path : 'empleados',
  component:EmpeladosListComponent
},
{
  path : 'empleados-form',
  component:EmpeladosComponent
},
{
  path : 'empleados-form/:id',
  component:EmpeladosComponent
},
{
  path : 'empleados/telefonos',
  component:TelefonosListComponent
},{
  path : 'empleados/telefonos-form',
  component:TelefonosFormComponent
},

{
  path : 'empleados/telefonos/telefonos-form/:id',
  component:TelefonosFormComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
