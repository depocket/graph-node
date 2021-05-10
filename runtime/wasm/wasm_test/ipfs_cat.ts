enum IndexForAscTypeId {
  STRING = 0,
}

export function id_of_type(type_id_index: IndexForAscTypeId): usize {
  switch (type_id_index) {
    case IndexForAscTypeId.STRING:
      return idof<String>();
    default:
      return 0;
  }
}

export function allocate(n: usize): usize {
  return __alloc(n);
}

declare namespace typeConversion {
    function bytesToString(bytes: Uint8Array): string
}

declare namespace ipfs {
    function cat(hash: String): Uint8Array
}

export function ipfsCatString(hash: string): string {
    return typeConversion.bytesToString(ipfs.cat(hash))
}

export function ipfsCat(hash: string): Uint8Array {
    return ipfs.cat(hash)
}
