/* tslint:disable:max-line-length */


import {
    Component,
    OnInit,
    OnDestroy,
    NgModule,
    Host,
    SkipSelf,
    Input,
    Output,
    EventEmitter,
    ContentChildren,
    forwardRef,
    QueryList
} from '@angular/core';




import { EditorStyle, LabelMode, MaskMode, Position, TextBoxPredefinedButton, TextEditorButton, ValidationMessageMode, ValidationStatus } from 'devextreme/common';
import { ChangeEvent, ContentReadyEvent, CopyEvent, CutEvent, DisposingEvent, EnterKeyEvent, FocusInEvent, FocusOutEvent, InitializedEvent, InputEvent, KeyDownEvent, KeyUpEvent, OptionChangedEvent, PasteEvent, TextBoxType, ValueChangedEvent } from 'devextreme/ui/text_box';

import {
    NestedOptionHost,
} from 'devextreme-angular/core';
import { NestedOption } from 'devextreme-angular/core';
import { DxiTreeViewButtonComponent } from './button-dxi';


@Component({
    selector: 'dxo-tree-view-search-editor-options',
    template: '',
    styles: [''],
    providers: [NestedOptionHost]
})
export class DxoTreeViewSearchEditorOptionsComponent extends NestedOption implements OnDestroy, OnInit  {
    @Input()
    get accessKey(): string | undefined {
        return this._getOption('accessKey');
    }
    set accessKey(value: string | undefined) {
        this._setOption('accessKey', value);
    }

    @Input()
    get activeStateEnabled(): boolean {
        return this._getOption('activeStateEnabled');
    }
    set activeStateEnabled(value: boolean) {
        this._setOption('activeStateEnabled', value);
    }

    @Input()
    get buttons(): Array<TextBoxPredefinedButton | TextEditorButton | string> {
        return this._getOption('buttons');
    }
    set buttons(value: Array<TextBoxPredefinedButton | TextEditorButton | string>) {
        this._setOption('buttons', value);
    }

    @Input()
    get disabled(): boolean {
        return this._getOption('disabled');
    }
    set disabled(value: boolean) {
        this._setOption('disabled', value);
    }

    @Input()
    get elementAttr(): any {
        return this._getOption('elementAttr');
    }
    set elementAttr(value: any) {
        this._setOption('elementAttr', value);
    }

    @Input()
    get focusStateEnabled(): boolean {
        return this._getOption('focusStateEnabled');
    }
    set focusStateEnabled(value: boolean) {
        this._setOption('focusStateEnabled', value);
    }

    @Input()
    get height(): number | Function | string | undefined {
        return this._getOption('height');
    }
    set height(value: number | Function | string | undefined) {
        this._setOption('height', value);
    }

    @Input()
    get hint(): string | undefined {
        return this._getOption('hint');
    }
    set hint(value: string | undefined) {
        this._setOption('hint', value);
    }

    @Input()
    get hoverStateEnabled(): boolean {
        return this._getOption('hoverStateEnabled');
    }
    set hoverStateEnabled(value: boolean) {
        this._setOption('hoverStateEnabled', value);
    }

    @Input()
    get inputAttr(): any {
        return this._getOption('inputAttr');
    }
    set inputAttr(value: any) {
        this._setOption('inputAttr', value);
    }

    @Input()
    get isDirty(): boolean {
        return this._getOption('isDirty');
    }
    set isDirty(value: boolean) {
        this._setOption('isDirty', value);
    }

    @Input()
    get isValid(): boolean {
        return this._getOption('isValid');
    }
    set isValid(value: boolean) {
        this._setOption('isValid', value);
    }

    @Input()
    get label(): string {
        return this._getOption('label');
    }
    set label(value: string) {
        this._setOption('label', value);
    }

    @Input()
    get labelMode(): LabelMode {
        return this._getOption('labelMode');
    }
    set labelMode(value: LabelMode) {
        this._setOption('labelMode', value);
    }

    @Input()
    get mask(): string {
        return this._getOption('mask');
    }
    set mask(value: string) {
        this._setOption('mask', value);
    }

    @Input()
    get maskChar(): string {
        return this._getOption('maskChar');
    }
    set maskChar(value: string) {
        this._setOption('maskChar', value);
    }

    @Input()
    get maskInvalidMessage(): string {
        return this._getOption('maskInvalidMessage');
    }
    set maskInvalidMessage(value: string) {
        this._setOption('maskInvalidMessage', value);
    }

    @Input()
    get maskRules(): any {
        return this._getOption('maskRules');
    }
    set maskRules(value: any) {
        this._setOption('maskRules', value);
    }

    @Input()
    get maxLength(): number | string {
        return this._getOption('maxLength');
    }
    set maxLength(value: number | string) {
        this._setOption('maxLength', value);
    }

    @Input()
    get mode(): TextBoxType {
        return this._getOption('mode');
    }
    set mode(value: TextBoxType) {
        this._setOption('mode', value);
    }

    @Input()
    get name(): string {
        return this._getOption('name');
    }
    set name(value: string) {
        this._setOption('name', value);
    }

    @Input()
    get onChange(): ((e: ChangeEvent) => void) {
        return this._getOption('onChange');
    }
    set onChange(value: ((e: ChangeEvent) => void)) {
        this._setOption('onChange', value);
    }

    @Input()
    get onContentReady(): ((e: ContentReadyEvent) => void) {
        return this._getOption('onContentReady');
    }
    set onContentReady(value: ((e: ContentReadyEvent) => void)) {
        this._setOption('onContentReady', value);
    }

    @Input()
    get onCopy(): ((e: CopyEvent) => void) {
        return this._getOption('onCopy');
    }
    set onCopy(value: ((e: CopyEvent) => void)) {
        this._setOption('onCopy', value);
    }

    @Input()
    get onCut(): ((e: CutEvent) => void) {
        return this._getOption('onCut');
    }
    set onCut(value: ((e: CutEvent) => void)) {
        this._setOption('onCut', value);
    }

    @Input()
    get onDisposing(): ((e: DisposingEvent) => void) {
        return this._getOption('onDisposing');
    }
    set onDisposing(value: ((e: DisposingEvent) => void)) {
        this._setOption('onDisposing', value);
    }

    @Input()
    get onEnterKey(): ((e: EnterKeyEvent) => void) {
        return this._getOption('onEnterKey');
    }
    set onEnterKey(value: ((e: EnterKeyEvent) => void)) {
        this._setOption('onEnterKey', value);
    }

    @Input()
    get onFocusIn(): ((e: FocusInEvent) => void) {
        return this._getOption('onFocusIn');
    }
    set onFocusIn(value: ((e: FocusInEvent) => void)) {
        this._setOption('onFocusIn', value);
    }

    @Input()
    get onFocusOut(): ((e: FocusOutEvent) => void) {
        return this._getOption('onFocusOut');
    }
    set onFocusOut(value: ((e: FocusOutEvent) => void)) {
        this._setOption('onFocusOut', value);
    }

    @Input()
    get onInitialized(): ((e: InitializedEvent) => void) {
        return this._getOption('onInitialized');
    }
    set onInitialized(value: ((e: InitializedEvent) => void)) {
        this._setOption('onInitialized', value);
    }

    @Input()
    get onInput(): ((e: InputEvent) => void) {
        return this._getOption('onInput');
    }
    set onInput(value: ((e: InputEvent) => void)) {
        this._setOption('onInput', value);
    }

    @Input()
    get onKeyDown(): ((e: KeyDownEvent) => void) {
        return this._getOption('onKeyDown');
    }
    set onKeyDown(value: ((e: KeyDownEvent) => void)) {
        this._setOption('onKeyDown', value);
    }

    @Input()
    get onKeyUp(): ((e: KeyUpEvent) => void) {
        return this._getOption('onKeyUp');
    }
    set onKeyUp(value: ((e: KeyUpEvent) => void)) {
        this._setOption('onKeyUp', value);
    }

    @Input()
    get onOptionChanged(): ((e: OptionChangedEvent) => void) {
        return this._getOption('onOptionChanged');
    }
    set onOptionChanged(value: ((e: OptionChangedEvent) => void)) {
        this._setOption('onOptionChanged', value);
    }

    @Input()
    get onPaste(): ((e: PasteEvent) => void) {
        return this._getOption('onPaste');
    }
    set onPaste(value: ((e: PasteEvent) => void)) {
        this._setOption('onPaste', value);
    }

    @Input()
    get onValueChanged(): ((e: ValueChangedEvent) => void) {
        return this._getOption('onValueChanged');
    }
    set onValueChanged(value: ((e: ValueChangedEvent) => void)) {
        this._setOption('onValueChanged', value);
    }

    @Input()
    get placeholder(): string {
        return this._getOption('placeholder');
    }
    set placeholder(value: string) {
        this._setOption('placeholder', value);
    }

    @Input()
    get readOnly(): boolean {
        return this._getOption('readOnly');
    }
    set readOnly(value: boolean) {
        this._setOption('readOnly', value);
    }

    @Input()
    get rtlEnabled(): boolean {
        return this._getOption('rtlEnabled');
    }
    set rtlEnabled(value: boolean) {
        this._setOption('rtlEnabled', value);
    }

    @Input()
    get showClearButton(): boolean {
        return this._getOption('showClearButton');
    }
    set showClearButton(value: boolean) {
        this._setOption('showClearButton', value);
    }

    @Input()
    get showMaskMode(): MaskMode {
        return this._getOption('showMaskMode');
    }
    set showMaskMode(value: MaskMode) {
        this._setOption('showMaskMode', value);
    }

    @Input()
    get spellcheck(): boolean {
        return this._getOption('spellcheck');
    }
    set spellcheck(value: boolean) {
        this._setOption('spellcheck', value);
    }

    @Input()
    get stylingMode(): EditorStyle {
        return this._getOption('stylingMode');
    }
    set stylingMode(value: EditorStyle) {
        this._setOption('stylingMode', value);
    }

    @Input()
    get tabIndex(): number {
        return this._getOption('tabIndex');
    }
    set tabIndex(value: number) {
        this._setOption('tabIndex', value);
    }

    @Input()
    get text(): string {
        return this._getOption('text');
    }
    set text(value: string) {
        this._setOption('text', value);
    }

    @Input()
    get useMaskedValue(): boolean {
        return this._getOption('useMaskedValue');
    }
    set useMaskedValue(value: boolean) {
        this._setOption('useMaskedValue', value);
    }

    @Input()
    get validationError(): any {
        return this._getOption('validationError');
    }
    set validationError(value: any) {
        this._setOption('validationError', value);
    }

    @Input()
    get validationErrors(): Array<any> {
        return this._getOption('validationErrors');
    }
    set validationErrors(value: Array<any>) {
        this._setOption('validationErrors', value);
    }

    @Input()
    get validationMessageMode(): ValidationMessageMode {
        return this._getOption('validationMessageMode');
    }
    set validationMessageMode(value: ValidationMessageMode) {
        this._setOption('validationMessageMode', value);
    }

    @Input()
    get validationMessagePosition(): Position {
        return this._getOption('validationMessagePosition');
    }
    set validationMessagePosition(value: Position) {
        this._setOption('validationMessagePosition', value);
    }

    @Input()
    get validationStatus(): ValidationStatus {
        return this._getOption('validationStatus');
    }
    set validationStatus(value: ValidationStatus) {
        this._setOption('validationStatus', value);
    }

    @Input()
    get value(): string {
        return this._getOption('value');
    }
    set value(value: string) {
        this._setOption('value', value);
    }

    @Input()
    get valueChangeEvent(): string {
        return this._getOption('valueChangeEvent');
    }
    set valueChangeEvent(value: string) {
        this._setOption('valueChangeEvent', value);
    }

    @Input()
    get visible(): boolean {
        return this._getOption('visible');
    }
    set visible(value: boolean) {
        this._setOption('visible', value);
    }

    @Input()
    get width(): number | Function | string | undefined {
        return this._getOption('width');
    }
    set width(value: number | Function | string | undefined) {
        this._setOption('width', value);
    }


    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() textChange: EventEmitter<string>;

    /**
    
     * This member supports the internal infrastructure and is not intended to be used directly from your code.
    
     */
    @Output() valueChange: EventEmitter<string>;
    protected get _optionPath() {
        return 'searchEditorOptions';
    }


    @ContentChildren(forwardRef(() => DxiTreeViewButtonComponent))
    get buttonsChildren(): QueryList<DxiTreeViewButtonComponent> {
        return this._getOption('buttons');
    }
    set buttonsChildren(value) {
        this.setChildren('buttons', value);
    }

    constructor(@SkipSelf() @Host() parentOptionHost: NestedOptionHost,
            @Host() optionHost: NestedOptionHost) {
        super();

        this._createEventEmitters([
            { emit: 'textChange' },
            { emit: 'valueChange' }
        ]);

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
    DxoTreeViewSearchEditorOptionsComponent
  ],
  exports: [
    DxoTreeViewSearchEditorOptionsComponent
  ],
})
export class DxoTreeViewSearchEditorOptionsModule { }
