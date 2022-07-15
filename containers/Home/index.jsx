import React from 'react'
import { connect } from 'react-redux'
import { getHomeInfoList } from '@/store/actions'
import { Link } from "react-router-dom"

// import {
//   Container,
//   Header,
//   Divider,
//   Segment,
//   Image
// } from 'semantic-ui-react'

import s from './styles.css'
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
      <div className={s.container}>
        <div>Hello React SSR!</div>
        <div>{JSON.stringify(infoList)}</div>
        <button onClick={() => {
          setInfoList(['12', '22'])
        }}>click setInfoList</button>
        <button onClick={() => {
          setInfoList(['1', '2'])
        }}>click setInfoList</button>
        <Link to="/login">to login</Link>
        {/* <div>
          <Container text>
            <Header as='h2'>Header</Header>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
              quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
              arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
              dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
              Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
            </p>
          </Container>
          <div className={s.dividerWrap}>
            12
            <Divider vertical>And</Divider>
          </div>
          <Segment>
            <Header as='h3'>Section One</Header>
            <Image src='/images/wireframe/short-paragraph.png' />

            <Divider section />

            <Header as='h3'>Section Two</Header>
            <Image src='/images/wireframe/short-paragraph.png' />
          </Segment>
        </div> */}
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
  withStyles(s)(Home)
)