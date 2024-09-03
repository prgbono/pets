export type Pet = {
  id: number
  name: string
  kind: string
  weight: number
  height: number
  length: number
  photo_url: string
  description: string
  number_of_lives: number
}

export type SORTING_OPTIONS_TYPE =
  | 'Name'
  | 'Kind'
  | 'Weight'
  | 'Height'
  | 'Length'
