
export function getRandom<T>(arr: Array<T>): T | null {
    return arr.at(Math.floor(Math.random() * arr.length)) ?? null;
}

export function getAtLooped<T>(arr: Array<T>, at: number): T {
    return arr.at(at % arr.length)!;
}