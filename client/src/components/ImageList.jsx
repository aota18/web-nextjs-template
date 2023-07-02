import Prayer from '@/images/sample/IMG_1695.jpg'
import People from '@/images/sample/IMG_2098.jpg'
import FoodPrepare from '@/images/sample/IMG_2510.jpg'
import Praying from '@/images/sample/IMG_1704.jpg'
import Whalley from '@/images/sample/IMG_0074.jpg'
import clsx from 'clsx'
import Image from 'next/image'

export function ImageList() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[People, FoodPrepare, Prayer, Praying, Whalley].map(
          (image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden bg-zinc-100 dark:bg-zinc-800 sm:w-72 ',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  )
}
