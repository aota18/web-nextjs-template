import {
  DeviceArrowIcon,
  DeviceCardsIcon,
  DeviceChartIcon,
  DeviceClockIcon,
  DeviceListIcon,
  DeviceLockIcon,
  IconHandsPray,
  IconPeopleCarryBox,
} from '@/utils/icons'

import { Heart } from '@geist-ui/icons'
import { Button } from './Button'

export function CardList() {
  const features = [
    {
      name: 'Be a Prayer',
      description:
        'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
      icon: IconHandsPray,
      buttonText: 'Learn More',
      href: '/',
    },
    {
      name: 'Be a Volunteer',
      description:
        'Invest in different industries to find the most opportunities to win huge.',
      icon: IconPeopleCarryBox,
      buttonText: 'Learn More',
      href: '/',
    },
    {
      name: 'Be a Supporter',
      description:
        'Get insider tips on big stock moves and act on them within seconds.',
      icon: Heart,
      buttonText: 'Learn More',
      href: '/',
    },
  ]

  return (
    <ul
      role="list"
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
    >
      {features.map((feature) => (
        <li
          key={feature.name}
          className="rounded-2xl border border-gray-200 p-8"
        >
          <feature.icon className="h-8 w-8" />
          <h3 className="mt-6 font-semibold text-gray-900">{feature.name}</h3>
          <p className="mt-2 text-gray-700">{feature.description}</p>

          <Button href={feature.href}>{feature.buttonText}</Button>
        </li>
      ))}
    </ul>
  )
}
