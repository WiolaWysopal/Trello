const buffer = new ArrayBuffer(8); 
const view = new Uint8Array(buffer)

view.set([0, 1, 2, 3, 4, 5], 0)
console.log(view)

view[3] = 255
console.log(view)

//reading/writing with DataView

console.log(`DataView Experiments`)
const buffer2 = new ArrayBuffer(9)
const varioustypes = new DataView(buffer2)

varioustypes.setInt8(0, 5)
varioustypes.setFloat64(1, 10.5)
varioustypes.setInt8(2, 15)
varioustypes.setFloat32(3, 3.14);

console.log(varioustypes)

