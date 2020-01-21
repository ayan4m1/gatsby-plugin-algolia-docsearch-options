// eslint-disable-next-line
import React from 'react';
import { stripIndent } from 'common-tags';

export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  options
) => {
  const { apiKey, indexName, inputSelector } = options;

  if (!apiKey || !indexName || !inputSelector) {
    return;
  }

  const optionString = JSON.stringify(options);

  setHeadComponents([
    <link
      key="docsearch-css"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
    />
  ]);

  setPostBodyComponents([
    <script
      key="docsearch-js"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
    />,
    <script
      key="docsearch-initiate"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: stripIndent`
        var observer = new MutationObserver(function (mutations, instance) {
          var docSearchElem = document.querySelector('${inputSelector}');
          if (docsearch && docSearchElem) {
            docsearch(${optionString});
            instance.disconnect();
            return;
          }
        });
        document.addEventListener("DOMContentLoaded", function() {
          observer.observe(document, {
            childList: true,
            subtree: true
          });
        });
        `
      }}
    />
  ]);
};
