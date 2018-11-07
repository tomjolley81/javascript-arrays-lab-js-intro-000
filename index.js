const kittens = ["Milo", "Otis", "Garfield"] //define your array here
var kitten = []
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}
function appendKitten(name) {
  kitten = [...kittens, name]
  return kitten
}
function prependKitten(name) {
  kitten = [name, ...kittens]
  return kitten
}
function removeLastKitten() {
  kitten = kittens.pop()
}
function removeFirstKitten() {
  kitten = kittens.unshift()
}
