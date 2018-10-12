<template>
    <el-container style="height: 100%;">
        <left-bar></left-bar>
        <el-container class="el_container">
            <common-header></common-header>
            <el-main>
                <transition>
                    <keep-alive>
                        <el-table :data="tableData">
                            <el-table-column prop="title" label="文章标题"></el-table-column>
                            <el-table-column prop="time" label="创建时间" align="center" sortable="true"></el-table-column>
                            <el-table-column prop="author" label="作者" align="center" sortable="true"></el-table-column>
                        </el-table>
                    </keep-alive>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import leftBar from '../components/leftbar.vue'
import commonHeader from '../components/header.vue'
export default {
    data() {
        return {
            tableData: [
                {title: 'title1', time: '2018-10-11', author: 'geihei'},
                {title: 'title1', time: '2018-10-12', author: 'geihei'},
                {title: 'title1', time: '2018-10-13', author: 'geihei'},
                {title: 'title1', time: '2018-10-14', author: 'geihei'},
                {title: 'title1', time: '2018-10-15', author: 'geihei'},
            ]
        }
    },
    created() {
        // 请求数据
        this.getAllTableData()
    },
    methods: {
        getAllTableData() {
            this.$api.getAllTableData(res => {
                res = JSON.parse(res)
                console.log(res)
                this.tableData = res
            })
        }
    },
    components: {
        leftBar,
        commonHeader,
    }
}
</script>
<style lang="less" scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}
.el-aside {
    color: #333;
}
.el_container{
    flex-direction: column;
}
</style>
