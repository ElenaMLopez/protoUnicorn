# protoUnicorn

A magic JavaScript utility library created by Open Source Weekends for hackathons and other special contexts.

### This is just the beginning of a long journey

![unicorn_picture](https://s-media-cache-ak0.pinimg.com/736x/0e/3d/f6/0e3df60cabeec611be2872b82db57458.jpg)

### Join the project

You con join the project directly from Slack...

- [Auto-Invitation to Open Source Weekends](invitations-osweekends.herokuapp.com)

Or you can contact us directly...

- [Ulises Gascón](https://github.com/ulisesGascon)
- [Carlos Hernandez](https://github.com/codingcarlos)
- [Jose Manuel Gallego]("https://github.com/Josheriff)

## Documentation

### Gulp Tasks

- **lint** Linter
- **test** Unit testing
- **jsdoc** JSDoc creation/update

### Use example

- Option 1: Add it as a prototype with all the features
```javascript
require("./protoUnicorn")();
```

- Option 2: Add only few features
```javascript
var protoUnicorn = require("./protoUnicorn")({
    allow: ["Date", "Math", "Object","Array" ]
});
```


- Option 3: Add all features except some items
```javascript
var protoUnicorn = require("./protoUnicorn")({
    notAllow: ["Math", "Date"]
})
```