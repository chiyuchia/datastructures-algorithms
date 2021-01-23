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

  constructor(head?: Node<T>) {
    this.head = head ?? new Node<T>(undefined);
  }

  public getHead() {
    return this.head;
  }

  public find(value: T) {
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

  public findLast() {
    let currentNode = this.head;
    while (currentNode.next !== null) currentNode = currentNode.next;
    return currentNode;
  }

  public insert(newValue: T, value: T) {
    const targetNode = this.find(value);
    if (targetNode === undefined) return false;
    const node = new Node<T>(newValue);
    node.next = targetNode.next;
    targetNode.next = node;
    this.count += 1;
    return true;
  }

  public append(value: T) {
    const node = new Node<T>(value);
    if (this.head === null) this.head = node;
    else {
      let currentNode: Node<T> | undefined = this.head;
      while (currentNode.next !== null) currentNode = currentNode.next;
      currentNode.next = node;
    }
    this.count += 1;
  }

  public remove(value: T) {
    const preNode = this.findPreNode(value);
    if (preNode === undefined) return false;
    const targetNode = preNode.next;
    preNode.next = targetNode.next;
    this.count -= 1;
    return true;
  }

  public size() {
    return this.count;
  }

  public isEmpty() {
    return this.count === 0;
  }

  public clear() {
    this.head.next = null;
    this.count = 0;
  }
}
