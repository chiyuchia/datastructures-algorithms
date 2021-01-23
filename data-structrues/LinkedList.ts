export interface INode<T> {
  value: T;
  next?: INode<T>;
}

export interface List<T> {
  getHead(): INode<T>;
  find(value: T): INode<T> | undefined;
  findLast(): INode<T> | undefined;
  insert(newValue: T, value: T): boolean;
  append(value: T): void;
  remove(value: T): boolean;
  size(): number;
  isEmpty(): boolean;
  clear(): void;
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

  constructor() {
    this.head = new Node<T>(undefined);
  }

  getHead() {
    return this.head;
  }

  find(value: T) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return undefined;
  }

  private findPreNode(value: T) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return undefined;
  }

  findLast() {
    let currentNode = this.head;
    while (currentNode.next !== null) currentNode = currentNode.next;
    return currentNode;
  }

  insert(newValue: T, value: T) {
    const targetNode = this.find(value);
    if (targetNode === undefined) return false;
    const node = new Node<T>(newValue);
    node.next = targetNode.next;
    targetNode.next = node;
    this.count += 1;
    return true;
  }

  append(value: T) {
    const node = new Node<T>(value);
    if (this.head === null) this.head = node;
    else {
      let currentNode: Node<T> | undefined = this.head;
      while (currentNode.next !== null) currentNode = currentNode.next;
      currentNode.next = node;
    }
    this.count += 1;
  }

  remove(value: T) {
    const preNode = this.findPreNode(value);
    if (preNode === undefined) return false;
    const targetNode = preNode.next;
    preNode.next = targetNode.next;
    this.count -= 1;
    return true;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    this.head.next = null;
    this.count = 0;
  }
}
