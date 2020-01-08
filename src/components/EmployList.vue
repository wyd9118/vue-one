
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
            prop="type"
            label="模板"
            width="80">
            </el-table-column>
            <el-table-column
            prop="avergeScore"
            label="评价得分"
            width="120">
            </el-table-column>
            <el-table-column
            prop="memberNumber"
            label="阅读人数"
            width="80">
            </el-table-column>
            <el-table-column
            prop="countFavor"
            label="点赞数"
            width="80">
            </el-table-column>
            <el-table-column
            prop="countComment"
            label="评论数"
            width="120">
            </el-table-column>
            <el-table-column
            prop="averageTime"
            label="人均时长（分钟）"
            width="140">
            </el-table-column>
            <el-table-column
            label="状态"
            width="120">
                <template slot-scope="scope">
                    <el-button type="text">{{scope.row.status?"开启":"关闭"}}</el-button>
                </template>
            </el-table-column>
            <el-table-column
            label="积分"
            width="120">
                <template slot-scope="scope">
                    <el-button type="text">{{scope.row.is_open_point?"开启":"关闭"}}</el-button>
                </template>
            </el-table-column>
            <el-table-column
            prop="ofUse"
            label="调用情况"
            width="120">
            </el-table-column>
            <el-table-column
            label="操作"
            width="180">
                <template slot-scope="scope">
                    <el-button type="text" @click="editContent(scope.row)">编辑</el-button>
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
        name:'employ-list',
        data:function(){
            return {
                tableData:[],
                total:0,
                pageSize:10,
                pageNo:1,
            }
        },
        props:[
        ],
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
                    url: 'http://114.215.254.30:8080/welearning/api/analysis/queryContentReport',
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
        },
        created(){
            this.queryData();
        }
    }
</script>