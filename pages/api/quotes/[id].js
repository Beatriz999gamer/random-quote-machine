import { getQuote } from "../../../lib/quotes";

export default async function handler(req, res) {
    const quote = await getQuote(req.query.id)

    if (quote) {
        res.status(200).json(quote)
    } else {
        res.statust(404).json({
            message: 'Quote does not exist'
        })
    }
}