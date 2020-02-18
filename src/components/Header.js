import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="logo" src={ require('../images/blk-logo.png') } />
        </div>
        <div className="content">
            <div className="inner">
                <h1>BlackcoinNL</h1>
                <p>The most helpful community of Blackcoin Enthusiasts!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li>    <Link to="/tag/basics/">basics</Link></li>
                <li>    <Link to="/tag/config/">config</Link></li>
                <li>    <Link to="/tag/advanced/">advanced</Link></li>
                <li>    <Link to="/blog/">Blog</Link></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
