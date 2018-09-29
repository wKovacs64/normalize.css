# Releasing

1.  Update the version in `package.json`.

         # Patch
         semver -i patch 8.0.0 # 8.0.1

         # Minor
         semver -i minor 8.0.0 # 8.1.0

         # Major
         semver -i major 8.0.0 # 9.0.0

1.  Update the `CHANGELOG.md` for the impending release.
1.  `git commit -am "X.Y.Z"` (where X.Y.Z is the new version)
1.  `npm publish --access=public` (ensure this succeeds before proceeding)
1.  `git tag vX.Y.Z` (where X.Y.Z is the new version)
1.  `git push origin master --tags`
