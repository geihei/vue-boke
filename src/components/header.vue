<template>
    <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <span>{{username}}</span>
    </el-header>
</template>
<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    created() {
        this.username = window.localStorage.username
    },
}
</script>
<style lang="less" scoped>

</style>
