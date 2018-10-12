<template>
    <el-table :data="tableData" :default-sort = "{prop: 'time'}">
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column prop="time" label="创建时间" align="center"></el-table-column>
        <el-table-column prop="author" label="作者" align="center"></el-table-column>
    </el-table>
</template>
<script>
export default {
    props: {
        data: Array,
        type: String
    },
    data() {
        return {
            tableData: this.data
        }
    },
    created() {
        // 请求数据
        this.getAllTableData()
    },
    methods: {
        getAllTableData() {
            this.$api.getAllTableData().then(res => {
                res = JSON.parse(res)
                if(res.code == 0){
                    this.tableData = res.data
                }
            })
        }
    },
}
</script>
<style lang="less" scoped>

</style>
