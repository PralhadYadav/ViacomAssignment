const data = require('../model/data')

exports.getCompanyData = async (req, res) => {
    try {
        res.status(200).send({
            data: data.companyDescr
        })
    } catch (e) {
        console.log('Error ', e)
        res.status(500).send({
            data: 'Something Went Wrong'
        })
    }
}


exports.getCities = async (req, res) => {
    try {
        return res.status(200).send({
            data: data.cities
        })
    } catch (e) {
        console.log('Error ', e)
        return res.status(500).send({
            data: 'Something Went Wrong'
        })
    }
}