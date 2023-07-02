import Image from 'next/image'

import { Container } from './Container'

export function PhotoMessage({ title, text, photo }) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <Image src={photo} alt="" unoptimized />
          </div>
          <div className="flex flex-col justify-center space-y-4 sm:m-6">
            <h2 className="leading-tight">{title}</h2>
            <p className="flex flex-col justify-center text-gray-500 lg:text-xl">
              {text}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
