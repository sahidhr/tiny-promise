# tiny-promise
Simple fast promise for blocking code

## Usage

```javascript
new Promise(function RunBlockingProcess(ok, fail){
    var i;
    for(i = 0; i < 10; i++){}
    i === 10 ? ok('i is equal to 10') : fail('i is not equal to 10')
}).then(function ok(data){
    console.log('i is equal to 10');
}).catch(function reject(data){
    console.log('i is not equal to 10');
});
```
