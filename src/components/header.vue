<template>
    <el-header class="header">
        <el-dropdown>
            <i class="el-icon-setting"></i>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="toUserInfo">用户信息</el-dropdown-item>
                <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
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
        logout() {
            this.$store.commit('logout')
            this.$router.push({ path: 'login' })
        },
        toUserInfo() {
            this.$router.push({ path: 'userinfo' })
        }
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
