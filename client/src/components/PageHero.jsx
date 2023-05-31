import { Container } from './Container'

export function PageHero({ title }) {
  return (
    <div className="overflow-hidden py-32 sm:py-32 lg:py-32 xl:py-32">
      <Container>
        <div className="fond-bold relative z-10 text-xl text-gray-500">
          <h1 className="absolute  -top-10 text-4xl font-bold  text-white sm:text-5xl">
            {title.toUpperCase()}
          </h1>
        </div>
      </Container>
    </div>
  )
}
