// crimeController.js
const Crime = require("./crimeSchema");
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload"); // Ensure "upload" directory exists and is writable
    },
    filename: function (req, file, cb) {
        const uniquePrefix = 'prefix-';
        const originalname = file.originalname;
        const extension = originalname.split('.').pop();
        const filename = uniquePrefix + originalname.substring(0, originalname.lastIndexOf('.')) + '-' + Date.now() + '.' + extension;
        cb(null, filename);
    },
});

//   const upload = multer({ storage: storage });

const upload = multer({ storage: storage }).array("files", 5)
// Add a new crime
const addCrime = async (req, res) => {
    console.log('req',req);
    try {
        // Handle file upload using Multer


        // Prepare evidence files array from uploaded files
        const evidenceFiles = req.files.map((file) => ({
            file: file
            // filetype: file.mimetype,
            // filepath: file.path,
        }));

        const newCrime = new Crime({
            ...req.body,
            evidenceFiles: evidenceFiles,
        });

        // Save new crime to database
        newCrime
            .save()
            .then((data) => {
                res.json({
                    status: 200,
                    msg: "Crime added successfully",
                    data: data,
                });
            })
            .catch((err) => {
                res.json({
                    status: 500,
                    msg: "Crime not added",
                    error: err,
                });
            });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};




const getCaseType = (req, res) => {
    console.log("p");
    const keywords = {
        Theft: [
            "steal",
            "robbery",
            "burglary",
            "larceny",
            "shoplifting",
            "pickpocketing",
            "heist",
            "snatch",
            "theft",
            "stolen",
            "pilfer",
            "purloin"
        ],
        Assault: [
            "attack",
            "battery",
            "hit",
            "strike",
            "abuse",
            "violence",
            "assault",
            "mugging",
            "beating",
            "punch",
            "fight",
            "injury"
        ],
        Vandalism: [
            "damage",
            "deface",
            "graffiti",
            "destruction",
            "sabotage",
            "smash",
            "wreck",
            "vandalize",
            "vandalism",
            "ruin",
            "break",
            "destroy"
        ],
        MissingPerson: [
            "disappear",
            "lost",
            "abduct",
            "kidnap",
            "gone",
            "unfound",
            "missing",
            "person",
            "search",
            "rescue",
            "missing person",
            "absent"
        ],
        DomesticViolence: [
            "abuse",
            "domestic",
            "violence",
            "spouse",
            "partner",
            "intimate",
            "family",
            "assault",
            "domestic abuse",
            "domestic violence",
            "battering",
            "coercion"
        ],
        Fraud: [
            "scam",
            "deceit",
            "cheat",
            "swindle",
            "embezzle",
            "fake",
            "fraud",
            "con",
            "trick",
            "hoax",
            "fraudulent",
            "misrepresentation"
        ],
        Others: [
            "other",
            "miscellaneous",
            "various",
            "different",
            "additional",
            "unclassified",
            "uncategorized",
            "other crimes",
            "misc",
            "varied",
            "assorted",
            "diverse"
        ]
    };

    const suggestCaseType = () => {
        let arr = [];
        const lowerDescription = req.body.caseDescription.toLowerCase();
        console.log("p");
        const caseTypes = Object.keys(keywords);

        for (const type of caseTypes) {
            const words = keywords[type];
            for (const word of words) {
                if (lowerDescription.includes(word)) {
                    console.log(type);
                    if (!arr.includes(type)) arr.push(type);
                    // return type;
                }
            }
        }

        return arr; // Default if no keywords match
    };
    let data = [];
    data = suggestCaseType();
    res.json({
        status: 200,
        data: data,
    });
};

// Delete a crime by ID
const deleteCrimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCrime = await Crime.findByIdAndDelete(id);
        if (!deletedCrime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime deleted successfully",
            data: deletedCrime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View a crime by ID
const acceptCrimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const crime = await Crime.findByIdAndUpdate({ _id: id }, { approvalStatus: 'approved' })
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data Approved successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// View a crime by ID
const rejectCrimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const crime = await Crime.findByIdAndUpdate({ _id: id }, { approvalStatus: 'rejected' })
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data Rejected successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// View a crime by ID
const viewCrimeById = async (req, res) => {
    try {
        const { id } = req.params;
        const crime = await Crime.findById(id).populate('psId').populate('citizenId')
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data obtained successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// View all crimes
const viewAllCrimes = (req, res) => {
    Crime.find().populate('psId')
        .exec()
        .then(data => {
            if (data.length > 0) {
                res.json({
                    status: 200,
                    msg: "Crimes data obtained successfully",
                    data: data
                });
            } else {
                res.json({
                    status: 200,
                    msg: "No crimes data found",
                    data: []
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

const viewAprvdCrimeByPolicStationId = async (req, res) => {
    try {
        const { id } = req.params;
        const crime = await Crime.find({ psId: id, approvalStatus: 'approved' }).populate('psId').populate('citizenId')
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data obtained successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const viewCrimesbyDisrtict = async (req, res) => {
    try {

        const crime = await Crime.find({ district: req.body.district }).populate('psId').populate('citizenId')
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data obtained successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const viewPendingCrimeByPolicStationId = async (req, res) => {
    try {
        const { id } = req.params;
        const crime = await Crime.find({ psId: id, approvalStatus: 'pending' }).populate('psId').populate('citizenId')
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data obtained successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// View a crime by ID
const viewCrimeByCitizenId = async (req, res) => {
    try {
        const { id } = req.params;
        const crime = await Crime.find({ citizenId: id }).populate('psId')
        if (!crime) {
            return res.json({
                status: 404,
                msg: "Crime not found",
                data: null
            });
        }
        res.json({
            status: 200,
            msg: "Crime data obtained successfully",
            data: crime
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    addCrime,
    deleteCrimeById,
    viewCrimeById,
    viewAllCrimes,
    viewAprvdCrimeByPolicStationId,
    viewPendingCrimeByPolicStationId,
    acceptCrimeById,
    rejectCrimeById,
    viewCrimeByCitizenId,
    viewCrimesbyDisrtict,
    upload,
    getCaseType
};