import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >


        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact </h2> 
           <form action="https://tinyletter.com/blackcoin" method="post" target="popupwindow" onsubmit="window.open('https://tinyletter.com/blackcoin', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><p><label for="tlemail">Subscribe to the Blackcoin.NL Newsletter!</label></p><p><input type="text"  name="email" id="tlemail" /></p><input type="hidden" value="1" name="embed"/><input type="submit" value="Subscribe" /><p></p></form>
         
          <ul className="icons">
            <li>
              <a
                href="https://T.me/BlackcoinNL"
                className="icon fa-telegram"
              >
                <span className="label">Telegram</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/blackcoinnl"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com/blackcoinorg" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CoinBlack"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://gitlab.com/blackcoin"
                className="icon fa-gitlab"
              >
                <span className="label">Gitlab</span>
              </a>
            </li>
          </ul>
          <a href="https://discord.gg/hjNUgWD"className="icon fa-discord"><img src="/images/icons/discord.svg" alt="Discord" /></a>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
