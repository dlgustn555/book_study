import React from 'react'
import Link from 'next/link'
import formatDistance from 'date-fns/formatDistance'
import { useRouter } from 'next/router'

import ROUTES from '../constants/routes'

const style = {
  border: '1px solid black',
  padding: '10px',
}
const Repos = ({ user, repos }) => {
  const router = useRouter()
  const { page } = router.query

  if (!user || !repos) {
    return null
  }
  const userRouteUrl = ROUTES.USER.replace('[name]', user.login)

  return (
    <>
      {repos.map((repo) => (
        <div key={repo.id} style={style}>
          <a target="_blank" rel="noreferrer" href={`https://github.com/${user.login}/${repo.name}`}>
            <h2>{repo.name}</h2>
          </a>
          <p>{repo.description}</p>
          <p>
            {repo.language}
            <span>
              {formatDistance(new Date(repo.updated_at), new Date(), { addSuffix: true }) }
            </span>
          </p>
        </div>
      ))}
      <div>
        {page && page > 1 && (
          <Link href={`${userRouteUrl}?page=${Number(page) - 1}`}>
            <a>Previous</a>
          </Link>
        )}
        {page && repos.length === 3 && (
        <Link href={`${userRouteUrl}?page=${Number(page) + 1}`}>
          <a>Next</a>
        </Link>
        )}
      </div>
    </>
  )
}

export default Repos
