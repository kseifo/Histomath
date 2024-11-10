// MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// Function to translate LaTeX delimiters to $ and $$
const translateLaTex = (val) => {
    if (val.indexOf("\\") === -1) return val;

    return val
        .replaceAll("\\(", "$")   // Inline math start
        .replaceAll("\\)", "$")   // Inline math end
        .replaceAll("\\[", "$$")  // Block math start
        .replaceAll("\\]", "$$"); // Block math end
};

const MarkdownRenderer = ({ content }) => {
    // Preprocess content with translateLaTex
    const processedContent = translateLaTex(content);

    return (
        <ReactMarkdown
            children={processedContent}
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeMathjax]}
        />
    );
};

export default MarkdownRenderer;

