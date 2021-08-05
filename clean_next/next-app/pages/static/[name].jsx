import React from 'react'
import api from 'axios'

const GitProfileName = ({ user, time }) => {
  return (
    <div>
      <h1>UserName: {user?.name}</h1>
      <h1>TIme: {time}</h1>
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  try {
    const { status, data: user } = await api.get(`https://api.github.com/users/${params.name}`)

    if (status !== 200) {
      throw new Error('Response Status Not 200')
    }

    return { props: { user, time: new Date().toISOString() } }
  } catch (e) {
    return { props: { time: new Date().toISOString() } }
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { name: 'dlgustn555' } }],
    fallback: true,
  }
}

export default GitProfileName
