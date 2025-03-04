import {
  NgModule, Component, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxPivotGridModule } from 'devextreme-angular';
import { Options as DataSourceConfig } from 'devextreme/ui/pivot_grid/data_source';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

let modulePrefix = '';
// @ts-ignore
if (window && window.config.packageConfigPaths) {
  modulePrefix = '/app';
}

@Component({
  styleUrls: [`.${modulePrefix}/app.component.css`],
  selector: 'demo-app',
  templateUrl: `.${modulePrefix}/app.component.html`,
})
export class AppComponent {
  dataSource: DataSourceConfig;

  constructor() {
    this.dataSource = {
      fields: [
        { dataField: '[Product].[Category]', area: 'row' },
        {
          dataField: '[Product].[Subcategory]',
          area: 'row',
          headerFilter: {
            search: {
              enabled: true,
            },
          },
        },
        { dataField: '[Ship Date].[Calendar Year]', area: 'column' },
        { dataField: '[Ship Date].[Month of Year]', area: 'column' },
        { dataField: '[Measures].[Reseller Freight Cost]', area: 'data', format: 'currency' },
      ],
      store: {
        type: 'xmla',
        url: 'https://demos.devexpress.com/Services/OLAP/msmdpump.dll',
        catalog: 'Adventure Works DW Standard Edition',
        cube: 'Adventure Works',
      },
    };
  }
}

@NgModule({
  imports: [
    BrowserModule,
    DxPivotGridModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
