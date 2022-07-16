export function isNegative(n: string): boolean {
    return Number.parseInt(n) <= 0 ? true : false
}

export function isLimit(nInicial: string, nFinal: string): boolean {
    if ((Number.parseInt(nFinal) - Number.parseInt(nInicial)) > 100) {
        return true
    } else {
        return false
    }
}