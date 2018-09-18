
function VehicleServiceImpl(app) {
  this._app = app;
  this._dao = new app.persistence.VehicleMongoDao();
}
VehicleServiceImpl.prototype.findAll = function (){
                let posts = this._dao.findAll();
                return posts;
            }

VehicleServiceImpl.prototype.findById = function (id, callback) {
                return this._dao.findById(id, function (erro, result){
                    if(erro){
                        console.log('api-vehicle-> dao error=>', erro)
                        res.status(500).send(erro)
                        return
                    }
                    callback(null, result)
                    return;
                });
            }

VehicleServiceImpl.prototype.loadDataForTest = function (callback) {
                return this._dao.loadDataForTest(function (erro, result){
                    if(erro){
                        console.log('api-vehicle-> dao error=>', erro)
                        res.status(500).send(erro)
                        return
                    }
                    callback(null, result)
                    return;
                });
            }

VehicleServiceImpl.prototype.findDataForTest = function (callback) {
                return this._dao.findDataForTest(function (erro, result){
                    if(erro){
                        console.log('api-vehicle-> dao error=>', erro)
                        res.status(500).send(erro)
                        return
                    }
                    callback(null, result)
                    return;
                });
            }


module.exports = ()=>VehicleServiceImpl