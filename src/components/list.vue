<template>
    <div>
        <el-table :data="tableData" :default-sort="{prop: 'time'}" ref="table" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="title" label="文章标题"></el-table-column>
            <el-table-column prop="time" label="创建时间" align="center" width="200"></el-table-column>
            <el-table-column prop="type" label="类别" align="center" width="200"></el-table-column>
            <el-table-column prop="author" label="作者" align="center" width="200"></el-table-column>
            <el-table-column label="操作" align="center" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleUpdate(scope.$index, scope.row)" :disabled="isShowBtn">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" :disabled="isShowBtn">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <router-link :to="'/articleform'"><el-button>新增</el-button></router-link>
    </div>
</template>
<script>
import articleForm from '@/components/article-form.vue'
export default {
    props: {
        data: Array,
        type: String
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        // 此方法必须使用子路由才会生效
        "$route": "getArticleData",
    },
    data() {
        return {
            tableData: this.data,
            urlParam: {},
            delArr: [],
        }
    },
    computed: {
        // 不能用箭头函数 否则this指向不对
        isShowBtn: function() {
            return this.delArr.length == 0 ? false : true
        }
    },
    created() {
        // 请求数据
        this.getArticleData()
    },
    methods: {
        // 获取列表数据
        getArticleData() {
            // 拿路由参数 根据参数获取不同table this.$route.params.type
            this.urlParam = this.$route.params.type ? { 'type': this.$route.params.type } : {}
            this.$api.getArticleData(this.urlParam).then(res => {
                res = JSON.parse(res)
                if (res.code == 0) {
                    this.tableData = res.data
                }
            })
        },
        // 逐行编辑
        handleUpdate(index, row) {
            this.$store.commit('setArticleData', row)
            this.$router.push('/articleform')
        },
        // 逐行删除
        handleDelete(index, row) {
            this.$api.deleteArticleData([row._id]).then(res => {
                res = JSON.parse(res)
                if (res.code == 0) {
                    this.getArticleData(this.urlParam)
                } 
            })
        },
        // 多选框变化
        handleSelectionChange(val) {
            this.delArr = val.map(element => element._id)
        },
    },
    components: {
        articleForm
    }
}
</script>
<style lang="less" scoped>

</style>
