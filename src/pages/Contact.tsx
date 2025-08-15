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
import { useState, lazy, Suspense } from "react"
import emailjs from 'emailjs-com';
import toast from "react-hot-toast"

// Lazy load the Map component to reduce initial bundle size
const LazyMap = lazy(() => import("../components/ui/Map"))

const Contact = () => {
  // useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormInput>({ resolver: zodResolver(contactSchema) })

  // State
  const [isLoading, setIsLoading] = useState(false)

  // Submit Handler
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setIsLoading(true)

    try {
      // Just testing for now
      const serviceId = 'Yet to be added';
      const templateId = 'Yet to be added';
      const publicKey = 'Yet to be added';

      await emailjs.send(serviceId, templateId, data, publicKey);

      // Success message
      toast.success("Message sent successfully!", {
        position: "bottom-center",
        duration: 3000,
        style: { background: '#10B981', color: '#fff' }
      });

      // Form inputs will reset 3 seconds later after submitting
      setTimeout(() => {
        reset();
      }, 3000);

    }

    catch (error) {
      // Error message
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
        duration: 4000,
        style: { background: '#EF4444', color: '#fff' }
      });
    }

    finally {
      setIsLoading(false);
    }
  }

  // RENDER - GET IN TOUCH
  const renderGetInTouch = GetInTouch.map(({ Icon, title, description }, idx) => (
    <motion.div
      key={idx}
      className="flex flex-col justify-between gap-10"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
    >
      <div className="grid md:grid-cols-5 grid-cols-4">
        <motion.div
          className="w-12 h-12 px-3 py-3 rounded-full bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10 col-span-1"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className=" text-[#07254B]" />
        </motion.div>
        <div className="md:col-span-4 col-span-3">
          <h2 className="text-lg font-semibold text-[#07254B] mb-1">{title}</h2>
          <p className="text-[#5577A0] text-wrap">{description}</p>
        </div>
      </div>
    </motion.div>
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
          transition={{ duration: 1 }}
        >
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-white w-full max-w-screen-3xl mx-auto lg:px-20 px-8 md:pt-8">
          <motion.div
            className="flex flex-col max-w-2xl"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
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
        <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 pt-24 pb-24 lg:px-16 px-8 lg:gap-32 gap-24">
          <motion.div
            className="lg:col-span-2 rounded-xl shadow-xl shadow-indigo-300 border border-[#CEF3FF] p-8"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
          >
            <motion.h2
              className="md:text-3xl text-2xl font-bold text-[#07254B] mb-8"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.2 }}
            >
              Send us a message!
            </motion.h2>
            <form onSubmit={(handleSubmit(onSubmit))} className="space-y-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
              >
                <div className="md:space-x-6">
                  <Input placeholder="Full Name" {...register("full_name")} />
                  <ErrorMessage msg={errors?.full_name?.message} />
                </div>
                <div className="md:space-x-6">
                  <Input placeholder="Company Name" {...register("company_name")} />
                  <ErrorMessage msg={errors?.company_name?.message} />
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
              >
                <div>
                  <Input placeholder="Email Address" {...register("email")} />
                  <ErrorMessage msg={errors?.email?.message} />
                </div>
                <div>
                  <Input placeholder="Phone" {...register("phone")} />
                  <ErrorMessage msg={errors?.phone?.message} />
                </div>
              </motion.div>
              <motion.div
                className="grid grid-cols-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
              >
                <Textarea placeholder="Write a message..." {...register("message")} />
                <ErrorMessage msg={errors?.message?.message} />
              </motion.div>
              <motion.div
                className="grid grid-cols-1 gap-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
              >
                <Button type="submit" className="bg-[#18375f] w-full hover:bg-[#284975] hover:-translate-y-1 hover:scale-101" isLoading={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </motion.div>
            </form>
          </motion.div>
          {/* Get In Touch */}
          <motion.div
            className="rounded-xl shadow-xl shadow-indigo-300 border border-[#CEF3FF] p-8 md:col-span-1 md:mx-auto md:w-3/4 lg:w-auto"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
          >
            <motion.h1
              className="text-center md:text-3xl text-2xl mb-10 font-bold text-[#07254B]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.2 }}
            >
              Get In Touch
            </motion.h1>
            <div className="flex flex-col justify-between gap-12">
              {renderGetInTouch}
            </div>
          </motion.div>
        </div>
        {/* Map */}
        <motion.div
          className="container mx-auto lg:px-16 px-8 mb-24"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: "spring", stiffness: 80, damping: 25, duration: 1.2 }}
        >
          <div className="rounded-xl shadow-xl shadow-indigo-300 border-2 border-[#316cb9] overflow-hidden">
            <Suspense fallback={<div className="h-[450px] bg-gray-200 animate-pulse flex items-center justify-center">Loading map...</div>}>
              <LazyMap />
            </Suspense>
          </div>
        </motion.div>

      </section>
    </div>
  )
}

export default Contact
