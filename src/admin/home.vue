<template>
    <el-container style="height: 100%;">
        <left-bar></left-bar>
        <el-container class="el_container">
            <common-header></common-header>
            <el-main>
                <el-table>
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
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

        }
    },
    created() {
        console.log(this.$store.state.token)
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
