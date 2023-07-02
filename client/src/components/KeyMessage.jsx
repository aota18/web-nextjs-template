import { useId } from 'react'

import { Container } from '@/components/Container'

export function KeyMessage({ title, text }) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl space-y-10 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          <p className="mt-2 text-2xl italic text-gray-600">{text}</p>
        </div>
      </Container>
    </section>
  )
}
