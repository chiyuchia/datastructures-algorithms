export interface INode<T> {
  value: T;
  next?: INode<T>;
}

export interface List<T> {
  findByIndex(index: number): INode<T> | undefined;
  push(value: T): void;
  insert(value: T, index?: any): void;
}

export class Node<T> implements INode<T> {
  public value: T = null;
  public next = null;
  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> implements List<T> {
  private count: number = 0;
  private head: Node<T> = null;

  constructor(head?: Node<T>) {
    this.head = head ?? new Node<T>(undefined);
  }

  public findByIndex(index: number) {
    if (index < 0 || index > this.count) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) currentNode = currentNode.next;
    return currentNode;
  }

  public push(value: T) {
    const node = new Node<T>(value);
    if (this.head === null) this.head = node;
    else {
      let currentNode: Node<T> | undefined = this.head;
      while (currentNode.next !== null) currentNode = currentNode.next;
      currentNode.next = node;
    }
    this.count += 1;
  }

  public insert(value: T, index: number) {
    if (index < 0 || index > this.count) return false;
    const node = new Node<T>(value);
    const targetNode = this.findByIndex(index);
    node.next = targetNode.next;
    targetNode.next = node;
    this.count += 1;
    return true;
  }
}

const list = new LinkedList<number>();
list.push(1);
console.log("🚀 ~ file: LinkedList.ts ~ line 39 ~ list", list);
list.push(2);
console.log("🚀 ~ file: LinkedList.ts ~ line 39 ~ list", list);
console.log(
  "🚀 ~ file: LinkedList.ts ~ line 45 ~ list.findByIndex(0)",
  list.findByIndex(0)
);
console.log(
  "🚀 ~ file: LinkedList.ts ~ line 45 ~ list.findByIndex(1)",
  list.findByIndex(1)
);

console.log(
  "🚀 ~ file: LinkedList.ts ~ line 45 ~ list.findByIndex(2)",
  list.findByIndex(2)
);
