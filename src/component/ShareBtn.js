"use client"
import { LinkIcon } from "@heroicons/react/24/solid"

const ShareBtn = () => {
  return (
    <button className="text-green-700 font-bold hover:cursor-pointer hover:text-red-700">

<LinkIcon  className="inline-block mr-2 w-5 h-5"/>
     Share Link
    </button>
  )
}

export default ShareBtn