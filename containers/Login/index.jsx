import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

const Login = (props) => {
  const { infoList } = props
  return (
    <div>
      <div>Login</div>
      <div>{JSON.stringify(infoList)}</div>
      <button onClick={() => {alert('click')}}>click</button>
      <Link to="/">to home</Link>
    </div>
  )
}

const mapStateToProps = (state)=>{
  console.log('home state ->>', state.home)
  const { infoList } = state.home
  return {
    infoList
  }
}
export default connect(mapStateToProps)(Login)