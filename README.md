# YumYumSwap Widgets

[![npm](https://img.shields.io/npm/v/@yumyumswap/widgets)](https://www.npmjs.com/package/@yumyumswap/widgets)
[![Unit tests](https://github.com/YumYumToken/interface/actions/workflows/test.yaml/badge.svg)](https://github.com/YumYumToken/interface/actions/workflows/test.yaml)
[![Integration tests](https://github.com/YumYumToken/interface/actions/workflows/e2e.yaml/badge.svg)](https://github.com/YumYumToken/interface/actions/workflows/e2e.yaml)
[![Lint](https://github.com/YumYumToken/interface/actions/workflows/lint.yml/badge.svg)](https://github.com/YumYumToken/interface/actions/workflows/lint.yml)
[![Crowdin](https://badges.crowdin.net/uniswap-interface/localized.svg)](https://crowdin.com/project/uniswap-interface)

The `@yumyumswap/widgets` package is an [npm package](https://www.npmjs.com/package/@yumyumswap/widgets) of React components used to provide subsets of the Uniswap Protocol functionality in a small and configurable user interface element.

# YumYumSwap Swap Widget

The Swap Widget bundles the whole swapping experience into a single React component that developers can easily embed in their app with one line of code. 

![swap widget screenshot](https://raw.githubusercontent.com/YumYumToken/interface/main/src/assets/images/widget-screenshot.png)

You can customize the theme (colors, fonts, border radius, and more) to match the style of your application. You can also configure your own default token list and optionally set a convenience fee on swaps executed through the widget on your site.

## Installation

Install the widgets library via `npm` or `yarn`.

```js
yarn add @yumyumswap/widgets
```
```js
npm i --save @yumyumswap/widgets
```

## Documentation

- [overview](https://docs.yumyumtoken.com/sdk/widgets/swap-widget)
- [api reference](https://docs.yumyumtoken.com/sdk/widgets/swap-widget/api)

## Example Apps

YumYumSwap maintains two demo apps in branches of the [widgets-demo](https://github.com/YumYumToken/widgets-demo) repo:

- [NextJS](https://github.com/YumYumToken/widgets-demo/tree/nextjs)
- [Create React App](https://github.com/YumYumToken/widgets-demo/tree/cra)

Others have also also released the widget in production to their userbase:

- [OpenSea](https://opensea.io/)
- [Friends With Benefits](https://www.fwb.help/)
- [Oasis](https://oasis.app/)

## Legal notice

YumYumSwap encourages integrators to evaluate their own regulatory obligations when integrating this widget into their products, including, but not limited to, those related to economic or trade sanctions compliance.
