"use client";

import Banner from "@/app/_components/utils/Banner";
import Button from "@/app/_components/utils/Button";
import { GoArrowUpRight } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";
import Section from "../_components/utils/Section";
import Image from "next/image";
import { useState } from "react";

export default function AuthLayout({ children }) {
  const [expandedIndex, setExpandedIndex] = useState(null); // Track which item is expanded

  // Function to toggle the selected item
  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if the same item is clicked
    } else {
      setExpandedIndex(index); // Expand the clicked item
    }
  };

  const faqItems = [
    {
      question: "What methods of payments are supported?",
      answer:
        "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "Can I cancel at anytime?",
      answer:
        "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "How do I get a receipt for my purchase?",
      answer:
        "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "Which license do I need?",
      answer:
        "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer:
        "Cras vitae ac nunc orci. Purus amet tortor non at phasellus ultricies hendrerit. Eget a, sit morbi nunc sit id massa. Metus, scelerisque volutpat nec sit vel donec. Sagittis, id volutpat erat vel.",
    },
  ];
  return (
    <main className="space-y-8">
      <Banner
        title="WORK YOUR WAY"
        subtitle="Give your visitor a smooth online experience with a solid UX design."
        backgroundImage="/images/Background.png"
      >
        <Button onClick={() => console.log("Button was clicked!")}>
          Become Seller
          <GoArrowUpRight className="text-2xl" />
        </Button>
      </Banner>
      <Section
        size="large"
        className="space-y-16 bg-[url('/images/form-mascot.png')] bg-top bg-contain bg-no-repeat"
      >
        {children}
      </Section>
      <Section className="flex md:flex-row flex-col justify-between gap-[10vw]">
        <div className="whitespace-nowrap">
          <p className="w-fit font-semibold">
            For Hiring
            <span className="block w-full h-[2px] bg-black mt-2"></span>
          </p>
          <p className="text-grey mt-4">For freelancing</p>
        </div>
        <div className="space-y-4">
          <p className="text-lg font-semibold">For Hiring</p>
          <p className="pb-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <Button variant="transparent">
            Get Started <GoArrowUpRight />
          </Button>
        </div>
      </Section>
      <Section className="space-y-16">
        <div>
          <h2 className="h3 nasalization text-dark">NEED SOMETHING DONE?</h2>
          <p>Most viewed and all-time top-selling services</p>
        </div>
        <ul className="grid md:grid-cols-4 sm:grid-cols-2 grid-flow-row gap-16">
          <li className="space-y-4">
            <Image src="/icons/icon.svg" width={75} height={75} />
            <p className="text-xl font-semibold">Post a job</p>
            <p className="text-sm">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </li>
          <li className="space-y-4">
            <Image src="/icons/icon-1.svg" width={75} height={75} />
            <p className="text-xl font-semibold">Choose freelancers</p>
            <p className="text-sm">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </li>
          <li className="space-y-4">
            <Image src="/icons/icon-2.svg" width={75} height={75} />
            <p className="text-xl font-semibold">Pay safely</p>
            <p className="text-sm">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </li>
          <li className="space-y-4">
            <Image src="/icons/icon-3.svg" width={75} height={75} />
            <p className="text-xl font-semibold">We're here to help</p>
            <p className="text-sm">
              It’s free and easy to post a job. Simply fill in a title,
              description.
            </p>
          </li>
        </ul>
      </Section>
      <Section className="grid lg:grid-cols-2 p-0">
        <div className="lg:order-1 order-2 aspect-square bg-[#F4EDFB] md:p-16 p-8 flex flex-col justify-center gap-16">
          <h2 className="sm:h5 text-2xl leading-tight font-semibold md:text-left text-center">
            A whole world of freelance talent at your fingertips
          </h2>
          <ul className="space-y-8">
            <li className="flex sm:flex-row flex-col items-start gap-4">
              <Image src="/icons/icon-4.svg" width={50} height={50} />
              <div>
                <p className="text-lg font-semibold mb-2">Proof of quality</p>
                <p className="text-sm">
                  Check any pro’s work samples, client reviews, and identity
                  verification.
                </p>
              </div>
            </li>
            <li className="flex sm:flex-row flex-col items-start gap-4">
              <Image src="/icons/icon-2.svg" width={50} height={50} />
              <div>
                <p className="text-lg font-semibold mb-2">
                  No cost until you hire
                </p>
                <p className="text-sm">
                  Interview potential fits for your job, negotiate rates, and
                  only pay for work you approve.
                </p>
              </div>
            </li>
            <li className="flex sm:flex-row flex-col items-start gap-4">
              <Image src="/icons/icon-5.svg" width={50} height={50} />
              <div>
                <p className="text-lg font-semibold mb-2">Safe and secure</p>
                <p className="text-sm">
                  Focus on your work knowing we help protect your data and
                  privacy. We’re here with 24/7 support if you need it.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:order-2 order-1 flex justify-center items-center">
          <Image
            src="/images/mascot-working-on-laptop.svg"
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      </Section>
      <ul className="col-span-2 grid md:grid-cols-4 grid-cols-2 gap-8">
        <li className="text-center">
          <p className="h4 font-bold">834M</p>
          <span className="text-sm">Total Freelancers</span>
        </li>
        <li className="text-center">
          <p className="h4 font-bold">732M</p>
          <span className="text-sm">Positive Reviews</span>
        </li>
        <li className="text-center">
          <p className="h4 font-bold">90M</p>
          <span className="text-sm">Orders Received</span>
        </li>
        <li className="text-center">
          <p className="h4 font-bold">236M</p>
          <span className="text-sm">Projects Completed</span>
        </li>
      </ul>
      <Section id="faq" className="max-w-[1280px] space-y-16 mx-auto">
        <div className="text-center">
          <h1 className="h4 font-semibold">Frequently asked questions</h1>
          <p>Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <ul>
          {faqItems.map((item, index) => (
            <li
              key={index}
              className={`p-8 space-y-6 rounded transition-all duration-300 ${
                expandedIndex === index
                  ? "max-h-96 bg-[#F4EDFB]"
                  : "md:max-h-16 max-h-20"
              } overflow-hidden`}
              onClick={() => toggleItem(index)}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <span className="font-semibold">{item.question}</span>
                {expandedIndex === index ? (
                  <FiMinus className="text-xl" />
                ) : (
                  <FiPlus className="text-xl" />
                )}
              </div>
              <p
                className={`text-sm transition-all duration-300 ${
                  expandedIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
