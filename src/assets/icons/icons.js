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
        fill='currentColor'></path>
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
    <svg role='img' height={size} width={size} viewBox='0 0 16 16'>
      <path d='M14 7H9V2H7v5H2v2h5v5h2V9h5z'></path>
    </svg>
  )
}

const HeartIcon = ({ size = 12 }) => {
  return (
    <svg role='img' height={size} width={size} viewBox='0 0 16 16'>
      <path
        fill='currentColor'
        d='M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z'></path>
    </svg>
  )
}

const DownloadIcon = ({ size = 24 }) => {
  return (
    <svg role='img' height={size} width={size} viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z'></path>
    </svg>
  )
}

const PreviousIcon = ({ size = 24 }) => {
  return (
    <svg
      role='img'
      focusable='false'
      height={size}
      width={size}
      viewBox='0 0 24 24'>
      <polyline points='16 4 7 12 16 20' stroke='currentColor'></polyline>
    </svg>
  )
}

const NextIcon = ({ size = 24 }) => {
  return (
    <svg
      role='img'
      focusable='false'
      height={size}
      width={size}
      viewBox='0 0 24 24'>
      <polyline points='8 4 17 12 8 20' stroke='currentColor'></polyline>
    </svg>
  )
}

const DownIcon = ({ size = 16 }) => {
  return (
    <svg
      fill='currentColor'
      role='img'
      height={size}
      width={size}
      viewBox='0 0 16 16'>
      <path d='M3 6l5 5.794L13 6z'></path>
    </svg>
  )
}

const UpIcon = ({ size = 16 }) => {
  return (
    <svg
      fill='currentColor'
      role='img'
      height={size}
      width={size}
      viewBox='0 0 16 16'>
      <path d='M13 10L8 4.206 3 10z'></path>
    </svg>
  )
}

const UserIcon = ({ size = 16 }) => {
  return (
    <svg
      height={size}
      width={size}
      fill='currentColor'
      viewBox='0 0 18 20'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z'></path>
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
  HeartIcon,
  DownloadIcon,
  PreviousIcon,
  NextIcon,
  DownIcon,
  UpIcon,
  UserIcon,
}
