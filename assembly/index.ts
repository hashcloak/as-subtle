// The entry file of your WebAssembly module.

export function constArrayCompare(a: i32[], b: i32[]): i32 {
    if (a.length !== b.length) {
        return 0;
    }

    let c: i32;
    let length: i32 = a.length;

    for (let i = 0; i < length; i++) {
        c = c | (a[i] ^ b[i]);
    }

    return constEq(c, 0);
}

export function constSelect32(a: i32, b: i32, c: i32 ): i32 {
    if (a < 0 || a > 1) {
        throw new Error("a needs to be either 0 or 1");
    }

    return !(a-1) & b | (a-1) & c;
    
}

export function constSelect64(a: i64, b: i64, c: i64 ): i32 {
    if (a < 0 || a > 1) {
        throw new Error("a needs to be either 0 or 1");
    }

    return !(a-1) & b | (a-1) & c;
    
}

export function constEq(a: u32, b: u32): i32 {
    return (((a ^ b) - 1) >> 31) as i32;
}

export function constCopy(a: u32, x: i32[], y: i32[]) {

}

export function constLE(a: i32, b: i32): i32 {
    return (((a - b - 1) >> 31) & 1);
}
