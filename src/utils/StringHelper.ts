export function gridColumnValueConverter(column: number): string {
    console.log(column);
    if (typeof column === "number") {
        return `grid-cols-${column}`;
    } else {
        return `grid-cols-3`;
    }
}

export function gridGapValueConverter(gap: number): string {
    console.log(gap);
    if (typeof gap === "number") {
        return `gap-${gap}`;
    } else {
        return `gap-0`;
    }
}

export function gridHeightValueConverter(h: number): string {
    console.log(h);
    if (typeof h === "number") {
        return `h-[${h}px]`;
    } else {
        return `h-[400px]`;
    }
}
