import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} />
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <div style={{"height":"24rem","width":"100%"}} ></div>
            <div style={{"height":"560px","background-color":"#1D2330","overflow":"hidden","box-sizing":"border-box","border":"1px solid #282E3B","border-radius":"4px","-webkit-text-align":"right","text-align":"right","line-height":"14px","font-size":"12px","font-feature-settings":"normal","-webkit-text-size-adjust":"100%","text-size-adjust":"100%","box-shadow":"inset 0 -20px 0 0 #262B38","padding":"0px","margin":"0px","width":"100%"}}>
              <div style={{"height":"540px","padding":"0px","margin":"0px","width":"100%"}}>
                <iframe src="https://widget.coinlib.io/widget?type=chart&theme=dark&coin_id=1229&pref_coin_id=1506" scrolling="auto" marginWidth={0} marginHeight={0} border={0} style={{"border":"0","margin":"0","padding":"0","line-height":"14px"}} width="100%" height="560px" frameBorder={0} />  
              </div>
            </div>
            <div style={{"height":"5rem","width":"100%"}} ></div>

            <Footer timeout={this.state.timeout} />
          </div>
          <div id="bg"></div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
