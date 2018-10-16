<template>
    <el-table :data="tableData" :default-sort = "{prop: 'time'}">
        <el-table-column prop="title" label="文章标题"></el-table-column>
        <el-table-column prop="time" label="创建时间" align="center" width="200"></el-table-column>
        <el-table-column prop="type" label="类别" align="center" width="200"></el-table-column>
        <el-table-column prop="author" label="作者" align="center" width="200"></el-table-column>
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
            tableData: this.data
        }
    },
    created() {
        // 请求数据
        this.getArticleData()
    },
    methods: {
        getArticleData() {
            // 拿路由参数 根据参数获取不同table this.$route.params.type
            const urlParam = this.$route.params.type ? { 'type': this.$route.params.type } : {}
            this.$api.getArticleData(urlParam).then(res => {
                res = JSON.parse(res)
                if (res.code == 0){
                    this.tableData = res.data
                }
            })
        },
        updateArticleList() {
            
        }
    },
}
</script>
<style lang="less" scoped>

</style>
