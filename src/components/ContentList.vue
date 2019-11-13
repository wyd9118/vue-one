
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
            prop="categoryNames"
            label="分类"
            width="120">
            </el-table-column>
            <el-table-column
            prop="keyword"
            label="关键字"
            width="120">
            </el-table-column>
            <el-table-column
            prop="title"
            label="标题"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="browNum"
            label="浏览次数"
            width="120">
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型"
            width="120">
            </el-table-column>
            <el-table-column
            prop="create_time"
            label="添加时间"
            width="120">
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态"
            width="120">
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型"
            width="120">
            </el-table-column>
        </el-table>
        <el-pagination
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="total">
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
                pageNo:1
            }
        },
        methods:{
            queryData(){
                let d = {
                        publicNumberId:1,
                        pageNo:1,
                        pageSize:15,
                        needTotalSize:true,
                        companyCode:'ruixue_test',
                        certificate:'52895F8E60699E3552F63D522A113D8A757F63223C6AF509B1B4580E263E605790450BAE54C406B9ECE92C47050ECD01F208795C8CF6B0223868F74F47D94698'
                    };
                var _this = this;
                this.$http({
                    method: 'post',
                    url: 'http://120.26.101.143:80/welearning/api/content/findPage',
                    withCredentials:true,
                    data: d
                })
                .then(function(res){
                    if(res.data){
                        let r = res.data.data;
                        console.log(r);
                        _this.total = r.totalSize;
                        _this.tableData = r.records;
                    }
                });
            },
            handleSelectionChange(){
                
            }
        },
        created(){
            this.queryData();
        }
    }
</script>