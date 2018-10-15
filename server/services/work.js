const WorkModel = require('../models/work')

const tableMethods = {
    async getData(type) {
        let data = await WorkModel.queryTableData(type)
        return data
    }
}


module.exports = tableMethods