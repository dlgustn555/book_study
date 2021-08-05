import React from 'react'

const StaticPage = ({ time }) => {
  return (
    <div>
      <h1>Time: {time}</h1>
    </div>
  )
}

/**
 * getServerSideProps(페이지 요청시마다)와 다르게,
 * 빌드시에 데이터를 블러와 결과를 json으로 저장하여 사용
 */
export const getStaticProps = async () => {
  return { props: { time: new Date().toISOString() } }
}

export default StaticPage
