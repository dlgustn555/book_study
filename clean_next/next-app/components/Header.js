import React, { useState } from 'react'
import { IoLogoGithub } from 'react-icons/io'
import css from 'styled-jsx/css'
import { useRouter } from 'next/router'

const HeaderCss = css`
  .header-wrapper {
    padding: 14px 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }

  .header-search-form input {
    margin: 0px 16px;
    background-color: hsla(0, 0%, 100%, 0.125);
    width: 300px;
    height: 28px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: white;
    padding: 0px 12px;
    font-size: 14px;
    font-weight: bold;
  }

  .header-navagations a {
    color: white;
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`

const Header = () => {
  const [username, setUsername] = useState('')
  const Router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault()
    Router.push(`/users/${username}?page=1`)
    setUsername('')
  }

  return (
    <div>
      <div className="header-wrapper">
        <IoLogoGithub color="white" size={36} />
        <form className="header-search-form" onSubmit={onSubmit}>
          <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </form>
      </div>
      <style jsx>{HeaderCss}</style>
    </div>
  )
}

export default Header
