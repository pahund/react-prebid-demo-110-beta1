# react-prebid-110-beta1

When running locally, use an URL like this by setting up your `hosts` file accordingly, `vi /private/etc/hosts`.

* http://motortalk.devlocal:3000

(using localhost directly doesn't work because setting cookies on localhost
by third party is not allowed)

For debugging:

* http://motortalk.devlocal:3000/?pbjs_debug=true

Using “traditional approach” to render ad (disable react-prebid and the React app):

* http://motortalk.devlocal:3000/?react-prebid=false

When using Firefox, also make sure it doesn't block any tracking (click on the chevron icon next to the address).
