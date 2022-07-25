import React from 'react'
import { connect } from 'react-redux'
import { getHomeInfoList } from '@/store/actions'
import { Link } from "react-router-dom"

import styles from './styles.css'
import withStyles from 'isomorphic-style-loader/withStyles'

import { Helmet } from "react-helmet"

const Home = (props) => {
  const { setInfoList, infoList } = props
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <meta name="description" content="My Title内容" />
      </Helmet>
      <div className={styles.container}>
        <div>Hello React SSR!</div>
        <div>{JSON.stringify(infoList)}</div>
        <button onClick={() => {
          setInfoList(['12', '22'])
        }}>click setInfoList</button>
        <button onClick={() => {
          setInfoList(['1', '2'])
        }}>click setInfoList</button>
        <Link to="/login">to login</Link>
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
const mapDispatchToProps = (dispatch)=>{
  return {
    setInfoList: (value) => dispatch(getHomeInfoList(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Home)
)