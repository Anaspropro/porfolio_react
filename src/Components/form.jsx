

const Form = () => {
  return (
    
    <div className="grid grid-cols-4 gap-y-5 gap-x-6">
      <input type="text" name="name" id="" placeholder="YOUR NAME" className="bg-gray-300 focus:border-yellow-500 border-none p-3 h-8 border rounded-2xl outline-none col-span-2 text-xs" />

      <input type="email" name="email" id="" placeholder="YOUR EMAIL" className="bg-gray-300 focus:border-yellow-500 border-none p-3 h-8 border rounded-2xl outline-none col-span-2 text-xs " />

      <input type="text" name="" id="" placeholder="YOUR SUBJECT" className="bg-gray-300 focus:border-yellow-500 border-none p-3 h-8 border rounded-2xl outline-none col-span-4 text-xs" />

      <input type="text" name="" id="" placeholder="YOUR MESSAGE" className="bg-gray-300 focus:border-yellow-500 border-none p-3 h-40 border rounded-2xl outline-none col-span-4 text-xs" />
      
    </div>
  )
}

export default Form