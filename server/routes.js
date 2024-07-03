const router=require('express').Router()
const citizen=require('./Citizen/citizenController')
const police=require('./Police/policeController')
const crime=require('./Crime/crimeController')

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

//police routes
router.post('/policeregister',police.upload,police.registerPolice)
router.post('/loginPolice',police.login)
router.post('/forgotPasswordPolice',police.forgotPassword)
router.post('/resetPasswordloginPolice/:id',police.resetPassword)
router.post('/editPoliceById/:id',police.editPoliceById)
router.post('/deletePoliceById/:id',police.deletePoliceById)
router.post('/viewallPolicesforadmin',police.viewallPolicesforadmin)
router.post('/acceptPoliceById/:id',police.acceptPoliceById)
router.post('/rejectPoliceById/:id',police.rejectPoliceById)
router.post('/activatePoliceById/:id',police.activatePoliceById)
router.post('/deactivatePoliceById/:id',police.deactivatePoliceById)
router.post('/viewPolices',police.viewPolices)
router.post('/viewpolice/:id',police.viewPoliceById)


//Crime Routes
router.post('/addcrime',crime.upload,crime.addCrime)
router.post('/viewallcrime',crime.viewCrime)
router.post('/viewCrimeById/:id',crime.viewCrimeById)
router.post('/editCrimeById/:id',crime.editCaseById) // Not Working
router.post('/acceptCrimeById/:id',crime.acceptCrimeById)
router.post('/rejectCrimeById/:id',crime.rejectCrimeById)


module.exports=router