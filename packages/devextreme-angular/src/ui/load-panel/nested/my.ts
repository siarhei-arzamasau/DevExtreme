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




import { HorizontalAlignment, VerticalAlignment } from 'devextreme/common';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';


@Component({
    selector: 'dxo-load-panel-my',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoLoadPanelMyComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get x(): HorizontalAlignment {
        return this._getOption('x');
    }
    set x(value: HorizontalAlignment) {
        this._setOption('x', value);
    }

    @Input()
    get y(): VerticalAlignment {
        return this._getOption('y');
    }
    set y(value: VerticalAlignment) {
        this._setOption('y', value);
    }


    protected get _optionPath() {
        return 'my';
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
    DxoLoadPanelMyComponent
  ],
  exports: [
    DxoLoadPanelMyComponent
  ],
})
export class DxoLoadPanelMyModule { }
