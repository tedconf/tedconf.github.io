# TED Open Source

This is the source code for tedconf.github.io, an index of TED's open source projects.

This is an Ember app, and the build is hosted on GitHub Pages. The source is on the `source` branch, and `master` holds the static distrubtion. This is how GitHub Pages is set up to host organization pages.

**Developing**

Checkout `source`, then run `ember s` to serve and develop locally.

**Adding your project**

Add your project + details to the `groups` property to [the application controller](https://github.com/tedconf/tedconf.github.io/blob/source/app/pods/application/controller.js).

**Deploying**

When you're ready to deploy your changes, make sure you're on the `source` branch, then run

```sh
$ ember github-pages:commit --branch master --message 'Deploying to master'
# The ember app will build, then you'll see this message:
Done. All that's left is to git push the master branch.
$ git push origin master
```

and in not too long, http://tedconf.github.io/ should be updated with your changes!
