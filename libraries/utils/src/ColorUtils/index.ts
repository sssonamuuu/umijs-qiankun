const normalizeColor = require('normalize-css-color');

export class ColorUtils {
  static parse (color?: string) {
    if (color === void 0 || color === null) {
      return color;
    }

    let int32Color = normalizeColor(color);
    if (int32Color === void 0 || int32Color === null) {
      return void 0;
    }

    int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;

    const r = int32Color >> 16 & 255;
    const g = int32Color >> 8 & 255;
    const b = int32Color & 255;
    const a = (int32Color >> 24 & 255) / 255;

    return { r, g, b, a };
  }

  static normalize (color: string, opacity: number) {
    const rgba = ColorUtils.parse(color);

    if (!rgba) {
      return '#000';
    }

    return `rgba(${rgba.r},${rgba.g},${rgba.b},${(rgba.a * opacity).toFixed(2)})`;
  }
}
