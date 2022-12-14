'use client'

import { usePathname } from 'next/navigation'
import { NextSeo, NextSeoProps } from 'next-seo'

import { favicons } from '@/lib/favicons'

type HeadProps = NextSeoProps

const Head = (props: HeadProps) => {
  const pathname = usePathname()
  const {
    title,
    description = '小康 - 16 yrs • Student • Fullstack Web developer (student)',
    ...rest
  } = props

  return (
    <>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width' />
      <NextSeo
        useAppDir={true}
        titleTemplate='%s | 小康 Blog'
        title={title}
        defaultTitle='小康 – Developer, YouTuber'
        description={description}
        canonical={`https://honghong.me${pathname}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TszhongLai0411',
          handle: '@TszhongLai0411',
        }}
        openGraph={{
          url: `https://honghong.me${pathname}`,
          type: 'website',
          title: title ?? '小康 – Developer, YouTuber',
          description,
          images: [
            {
              url: 'https://honghong.me/static/images/og/og.png',
              width: 1200,
              height: 630,
              alt: description,
            },
          ],
        }}
        additionalLinkTags={[...favicons]}
        {...rest}
      />
    </>
  )
}

export default Head
