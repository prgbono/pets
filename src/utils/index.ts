import {
  UNHEALTHY_THRESHOLD_HIGH,
  UNHEALTHY_THRESHOLD_LOW,
  VERY_HEALTHY_THRESHOLD_HIGH,
  VERY_HEALTHY_THRESHOLD_LOW
} from './constants'

export const calculatePetHealth = (
  kind: string,
  weight: number,
  height: number,
  length: number,
  number_of_lives: number
) => {
  const healthValue = Math.trunc(weight / (height * length))

  if (kind.toLowerCase() === 'cat' && number_of_lives === 1) {
    return 'unhealthy'
  }

  if (
    healthValue < UNHEALTHY_THRESHOLD_LOW ||
    healthValue > UNHEALTHY_THRESHOLD_HIGH
  ) {
    return 'unhealthy'
  } else if (
    healthValue >= VERY_HEALTHY_THRESHOLD_LOW &&
    healthValue < VERY_HEALTHY_THRESHOLD_HIGH
  ) {
    return 'very healthy'
  } else {
    return 'healthy'
  }
}

export const getTextColorClass = (health: string) =>
  health === 'UNHEALTHY' ? 'text-red-600' : 'text-green-600'
