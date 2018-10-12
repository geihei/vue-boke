<template>
    <list-table :data="data"></list-table>
</template>
<script>
import listTable from '../components/list.vue'
export default {
    data() {
        return {
            data: []
        }
    },
    created() {
        // 请求数据
        this.getAllTableData()
    },
    methods: {
        getAllTableData() {
            this.$api.getAllTableData().then(res => {
                res = JSON.parse(res)
                if(res.code == 0){
                    this.data = res.data
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
