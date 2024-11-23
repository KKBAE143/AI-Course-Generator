import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

function TopicDescription() {
  const {userCourseInput,setUserCourseInput} = useContext(UserInputContext)
  const handleInputChange = (fieldName,value)=>{
    setUserCourseInput(prev=>({...prev,[fieldName]:value}))
  }
  return (
    <div className="md:mx-20 sm:mx-5 lg:mx-44">
      <div className="mt-5">
        <label>
         💡 Select the soft skill you want to develop (e.g., Communication, Leadership, Time Management, etc.):
        </label>
        <Input 
          placeholder="Enter soft skill" 
          onChange={(e)=>handleInputChange('topic',e.target.value)} 
          defaultValue={userCourseInput?.topic} 
          className="h-14 text-lg"
        />
      </div>
      <div className="mt-5">
        <label>
         📝 Tell us about your current role and specific areas you'd like to improve in this soft skill (Optional):
        </label>
        <Textarea 
          placeholder="Describe your goals and current challenges" 
          onChange={(e)=>handleInputChange('description',e.target.value)} 
          defaultValue={userCourseInput?.description} 
          className="h-14 text-lg"
        />
      </div>
    </div>
  );
}

export default TopicDescription;
