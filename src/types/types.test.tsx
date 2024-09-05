import { Pet } from './index'

describe('Tests in types file', () => {
  test('Pet object should match the expected shape', () => {
    const petExample: Pet = {
      id: 1,
      name: 'Fido',
      kind: 'dog',
      weight: 25,
      height: 60,
      length: 90,
      photo_url: 'http://example.com/photo.jpg',
      description: 'A friendly dog'
    }

    expect(petExample).toEqual({
      id: 1,
      name: 'Fido',
      kind: 'dog',
      weight: 25,
      height: 60,
      length: 90,
      photo_url: 'http://example.com/photo.jpg',
      description: 'A friendly dog'
    })
  })
})

// And so on with all types
