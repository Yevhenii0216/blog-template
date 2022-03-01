import Image from 'next/image'
import Link from '@/components/Link'
import useTranslation from 'next-translate/useTranslation'

const Card = ({ title, description, imgSrc, href }) => {
  const { t } = useTranslation()

  return (
    <div className="w-full rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] md:w-1/2">
      <div className="rounded-md bg-white dark:bg-gray-900">
        <div
          className={`${
            imgSrc ? 'h-full' : ''
          } overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
        >
          {imgSrc &&
            (href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            ))}
          <div className="p-6">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
            {href && (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={href}
                className="text-base font-medium leading-6 text-[#cb3728] hover:text-[#dc2626] dark:hover:text-primary-400"
                aria-label={`Link to ${title}`}
              >
                {t('projects:learn')} &rarr;
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
