const { readFileSync } = require('fs');

export function readFile(filename: string) {
    return readFileSync(filename, 'utf-8');
}
