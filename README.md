# gatsby-plugin-algolia-docsearch-options

A fork of [gatsby-plugin-algolia-docsearch](https://github.com/ironstar-io/gatsby-plugin-algolia-docsearch) to allow configuration of DocSearch from the gatsby-config.js.

## requirements

- Node 20+
- Gatsby 5.x
- React 18.x

## usage

You should already have gatsby and react installed.

Start off by installing this package and its peer dependencies:

> npm i --save gatsby-plugin-algolia-docsearch-options common-tags@1.x

Then add the following to your gatsby-config.js:

```js
{
  resolve: 'gatsby-plugin-algolia-docsearch-options',
  options: {
    apiKey: process.env.API_KEY,
    indexName: 'changeme',
    inputSelector: '#docsearch-input'
  }
}
```

It is recommended to source your API key from a "secret" location (i.e. not checked in to source control), and you should also use the read-only API key from Algolia for extra safety.

For the full list of available options, refer to the [@docsearch/js documentation](https://docsearch.algolia.com/docs/api).
