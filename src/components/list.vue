<template>
    <el-table :data="tableData" :default-sort="{prop: 'time'}" ref="table" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column prop="time" label="创建时间" align="center" width="200"></el-table-column>
        <el-table-column prop="type" label="类别" align="center" width="200"></el-table-column>
        <el-table-column prop="author" label="作者" align="center" width="200"></el-table-column>
        <el-table-column label="操作" align="center" width="200">
            <template slot-scope="scope">
                <el-button size="mini" @click="updateArticleList(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
export default {
    props: {
        data: Array,
        type: String
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        "$route": "getArticleData"
    },
    data() {
        return {
            tableData: this.data,
            urlParam: {},
            delArr: []
        }
    },
    computed: {

    },
    created() {
        // 请求数据
        // 拿路由参数 根据参数获取不同table this.$route.params.type
        this.urlParam = this.$route.params.type ? { 'type': this.$route.params.type } : {}
        this.getArticleData(this.urlParam)
    },
    methods: {
        getArticleData(param) {
            this.$api.getArticleData(param).then(res => {
                res = JSON.parse(res)
                if (res.code == 0) {
                    this.tableData = res.data
                }
            })
        },
        updateArticleList() {

        },
        deleteArticleData() {

        },
        handleDelete(index, row) {
            this.$api.deleteArticleData([row._id]).then(res => {
                res = JSON.parse(res)
                if (res.code == 0) {
                    this.getArticleData(this.urlParam)
                } 
            })
        },
        handleSelectionChange(val) {
            this.delArr = val.map(element => element._id)
        },
        setCurrent(row) {
            this.$refs.table.setCurrentRow(row);
        },
    },
}
</script>
<style lang="less" scoped>

</style>
