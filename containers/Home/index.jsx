import React from 'react'
import { connect } from 'react-redux'
import { getHomeInfoList } from './store/actions'

const Home = (props) => {
  const { setInfoList, infoList } = props
  console.log('home ->>', props)
  return (
    <div>
      <div>Hello React SSR!</div>
      <div>{JSON.stringify(infoList)}</div>
      <button onClick={() => {
        setInfoList(['12', '22'])
      }}>click setInfoList</button>
      <button onClick={() => {
        setInfoList(['1', '2'])
      }}>click setInfoList</button>
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
const mapDispatchToProps = (dispatch)=>{
  return {
    setInfoList: (value) => dispatch(getHomeInfoList(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)