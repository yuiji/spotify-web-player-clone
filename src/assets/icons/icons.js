const HomeIcon = ({ size = 24 }) => {
  return (
    <svg
      viewBox='0 0 512 512'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z'
        fill='currentColor'></path>
    </svg>
  )
}

const HomeIconActive = ({ size = 24 }) => {
  return (
    <svg
      viewBox='0 0 512 512'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z'
        fill='currentColor'></path>
    </svg>
  )
}

const SearchIcon = ({ size = 24 }) => {
  return (
    <svg
      viewBox='0 0 512 512'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z'
        fill='currentColor'
        fill-rule='evenodd'></path>
    </svg>
  )
}

const SearchIconActive = ({ size = 24 }) => {
  return (
    <svg
      viewBox='0 0 512 512'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M357.079 341.334l94.476 110.73-32.508 27.683-94.222-110.476q-45.714 30.476-100.826 30.476-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 23.365-5.841 45.714t-16.635 41.651-25.778 35.555zM224 357.079q28.19 0 53.841-11.048t44.19-29.587 29.587-44.19 11.048-53.841-11.048-53.841-29.587-44.191-44.19-29.587-53.841-11.047-53.841 11.047-44.191 29.588-29.587 44.19-11.047 53.841 11.047 53.841 29.588 44.19 44.19 29.587 53.841 11.048z'
        fill='currentColor'></path>
    </svg>
  )
}

const CollectionIcon = ({ size = 24 }) => {
  return (
    <svg
      viewBox='0 0 512 512'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z'
        fill='currentColor'></path>
    </svg>
  )
}

const CollectionIconActive = ({ size = 24 }) => {
  return (
    <svg
      viewBox='0 0 512 512'
      width={size}
      height={size}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z'
        fill='currentColor'></path>
    </svg>
  )
}

const PlusIcon = ({ size = 12 }) => {
  return (
    <svg
      role='img'
      height={size}
      width={size}
      viewBox='0 0 16 16'
      class='Svg-sc-1bi12j5-0 gSLhUO'>
      <path d='M14 7H9V2H7v5H2v2h5v5h2V9h5z'></path>
      <path fill='none' d='M0 0h16v16H0z'></path>
    </svg>
  )
}

const HeartIcon = ({ size = 12 }) => {
  return (
    <svg
      role='img'
      height={size}
      width={size}
      viewBox='0 0 16 16'
      class='Svg-sc-1bi12j5-0 gSLhUO'>
      <path fill='none' d='M0 0h16v16H0z'></path>
      <path d='M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z'></path>
    </svg>
  )
}

export {
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
  CollectionIcon,
  CollectionIconActive,
  PlusIcon,
  HeartIcon
}
