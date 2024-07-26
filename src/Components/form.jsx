

const Form = () => {
  return (
    
    <div className="grid md:grid-cols-4 gap-y-5 gap-x-4">
      <input type="text" name="name" autoComplete="give-name" placeholder="YOUR NAME" className="bg-gray focus:border-yellow-500 focus:border-1  cursor-text  font-semibold h-9 border border-gray rounded-2xl outline-none md:col-span-2" />

      <input type="email" name="email" autoComplete="family-name" placeholder="YOUR EMAIL" className="bg-gray focus:border-yellow-500 focus:border-1  cursor-text  font-semibold h-9 border border-gray rounded-2xl outline-none md:col-span-2 " />

      <input type="text" name="subject" autoComplete="off" placeholder="YOUR SUBJECT" className="bg-gray focus:border-yellow-500 focus:border-1  cursor-text  font-semibold h-10 border border-gray rounded-2xl outline-none md:col-span-4" />

      <textarea name="message" autoComplete="off" placeholder="YOUR MESSAGE" className="bg-gray focus:border-yellow-500 focus:border-1  text-start cursor-text text-white font-semibold px-4 py-2 h-36 border border-gray rounded-2xl outline-none md:col-span-4 text-xs" />

    </div>
  )
}

export default Form