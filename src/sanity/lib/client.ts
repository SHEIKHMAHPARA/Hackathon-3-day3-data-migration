import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "g98a2yu2",
  dataset: "production",
  apiVersion: "2025-01-24",
  useCdn: true,// Set to false if statically generating pages, using ISR or tag-based revalidation
})
