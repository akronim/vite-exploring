export function pluck(items, field) {
    return items.map((item) => item[field]);
}