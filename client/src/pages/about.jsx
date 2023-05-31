import Head from 'next/head'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Website } from '@/utils/variables'
import { Header } from '@/components/Header'
import backgroundImage from '@/images/sample.jpg'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { PageHero } from '@/components/PageHero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { KeyMessage, SecondaryFeatures } from '@/components/KeyMessage'
import { PhotoMessage } from '@/components/PhotoMessage'
import { useState } from 'react'
import { DiamondIcon } from '@/components/DiamondIcon'
import clsx from 'clsx'
import sample from '@/images/sample.jpg'
import { History } from '@/components/History'
import { Footer } from '@/components/Footer'

export default function About() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation('home')

  const text =
    '"For he must remain in heaven until the time for the final restoration of all things, as God promised long ago through his holy prophets." (Acts 3:21)'

  return (
    <>
      <Head>
        <title>About us - {Website.fullname}</title>
      </Head>
      <Header />
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 -bottom-14 -top-48 h-72 translate-y-48 overflow-hidden lg:h-96 lg:translate-y-[0%]">
            <Image
              className="absolute brightness-50"
              src={backgroundImage}
              alt=""
              priority
              unoptimized
            />
          </div>
          <PageHero title={'Our Story'} />
          <KeyMessage text={text} />
          <section
            id="secondary-features"
            aria-label="Features for building a portfolio"
            className="py-20 sm:py-32"
          >
            <Container>
              <div className="grid grid-cols-1 gap-6 ">
                <div className=" flex w-full flex-col items-center">
                  <Image
                    src={sample}
                    alt=""
                    width={800}
                    unoptimized
                    className="rounded-lg"
                  />
                </div>

                <p className="text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <p className="text-lg ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Container>
          </section>

          <History />
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about'])),
      // Will be passed to the page component as props
    },
  }
}
