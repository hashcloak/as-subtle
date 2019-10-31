// The entry file of your WebAssembly module.


export function constArrayCompare_i32(a: i32[], b: i32[]): i32 {
    if (a.length !== b.length) {
        return 0;
    }

    let c: i32;
    let len: i32 = a.length;

    for (let i = 0; i < len; i++) {
        c = c | (a[i] ^ b[i]);
    }

    return constEq_u32(c, 0);
}

export function constSelect_i32(a: i32, b: i32, c: i32 ): i32 {
    if (a < 0 || a > 1) {
        // Aborts program. Will be updated when AssemblyScript has
        // exception handling
        throw new Error("a needs to be either 0 or 1");
    }

    return !(a-1) & b | (a-1) & c;
    
}

export function constSelect_i64(a: i64, b: i64, c: i64 ): i32 {
    if (a < 0 || a > 1) {
        // Aborts program. Will be updated when AssemblyScript has
        // exception handling
        throw new Error("a needs to be either 0 or 1");
    }

    return !(a-1) & b | (a-1) & c;
    
}

export function constEq_u32(a: u32, b: u32): i32 {
    return (((a ^ b) - 1) >> 31) as i32;
}

export function constEq_u64(a: u64, b: u64): i32 {
    return (((a ^ b) - 1) >> 63) as i32;
}

export function constLE_i32(a: i32, b: i32): i32 {
    return (((a - b - 1) >> 31) & 1);
}
