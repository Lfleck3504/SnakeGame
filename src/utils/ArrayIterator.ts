export default class ArrayIterator<T> {
  private index: number = 0;
  constructor(private arr: T[]) {}

  next(): { value: T | undefined; done: boolean } {
    const value = this.arr[this.index];
    const done = this.index >= this.arr.length;
    this.index++;
    return { value, done };
  }
}
