<template>
    <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="100px" class="demo-userInfo">
        <el-form-item label="用户名" prop="username">
            <el-input v-model="userInfo.username"></el-input>
        </el-form-item>
        <el-form-item label="原密码" prop="oldPwd">
            <el-input v-model="userInfo.oldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
            <el-input v-model="userInfo.newPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="newPwdConfirm">
            <el-input v-model="userInfo.newPwdConfirm"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('userInfo')">提交</el-button>
            <el-button @click="resetForm('userInfo')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data() {
        return {
            // 表单data
            userInfo: {
                _id: '',
                username: '',
                oldPwd: '',
                newPwd: '',
                newPwdConfirm: ''
            },
            // 表单规则检验
            rules: {
                username: [
                    { required: true, message: '请填写文章名称', trigger: 'blur' }
                ],
                oldPwd: [
                    { required: true, message: '请输入原始密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                newPwd: [
                    { required: true, message: '请输入新密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
                newPwdConfirm: [
                    { required: true, message: '请再次输入新密码', trigger: 'blur' },
                    { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                ],
            },
        }
    },
    
}
</script>
<style lang="less" scoped>

</style>
