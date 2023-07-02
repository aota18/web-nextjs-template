import clsx from 'clsx'
import { DiamondIcon } from './DiamondIcon'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Container } from './Container'
import { useTranslation } from 'next-i18next'

export function History() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  const { t } = useTranslation('about')

  const days = [
    {
      name: t('history.first'),
      date: 'June, 2000',
      dateTime: '2022-04-04',
    },
    {
      name: t('history.second'),
      date: 'January, 2003',
      dateTime: '2022-04-05',
    },
    {
      name: t('history.third'),
      date: 'August, 2004',
      dateTime: '2022-04-06',
    },
    {
      name: t('history.fourth'),
      date: 'May, 2005',
      dateTime: '2022-04-06',
    },
    {
      name: t('history.fifth'),
      date: 'September, 2005',
      dateTime: '2022-04-06',
    },
    {
      name: t('history.sixth'),
      date: 'August, 2007',
      dateTime: '2022-04-06',
    },
    {
      name: t('history.seventh'),
      date: 'June, 2010',
      dateTime: '2022-04-06',
    },
    {
      name: t('history.eighth'),
      date: 'August, 2012',
      dateTime: '2022-04-06',
    },
  ]

  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <h2>History </h2>
        <Tab.Group
          as="div"
          className="mt-14 mt-24  grid grid-cols-1 items-start  gap-x-8 gap-y-8"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto  pb-4">
            <div className="absolute bottom-0 left-4 top-2 block  w-px bg-slate-200" />
            <Tab.List className="grid grid-flow-row grid-cols-1 justify-start gap-x-8 gap-y-10  whitespace-nowrap px-4 text-left">
              {({ selectedIndex }) =>
                days.map((day, dayIndex) => (
                  <div key={day.dateTime} className="relative pl-8">
                    <DiamondIcon
                      className={clsx(
                        ' absolute left-[-2.5px] top-[0.5625rem] block h-1.5 w-1.5 overflow-visible',
                        dayIndex === selectedIndex
                          ? 'fill-balck-600 stroke-black-600'
                          : 'fill-transparent stroke-slate-400'
                      )}
                    />
                    <div className="relative">
                      <div
                        className={clsx(
                          'font-mono text-sm',
                          dayIndex === selectedIndex
                            ? 'text-black-600'
                            : 'text-slate-500'
                        )}
                      >
                        <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                          <span className="absolute inset-0" />
                          {day.date}
                        </Tab>
                      </div>
                      <time
                        dateTime={day.dateTime}
                        className="text-black-900 mt-1.5 block text-xl font-semibold tracking-tight"
                      >
                        {day.name}
                      </time>
                    </div>
                  </div>
                ))
              }
            </Tab.List>
          </div>
        </Tab.Group>
      </Container>
    </section>
  )
}
