type potTypes =
  'cup' |
  'mug' |
  'stein' |
  'bowl' |
  'mixing bowl' |
  'plate' |
  'square plate' |
  'jug' |
  'bottle' |
  'container' |
  'lidded container' |
  'raku' |
  'other'

type colors =
  'floating blue green' |
  'cream' |
  'falls creek shino' |
  'tenmoku' |
  'eggplant purple' |
  'unglazed' |
  null

type blends =
  'rim dip' |
  'diagonal' |
  'splatter' |
  null

export interface item {
  id: string,
  type: potTypes,
  primaryColor: colors,
  secondaryColor: colors,
  blend: blends
  functional: boolean,
  photoRoot: string,
  available: boolean,
}

export interface inventory { inventory: Array<item> }