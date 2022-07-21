import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  wrapper: {
    marginBottom: 32,
    display: 'flex',
    width: '100%',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: 4,

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
      gap: 8,
    },
  },

  iconWrapper: {
    display: 'flex',
    width: 24,
    height: 20,
    alignItems: 'center',
  },

  dataWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '100%',
    gap: 4,
    fontSize: 12,
    '& p': {
      margin: 0,
    },

    [theme.fn.largerThan('sm')]: {
      flexDirection: 'row',
    },
    '& > span': {
      margin: '0 8px',
      display: 'none',
      [theme.fn.largerThan('sm')]: {
        display: 'block',
      },
    },
  },
}))
