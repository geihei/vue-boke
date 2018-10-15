<template>
    <el-container style="height: 100%;">
        <left-bar></left-bar>
        <el-container class="el_container">
            <common-header></common-header>
            <el-main>
                <keep-alive>
                    <list-table></list-table>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
import leftBar from '../components/leftbar.vue'
import commonHeader from '../components/header.vue'
import listTable from '../components/list.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        leftBar,
        commonHeader,
        listTable
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
