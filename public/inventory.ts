
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

interface item {
  id: string,
  type: potTypes,
  primaryColor: colors,
  secondaryColor: colors,
  blend: blends
  functional: boolean,
  photoRoot: string,
  available: boolean,
}

interface inventory { inventory: Array<item> }

const inv: inventory = {
  inventory: [
    {
      id: 'splattermug',
      type: 'mug',
      primaryColor: 'cream',
      secondaryColor: 'floating blue green',
      blend: 'splatter',
      functional: true,
      photoRoot: './SplatterMug',
      available: false,
    },
    {
      id: 'twistedmug',
      type: 'mug',
      primaryColor: 'falls creek shino',
      secondaryColor: 'floating blue green',
      blend: 'diagonal',
      functional: true,
      photoRoot: './TwistMug1',
      available: true
    },
    {
      id: 'bowl1',
      type: 'bowl',
      primaryColor: 'floating blue green',
      secondaryColor: null,
      blend: null,
      functional: true,
      photoRoot: './Bowl1',
      available: false,
    }
  ]
}

export default inv