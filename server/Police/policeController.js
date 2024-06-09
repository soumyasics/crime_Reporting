const Police= require("./policeSchema")
const secret = 'police';
const jwt=require('jsonwebtoken')
const multer=require('multer')
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
      cb(null, "./upload");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }); 
  
  const upload = multer({ storage: storage }).single("idProof");
const registerPolice = async (req, res) => {
    try{
        const { policestationname, policestationcode, stationchargeofficers, totalofficers, password, address, contact, district, email} = req.body
    console.log(req.body.policestationcode);
        const newPolice = new Police({
            policestationname,
            policestationcode,
            stationchargeofficers,
            totalofficers,
            password,
            address,
            contact,
            district,
            email,
        idProof:req.file   });

        let existingPolice = await Police.findOne({policestationcode});
        console.log("es",existingPolice);
        if(existingPolice){
            return res.json ({
                status : 409,
                msg : "PoliceStation Code Already Registered With Us !!",
                data : null
            })
        }
        let exsitingPolice1 = await Police . findOne ({contact});
        if(exsitingPolice1){
            return res.json ({
                status : 409,
                msg : "Contatct Already Registered With US !!",
                data : null
            })
        }
        let exsitingPolic2 = await Police . findOne ({email});
        if(exsitingPolic2){
            return res.json({
                status : 409,
                msg : "Email Already Registered With Us !!",
                data : null
            })
        }
        await newPolice.save()
            .then (data => {
                return res.json({
                    status : 200,
                    msg : "Inserted Successfully",
                    data : data
                });
            })
            .catch (err => {
                if (err.code == 11000){
                    return res.json ({
                        status : 409,
                        msg : "Email already in use",
                        data : err
                    });
                }
                return res.json ({
                    status : 500,
                    msg : "Data not inserted",
                    data : err
                });
            });
    }
    catch (error) {
         res.status (500).json ({message : error.message});
    }
};

// View all Polices
const viewPolices = (req, res) => {
    Police.find()
        .exec()
        .then(data => {
            if (data.length > 0) {
                res.json({
                    status: 200,
                    msg: "Data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 200,
                    msg: "No Data obtained"
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not obtained",
                Error: err
            });
        });
};

// Update Police by ID
const editPoliceById =async (req, res) => {
    let flag=0
    // const { firstname, lastname, contact,gender,  dob, email, housename, street, state, nationality, pincode } = req.body;
    const { policestationname, policestationcode, stationchargeofficers, totalofficers, password, address, contact, district, email} = req.body
    let existingPolice = await Police.find({ contact });
    let PoliceData = await Police.findById({  _id: req.params.id  });
await existingPolice.map(x=>{
    if (x.contact!=PoliceData.contact) {
      flag=1        
    }
    
})

if(flag==0){
   
   await Police.findByIdAndUpdate({ _id: req.params.id }, {
    policestationname,
    policestationcode,
    stationchargeofficers,
    totalofficers,
    password,
    address,
    contact,
    district,
    email
    })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Updated successfully"
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not Updated",
                Error: err
            });
        });
    }
    else{
        return res.json({
            status: 409,
            msg: "contact Number Already Registered With Us !!",
            data: null
        });
    }
};

// View Police by ID
const viewPoliceById = (req, res) => {
    Police.findById({ _id: req.params.id })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data obtained successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No Data obtained",
                Error: err
            });
        });
};

// Delete Police by ID
const deletePoliceById = (req, res) => {
    Police.findByIdAndDelete({ _id: req.params.id })
        .exec()
        .then(data => {
            res.json({
                status: 200,
                msg: "Data removed successfully",
                data: data
            });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "No Data obtained",
                Error: err
            });
        });
};

// Forgot Password for Police
const forgotPassword = (req, res) => {
    Police.findOneAndUpdate({ email: req.body.email }, {
        password: req.body.password
    })
        .exec()
        .then(data => {
            if (data != null)
                res.json({
                    status: 200,
                    msg: "Updated successfully"
                });
            else
                res.json({
                    status: 500,
                    msg: "User Not Found"
                });
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not Updated",
                Error: err
            });
        });
};

// Reset Password for Police
const resetPassword = async (req, res) => {
    let pwdMatch = false;

    await Police.findById({ _id: req.params.id })
        .exec()
        .then(data => {
            if (data.password === req.body.oldpassword)
                pwdMatch = true;
        })
        .catch(err => {
            res.status(500).json({
                status: 500,
                msg: "Data not Updated",
                Error: err
            });
        });

    if (pwdMatch) {
        await Police.findByIdAndUpdate({ _id: req.params.id }, {
            password: req.body.newpassword
        })
            .exec()
            .then(data => {
                if (data != null)
                    res.json({
                        status: 200,
                        msg: "Updated successfully"
                    });
                else
                    res.json({
                        status: 500,
                        msg: "User Not Found"
                    });
            })
            .catch(err => {
                res.status(500).json({
                    status: 500,
                    msg: "Data not Updated",
                    Error: err
                });
            });
    } else {
        res.json({
            status: 405,
            msg: "Your Old Password doesn't match"
        });
    }
};

const createToken = (user) => {
    return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
  };
  
  const login = (req, res) => {
    const { email, password } = req.body;
  
    Police.findOne({ email }).then(user => {
     
  
      if (!user) {
        return res.json({status:405,msg: 'User not found' });
      }
  
        if (user.password!=password) {
          return res.json({ status:405,msg: 'Password Mismatch !!' });
        }
  
      
        const token = createToken(user);
  
        res.json({
            status:200,
            data:user, 
            token });
     
    }).catch(err=>{
     console.log(err);
            return res.json({status:500,msg: 'Something went wrong' });
          
    })
  };
     
  //validate
  
  const requireAuth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
  
    console.log("t1",token);
    console.log("secret",secret);
    if (!token) {
      return res.json({status:401,msg: 'Unauthorized' });
    }
    jwt.verify(token, secret, (err, decodedToken) => {
      console.log(decodedToken);
      if (err) {
        return res.json({status:401, messagge: 'Unauthorized' ,err:err});
      }
  
      req.user = decodedToken.userId;
      next();
      return res.json({ status:200,msg: 'ok' ,user:decodedToken.userId});
    });
    console.log(req.user);
  };
  
//update profile completed
const viewallPolicesforadmin = (req, res) => {
    Police.find({ isactive:'pending'})
    .exec()
        .then((result) => {
            res.json({
                status: 200,
                msg: result
            })
        })
        .catch((err) => {
            res.json({
                status: 500,
                msg: err
            })
            console.log(err);
        })
  }
  //Admin view Police request completed
  const acceptPoliceById = (req, res) => {
    Police.findByIdAndUpdate({ _id: req.params.id }, { isactive: 'accepted' }).exec()
        .then((result) => {
            res.json({
                status: 200,
                data: result,
                msg: 'data obtained'
            })
        })
        .catch(err => {
            res.json({
                status: 500,
                msg: 'Error in API',
                err: err
            })
        })
  
  }
  //Police accept completed
  
  const rejectPoliceById =async (req, res) => {
    await Police.findByIdAndUpdate({ _id: req.params.id },{isActive:'rejected'}).exec()
        .then((result) => {
            res.json({
                status: 200,
                data: result,
                msg: 'data deleted'
            })
        })
        .catch(err => {
            res.json({
                status: 500,
                msg: 'Error in API',
                err: err
            })
        })
  
      }
module.exports={
    registerPolice,
    viewPolices,
    editPoliceById,
    viewPoliceById,
    deletePoliceById,
    forgotPassword,
    resetPassword,
    login,
    requireAuth,
upload,
viewallPolicesforadmin,
acceptPoliceById,
rejectPoliceById

}