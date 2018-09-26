<template>
    <section class="container">
        <div class="login_container">
            <el-input placeholder="请输入用户名" clearable v-model="username"></el-input>
            <el-input placeholder="请输入密码" clearable v-model="password"></el-input>
            <el-button @click="login">登录</el-button>
        </div>
        <canvas id="canvas" ref="canvas"></canvas>
    </section>
</template>
<script>
import start from '../utils/direvtive'

export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    created() {
        
    },
    mounted() {
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        start(canvas, ctx)
    },
    methods: {
        login() {
            this.$api.login({
                username: this.username,
                password: this.password
            }).then(res => {
                res = JSON.parse(res)
                alert(res.message)
                location.href = '#'
            }).catch(error => {
                alert('登录失败')
            })
        }
    }
}
</script>
<style lang="less" scoped>
.container{
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    background-color: black;
    background: -webkit-linear-gradient(left top, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%);
    background: -o-linear-gradient(bottom right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%);
    background: -moz-linear-gradient(bottom right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%);
    background: linear-gradient(to bottom right, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%);
    .login_container{
        width: 2rem;
        border-radius: 4px;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.3);
        margin: 0 auto;
        padding: 0.2rem;
        box-sizing: border-box;
        position: relative;
        z-index: 99;
        .el-input{ 
            margin-top: .1rem;
        }
        .el-button{
            margin-top: .1rem;
        }
    }
    #canvas{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
    &:before{
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #54FF9F;
        animation: colorChange 10s ease-in-out infinite;
        animation-fill-mode: both;
        mix-blend-mode: overlay;
    }
}

@keyframes colorChange{
    0%, 100%{
        opacity: 0;
    }
    50%{
        opacity: 0.5;
    }
}
@-webkit-keyframes colorChange{
    0%, 100%{
        opacity: 0;
    }
    50%{
        opacity: 0.7;
    }
}
</style>

