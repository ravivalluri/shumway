/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: TextFormat
module Shumway.AVM2.AS.flash.text {
  import notImplemented = Shumway.Debug.notImplemented;
  import asCoerceString = Shumway.AVM2.Runtime.asCoerceString;
  import asCoerceObject = Shumway.AVM2.Runtime.asCoerceObject;

  export class TextFormat extends ASNative {

    static classInitializer: any = null;
    static initializer: any = null;
    static classSymbols: string [] = null; // [];
    static instanceSymbols: string [] = null; // [];

    constructor(font: string = null, size: ASObject = null, color: ASObject = null,
                bold: ASObject = null, italic: ASObject = null, underline: ASObject = null,
                url: string = null, target: string = null, align: string = null,
                leftMargin: ASObject = null, rightMargin: ASObject = null, indent: ASObject = null,
                leading: ASObject = null)
    {
      font = asCoerceString(font);
      size = size;
      color = color;
      bold = bold;
      italic = italic;
      underline = underline;
      url = "" + url;
      target = "" + target;
      align = "" + align;
      leftMargin = leftMargin;
      rightMargin = rightMargin;
      indent = indent;
      leading = leading;
      false && super();
      notImplemented("Dummy Constructor: public flash.text.TextFormat");
    }

    private static measureTextField: flash.text.TextField;

    private _align: string;
    private _blockIndent: ASObject;
    private _bold: ASObject;
    private _bullet: ASObject;
    private _color: ASObject;
    private _display: string;
    private _font: string;
    private _indent: ASObject;
    private _italic: ASObject;
    private _kerning: ASObject;
    private _leading: ASObject;
    private _leftMargin: ASObject;
    private _letterSpacing: ASObject;
    private _rightMargin: ASObject;
    private _size: ASObject;
    private _tabStops: any [];
    private _target: string;
    private _underline: ASObject;
    private _url: string;


    fromNative(nativeFormat: NativeTextFormat): TextFormat {
      this._font = nativeFormat.face;
      this._size = asCoerceObject(nativeFormat.size);
      this._color = asCoerceObject(nativeFormat.color);
      this._bold = asCoerceObject(nativeFormat.bold);
      this._italic = asCoerceObject(nativeFormat.italic);
      this._underline = asCoerceObject(nativeFormat.underline);
      this._url = nativeFormat.url;
      this._target = nativeFormat.target;
      this._align = nativeFormat.align;
      this._leftMargin = asCoerceObject(nativeFormat.leftMargin);
      this._rightMargin = asCoerceObject(nativeFormat.rightMargin);
      this._indent = asCoerceObject(nativeFormat.indent);
      this._leading = asCoerceObject(nativeFormat.leading);
      this._letterSpacing = asCoerceObject(nativeFormat.letterSpacing);
      this._kerning = asCoerceObject(nativeFormat.kerning);
      return this;
    }

    toNative(): NativeTextFormat {
      var format: NativeTextFormat = new NativeTextFormat();
      format.face = this._font + '' || 'serif';
      format.size = isNaN(+this._size) ? 12 : +this._size;
      format.color = +this._color | 0;
      format.bold = !!this._bold;
      format.italic = !!this._italic;
      format.underline = !!this._underline;
      format.url = this._url + '';
      format.target = this._target + '';
      var align: string = (this._align + '').toUpperCase();
      format.align = align in TextFormatAlign ? align : 'LEFT';
      format.leftMargin = +this._leftMargin;
      format.rightMargin = +this._rightMargin;
      format.indent = isNaN(+this._indent) ? 0 : +this._indent;
      format.leading = isNaN(+this._leading) ? 0 : +this._indent;
      return format;
    }

    as2GetTextExtent(text: string, width: number/* optional */) {
      if (!TextFormat.measureTextField) {
        TextFormat.measureTextField = new flash.text.TextField();
        TextFormat.measureTextField._multiline = true;
      }
      var measureTextField = TextFormat.measureTextField;
      if (!isNaN(width) && width > 0) {
        measureTextField.width = width + 4;
        measureTextField._wordWrap = true;
      } else {
        measureTextField._wordWrap = false;
      }
      measureTextField.defaultTextFormat = this;
      measureTextField.text = text;
      var result: any = {};
      var textWidth: number = measureTextField.textWidth;
      var textHeight: number = measureTextField.textHeight;
      result.asSetPublicProperty('width', textWidth);
      result.asSetPublicProperty('height', textHeight);
      result.asSetPublicProperty('textFieldWidth', textWidth + 4);
      result.asSetPublicProperty('textFieldHeight', textHeight + 4);
      var metrics: TextLineMetrics = measureTextField.getLineMetrics(0);
      result.asSetPublicProperty('ascent', metrics.ascent);
      result.asSetPublicProperty('descent', metrics.descent);
      return result;
    }

    // AS -> JS Bindings
    get align(): string {
      return this._align;
    }

    set align(value: string) {
      this._align = asCoerceString(value);
    }

    get blockIndent(): ASObject {
      return this._blockIndent;
    }

    set blockIndent(value: ASObject) {
      this._blockIndent = value;
    }

    get bold(): ASObject {
      return this._bold;
    }

    set bold(value: ASObject) {
      this._bold = value;
    }

    get bullet(): ASObject {
      return this._bullet;
    }

    set bullet(value: ASObject) {
      this._bullet = value;
    }

    get color(): ASObject {
      return this._color;
    }

    set color(value: ASObject) {
      this._color = value;
    }

    get display(): string {
      return this._display;
    }

    set display(value: string) {
      this._display = asCoerceString(value);
    }

    get font(): string {
      return this._font;
    }

    set font(value: string) {
      this._font = asCoerceString(value);
    }

    get indent(): ASObject {
      return this._indent;
    }

    set indent(value: ASObject) {
      this._indent = value;
    }

    get italic(): ASObject {
      return this._italic;
    }

    set italic(value: ASObject) {
      this._italic = value;
    }

    get kerning(): ASObject {
      return this._kerning;
    }

    set kerning(value: ASObject) {
      this._kerning = value;
    }

    get leading(): ASObject {
      return this._leading;
    }

    set leading(value: ASObject) {
      this._leading = value;
    }

    get leftMargin(): ASObject {
      return this._leftMargin;
    }

    set leftMargin(value: ASObject) {
      this._leftMargin = value;
    }

    get letterSpacing(): ASObject {
      return this._letterSpacing;
    }

    set letterSpacing(value: ASObject) {
      this._letterSpacing = value;
    }

    get rightMargin(): ASObject {
      return this._rightMargin;
    }

    set rightMargin(value: ASObject) {
      this._rightMargin = value;
    }

    get size(): ASObject {
      return this._size;
    }

    set size(value: ASObject) {
      this._size = value;
    }

    get tabStops(): any [] {
      return this._tabStops;
    }

    set tabStops(value: any []) {
      this._tabStops = value;
    }

    get target(): string {
      return this._target;
    }

    set target(value: string) {
      this._target = asCoerceString(value);
    }

    get underline(): ASObject {
      return this._underline;
    }

    set underline(value: ASObject) {
      this._underline = value;
    }

    get url(): string {
      return this._url;
    }

    set url(value: string) {
      this._url = asCoerceString(value);
    }
  }

  export class NativeTextFormat {
    face: string;
    fontObj: Font;
    size: number;
    color: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    url: string;
    target: string;
    align: string;
    leftMargin: number;
    rightMargin: number;
    indent: number;
    leading: number;
    letterSpacing: number;
    kerning: number;
  }
}