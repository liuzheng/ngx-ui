import { EventEmitter, QueryList, ElementRef, Renderer, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SelectOptionDirective } from './select-option.directive';
import { SelectInputComponent } from './select-input.component';
export declare class SelectComponent implements ControlValueAccessor, OnDestroy {
    private element;
    private renderer;
    id: string;
    name: string;
    label: string;
    hint: string;
    autofocus: boolean;
    allowClear: boolean;
    allowAdditions: boolean;
    disableDropdown: boolean;
    closeOnSelect: boolean;
    closeOnBodyClick: boolean;
    options: any[];
    identifier: any;
    maxSelections: number;
    groupBy: string;
    filterable: boolean;
    placeholder: string;
    emptyPlaceholder: string;
    filterEmptyPlaceholder: string;
    filterPlaceholder: string;
    tagging: boolean;
    multiple: boolean;
    readonly isSingleSelect: boolean;
    disabled: boolean;
    change: EventEmitter<any>;
    keyup: EventEmitter<any>;
    toggle: EventEmitter<any>;
    optionTemplates: QueryList<SelectOptionDirective>;
    dropdownActive: boolean;
    readonly hasSelections: any;
    inputComponent: SelectInputComponent;
    value: any[];
    readonly dropdownVisible: boolean;
    toggleListener: any;
    filterQuery: string;
    focusIndex: number;
    _optionTemplates: QueryList<SelectOptionDirective>;
    _value: any[];
    constructor(element: ElementRef, renderer: Renderer);
    ngOnDestroy(): void;
    onDropdownSelection(selection: any): void;
    onInputSelection(selections: any): void;
    onFocus(): void;
    onClear(): void;
    onBodyClick(event: any): void;
    onClose(): void;
    onToggle(): void;
    toggleDropdown(state: boolean): void;
    onKeyUp({event, value}: {
        event: any;
        value: any;
    }): void;
    writeValue(val: any[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    private onTouchedCallback;
    private onChangeCallback;
}
