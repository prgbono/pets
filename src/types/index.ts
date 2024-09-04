export type Pet = {
  id: number
  name: string
  kind: string
  weight: number
  height: number
  length: number
  photo_url: string
  description: string
  number_of_lives?: number
}

export type PetContextType = {
  pets: Pet[] | []
  isLoading: boolean
  hasError: string | null
  onSortOptionChange: (option: string) => void
}

export type PetOfTheDayProps = {
  pet: Pet
  onCloseModal: () => void
  showPetOfTheDay: boolean
}

export type SortingBarProps = {
  onSortOptionChange: (option: string) => void
  onPetOfTheDayClick: () => void
}
