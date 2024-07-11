const router=require('express').Router()
const citizen=require('./Citizen/citizenController')
const police=require('./Police/policeController')
const crime=require('./Crimes/crimeController')
const complaints=require('./complaints/complaintController')
const privacy =require('./Privacypolicy/privacyController')
const Notifications =require('./Notifications/notificationController')

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
router.post('/viewPoliceByDistrict/:district',police.viewPoliceByDistrict)


//Crime Routes

router.post('/addcrime',crime.upload,crime.addCrime)
router.post('/viewallcrime',crime.viewAllCrimes)
router.post('/viewCrimeById/:id',crime.viewCrimeById)
router.post('/acceptCrimeById/:id',crime.acceptCrimeById)
router.post('/rejectCrimeById/:id',crime.rejectCrimeById)
router.post('/viewCaseByPolicestation',crime.viewCrimeByCitizenId)
router.post('/viewPendingCrimeByPolicStationId/:id',crime.viewPendingCrimeByPolicStationId)
router.post('/viewAprvdCrimeByPolicStationId/:id',crime.viewAprvdCrimeByPolicStationId)
router.post('/viewCrimesbyDisrtict',crime.viewCrimesbyDisrtict)
router.post('/getCaseType',crime.getCaseType)
router.post('/viewcrimeByCitizenId/:id',crime.viewCrimeByCitizenId)
router.post('/searchCrime',crime.searchCrime)


//complaints
router.post('/addComplaint',complaints.addcomplaint)
router.post('/viewAllComplaints',complaints.viewAllcomplaints)
router.post('/viewComplaintById/:id',complaints.viewcomplaintById)
router.post('/deleteComplaintById/:id',complaints.deletecomplaintById)
router.post('/viewcomplaintByCitizenId/:id',complaints.viewcomplaintByCitizenId)


// Privacy Policy
router.post('/addprivacypolicy',privacy.addPrivacy)
router.post('/editprivacypolicy/:id',privacy.updatePrivacy)
router.post('/viewpolicy',privacy.viewAllpolicy)

//Notifications
router.post('/addNotification',Notifications.addNotification)
router.post('/viewAllNotifications',Notifications.viewAllNotifications)
router.post('/viewNotificationByCitizenId/:id',Notifications.viewNotificationByCitizenId)
router.post('/viewNotificationById/:id',Notifications.viewNotificationById)
router.post('/viewNotificationByPliceId/:id',Notifications.viewNotificationByPliceId)
router.post('/viewNotificationsByFilter/:id',Notifications.viewNotificationsByFilter)
router.post('/deleteNotificationById/:id',Notifications.deleteNotificationById)


//For SCRB
router.post('/viewCaseTypesbyFilter',crime.viewCaseTypesbyFilter)
router.post('/viewPSbyDisrtictFilter',crime.viewPSbyDisrtictFilter)

module.exports=router