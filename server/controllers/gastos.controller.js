const Gasto=require('../models/gastos');
const gastosController={};



gastosController.getGastos= async(req, res)=>
{
    const gastos= await Gasto.find();
    res.json(gastos);
    //res.json({status: 'gastos...'});
    
}


gastosController.createGastos= async(req,res)=>{
    const gasto=new Gasto({
            tipo: req.body.tipo,
            ruc: req.body.ruc,
            empresa:req.body.empresa,
            monto:req.body.monto
        });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
}

gastosController.getGasto=async(req,res)=>{
    console.log(req.params.id);
    const gasto= await Gasto.findById(req.params.id);
   // res.json('status: recibido');
    res.json(gasto);
}

gastosController.editGasto=async(req,res)=>{
    const {_id}=req.params;
    const gasto={
        tipo: req.body.tipo,
        ruc: req.body.ruc,
        empresa: req.body.empresa,
        monto: req.body.monto
    };
    await Gasto.findByIdAndUpdate(_id, {$set:gasto},{new: true});
    res.json('status: Gasto actualizado');
}

gastosController.deleteGasto=async(req,res)=>{
    await Gasto.findByIdAndRemove(req.params.id);
    res.json('status: Gasto borrado');


}

module.exports=gastosController;