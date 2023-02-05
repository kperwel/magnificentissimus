
export function getRandom<T>(arr: Array<T>): T | null {
    return arr.at(Math.floor(Math.random() * arr.length)) ?? null;
}