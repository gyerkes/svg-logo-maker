// imports classes from svgShapes.js
const { Square, Circle, Triangle} = require('./svgShapes.js')

// unit tests for setting colors to the shapes
describe('Square Test', () => {
    test("Test square with red background", () => {
        let shape = new Square();
        shape.setShapeColor('red')
        expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="red"/>`)
    })
})   

describe('Circle Test', () => {
    test("Test circle with orange background", () => {
        let shape = new Circle();
        shape.setShapeColor('orange')
        expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="orange"/>`)
    })
})

describe('Triangle Test', () => {
    test("Test triangle with blue background", () => {
        let shape =
        new Triangle();
        shape.setShapeColor('#189bcc')
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="#189bcc"/>`)
    })
})