## Application Details

This application is used to test destinations.
all you need to do is to:

1. create a destination like this:
1. modify the file xs-app.json
1. modify the buttons in the file Worklist.view.xml
1. modify the controller Worklist.controller.js

A destination can be like this:

```
#Password=<< Existing password/certificate removed on export >>
#
#Thu Jun 16 12:17:12 UTC 2022
Description=es5
Type=HTTP
HTML5.Timeout=60000
HTML5.DynamicDestination=true
Authentication=BasicAuthentication
WebIDEUsage=odata_abap,dev_abap
Name=es5
WebIDEEnabled=true
ProxyType=Internet
URL=https\://sapes5.sapdevcenter.com\:443
User=i045523
WebIDESystem=es5
```
