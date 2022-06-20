import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        slug: 'String1477366',
        author: 'String',
        body: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        slug: 'String1529026',
        author: 'String',
        body: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
