import React from 'react'
import { HiOutlineBookOpen, HiOutlineChartBar, HiOutlineClock, HiOutlinePlayCircle } from 'react-icons/hi2'
function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-sm mt-3'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='flex gap-2'>
            <HiOutlineChartBar className='text-4xl text-primary'/>
            <div>
                <h2 className='text-xs text-gray-500'>Skill Level</h2>
                <h2 className='font-medium text-lg'>{course?.level}</h2>
            </div>
        </div>
        <div className='flex gap-2'>
            <HiOutlineClock className='text-4xl text-primary'/>
            <div>
                <h2 className='text-xs text-gray-500'>Duration</h2>
                <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.duration}</h2>
            </div>
        </div>
        <div className='flex gap-2'>
            <HiOutlineBookOpen className='text-4xl text-primary'/>
            <div>
                <h2 className='text-xs text-gray-500'>No. Of Chapter</h2>
                <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.noOfChapters}</h2>
            </div>
        </div>
        <div className='flex gap-2'>
            <HiOutlinePlayCircle className='text-4xl text-primary'/>
            <div>
                <h2 className='text-xs text-gray-500'>Video Included?</h2>
                <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
