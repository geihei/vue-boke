<template>
     <el-aside class="el_side">
        <el-menu :default-openeds="defaultOpeneds" :default-active="this.$route.path">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>文章列表</template>
                <el-menu-item-group>
                    <router-link :to="'/home'">
                        <el-menu-item index="/home">全部文章</el-menu-item>
                    </router-link>
                    <el-submenu index="1-2">
                        <template slot="title">文章分类</template>
                        <router-link :to="'/home/html'">
                            <el-menu-item index="/home/html">html</el-menu-item>
                        </router-link>
                        <router-link :to="'/home/javascript'">
                            <el-menu-item index="/home/javascript">javascript</el-menu-item>
                        </router-link>
                        <router-link :to="'/home/css'">
                            <el-menu-item index="/home/css">css</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>评论</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>用户列表</template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
    data() {
        return {
            defaultOpeneds: [] // 动态设置 若直接写行内 会出现选择其他侧边栏自动关闭当前侧边栏的bug
        }
    },
    created() {

    }
}
</script>
<style lang="less" scoped>
.el_side{
    width: 200px !important;
    background-color: rgba(238, 241, 246, 1);
}
</style>

