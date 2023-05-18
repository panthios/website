import { z, defineCollection } from 'astro:content';


const referenceCollection = defineCollection({
  schema: z.object({
    title: z.string()
  })
});

const projectCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    stability: z.enum([
      'concept',
      'alpha',
      'beta',
      'stable',
      'deprecated'
    ])
  })
});

export const collections = {
  reference: referenceCollection,
  project: projectCollection
}