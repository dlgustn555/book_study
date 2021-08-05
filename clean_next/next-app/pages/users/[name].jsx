import React from 'react'
import api from 'axios'
import css from 'styled-jsx/css'

import Profile from '../../components/Profile'
import Repos from '../../components/Repos'

const style = css`
    /* .user-contents-wrapper {
        display: flex;
        padding: 20px;
    } */
    `

const UserName = ({ user, repos }) => {
  return (
    <div className="user-contents-wrapper">
      <Profile user={user} />
      <Repos user={user} repos={repos} />
      <style jsx>{style}</style>
    </div>
  )
}

// UserName.getInitialProps = async (ctx) => {
export const getServerSideProps = async (ctx) => {
  const { name, page = 1 } = ctx.query
  try {
    const { status: userStatus, data: user } = await api.get(`https://api.github.com/users/${name}`)

    if (userStatus !== 200) {
      throw new Error('Get User Profile Info API Status is Not 200!')
    }

    const { status: repoStatus, data: repos } = await api.get(`https://api.github.com/users/${name}/repos?sort=updated&page=${page}&per_page=3`)

    if (repoStatus !== 200) {
      throw new Error('Get User Repos Info API Status is Not 200!')
    }

    return { props: { user, repos } }
  } catch (e) {
    console.error(e)
    return { props: {} }
  }
}

export default UserName
