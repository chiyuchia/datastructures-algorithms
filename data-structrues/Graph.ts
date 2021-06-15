/*
 * @Author: 纪煜佳
 * @Date: 2021-06-15 20:21:45
 * @LastEditors: 纪煜佳
 * @LastEditTime: 2021-06-15 20:40:27
 * @Description:
 */

class Graph {
  private vertices: (number | string)[];
  private edges: Map<number | string, (number | string)[]>;

  constructor() {
    this.vertices = [];
    this.edges = new Map();
  }

  addVertex(vertex: number | string) {
    if (!this.vertices.includes(vertex)) {
      this.vertices.push(vertex);
      this.edges.set(vertex, []);
    }
  }

  addEdge(v: number | string, w: number | string) {
    if (!this.edges.has(v)) this.addVertex(v);
    if (!this.edges.has(w)) this.addVertex(w);
    const vEdges = this.edges.get(v);
    const wEdges = this.edges.get(w);
    vEdges.push(w);
    wEdges.push(v);
    this.edges.set(v, vEdges);
    this.edges.set(w, wEdges);
  }

  getVertices() {
    return this.vertices;
  }

  getEdges() {
    return this.edges;
  }

  toString() {
    let s = '';
    for (const v of this.vertices) {
      s += `${v} -> `;
      const neighbors = this.edges.get(v);
      for (const neighbor of neighbors) {
        s += `${neighbor} `;
      }
      s += '\n';
    }
    return s;
  }
}
