import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function About() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation('home')

  return (
    <>
      <Head>
        <title>About us - House of Restoration</title>
        <div>{t('greeting')}</div>
      </Head>
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
