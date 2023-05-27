import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Donate() {
  const { query } = useRouter()
  console.log(query)
  const PAYMENT_LINK = 'https://buy.stripe.com/5kA9CL0o2fRkcikbII'

  return (
    <>
      <Head>
        <title>Donate - House of Restoration</title>
      </Head>
      {query.success ? (
        <div>Thank you for the donation!</div>
      ) : (
        <a href={PAYMENT_LINK}>Donate</a>
      )}
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
