"use client";

import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { fadeIn } from "@/components/motions/variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Enable button only when all fields have values
  useEffect(() => {
    const { firstname, lastname, email, phone, service, message } = formData;
    const allFieldsFilled =
      firstname && lastname && email && phone && service && message;
    setIsButtonDisabled(!allFieldsFilled);
  }, [formData]);

  // Form input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData and append each field
    const form = new FormData();
    form.append("firstname", formData.firstname);
    form.append("lastname", formData.lastname);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("service", formData.service);
    form.append("message", formData.message);

    try {
      const response = await fetch("https://formspree.io/f/xvojedzq", {
        method: "POST",
        body: form, // Use FormData instead of JSON
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        // Reset form fields after successful submission
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  return (
    <section className="py-6 mt-20 xl:mt-28" id="contact">
      <Toaster />
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-8">
          {/* socials */}
          <motion.article
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex flex-col items-center w-full xl:w-2/5 space-y-6 mx-auto xl:mx-0"
          >
            <h2 className="text-3xl text-accent font-semibold">Let's Talk</h2>
            <p className="text-center text-sm text-white">
              Have a question or want to hire me? I'm here to help. Feel free to
              reach out via social media handles or directly via email. Thank
              you!
            </p>
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles={"flex gap-6"}
                iconStyles={
                  "w-9 h-9 border border-accent rounded-full flex items-center justify-center text-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                }
              />
            </div>
          </motion.article>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="" className="transform transition-transform duration-300 hover:scale-105">Send Message</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#323237] border-none w-[90%] xl:w-full rounded-lg">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-center pb-4 text-2xl">
                  Send a Message
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* input */}
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        name="firstname"
                        type="text"
                        placeholder="Firstname"
                        required
                        value={formData.firstname}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="lastname"
                        type="text"
                        placeholder="Lastname"
                        required
                        value={formData.lastname}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* select */}
                    <Select
                      name="service"
                      required
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          service: value,
                        }))
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a service</SelectLabel>
                          <SelectItem value="Web Development">
                            Web Development
                          </SelectItem>
                          <SelectItem value="Graphic Design">
                            Graphic Design
                          </SelectItem>
                          <SelectItem value="Branding">Branding</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {/* textarea */}
                    <Textarea
                      className="h-[200px]"
                      name="message"
                      placeholder="Type your message here."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    <AlertDialogFooter>
                      <AlertDialogCancel className="hover:border-red-500 hover:text-red-500 hover:bg-transparent border-red-white/60 text-white">
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        type="submit"
                        disabled={isButtonDisabled}
                      >
                        Send
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </form>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </section>
  );
};

export default Contact;
