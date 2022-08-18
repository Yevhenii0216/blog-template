import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

import MetricCard from '@/components/Metrics/Card'
import { useStyles } from '@/components/Metrics/Metrics.styles'
import { Github } from '@/components/Metrics/types'

export default function GitHubCard() {
  const { data } = useSWR<Github>('/api/github', fetcher)
  const stars = new Number(data?.stars)
  const followers = new Number(data?.followers)
  const link = 'https://github.com/tszhong0411'
  const { classes } = useStyles()

  return (
    <div className={classes.group}>
      <MetricCard
        header='GitHub followers'
        link={link}
        metric={followers}
        isCurrency={false}
      />
      <MetricCard
        header='GitHub Stars'
        link={link}
        metric={stars}
        isCurrency={false}
      />
    </div>
  )
}
