/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input
} from '@angular/core';




import { SearchMode } from 'devextreme/common';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-tree-list-search',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoTreeListSearchComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get editorOptions(): any {
        return this._getOption('editorOptions');
    }
    set editorOptions(value: any) {
        this._setOption('editorOptions', value);
    }

    @Input()
    get enabled(): boolean {
        return this._getOption('enabled');
    }
    set enabled(value: boolean) {
        this._setOption('enabled', value);
    }

    @Input()
    get timeout(): number {
        return this._getOption('timeout');
    }
    set timeout(value: number) {
        this._setOption('timeout', value);
    }

    @Input()
    get mode(): SearchMode {
        return this._getOption('mode');
    }
    set mode(value: SearchMode) {
        this._setOption('mode', value);
    }

    @Input()
    get searchExpr(): Function | string | undefined | Array<Function | string> {
        return this._getOption('searchExpr');
    }
    set searchExpr(value: Function | string | undefined | Array<Function | string>) {
        this._setOption('searchExpr', value);
    }


    protected get _optionPath() {
        return 'search';
    }


    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();
        parentOptionHost.setNestedOption(this);
        optionHost.setHost(this, this._fullOptionPath.bind(this));
    }


    ngOnInit() {
        this._addRecreatedComponent();
    }

    ngOnDestroy() {
        this._addRemovedOption(this._getOptionPath());
    }


}

@NgModule({
  declarations: [
    DxoTreeListSearchComponent
  ],
  exports: [
    DxoTreeListSearchComponent
  ],
})
export class DxoTreeListSearchModule { }
