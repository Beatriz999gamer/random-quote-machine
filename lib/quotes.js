import { readFileSync } from 'fs'
import { parse } from 'yaml'
import { join } from 'path'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

const file = readFileSync(join(serverRuntimeConfig.PROJECT_ROOT, 'quotes.yaml'), 'utf-8')

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