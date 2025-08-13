import { motion } from "framer-motion"
import { GetInTouch } from "../data"
import Input from "../components/ui/Input"
import { useForm, type SubmitHandler } from "react-hook-form"
import type { IFormInput } from "../interfaces"
import Button from "../components/ui/Button"
import ErrorMessage from "../components/ui/ErrorMessage"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactSchema } from "../validation"
import Textarea from "../components/ui/TextArea"
import Map from "../components/ui/Map"


const Contact = () => {
  // useForm
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: zodResolver(contactSchema) })

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  // RENDER - GET IN TOUCH
  const renderGetInTouch = GetInTouch.map(({ Icon, title, description }, index) => (
    <div key={index} className="flex flex-col justify-between gap-10">
      <div className="grid md:grid-cols-5 grid-cols-4">
        <div className="w-12 h-12 px-3 py-3 rounded-full bg-[#E6E9ED] col-span-1">
          <Icon className=" text-[#07254B]" />
        </div>
        <div className="md:col-span-4 col-span-3">
          <h3 className="text-lg font-semibold text-[#07254B] mb-1">{title}</h3>
          <p className="text-[#5577A0] text-wrap">{description}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      {/*Hero Section */}
      <section className="relative h-[48vh] py-40 lg:py-0 flex items-center bg-gradient-to-r from-[#09253b] to-[#0e4d6d] overflow-hidden">
        {/* Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-8 md:pt-8">
          <motion.div
            className="flex flex-col max-w-2xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-wrap md:text-nowrap mb-6">
              Contact Us for Trusted <span className="text-[#38d49c]">Marine</span> Guidance
            </h1>
            <p className="md:text-xl text-lg text-[#f0f0f0]">
              Get expert insights and solutions that keep your operations safe, efficient, and future-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/*Main Content Section*/}
      <section className="relative z-10 bg-[#F8FDFF]">
        {/* Contact Form */}
        <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 pt-24 pb-24 lg:px-16 px-8 lg:gap-32 gap-24">
          <div className="lg:col-span-2 rounded-xl shadow-xl shadow-indigo-300 border border-[#CEF3FF] p-8">
            <h2 className="md:text-3xl text-2xl font-bold text-[#07254B] mb-8">Send us a message!</h2>
            <form onSubmit={(handleSubmit(onSubmit))} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:space-x-6">
                  <Input placeholder="Full Name" {...register("full_name")} />
                  <ErrorMessage msg={errors?.full_name?.message} />
                </div>
                <div className="md:space-x-6">
                  <Input placeholder="Company Name" {...register("company_name")} />
                  <ErrorMessage msg={errors?.company_name?.message} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <Input placeholder="Email Address" {...register("email")} />
                  <ErrorMessage msg={errors?.email?.message} />
                </div>
                <div>
                  <Input placeholder="Phone" {...register("phone")} />
                  <ErrorMessage msg={errors?.phone?.message} />
                </div>
              </div>
              <div className="grid grid-cols-1">
                <Textarea placeholder="Write a message..." {...register("message")} />
                <ErrorMessage msg={errors?.message?.message} />
              </div>
              <div className="grid grid-cols-1 gap-8">
                <Button type="submit" className="bg-[#18375f] w-full hover:bg-[#284975]">Submit</Button>
              </div>
            </form>
          </div>
          {/* Get In Touch */}
          <div className="rounded-xl shadow-xl shadow-indigo-300 border border-[#CEF3FF] p-8 md:col-span-1 md:mx-auto md:w-3/4 lg:w-auto">
            <h1 className="text-center md:text-3xl text-2xl mb-10 font-bold text-[#07254B]">Get In Touch</h1>
            <div className="flex flex-col justify-between gap-12">
              {renderGetInTouch}
            </div>
          </div>
        </div>
        {/* Map */} 
        <div className="container mx-auto lg:px-16 px-8 mb-24">
          <div className="rounded-xl shadow-xl shadow-indigo-300 border-4 border-[#5a92b3] overflow-hidden">
            <Map />
          </div>
        </div>

      </section>
    </div>
  )
}

export default Contact
