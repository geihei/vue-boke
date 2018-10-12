<template>
    <el-container style="height: 100%;">
        <left-bar></left-bar>
        <el-container class="el_container">
            <common-header></common-header>
            <el-main>
                <transition>
                    <keep-alive>
                        <el-table :data="tableData" :default-sort = "{prop: 'time'}">
                            <el-table-column prop="title" label="文章标题"></el-table-column>
                            <el-table-column prop="time" label="创建时间" align="center"></el-table-column>
                            <el-table-column prop="author" label="作者" align="center"></el-table-column>
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
            tableData: []
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
