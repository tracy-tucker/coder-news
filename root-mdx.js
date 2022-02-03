import React from 'react'
import { MDXProvider } from '@mdx-js/react'

export const wrapMDX = ({element}) => {
    return (
        <MDXProvider components={components}>
            {element}
        </MDXProvider>
    )
}