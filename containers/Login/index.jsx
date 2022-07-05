import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import s from './styles.css'
import withStyles from 'isomorphic-style-loader/withStyles'

const Login = (props) => {
  const { infoList } = props
  return (
    <div className={s.container}>
      <div>Login</div>
      <div>{JSON.stringify(infoList)}</div>
      <button onClick={() => {alert('click')}}>click</button>
      <Link to="/">to home</Link>
    </div>
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