'use server'

import fs from 'node:fs'
const FILENAME = 'messages.txt'

export async function serverConsoleLog() {
    const message = `\r\nserverConsoleLog() invoked at ${new Date().toTimeString()}`
    console.log(message)
}

export async function writeMessageToFile(str: string = 'DEFAULT') {
    const message = `\r\nwriteMessageToFile() invoked at ${new Date()} with message ${str}`
    console.log(message)
    fs.writeFile(FILENAME, message, { flag: 'a+' }, (err: any) => err && console.error(err))
}

export async function countLinesInFile() {
    const message = `\r\ncountLinesInFile() invoked at ${new Date().toTimeString()}`
    console.log(message)
    const fileContent = fs.readFileSync(FILENAME, 'utf8')
    return fileContent.toString().split('\n').length
}

// A server action can receive a FormData object, containing data posted from the client.
export async function processProductSuggestion(formData: FormData) {
    // A server action can extract fields from the FormData object individually by name as follows: 
    // const productSuggestion = {
    //     description:      formData.get('description'),
    //     recommendedPrice: Number(formData.get('recommendedPrice')),
    //     estimatedSales:   Number(formData.get('estimatedSales'))
    // }

    // Alternatively a server action can extract all fields from the FormData object at once as follows: 
    const productSuggestion = Object.fromEntries(formData)

    const message = `\r\processProductSuggestion() invoked at ${new Date().toTimeString()}, object ${JSON.stringify(productSuggestion)}`
    console.log(message)
}

export async function processProductSuggestionSlooooooowly(formData: FormData) {
    await new Promise(resolve => setTimeout(resolve, 5000))
    processProductSuggestion(formData)
}

// A server action can receive previous state data from the client, and return updated state back to the client.
export async function processProductSuggestionStateful(
    prevState: {submitCount: number, statusMessage: string},
    formData: FormData) {

    const productSuggestion = Object.fromEntries(formData);
    const message = `\r\processProductSuggestionStateful() invoked at ${new Date().toTimeString()}, object ${JSON.stringify(productSuggestion)}`;
    console.log(message);

    return {
        submitCount: Number(prevState.submitCount) + 1,
        statusMessage: `Processed product suggestion: ${JSON.stringify(productSuggestion)}`
    };
}