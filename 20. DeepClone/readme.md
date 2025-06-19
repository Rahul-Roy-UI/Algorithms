```
if (obj.hasOwnProperty(key))

```

Above code is used to filter out inherited properties from the prototype chain.

This is important because the for...in loop iterates over all enumerable properties, including those inherited from an object's prototype.

By using hasOwnProperty, we ensure that only the object's own properties are cloned, preventing unexpected behavior or bugs due to cloning prototype properties.

✅ Best Practice: Always include hasOwnProperty when using for...in to loop through object keys.