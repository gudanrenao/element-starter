<template>
  <el-tabs type="border-card" style="padding-top: 10px">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 门店列表</span>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="门店名称">
          <el-input v-model="criteria.name" placeholder="门店名称"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="startEnd"
            type="datetimerange"
            :picker-options="pickerOptions2"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd HH:mm:ss"
            align="right">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="merchantListCriteria">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        :data="merchantListData"
        border
        style="width: 100%">
        <el-table-column
          prop="merchantSid"
          label="门店序号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="门店名称"
          align="center">
        </el-table-column>
        <el-table-column
          prop="dateCreated"
          label="创建时间" align="center">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
        :current-page="criteria.currPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="criteria.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="criteria.totalPages"
      style="padding-top: 15px;text-align: right">
      </el-pagination>

    </el-tab-pane>
    <el-tab-pane label="消息中心">消息中心</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
  import {formatDate} from '~/assets/common/js/date'
  import {date_time_format_1} from '~/assets/common/js/date'

  export default {
    data() {
      return {
        criteria: {
          name: '',
          start: '',
          end: '',
          currPage: 1,
          totalPages: 1,
          pageSize: 10
        },
        startEnd: [],
        merchantListData: [],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    },
    computed: {
      // setDate: {
      //   get: function () {
      //       return this.startEnd
      //   },
      //   set: function (val) {
      //     alert(val)
      //     this.criteria.start = val[0];
      //     this.criteria.end = val[1]
      //   }
      // }
    },
    watch: {
      startEnd: function (newVal) {
        this.criteria.start = formatDate(newVal[0], date_time_format_1);
        this.criteria.end = formatDate(newVal[1], date_time_format_1)
      }
    },
    methods: {
      merchantListCriteria() {
        alert(JSON.stringify(this.criteria))
      },
      handleSizeChange1: function (currSize) {
        this.criteria.pageSize = currSize
      },
      handleCurrentChange1: function (currPage) {
        this.criteria.currPage = currPage;
        this.merchantListCriteria()
      }
    }
  }
</script>

<style scoped>

</style>