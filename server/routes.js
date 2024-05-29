const router=require('express').Router()
const citizen=require('./Citizen/citizenController')

//citizen routes
router.post('/registerCitizen', citizen.registerCitizen);//done
router.post('/viewCitizenById/:id', citizen.viewCitizenById);//done
router.post('/editCitizenById/:id', citizen.editCitizenById);//done
router.post('/forgotPassword', citizen.forgotPassword);//done
router.post('/viewCitizens', citizen.viewCitizens); 
router.post('/deleteCitizenById/:id', citizen.deleteCitizenById);
router.post('/resetPassword/:id', citizen.resetPassword);
router.post('/loginCitizen', citizen.login);
router.post('/requireAuthCitizen', citizen.requireAuth);


module.exports=router