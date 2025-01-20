export function gridColumnValueConverter(column: number): string {
    switch (true) {
        case column === 2:
          return "grid-cols-2";
        case column === 3:
          return "grid-cols-3";
        case column === 4:
          return "grid-cols-3";
        case column === 5:
          return "grid-cols-4";
        case column === 6:
          return "grid-cols-6";
        case column === 7:
          return "grid-cols-7";
        case column === 8:
          return "grid-cols-8";
        default:
          return "grid-cols-1";
    }
}

export function gridGapValueConverter(gap: number): string {
    switch (true) {
        case gap === 1:
          return "gap-1";
        case gap === 2:
          return "gap-2";
        case gap === 3:
          return "gap-3";
        case gap === 4:
          return "gap-4";
        case gap === 5:
          return "gap-5";
        case gap === 6:
          return "gap-6";
        case gap === 7:
          return "gap-7";
        case gap === 8:
          return "gap-8";
        default:
          return "gap-0";
    }
}

export function gridHeightValueConverter(h: number): string {
    switch (true) {
        case h > 200 && h <= 250:
          return "h-[250px]";
        case h > 250 && h <= 300:
          return "h-[300px]";
        case h > 300 && h <= 350:
          return "h-[350px]";
        case h > 350 && h <= 400:
          return "h-[400px]";
        case h > 400 && h <= 450:
          return "h-[450px]";
        case h > 450 && h <= 500:
          return "h-[500px]";
        case h > 500 && h <= 550:
          return "h-[550px]";
        case h > 550 && h <= 600:
          return "h-[600px]";
        default:
          return "h-[400px]";
    }
}
