
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
            prop="no"
            label="序号"
            width="60">
            </el-table-column>
            <el-table-column
            prop="categoryNames"
            label="分类"
            width="50">
            </el-table-column>
            <el-table-column
            prop="keyword"
            label="关键字"
            width="140">
            </el-table-column>
            <el-table-column
            prop="title"
            label="标题"
            width="200"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="browNum"
            label="浏览次数"
            width="80">
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型"
            width="120">
            </el-table-column>
            <el-table-column
            prop="create_time"
            label="添加时间"
            width="140">
            </el-table-column>
            <el-table-column
            prop="status"
            label="状态"
            width="80">
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型"
            width="120">
            </el-table-column>
            <el-table-column
            label="操作"
            width="180">
                <template slot-scope="scope">
                    <el-button type="text" @click="editContent(scope.row)">编辑</el-button>
                    <el-button type="text" @click="copyContent(scope.row)">复制</el-button>
                    <el-button type="text" @click="delContent(scope.row,scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
        :current-page="pageNo"
        :page-size="pageSize"
        :total="total"
        layout="prev, pager, next,sizes"
        :page-sizes="[10,50,100]"
        @current-change="handlePagination"
        @size-change="handleSizeChange">
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
                pageNo:1,
            }
        },
        methods:{
            queryData(){
                let d = {
                        publicNumberId:1,
                        pageNo:this.pageNo,
                        pageSize:this.pageSize,
                        needTotalSize:true,
                        companyCode:'ruixue_dev',
                        certificate:sessionStorage.getItem('certificate')
                    };
                var _this = this;
                this.$http({
                    method: 'post',
                    url: 'http://114.215.254.30:8080/welearning/api/content/findPage',
                    withCredentials:true,
                    data: d
                })
                .then(function(res){ console.log(res)
                    if(res.data&&res.data.errorCode===0){
                        let r = res.data.data;
                        console.log(r);
                        _this.total = r.totalSize;
                        _this.tableData = r.records;
                    }
                });
            },
            handleSelectionChange(){
                
            },
            handlePagination(page){ 
                this.pageNo = page;
                this.queryData();
            },
            handleSizeChange(size){
                this.pageSize = size;
                this.queryData();
            },
            delContent(row,index){ console.log(row,row.id,index);
                var _this = this;
                this.$http({
                    url:'http://114.215.254.30:8080/welearning/api/content/delete',
                    method:'post',
                    data:{
                        id:row.id,
                        certificate:sessionStorage.getItem('certificate'),
                        companyCode:'ruixue_dev',
                    },
                }).then(function(res){
                    if(res.data&&res.data.errorCode===0){
                        _this.tableData.splice(index,1);
                        _this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                    }else{
                        _this.$message.error(res.data&&res.data.errorMassage||'删除失败');
                    }
                }).catch(function(){
                    _this.$message.error('删除失败');
                });
            }
        },
        created(){
            this.queryData();
        }
    }
</script>