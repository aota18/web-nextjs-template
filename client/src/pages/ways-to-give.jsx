import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Website } from '@/utils/variables'
import { Header } from '@/components/Header'
import backgroundImage from '@/images/sample.jpg'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { KeyMessage, SecondaryFeatures } from '@/components/KeyMessage'
import { CardList } from '@/components/CardList'
import { Container } from '@/components/Container'
import { FAQ } from '@/components/FAQ'

export default function WaysToGive() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation('home')

  return (
    <>
      <Head>
        <title>Ways To Give - {Website.fullname}</title>
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
          <PageHero title={'Ways To Give'} />
          <KeyMessage
            text={
              '"Tell the poor the good news and give freedom to the captives Let us go forward together in proclaiming the blind to see again, to release the oppressed, and to proclaim the year of your grace." (Luke 4:18)'
            }
          />
          <Container></Container>
          <Container>
            <CardList />
          </Container>
          <Container>
            <FAQ />
          </Container>
        </div>
      </main>
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
