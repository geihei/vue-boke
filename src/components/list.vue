<template>
    <div>
        <el-table :data="tableData" :default-sort="{prop: 'time'}" ref="table" @selection-change="handleSelectionChange" height="578">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="title" label="文章标题"></el-table-column>
            <el-table-column prop="time" label="创建时间" align="center" width="200"></el-table-column>
            <el-table-column prop="type" label="类别" align="center" width="200"></el-table-column>
            <el-table-column prop="author" label="作者" align="center" width="200"></el-table-column>
            <el-table-column label="操作" align="center" width="300">
                <template slot-scope="scope">
                    <el-button size="mini" type="info" @click="showDetail(scope.row._id)" :disabled="isShowBtn">查看详情</el-button>
                    <el-button size="mini" type="primary" @click="setArticledata(scope.row)" :disabled="isShowBtn">编辑</el-button>
                    <el-button size="mini" type="danger" @click="deleteArticle(scope.row._id)" :disabled="isShowBtn">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: right">
            <el-button @click="setArticledata" type="primary" style="margin-top: 20px">新增</el-button>
            <el-button @click="deleteArticle(delArr)" type="danger" :disabled="!isShowBtn">删除选中</el-button>
        </div>
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
        // 如果路由有变化，会再次执行该方法 此方法必须使用子路由才会生效
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
        // 根据路由参数获取不同list
        getArticleData() {
            this.urlParam = this.$route.params.type ? { 'type': this.$route.params.type } : {}
            this.$api.getArticleData(this.urlParam).then(res => {
                if (res.code == 0) {
                    this.tableData = res.data
                } else {
                    this.$message.error('获取列表失败')
                }
            })
        },
        // 新增或者修改
        setArticledata(data = {}) {
            this.$store.commit('setArticleData', data)
            this.$router.replace({
                name: "articleform",
                query: { redirect: this.$router.currentRoute.fullPath }
            })
        },
        // 删除文章
        deleteArticle(delParam = []) {
            this.$confirm('此操作将删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$api.deleteArticleData(delParam).then(res => {
                    if (res.code == 0) {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        })
                        this.getArticleData(this.urlParam)
                    } else {
                        this.$message.error('删除失败!')
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })        
            })
        },
        // 多选框变化
        handleSelectionChange(val) {
            this.delArr = val.map(element => element._id)
        },
        showDetail(id) {
            this.$router.push('/articledetail/' + id)
        }
    },
    components: {
        articleForm
    }
}
</script>
<style lang="less" scoped>

</style>
