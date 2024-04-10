import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { app } from '../../app'
import { execSync } from 'child_process'
import request from 'supertest'

describe('Users routes', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    beforeEach(() => {
        execSync('npm run knex -- migrate:rollback --all')
        execSync('npm run knex -- migrate:latest --env test')
    })

    it('should be able to create an user', async () => {
        const response = await request(app.server).post('/user').send({
            name: 'Nome Teste',
        })

        expect(response.statusCode).toStrictEqual(201)
    })
})
