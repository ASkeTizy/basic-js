const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function Tree(value = 0) {
  this.count = value
  this.edges = {}
  this.hasEdge = (mark) => mark in this.edges
  this.getChild = (mark) => this.edges[mark]
  this.addEdge = (mark) => this.edges[mark] = new Tree()
  this.getCount = () => this.count
  return this
}

function collect(node, pref = '') {
  const base = pref != '' ? { [pref]: node.count } : {}
  return Object.entries(node.edges)
    .reduce((domains, [p, t]) => Object.assign(domains, collect(t, pref + '.' + p)), base)
}

function getDNSStats(source) {
  const root = new Tree()
  for (let a of source) {
    const path = a.split('.').reverse()
    let pointer = root
    for (let p of path) {
      if (pointer.hasEdge(p)) pointer = pointer.getChild(p)
      else pointer = pointer.addEdge(p)
      pointer.count++
    }
  }
  return collect(root)
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
