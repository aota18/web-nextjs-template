import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { KeyMessage } from '@/components/KeyMessage'
import { PageHero } from '@/components/PageHero'
import { PhotoMessage } from '@/components/PhotoMessage'
import { Website } from '@/utils/variables'
import backgroundImage from '@/images/sample.jpg'
import Head from 'next/head'
import Image from 'next/image'
import { PhotoMessageRight } from '@/components/PhotoMessageRight'

const t = 'Street People'
const m =
  ' They are people who lose everything in life and at home to curiosity in adolescence are drug addicts, alcoholics, prostitutes, unemployed, tramps, homeless people, and live in the streets and parks due to reduced well-fair payments by the Canadian government.'

const t2 = 'Our Mission'
const m2 =
  'Our mission is to train street people reborn in the Lord as missionaries to cultivate missionaries who can help native North American regions and countries and peoples where the gospel is withering.'
export default function WhatWeDo() {
  const title = 'People are on the street'
  const text =
    'In Vancouver, there are approx 8,000 street people living on the streets with no access to shelter or education. The government is helping them free of charge with all sorts of good programs for them, but very few, and most of them are not changing.'

  const title2 = 'We are the church'
  const text2 =
    'Among the marginalized, especially the Tant Church, where people become friends with Street People, become family members, save God, and worship together. Through worship, street people are being patient, patient, and helping until they return as children of God.'
  return (
    <>
      <Head>
        <title>{Website.fullname} - Invest at the perfect time.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
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
          <PageHero title={'What we do'} />
          <KeyMessage title={title} text={text} />
          <PhotoMessage title={t} text={m} />
          <KeyMessage title={title2} text={text2} />
          <PhotoMessageRight title={t2} text={m2} />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  )
}
