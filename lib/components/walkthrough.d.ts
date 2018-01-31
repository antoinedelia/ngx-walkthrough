import { ElementRef, EventEmitter } from '@angular/core';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';
import { WalkthroughTapIconsPath } from './ngWalkthroughTapIconsPath';
export declare class WalkthroughComponent implements AfterViewChecked {
    private element;
    walkthroughType: string;
    buttonCaption: string;
    useButton: boolean;
    mainCaption: string;
    walkthroughIconWanted: string;
    walkthroughHeroImage: any;
    hasGlow: boolean;
    forceCaptionLocation: string;
    hasBackdrop: boolean;
    isRound: boolean;
    iconPaddingLeft: string;
    iconPaddingTop: string;
    tipIconLocation: string;
    tipColor: string;
    private _focusElementSelector;
    focusElementSelector: string;
    isActive: boolean;
    onWalkthroughShowEvent: EventEmitter<void>;
    onWalkthroughHideEvent: EventEmitter<void>;
    onWalkthroughContentClickedEvent: EventEmitter<void>;
    onResize(event: any): void;
    DOM_WALKTHROUGH_CLASS: string;
    DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS: string;
    DOM_WALKTHROUGH_TIP_TEXT_CLASS: string;
    DOM_WALKTHROUGH_HOLE_CLASS: string;
    DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS: string;
    DOM_WALKTHROUGH_TIP_ICON_CLASS: string;
    DOM_WALKTHROUGH_ARROW_CLASS: string;
    DOM_WALKTHROUGH_DONE_BUTTON_CLASS: string;
    DOM_TRANSCLUDE: string;
    BUTTON_CAPTION_DONE: string;
    PADDING_HOLE: number;
    PADDING_ARROW_START: number;
    PADDING_ARROW_MARKER: number;
    ngWalkthroughTapIcons: WalkthroughTapIconsPath;
    isVisible: any;
    boolean: boolean;
    hasTransclude: boolean;
    walkthroughHoleElements: HTMLElement;
    walkthroughTextElement: HTMLElement;
    walkthroughIconElement: HTMLElement;
    walkthroughArrowElement: HTMLElement;
    closeIcon: any;
    walkthroughIcon: any;
    constructor(element: ElementRef);
    resizeHandler(): void;
    setWalkthroughElements(): void;
    ngAfterViewChecked(): void;
    getIcon(icon: any): any;
    toDataURL(url: any): Promise<{}>;
    setArrowAndText(pointSubjectLeft: any, pointSubjectTop: any, pointSubjectWidth: any, pointSubjectHeight: any, paddingLeft: any): void;
    isItemOnText(iconLeft: any, iconTop: any, iconRight: any, iconBottom: any): boolean;
    getOffsetCoordinates(focusElement: HTMLElement): {
        top: number;
        left: number;
        height: number;
        width: number;
    };
    getSameAncestor(focusElement: HTMLElement): any;
    setIconAndText(iconLeft: any, iconTop: any, paddingLeft: any, paddingTop: any): void;
    setElementLocations(): void;
    setFocus(left: any, top: any, width: any, height: any): void;
    setFocusOnElement(): void;
    onWalkthroughContentClicked(): void;
    setTipIconPadding(iconPaddingLeft: any, iconPaddingTop: any): void;
    onCloseClicked(event: any): void;
    closeWalkthrough(): void;
    close_icon: string;
}