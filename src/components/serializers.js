import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const serializers = {
    types: {
        code: ({node = {}}) => {
            const { code, language } = node
            if (!code){
                return null
            }
            return <SyntaxHighlighter language={language ||'text'} style={dark}>
            {code}
          </SyntaxHighlighter>
        }
    }
}

export default serializers