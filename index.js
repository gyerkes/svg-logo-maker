// inquirer import
const inquirer = require('inquirer')

// file system mod import
const fs = require('fs')

// import class from svgShapes.js
const {Triangle, Square, Circle} = require('./lib/svgShapes')

// function to write svg file using answers from the user prompts.   
function writeToFile(fileName, answers) {
    let shapeString = "";

    shapeString = 
    '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">'

    shapeString += '<g>'

    shapeString += `${answers.shape}`

    let shapeSelection
    if (answers.shape === 'Square') {
        shapeSelection = new Square()
        shapeString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`
    }
    else if (answers.shape === 'Circle') {
        shapeSelection = new Circle()
        shapeString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`
    }
    else {
        shapeSelection = new Triangle()
        shapeString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`
    }

    shapeString += `<text x="150" y="130" text-anchor="middle" font-size="40" 
    fill="${answers.textColor}">${answers.text}</text>`

    shapeString += '</g>'
    shapeString += '</svg>'

    fs.writeFile(fileName, shapeString, (err) => {
        err ? console.log(err) : console.log('Generated Logo!!!!')
    })
}
// function for user prompts the calls writeToFile function
function userPrompt() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Please enter Logo text (up to three characters).",
            name: "text",
        },
        {
            type: 'input',
            message: 'Please enter text color (a color keywork or hexadecimal number)',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'What shape would you like your logo to be?',
            choices: [
                'Square',
                'Circle',
                'Triangle',
            ],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Please enter shape color (a color keywork or hexadecimal number).',
            name: 'shapeColor',
        },
    ])

    .then((answers) => {
        if (answers.text.length > 3) {
            console.log('Please enter a max of 3 characters')
            userPrompt()
        }
        else {
            writeToFile("mylogo.svg", answers)
        }
    })
}
userPrompt()


