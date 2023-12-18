import { http, HttpResponse } from 'msw'

const localhost = process.env.NEXT_PUBLIC_API_LOCALHOST

export const handlers = [
  http.get(localhost + '/api/event/cities', () => {
    return new HttpResponse(['Kiev', 'Odesa', 'Lviv'])
  }),
]