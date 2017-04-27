![Brightfind](http://jeremy.brightfind.com/appSeedBannerImage1.png)

# Frontend Base Project
> from-scratch **Webpack 2** app

> Pure Javascript: **No JQuery Allowed**


---

## Features:


### Build
- **Webpack 2**: *for JS bundling, app structure & hotness*
- **Webpack Dev Server**: *for seeing instant updates while developing*
- **Production Script**: *for shipping svelte sites*
- **Deploy Script** *under development*
- **Yarn** *because cats*

### Javascript
- **Babel**: *so you can write that sweet, sweet ES6*
- **EShint**: *JS linting can be seasoned to taste*
- **No JQuery**: *avoid dependencies or all is lost*

### Style
- **SASS**: *natch*
- **Native CSS Grid** *included, with Flexbox fallback. Avoid floated and/or hard-coded column width (no need for col-sm-3 anymore)!*
- **PostCSS**:
   -  **Autoprefixer**: *to empathize with owners of older/non-updated devices*
   -  **CSS Nano**: *minifies, duh*
   -  *Linting very lightly applied*

### Templating
- **WebpackHTMLPlugin**: *creates static pages*
- **Handlebars**: *for templates & inludes (minimize frontend templating logic)*
- **Pattern Library** *via custom awesomeness*

### Images
- **Lazyloading** *baked-in w/ B-LAZY*


---


## Installation:

- clone github repository
- cd into directory

```
yarn install
```

## Develop

```
yarn run dev
```

## Build for Prod

```
yarn run prod
```
