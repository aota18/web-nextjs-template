import Image from 'next/image'
import sample from '@/images/sample2.jpeg'
import { Container } from './Container'

export function PhotoMessageRight({ title, text }) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="m-6 flex flex-col justify-center space-y-4">
            <h2 className="leading-tight">{title}</h2>
            <p className="flex flex-col justify-center lg:text-lg">{text}</p>
          </div>
          <div>
            <Image src={sample} alt="" unoptimized className="rounded-lg" />
          </div>
        </div>
      </Container>
    </section>
  )
}
