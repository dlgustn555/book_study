import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ROUTES from '../constants/routes'

const App = () => {
  const Router = useRouter()
  const [name, setName] = useState('')

  const userRouteUrl = ROUTES.USER.replace('[name]', name)

  const handlePageRoute = () => {
    Router.push(userRouteUrl)
  }

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handlePageRoute()
    }
  }

  return (
    <div>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        onKeyUp={handleEnterKey}
      />
      <button onClick={handlePageRoute}>
        {name}으로 이동
      </button>
      <br />
      <Link href={userRouteUrl}>
        <a>{name}</a>
      </Link>
    </div>
  )
}

export default App
