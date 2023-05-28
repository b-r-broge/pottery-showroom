import { inventory } from '@/types';

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