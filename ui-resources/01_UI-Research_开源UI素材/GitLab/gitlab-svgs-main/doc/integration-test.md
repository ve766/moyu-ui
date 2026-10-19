# Testing `@gitlab/svgs` integration

To test some of `@gitlab/svgs` changes before they are actually released, it is possible to link a
local development build to the project you want to test it against. Here's how you'd do it:

1. In the `gitlab-svgs` directory, checkout the branch you want to verify.
1. Run `yarn && yarn svg` to build the production-ready SVGs.
1. Run `yarn link` to create a link to your local package.
1. In the project you want to test your changes against, run `yarn link "@gitlab/svgs"` and start
   the app.

Once you're done testing, make sure to run `yarn unlink  "@gitlab/svgs" && yarn --force` in the
consuming project to revert to using the official build of `@gitlab/svgs`.
