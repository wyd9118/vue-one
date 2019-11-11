
<template>
    <div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
        </el-pagination>
    </div>
</template>
<script>
    export default{
        name:'content-list',
        data:function(){
            return {
                tableData:[],
                total:0,
                pageSize:10,
            }
        }
    }
</script>