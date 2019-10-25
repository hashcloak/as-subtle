// The entry file of your WebAssembly module.

export function constArrayCompare(a: i32[], b: i32[]): i32 {
    if (a.length !== b.length) {
        return 0;
    }

    let c: i32;
    let length: i32 = a.length;

    for (let i = 0; i < length; i++) {
        c = c | (x[i] ^ y[i]);
    }

    return constEq32(c, 0);
}

export function constSelect(): i32 {

}

export function constEq32(): i32 {

}

export function constEq64(): i32 {

}
