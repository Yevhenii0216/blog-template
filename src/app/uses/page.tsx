import { allPages } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '@/components/MDXComponents'

const getPage = () => {
  const page = allPages.find((page) => page.slug === 'uses')

  return page
}

const UsesPage = () => {
  const page = getPage()
  const MDXComponent = useMDXComponent(page.body.code)

  return (
    <>
      <h2 className='my-4 text-4xl font-bold'>Uses</h2>
      <p className='mb-8 text-accent-5'>
        這是我目前用來玩遊戲、編程、製作影片以及每天使用的設備。
      </p>
      <div className='prose prose-zinc w-full max-w-none dark:prose-invert'>
        <MDXComponent components={MDXComponents} />
      </div>
    </>
  )
}

export default UsesPage
