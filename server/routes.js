const router=require('express').Router()
const citizen=require('./Citizen/citizenController')

//citizen routes
router.post('/registerCitizen', citizen.registerCitizen);
router.post('/viewCitizenById/:id', citizen.viewCitizenById);
router.post('/editCitizenById/:id', citizen.editCitizenById);
router.post('/forgotPassword', citizen.forgotPassword);
router.post('/viewCitizens', citizen.viewCitizens); 
router.post('/deleteCitizenById/:id', citizen.deleteCitizenById);
router.post('/resetPassword/:id', citizen.resetPassword);
router.post('/loginCitizen', citizen.login);
router.post('/requireAuthCitizen', citizen.requireAuth);


module.exports=router