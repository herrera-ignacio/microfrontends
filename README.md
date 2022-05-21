# Microfrontends

Notes and experiments on Microfrontends.

- [Microfrontends](#microfrontends)
  - [What are microfrontends?](#what-are-microfrontends)
  - [Advantages](#advantages)
  - [Integration](#integration)
    - [Compile-Time Integration](#compile-time-integration)
      - [Tradeoffs](#tradeoffs)
    - [Run-Time Integration](#run-time-integration)
      - [Tradeoffs](#tradeoffs-1)
    - [Server Integration](#server-integration)

## What are microfrontends?

* Divide a _monolithic_ app into multiple, smaller, more manageable parts.
* Each part is responsible for a distinct feature.

## Advantages

* __Velocity__
  * Feature teams con work in isolation.
  * Each smaller part is easier to understand and make changes to.
* __Time to Market__: Features can be delivered isolately.
* __Ownership__: Enforces a clear separation of responsibilities.

## Integration

### Compile-Time Integration

__Before__ container gets loaded in the browser, it gets access to components source code.

![](2022-05-20-22-49-49.png)

1. Engineering team develops the component.
2. Time to deploy! Publish the component as an NPM package.
3. Container team installs the component as a dependency.
4. Container team builds their app.
5. Output bundle that includes all the code for the component.

#### Tradeoffs

* :+1: Easy to setup & understand.
* :-1: Container has to be re-deployed every time component is updated.
* :-1: Tempting to tightly couple the container & component together.

### Run-Time Integration

__After__ container gets loaded in the browser, it gets access to components source code.

> _Webpack Module Federation_ is an example. 

1. Engineering team develops the component.
2. Time to deploy! Code deployed at `myapp.com/components/component.js`.
3. User navigates to `myapp.com` , Container app is loaded.
4. Container app fetches `component.js` and executes it.

#### Tradeoffs

* :+1: Component can be deployed independently at any time.
* :+1: Different versions of the component can be deployed and the Container can decide which one to use.
* :-1: Tooling + setup is far more complicated.

### Server Integration

While sending down JS to load up the container, a server decides whether or not to include components source code.
