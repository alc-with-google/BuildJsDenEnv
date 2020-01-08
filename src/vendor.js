/* This file contains reference to the vendor libraries we are usng in this project.
This is used by webpack in the
production build only. A separate bundle for vendor code is useful since it's unlikely
to change as often as the application code. So all the library we reference
here will be wrtten to vendor.js so they can be chached untile one of them changes
So basically re-downloading a huge js file anytime a line of
code changes. Any files that arent referenced here will be bundled  into main.js for the
production */

/* eslint-disable no-unused-vars */
import fetch from 'whatwg-fetch';
