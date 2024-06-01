const Police= require("./policeSchema")
const secret = 'police';
const jwt=require('jsonwebtoken')


const registerPolice = async (req, res) => {
    try{
        const { policestationname, policestationcode, stationchargeofficers, totalofficers, password, address, contact, district, email, confirmpassword} = req.body
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
            confirmpassword
        });
console.log(policestationcode);
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

module.exports={registerPolice}