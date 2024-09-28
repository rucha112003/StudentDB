const studmodal = require('./modal')

const adduser = async (req, res) => {

    const { fname, lname, roll_no } = req.body
    try {
        const data = new studmodal({
            fname, lname, roll_no
        })
        const userdata = await data.save()
        res.send({ userdata })
    }
    catch (err) {
        res.send(err)
    }
}

const getdata = async (req, res) => {
    try {
        const data = await studmodal.find()
        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err)
    }
}
const updatedata = async (req, res) => {
    const { fname, lname, roll_no } = req.body
    try {
        const fname = req.params.fname
        const data = await studmodal.updateOne({
            $set: { fname, lname, roll_no }
        })
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "updated sucssesfully" })
        } else {
            res.status(200).send({ msg: " not updated sucssesfully" })

        }
    }
    catch (err) {
        {
            res.status(400).send(err)
        }
    }
}

const deleteuser = async (req, res) => {
    try {
        const data = await studmodal.deleteOne({ fname: req.params.fname });

        if (data.deletedCount > 0) {
            res.status(404).send({ msg: "User  deleted successfully" })
        } else {
            res.status(404).send({ msg: "User not found or not deleted successfully" });
        }
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { fname } = req.body;
        const user = await studmodal.findOne({ fname }); 
        
        if (!user) {
            res.status(401).send({ msg: "User not found" });
        } else {
            res.status(200).send({ msg: "Login successful" }); 
        }
    } catch (error) {
        res.status(400).send(error);
    }
};


module.exports = { adduser, getdata, updatedata,deleteuser,login }