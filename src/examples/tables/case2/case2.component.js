import axios from 'axios';
export default  {
  name: 'case-2',
  components: {},
  props: [],
  data() {
    return {
      tableData: [],
      pageNo: 1,
      pageSize: 10,
      pageSizesList: [10, 15, 20, 30, 50],
      // tableData: [],//返回的结果集合
      totalDataNumber: 0,//数据的总数,

      // 分类数据
      category: ["PP", "PE", "PVC", "ABS", "PS", "AS", "PA", "PC", "茂金属", "EAA", "塑料制品"],
      companies: ['阿里巴巴', '智者天下', '百度网讯', '诺亚方舟', '大庆石化'],
      // cities: ['北京市', '天津市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '重庆市', '四川省', '贵州省', '云南省', '**自治区', '陕西省', '甘肃省', '青海省'],
      cities: ['北京市', '天津市', '河北省', '山西省', '辽宁省', '吉林省', '甘肃省', '青海省'],
      // 条件
      params:{
        category:'',
        company:'',
        city:''
      }
      
    }
  },
  created() {
    console.log("case1 init...");
    axios.get('http://localhost:3000/sy_shop/api/index.do',{
      params:{
        pageNo:1,
        pageSize:10
      }
    })
      .then((res) => {
        // console.log(res)
        this.tableData = res.data.seller.productList.data;
        this.totalDataNumber = res.data.seller.productList.total;
      })
  },
  computed: {

  },
  mounted() {
    console.log(999, this);
  },
  methods: {
    // 选择分类
    selectFilter(type,title){
      // TODO list
      if(type === 1){ //分类条件
        this.params.category = title;
      } else if (type === 2) { // 公司条件
        this.params.company = title;
      }else if(type === 3){ // 交货地址条件
        this.params.city = title;
      }
    },
    removeFilter(type){
      if (type === 1) { // 删除分类条件
        this.params.category = '';
      } else if (type === 2) {// 删除公司条件
        this.params.company = '';
      } else {// 删除交货地址条件
        this.params.city = '';
      }
      
      
      
     
    },
    // 删除
    // 异步调取数据
    _getProductList(){
      axios.get('http://localhost:3000/sy_shop/api/index.do', {
        params: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      })
        .then((res) => {
          // console.log(res)
          this.tableData = res.data.seller.productList.data;
          this.totalDataNumber = res.data.seller.productList.total;
        })
    },
    // 处理操作
    cellActionFormatter() {
      return '自定义内容';
    },
    // 处理升了，还是降了
    updownFormatter() {
      console.log('updown info: ', this, arguments);
    },

    // 定制更新时间头部
    renderHeaderUpdateTime() {
      console.log(arguments);
      return '时间时间'
    },

    // 翻页
    goNext(){
      console.log('go next page');
    },

    //改变每页显示数量
    handleSizeChange(val) {
      var pageSize = `${val}`;
      this.pageNo = 1
      this.pageSize = parseInt(pageSize);
      console.log('pageSize: ' + pageSize);
      this.$nextTick(()=>{
        this._getProductList();
      })
    },

    goPrevPage(){
      let current = this.pageNo - 1;
      this.pageNo--;
      if (current === 0) {
        current = 1; 
        this.pageNo = 1;
      }
     
      this.handleCurrentChange(current);
    },
    goNextPage(){
      let current = this.pageNo + 1;
      this.pageNo++;
      this.handleCurrentChange(current);
    },

    //改变页码
    handleCurrentChange(val) {
      var pageNo = `${val}`;
      var pageSize = this.pageSize;
      console.log(99999);
      //        this.pageNo=pageNo;
      console.log('pageSize:' + this.pageSize)

      this.$nextTick(() => {
        this._getProductList();
      })
      // this.getAndDraw(parseInt(pageNo), parseInt(pageSize));
    },
  }
}
