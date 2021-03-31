import { readFileSync } from 'fs'
import { parse } from 'yaml'
import { join } from 'path'

const file = readFileSync(join(__dirname, '../quotes.yaml'), 'utf-8')

export async function getAllQuotes() {
    return parse(file)
}

export async function getQuote(i) {
    const quotes = await getAllQuotes()

    const next = (Number(i) + 1) % quotes.length

    return {
        ...quotes[i],
        next
    }
}