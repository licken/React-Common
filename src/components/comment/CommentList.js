import React  from 'react';

//展示评论列表
//外部调用时需要配置
//url: 查询评论列表的URL
//paging: true|false  是否分页
//pageNumber:  每页显示次数  默认10
//


//总页数                   →  PageTotalCount                         //查询的结果分页之后有多少页
//总记录数                 →  RecordTotalCount                       //查询的结果包含多少条记录
//每一页的记录数            →  DisplayRecordCount                     //每一页显示多少条记录数
//一次显示多少页数     　　  →  DisplayPageCount                       //一次加载显示多少个页数，五个或者十个等等
//首页和末页                →  FirstPage ，LastPage                   //快速回到第一页以及最后一页的按钮
//上一页和下一页            →  UpPage，NextPage                       //下一页和上一页
//页索引号  :　　              → IndexPage　　                           //用户当前点击的页号码
//页面层级数: PageLevel

class CommentList extends React.Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.createCommentListFooter = this.createCommentListFooter.bind(this);
  }

  //默认配置
  static defaultProps = {
    url: '',
    paging: false,
    maxDisplayNumber: 10,
    maxDisplayPage: 10,
    firstPageNumber: 1
  };

  static propTypes = {
    paging: React.PropTypes.bool.isRequired,
    maxDisplayNumber: React.PropTypes.number.isRequired,
    maxDisplayPage: React.PropTypes.number.isRequired
  };

  createCommentListFooter(data) {
    let totalCount = data.length;
    let ids = [];
    let maxDisplayNumber = this.props.maxDisplayNumber;

    //需要计算需要分几页
    let pageCount;
    pageCount = Math.ceil(totalCount / maxDisplayNumber);

    // 每页有哪些Index
    //int currentPageLevel = pageIndex / 10;        //当前页所在的层数
    //过滤一下整数，如10,20，30 本来他们应该属于自己的层数，但是通过上面的计算会增加一个层数，所以要过滤下
    // currentPageLevel = pageIndex % 10 == 0 ? currentPageLevel - 1 : currentPageLevel;
    data.map(function (item, index) {
      let pageIndex = index + 1;
      let currentPageIndex;
      if (pageIndex === 0) {
        currentPageIndex = pageIndex + 1;
      } else {
        currentPageIndex = Math.ceil(pageIndex / maxDisplayNumber);
      }

      if (ids[currentPageIndex] == null) {
        ids[currentPageIndex] = [];
      }

      ids[currentPageIndex][pageIndex] = item;
    });
    return ids;
  }


  //由评论内容,及底部分页条组成
  render() {
    //测试用数据
    let data = [{'id': 1, 'name': 'aa', 'content': 'aa de Content'},
      {'id': 2, 'name': 'aa2', 'content': 'aa de Content'},
      {'id': 3, 'name': 'aa3', 'content': 'aa de Content'},
      {'id': 4, 'name': 'aa4', 'content': 'aa de Content'},
      {'id': 5, 'name': 'aa5', 'content': 'aa de Content'},
      {'id': 6, 'name': 'aa6', 'content': 'aa de Content'},
      {'id': 7, 'name': 'aa7', 'content': 'aa de Content'},
      {'id': 8, 'name': 'aa8', 'content': 'aa de Content'},
      {'id': 9, 'name': 'aa9', 'content': 'aa de Content'},
      {'id': 10, 'name': 'aa10', 'content': 'aa de Content'},
      {'id': 11, 'name': 'aa11', 'content': 'aa de Content'},
      {'id': 12, 'name': 'aa12', 'content': 'aa de Content'},
      {'id': 13, 'name': 'aa13', 'content': 'aa de Content'}];

    var sData = this.createCommentListFooter(data);

    return (
      <div className="commentList">
        This is new CommentList

      </div>
    );
  }
}


//分页底部组件
//由首页按钮,末页按钮,页码按钮,模糊显示的页码按钮
class CommentListFooter extends React.Component {
  //
}


export  default CommentList;
