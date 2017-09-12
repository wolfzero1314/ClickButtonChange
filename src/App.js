import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ButtonApp extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <ButtonChange/>
        </div>
    );
  }
}


class ButtonChange extends Component{
  //默认的点赞文本
  static defaultProps={
    likeText:"取消",
    unLikeText:"点赞"
  }

  constructor(){
    super();
    this.state={
      isChanged:false
    }
  }

  handleChangeButton(e){
    e.preventDefault();
    this.setState({
      isChanged:!this.state.isChanged
    })
  }
  render(){
    //这里可以自定义点赞的文本
    const words={
      likeText:"已赞",
      unLikeText:"未赞"
    }

    return(
        <div>
          <LikeButton likeText={!this.state.isChanged?this.props.likeText:words.likeText}
                      unLikeText={!this.state.isChanged?this.props.unLikeText:words.unLikeText}/>

          <button onClick={this.handleChangeButton.bind(this)} className="App-btn-big">
            点击改变上面按钮的文本
          </button>
        </div>
    )
  }
}

class LikeButton extends Component{
  constructor(){
    super();
    this.state={
      isLiked:false,
    }
  }

  handleClickChange(e){
    e.preventDefault();
    this.setState({
      isLiked:!this.state.isLiked
    })
  }
  render(){
    const style={
      backgroundColor:"rgb(243, 81, 69)"
    }
    return(
        <div>
          <button onClick={this.handleClickChange.bind(this)} className="App-btn-big"
                  style={this.state.isLiked?{backgroundColor:style.backgroundColor}:{backgroundColor:"rgb(224, 219, 219)"}}>
            {this.state.isLiked ? this.props.likeText : this.props.unLikeText}
          </button>
        </div>
    )
  }
}

export default ButtonApp;
