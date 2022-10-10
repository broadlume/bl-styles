Build
----------
- Before you publish you will need to build the files. <br>
The JS and CSS folders are copied then minified using grunt thne moved to the dist folder.<br>
the dist folder will contain all the optimized files
- To run the build command type **npm build** in the console


Publish
----------

- First you need to type: **npm login**
- Then login with your NPM creditials
- Once logged in you can now publish
- To publish package type **npm run patch-publish**. This will increment the release and publish the changes to npm
 