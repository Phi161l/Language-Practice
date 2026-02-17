function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArray = wrapInArray<number>(5);   // T = number
const strArray = wrapInArray<string>("hi"); // T = string

