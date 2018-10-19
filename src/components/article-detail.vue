<template>
    <mavon-editor class="md" :value="articleDetail.content" :subfield="prop.subfield" :defaultOpen="prop.defaultOpen" :toolbarsFlag="prop.toolbarsFlag" :editable="prop.editable" :scrollStyle="prop.scrollStyle"></mavon-editor>
</template>
<script>
export default {
    computed: {
        prop () {
            let data = {
                subfield: false,// 单双栏模式
                defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
                editable: false,
                toolbarsFlag: false,
                scrollStyle: true
            }
            return data
        }
    },
    data() {
        return {
            articleDetail: {
                content: ''
            }
        }
    },
    created() {
        this.$api.getArticleDetail({id: this.$route.params.id}).then(res => {
            if (res.code == 0) {
                this.articleDetail.content = res.data.content
            } else {
                this.$message.error('获取详情失败')
            }
        })
    }
}
</script>
<style lang="less" scoped>

</style>
