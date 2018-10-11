<template>
    <el-header class="header">
        <el-dropdown>
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="Logout">登出</el-dropdown-item>
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
        this.username = this.$store.state.username
    },
    methods: {
        Logout() {
            this.$store.state.userId = ''
            this.$store.state.username = ''
            this.$store.state.token = ''
            this.$router.push({ path: 'login' })
        },
    }
}
</script>
<style lang="less" scoped>
.header{
    text-align: right;
    font-size: 12px;
}
.el-icon-setting {
    margin-right: 15px;
}
</style>
