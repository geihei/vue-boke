<template>
    <el-form :model="newDataForm" :rules="rules" ref="newDataForm" label-width="100px" class="demo-newDataForm">
        <el-form-item label="文章标题" prop="title">
            <el-input v-model="newDataForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
            <mavon-editor v-model="newDataForm.content" :toolbars="toolbars" @change="editorChange"/>
        </el-form-item>
        <el-form-item label="类别" prop="type">
            <el-select v-model="newDataForm.type" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('newDataForm')">提交</el-button>
            <el-button @click="resetForm('newDataForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import deepClone from '@/utils/deepClone'
export default {
    data() {
        return {
            // 文本编辑器
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                mark: true, // 标记
                superscript: true, // 上角标
                quote: true, // 引用
                ol: true, // 有序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                help: true, // 帮助
                code: true, // code
                subfield: true, // 是否需要分栏
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                undo: true, // 上一步
                trash: true, // 清空
                save: true, // 保存（触发events中的save事件）
                navigation: true // 导航目录
            },
            // 表单data
            newDataForm: {
                _id: '',
                title: '',
                content: '',
                type: '',
                time: '',
                author: '',
            },
            // 表单规则检验
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
            // 类别选项
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
            ],
            time: '',
            timer: '',
            isSave: false
        }
    },
    methods: {
        submitForm(formName) {
            clearInterval(this.timer)
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.isSave = true
                    this.newDataForm.time = new Date().toLocaleDateString()
                    this.newDataForm.author = window.localStorage.username
                    if (this.newDataForm._id) {
                        // 传入的data是formdata还是对象 有什么区别 是否需要转换
                        this.updateArticleList(this.newDataForm, '修改失败')
                    } else {
                        delete this.newDataForm._id
                        this.updateArticleList(this.newDataForm, '新增失败')
                    }
                } else {
                    this.$message.error('请正确填写表单!')
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        updateArticleList(data, mes) {
            this.$api.updateArticleList(data).then(res => {
                res = JSON.parse(res)
                if (res.code == 0) {
                    this.$alert(res.message, '提示', { confirmButtonText: '确定', callback: () => {
                            this.$router.push({ path: decodeURIComponent(this.$route.query.redirect) })
                        }
                    });
                } else {
                    this.$message.error(mes)
                }
            })
        },
        saveDraft(oldTime) {
            let nowTime = new Date().getTime()
            // 判断是否已保存 如果未保存则执行
            if (!window.localStorage.articleContent) {
                this.timer = setInterval(() => {
                    nowTime += 1000
                    if (nowTime - oldTime > 10000) {
                        this.isSave = true
                        window.localStorage.articleContent = this.newDataForm.content
                        this.$notify({
                            title: '成功',
                            message: '自动保存为草稿',
                            type: 'success'
                        });
                        clearInterval(this.timer)
                    }
                }, 1000)
            }
        },
        editorChange(value) {
            if (value) this.time = new Date().getTime()
        }
    },
    created() {
        // 最好不要使用vuex传送数据 刷新丢失数据 最好选择重新发送请求 丢失数据的处理可以选择刷新前提示优化
        if (this.$store.state.editArticleData) this.newDataForm = deepClone(this.$store.state.editArticleData) // 不要使用浅拷贝 避免出现改变源数据的bug
    },
    updated() {
        if (this.newDataForm.content) {
            this.isSave = false
            // 清空timer 保存之后如果继续改动重新走timer 清空storage 重新保存
            clearInterval(this.timer)
            this.time = new Date().getTime()
            window.localStorage.articleContent = ''
            this.saveDraft(this.time)
        }
    },
    beforeRouteLeave(to, from, next) {
        clearInterval(this.timer)
        //next方法传true或者不传为默认历史返回，传false为不执行历史回退
        if (!this.isSave) {
            this.$confirm('您尚未保存, 是否离开?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '我不离开',
                type: 'warning'
            }).then(() => {
                next(true)
            }).catch(() => {
                window.localStorage.articleContent = ''
                this.saveDraft(this.time)
                next(false)
            })
        }else {
            next(true)
        }
    },
}
</script>
<style lang="less" scoped>

</style>
