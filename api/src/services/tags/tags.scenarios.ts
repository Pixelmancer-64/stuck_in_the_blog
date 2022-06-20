import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: { data: { name: 'String5088896' } },
    two: { data: { name: 'String5857308' } },
  },
})

export type StandardScenario = typeof standard
