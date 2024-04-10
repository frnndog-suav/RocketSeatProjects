import { execSync } from 'child_process'
import request from 'supertest'
import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { app } from '../../app'

describe('Diets routes', () => {
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

    it('should be able to create a diet', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        const createDietResponse = await request(app.server)
            .post('/diet')
            .set('Cookie', cookies)
            .send({
                name: 'Dieta 1',
                description: 'Melancia',
                is_diet_on_going: true,
            })

        expect(createDietResponse.statusCode).toStrictEqual(201)
    })

    it('should be able to list all diets from an specific user', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        const listAllDiestResponse = await request(app.server)
            .get('/diet/list')
            .set('Cookie', cookies)

        expect(listAllDiestResponse.body.diets).toStrictEqual([
            expect.objectContaining({
                id: expect.stringMatching(
                    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
                ),
                user_id: expect.stringMatching(
                    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
                ),
                name: 'Dieta 1',
                description: 'Melancia',
                created_at: expect.stringMatching(
                    /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
                ),
                is_diet_on_going: 1,
            }),
        ])
    })

    it('should be able to get a specific diet', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        const listAllDiestResponse = await request(app.server)
            .get('/diet/list')
            .set('Cookie', cookies)

        const id = listAllDiestResponse.body.diets[0].id

        const getSpecificDietResponse = await request(app.server)
            .get(`/diet/${id}`)
            .set('Cookie', cookies)

        expect(getSpecificDietResponse.body.diet).toStrictEqual({
            id: expect.stringMatching(
                /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
            ),
            user_id: expect.stringMatching(
                /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/
            ),
            name: 'Dieta 1',
            description: 'Melancia',
            created_at: expect.stringMatching(
                /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
            ),
            is_diet_on_going: 1,
        })
    })

    it('should be able to check total sum of meals from an user', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 2',
            description: 'Banana',
            is_diet_on_going: true,
        })

        const totalMealsResponse = await request(app.server)
            .get('/diet/totalMeals')
            .set('Cookie', cookies)

        expect(totalMealsResponse.body).toStrictEqual({
            totalMeals: {
                count: 2,
            },
        })
    })

    it('should be able to check meals on going', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 2',
            description: 'Banana',
            is_diet_on_going: false,
        })

        const mealsOnGoingResponse = await request(app.server)
            .get('/diet/mealsOnGoing')
            .set('Cookie', cookies)

        expect(mealsOnGoingResponse.body).toStrictEqual({
            totalMealsOnGoing: {
                count: 1,
            },
        })
    })

    it('should be able to check meals out of diet', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 2',
            description: 'Banana',
            is_diet_on_going: false,
        })

        const mealsOnGoingResponse = await request(app.server)
            .get('/diet/outOfDiet')
            .set('Cookie', cookies)

        expect(mealsOnGoingResponse.body).toStrictEqual({
            mealsOutOfDiet: {
                count: 1,
            },
        })
    })

    it('should be able to check best sequence of meals', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 2',
            description: 'Banana',
            is_diet_on_going: false,
        })

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 3',
            description: 'Maçã',
            is_diet_on_going: true,
        })

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 4',
            description: 'Salada',
            is_diet_on_going: true,
        })

        const bestSequenceResponse = await request(app.server)
            .get('/diet/bestSequence')
            .set('Cookie', cookies)

        expect(bestSequenceResponse.body).toStrictEqual({
            bestSequence: {
                count: 2,
            },
        })
    })

    it('should be able to update a diet information', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        const listAllDiestResponse = await request(app.server)
            .get('/diet/list')
            .set('Cookie', cookies)

        const id = listAllDiestResponse.body.diets[0].id

        const updateDietResponse = await request(app.server)
            .put(`/diet/${id}`)
            .set('Cookie', cookies)
            .send({
                name: 'Dieta Nova',
                description: 'Batata',
                is_diet_on_going: false,
            })

        expect(updateDietResponse.statusCode).toStrictEqual(204)
    })

    it('should be able to delete a diet', async () => {
        const createUserResponse = await request(app.server)
            .post('/user')
            .send({
                name: 'Nome Teste',
            })

        const cookies = createUserResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error('No cookie available')
        }

        await request(app.server).post('/diet').set('Cookie', cookies).send({
            name: 'Dieta 1',
            description: 'Melancia',
            is_diet_on_going: true,
        })

        const listAllDiestResponse = await request(app.server)
            .get('/diet/list')
            .set('Cookie', cookies)

        const id = listAllDiestResponse.body.diets[0].id

        const deleteDietResponse = await request(app.server)
            .delete(`/diet/${id}`)
            .set('Cookie', cookies)

        expect(deleteDietResponse.statusCode).toStrictEqual(204)
    })
})
