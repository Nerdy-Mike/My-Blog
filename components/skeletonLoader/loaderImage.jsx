import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderImage = (props) => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={'100%'}
    backgroundColor="#202020"
    foregroundColor="#171717 "
    {...props}
  >
    <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
  </ContentLoader>
)

export default LoaderImage
