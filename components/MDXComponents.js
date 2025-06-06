/* eslint-disable react/display-name */
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'
import Image from './Image'
import CustomLink from './Link'
import { BlogNewsletterForm } from './NewsletterForm'
import Pre from './Pre'
import TOCInline from './TOCInline'

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm: BlogNewsletterForm,
  wrapper: (props) => {
    // Handle case where props might be null or components might be undefined
    if (!props) {
      console.error('MDX wrapper received null props')
      return null
    }

    const { components, layout, ...rest } = props

    if (!layout) {
      console.error('MDX wrapper: No layout specified')
      return null
    }

    try {
      const Layout = require(`../layouts/${layout}`).default
      if (!Layout) {
        console.error(`MDX wrapper: Layout ${layout} not found or not properly exported`)
        return null
      }
      return <Layout {...rest} />
    } catch (error) {
      console.error(`MDX wrapper: Error loading layout ${layout}:`, error)
      return <div>Error loading layout: {layout}</div>
    }
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => {
    if (!mdxSource) {
      console.error('MDXLayoutRenderer: No mdxSource provided')
      return null
    }

    try {
      return getMDXComponent(mdxSource)
    } catch (error) {
      console.error('MDXLayoutRenderer: Error creating MDX component:', error)
      return null
    }
  }, [mdxSource])

  if (!MDXLayout) {
    return <div>Error: Unable to render MDX content</div>
  }

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
