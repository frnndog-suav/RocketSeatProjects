import { randomUUID } from 'node:crypto';
import { Database } from "../database/index.js";
import { buildRoutePath } from "../utils/build-route-path.js";

const database = new Database

export const ROUTES = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body

            const task = {
                id: randomUUID(),
                title,
                description,
                completedAt: null,
                createdAt: new Date(),
                updatedAt: null
            }

            database.insert('tasks', task)
            return res.writeHead(201).end()
        }
    },
    {
        method: "GET",
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query
            const tasks = database.select('tasks', search ? {
                title: search,
                description: search,
            } : null)

            return res.end(JSON.stringify(tasks))
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath("/tasks/:id"),
        handler: (req, res) => {
            const { id } = req.params
            const { title, description } = req.body

            const result = database.update('tasks', id, {
                title, description, updatedAt: new Date(),
            })

            if (result) {
                return res.writeHead(204).end()
            }

            return res.writeHead(404).end()
        }
    },
    {
        method: 'PATCH',
        path: buildRoutePath("/tasks/:id/complete"),
        handler: (req, res) => {
            const { id } = req.params
            const result = database.completeTask('tasks', id)
            if (result) {
                return res.writeHead(204).end()
            }

            return res.writeHead(404).end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath("/tasks/:id"),
        handler: (req, res) => {
            const { id } = req.params
            const result = database.delete('tasks', id)
            if (result) {
                return res.writeHead(204).end()
            }

            return res.writeHead(404).end()
        }
    },
]