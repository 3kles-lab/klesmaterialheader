<!--[![pipeline status](http://gitlab.3kles.local/angular/klesmaterialheader/badges/master/pipeline.svg)](http://gitlab.3kles.local/angular/klesmaterialheader/-/commits/master)-->

# @3kles/kles-material-header

**kles-material-header** is a component library to build `Material Angular Header`.

## Changelog

Check out the [changelog](./CHANGELOG.md) to check all the latest changes.

## Models

### Interfaces

#### ILinkModel

Interface for header links

- <b>path</b>: string -> Redirect path
- <b>active?</b>: boolean -> Set if nav link is active
- <b>label</b>: string -> Label of the nav link
- <b>visible?</b>: boolean -> Set if the nav link is visible

### Components

- <b>KlesMaterialHeaderComponent</b> -> Component to create a header

## Install

### npm

```
npm install @3kles/kles-material-header --save
```

## How to use

In the module
```javascript
import { KlesMaterialHeaderModule } from '@3kles/kles-material-header';
...
@NgModule({
    imports: [
        KlesMaterialHeaderModule,
        ...
    ]
    ...
})
```

Check the [`documentation`](https://doc.3kles-consulting.com) to use component and directive.

## Tests

```
npm install
npm test
```
## License

[`MIT`](./LICENSE.md)
