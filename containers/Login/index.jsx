import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import s from './styles.less'
import withStyles from 'isomorphic-style-loader/withStyles'

import { Helmet } from "react-helmet"

const Login = (props) => {
  const { infoList } = props
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>link title</title>
        <meta name="description" content="link title 内容" />
      </Helmet>
      <div className={s.container}>
        <div>Login</div>
        <div>{JSON.stringify(infoList)}</div>
        <button onClick={() => {alert('click')}}>click</button>
        <Link to="/">to home</Link>
        <div className={s.imgHeader}>
          <img src='/images/header.jpeg' alt="" />
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state)=>{
  const { infoList } = state.home
  return {
    infoList
  }
}
export default connect(mapStateToProps)(
  withStyles(s)(Login)
)