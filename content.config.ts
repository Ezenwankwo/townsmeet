import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page'
        })
    }
})
