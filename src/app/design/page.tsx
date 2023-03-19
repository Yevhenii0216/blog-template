import { allPages } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/MDXComponents'

import { site } from '@/config/site'

export const metadata: Metadata = {
  title: 'Design',
  description: '這是我網站的設計。',
  alternates: {
    canonical: `${site.url}/design`,
  },
}

const getPage = () => {
  const page = allPages.find((page) => page.slug === 'design')

  if (!page) {
    return notFound()
  }

  return page
}

const DesignPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <>
      <h2 className='my-4 text-4xl font-bold'>設計</h2>
      <p className='mb-8 text-accent-5'>這是我網站的設計。</p>
      <div className='prose prose-zinc w-full max-w-none dark:prose-invert'>
        <MDXComponent components={MDXComponents} />
      </div>
    </>
  )
}

export default DesignPage
