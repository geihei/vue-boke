const WorkModel = require('../models/work')

const tableMethods = {
    async getData() {
        let data = await WorkModel.queryTableData()
        // data = data.toObject()
        return data
    }
}


module.exports = tableMethods