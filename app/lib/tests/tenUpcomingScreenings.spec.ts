import { describe, it, expect } from '@jest/globals';
import {fetchTenUpcomingScreenings} from '../data';
import { Screening } from '../definitions';

describe('fetchTenUpcomingScreenings', () => {
    it('returns the length of object', () => {
        const output = fetchTenUpcomingScreenings([
            {
                id: 1,
                title: 'The Room',
                intro: 'A movie with a lot of awkward sex scenes',
                image: 'https://upload.wikimedia.org/wikipedia/en/e/e1/TheRoomMovie.jpg',
                start_time: '2024-05-01T19:00:00.000Z',
                room: 'Stora salongen',
              },
              {
                id: 2,
                title: 'Gudarna måste vara tokiga',
                intro: 'En film med en CocaCola-flaska som trillar ner från ett flygplan',
                image:
                  'https://upload.wikimedia.org/wikipedia/en/5/59/Gods_must_be_crazyposter.jpg',
                start_time: '2024-06-01T19:00:00.000Z',
                room: 'Stora salongen',
              }
        ]);
        expect(output).toHaveLength(2);
    })
})