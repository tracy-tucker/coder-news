import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote, ExampleCode } from './src/components/Inserts'

const components = {
    h2: Headings.myH2,
    h4: Headings.myH4,
    inlineCode: Code,
    blockquote: Blockquote,
    pre: ExampleCode,
}

export const wrapMDX = ({element}) => {
    return (
        <MDXProvider components={components}>
            {element}
        </MDXProvider>
    )
}