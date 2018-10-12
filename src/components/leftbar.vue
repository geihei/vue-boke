<template>
     <el-aside class="el_side">
        <el-menu :default-openeds="['1']" :default-active="'1-1'">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>文章列表</template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">全部文章</el-menu-item>
                    <el-submenu index="1-2">
                        <template slot="title">文章分类</template>
                        <router-link :to="'/home/html'">
                            <el-menu-item index="1-2-1">html</el-menu-item>
                        </router-link>
                        <router-link :to="'/home/javascript'">
                            <el-menu-item index="1-2-2">javascript</el-menu-item>
                        </router-link>
                        <router-link :to="'/home/css'">
                            <el-menu-item index="1-2-3">css</el-menu-item>
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

