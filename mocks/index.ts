import { rest, setupWorker } from 'msw';
import { generateShortId } from '../src/utils';

const handlers = [
  rest.get('/user', (_, res, ctx) =>
    res(ctx.status(200), ctx.json([
      { id: generateShortId(), name: 'Ai Furihata' },
      { id: generateShortId(), name: 'Nako Misaki' },
      { id: generateShortId(), name: 'Moeka Koizumi' },
      { id: generateShortId(), name: 'Chiemi Tanaka' },
    ]))),
  rest.post('/save', (req, res, ctx) => {
    const { body } = req;
    console.log('/save -Request Body- :', body);
    return res(ctx.status(200), ctx.json({ success: true }))}),
];

export const worker = setupWorker(...handlers);
