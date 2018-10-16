<template>
    <el-form :model="newDataForm" :rules="rules" ref="newDataForm" label-width="100px" class="demo-newDataForm">
        <el-form-item label="文章标题" prop="title">
            <el-input v-model="newDataForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
            <el-input type="textarea" v-model="newDataForm.content"></el-input>
        </el-form-item>
        <el-form-item label="类别" prop="type">
            <el-select v-model="newDataForm.type" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('newDataForm')">新增</el-button>
            <el-button @click="resetForm('newDataForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        props: {
            articleData: {}
        },
        data() {
            return {
                newDataForm: this.articleData || {
                    title: '',
                    content: '',
                    type: '',
                    time: '',
                    author: window.localStorage.username,
                },
                rules: {
                    title: [
                        { required: true, message: '请填写文章名称', trigger: 'blur' },
                        { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
                    ],
                    content: [
                        { required: true, message: '请填写文章内容', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请选择类别', trigger: 'change' }
                    ],
                },
                options: [
                    {
                        value: 'html',
                        label: 'html'
                    }, 
                    {
                        value: 'css',
                        label: 'css'
                    }, 
                    {
                        value: 'javascript',
                        label: 'javascript'
                    },
                ]
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.newDataForm.time = new Date().toLocaleDateString()
                        // console.log(this.newDataForm)
                        // 传入的data是formdata还是对象 有什么区别 是否需要转换
                        this.$api.updateArticleList(this.newDataForm).then(res => {
                            res = JSON.parse(res)
                            if (res.code == 0) {
                                console.log('新增成功')
                            }
                        })
                    } else {
                        console.log('error submit!!')
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="less" scoped>

</style>
