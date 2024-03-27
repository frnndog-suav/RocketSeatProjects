import http from 'node:http'
import { json } from '../middlewares/index.js'
import { ROUTES } from '../routes/index.js'
import { extractQueryParams } from '../utils/extract-query.params.js'
import { csvRecords } from '../utils/csv-parser.js'

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = ROUTES.find((route) => route.method === method && route.path.test(url))

    if (route) {
        const routeParams = req.url.match(route.path)
        const { query, ...params } = routeParams.groups
        req.params = params
        req.query = query ? extractQueryParams(query) : {}
        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)
