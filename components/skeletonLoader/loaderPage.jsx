import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderPage = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100vh'}
    backgroundColor="#202020"
    foregroundColor="#171717 "
    {...props}
  >
    <rect x="15" y="10" rx="4" ry="4" width="20%" height="24" />
    <rect x={'80%'} y="10" rx="4" ry="4" width="20%" height="24" />
    <rect x="15" y="50" rx="4" ry="4" width="100%" height="4" />

    <rect x={'30%'} y="80" rx="4" ry="4" width="40%" height="35" />
    <rect x={'40%'} y="140" rx="4" ry="4" width="20%" height="30" />

    <rect x="15" y="200px" rx="4" ry="4" width="100%" height="600" />
  </ContentLoader>
)

export default LoaderPage
