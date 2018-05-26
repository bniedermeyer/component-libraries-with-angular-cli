# Getting started building component libraries with the Angular CLI

One of the things that's always had a higher barrier of entry in the Angular ecosystem is creating libraries of components that other Angular apps can use. The Angular team published guidance with things like the [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit) and from that the community has created some fantastic tools, like [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library), that make it easier. However, there was never a tool that generated opinionated implementations of the Angular Package Format the same way that developers who used the Angular CLI in their normal project workflows were used to.

With the recent release of version 6 for the Angular CLI, we now have access to tools that can help us build libraries while still taking advantage of other powerful aspects of the CLI, such as schematics, without leaving the workflows we are used to! Let's talk about how you can use the CLI to get started building your own component libraries.

We'll cover:

* [Generating a library with the Angular CLI](#generating-a-library-project-with-the-angular-cli)
* Using schematics to build components for our library
* Creating a sample app that uses our library
* Publishing the library and how to use it/test it locally in other apps.

## Generating a library project with the Angular CLI

First thing's first. Let's setup our project. If you don't have the latest version of the CLI let's grab it from npm.

```bash
$ npm install -g @angular/cli@latest
```

Now let's create a new project with the CLI. Nothing new here.

```bash
$ ng new my-app
```

If you're used to working with the Angular CLI you might notice a couple changes to the project structure you know and love. The most noticable of which is that the old `angular-cli.json` is gone and now replace with a new `angular.json` file. This file is the key to one of the biggest new features in version 6. Now the Angular CLI can create and work with workspaces that contain one or more multiple Angular apps. This `angular.json` file gives you control over the configuration of each of those projects. This is ultimately what makes building of libraries within the CLI possible because we need handle the building of libraries differently than we normally would for normal Angular apps.

Ok - so now we know a bit more about how libraries within CLI pojects work; let's generate the library structure in our project. We do this with the `generate` command just like we would to create a component, service, module, etc...

```bash
$ ng generate library my-new-lib
```
