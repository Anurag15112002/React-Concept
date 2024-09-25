import {React ,memo} from 'react'

const ChildA = ({learning}) => {
  console.log("tu phir se kyo run kara be")
  return (
    <div></div>
  )
}

export default memo(ChildA)