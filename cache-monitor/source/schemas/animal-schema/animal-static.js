
module.exports = {
    getAll: function(){
        return this.find()
            .exec()
            .then(result => result || Promise.reject('error not found'))
    }
}