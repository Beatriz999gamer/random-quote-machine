import { getAllQuotes, getQuote } from "../../../lib/quotes";

export default async function handler(req, res) {
    const quotes = await getAllQuotes()

    const quote = await getQuote(Math.floor(Math.random() * quotes.length))

    res.status(200).json(quote)
}