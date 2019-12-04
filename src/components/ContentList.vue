
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
                        // companyCode:'ruixue_test',
                        // certificate:localStorage.getItem('certificate')
                    };
                var _this = this;
                this.$http({
                    method: 'post',
                    url: 'http://120.26.101.143:80/welearning/api/content/findPage',
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
            handlePagination(page){ console.log(1)
                this.pageNo = page;
                this.queryData();
            },
            handleSizeChange(size){ console.log(2)
                this.pageSize = size;
                this.queryData();
            }
        },
        created(){
            this.queryData();
        }
    }
</script>