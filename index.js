function TinyPromise(promisecb){

    function resolution(){ 
            var data = null;
            return {
                cb: function(value){
                    data = value;
                },
                getData: function(){
                    return data;
                }
            }
        };
    var resolve = resolution();
    var reject  = resolution();
    promisecb(resolve.cb, reject.cb);
    return {
        then: function(ok){
            setTimeout(resolve.getData() ? ok(resolve.getData()) : null,0);
            return this;
        },
        catch: function(no){
            setTimeout(!resolve.getData() ? no(reject.getData()) : null,0);
            return this;
        }
    }
 }

 module.exports = TinyPromise;