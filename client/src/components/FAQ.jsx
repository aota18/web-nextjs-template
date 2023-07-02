import { IconMathMinus, IconPlusLg } from '@/utils/icons'
import { Disclosure } from '@headlessui/react'
import { useTranslation } from 'next-i18next'



export function FAQ({t}) {

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    // More questions...
  ]

  return (
    <div className="mx-auto my-24 max-w-7xl px-6 sm:my-56 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          {t('faq.title')}
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <IconMathMinus
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <IconPlusLg className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}
