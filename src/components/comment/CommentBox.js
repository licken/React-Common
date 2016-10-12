import React from 'react';

//评论区域组件
//组成部分:
//1.打分区域
//2.建议区域
//3.表单提交按钮


class CommentBox extends React.Component {

  render() {
    return (
      <div className="commentBox">
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

class CommentList extends React.Component {

  render() {
    let data = [
      {id: 1, author: 'Pete Hunt2', text: 'This is one comment'},
      {id: 2, author: 'Jordan Walke2', text: 'This is *another* comment'}
    ];
    // let data = this.props.data;
    let commentNode = data.map(function (node) {
      return (
        <CommentContent userName={node.author} key={node.id}>{node.text}</CommentContent>
      );
    });

    return (
      <div className="commentList">
        CommentList Here!
        {commentNode}
      </div>
    );
  }
}


class CommentContent extends React.Component {
  render() {
    return (
      <div className="commentContent">
        <h3 className="userName">Here is {this.props.userName}</h3>
        {this.props.children}
      </div>
    );
  }
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      content: ''
    };
  }

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value})
  };

  handleContentChange = (e) => {
    this.setState({content: e.target.value})
  };

  handleSubmit = () => {
    let author = this.state.author;
    let content = this.state.content;
    if(!author || !content){
      return;
    }
    this.setState({author: '', content: ''});
  };

  render() {
    return (
      <div className="commentForm" onSubmit={this.handleSubmit}>
        CommentForm Here!
        <form className="commentForm">
          <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
          <input type="text" placeholder="Say something..." value={this.state.content}
                 onChange={this.handleContentChange}/>
          <input type="submit" value="Post"/>
        </form>
      </div>
    );
  }
}


export default CommentBox;
