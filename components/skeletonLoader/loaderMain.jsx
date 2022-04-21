import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderMain = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100vh'}
    backgroundColor="#202020"
    foregroundColor="#171717 "
    {...props}
  >
    <rect x="15" y="10" rx="4" ry="4" width="20%" height="24" />
    <rect x="15" y="50" rx="4" ry="4" width="100%" height="4" />

    <rect x="15" y="70px" rx="4" ry="4" width="47%" height="300" />
    <rect x={'50%'} y="70px" rx="4" ry="4" width="50%" height="300" />
    <rect x={'50%'} y={'50%'} rx="4" ry="4" width="50%" height="300" />
    <rect x="15" y={'50%'} rx="4" ry="4" width="47%" height="300" />
  </ContentLoader>
)

export default LoaderMain
