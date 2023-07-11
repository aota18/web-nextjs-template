import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { KeyMessage, SecondaryFeatures } from '@/components/KeyMessage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Website } from '@/utils/variables'
import { PhotoMessage } from '@/components/PhotoMessage'
import { ImageList } from '@/components/ImageList'
import { Container } from '@/components/Container'
import Busking from '@/images/sample/IMG_3924.jpg'
import StreetService from '@/images/sample/IMG_2098.jpg'
import MissionImg from '@/images/sample/IMG_2146.jpg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { useEffect, useMemo, useRef } from 'react'

const Map = ({ center }) => {
  const containerStyle = {
    width: '1280px',
    height: '396px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="map-container"
      mapContainerStyle={containerStyle}
    >
      <MarkerF position={center} title="House of Restoration" />
    </GoogleMap>
  )
}

export default function Home() {
  const center = useMemo(() => ({ lat: 49.19636, lng: -122.84648 }), [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const { t } = useTranslation('home')

  const blogPosts = [
    {
      id: 1,
      title: t('ministry.street_service.name'),
      time: '10:00AM - 01:00PM',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: StreetService,
      date: t('ministry.street_service.date'),
      datetime: '2020-03-16',
    },
    {
      id: 2,
      title: t('ministry.busking_worship.name'),
      time: '04:00PM',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl: Busking,
      date: t('ministry.busking_worship.date'),
      datetime: '2020-03-16',
    },
    // More posts...
  ]

  const title = t('mission_title')
  const text = t('mission_detail')

  return (
    <>
      <Head>
        <title>{Website.fullname}</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <ImageList />
        <PhotoMessage title={title} text={text} photo={MissionImg} />

        {/* Blog section */}
        <Container className="my-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('ministry_title')}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600"></p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  src={post.imageUrl}
                  alt="post"
                  className="absolute inset-0 -z-10 h-full w-full object-cover brightness-150"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="text-md flex flex-wrap items-center gap-y-1 overflow-hidden font-bold leading-6 text-white">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                </div>
                <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                  <div>
                    <span className="absolute inset-0" />
                    {post.title}
                  </div>
                </h3>
                <h3 className="text-lg font-semibold leading-6 text-white">
                  <div>
                    <span className="absolute inset-0" />
                    {post.time}
                  </div>
                </h3>
              </article>
            ))}
          </div>
        </Container>

        <Container className="my-16">
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {'Location'}
          </h2>
          {!isLoaded ? (
            <div>Loading...</div>
          ) : (
            <div className="flex items-center justify-center">
              <Map center={center} />
            </div>
          )}
        </Container>

        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
      // Will be passed to the page component as props
    },
  }
}
