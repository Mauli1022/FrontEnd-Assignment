import React from "react";

export default function Testimonial() {
  return (
    <div className="testmain w-full flex flex-col items-center justify-center px-4 py-10">
      <div className="testimonial relative ml-0 sm:ml-10 w-full max-w-[1140px] h-auto sm:h-[47.688rem] flex flex-col gap-6">
        <h2 className="heading font-semibold text-2xl sm:text-[3rem] text-[rgba(14,31,81,1)] text-center sm:text-left">
          Customer Testimonials
        </h2>
        <h3 className="subheading text-base sm:text-[1.15rem] text-[rgba(14,31,81,1)] 
        text-center sm:text-left">
          This tool has transformed my productivity and organization!
        </h3>

        <div className="frontSection relative z-0 bg-white flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-[3.75rem] w-full 
        sm:w-[67.813rem] h-auto sm:h-[30.625rem] mx-auto my-12 px-4 sm:px-0">
          <div
            className="
              backSection absolute z-[-1] left-0 top-0 
              w-72 h-80 sm:w-[29.375rem] sm:h-[33.875rem]
              bg-white border-[16px] border-[rgba(255,62,84,1)] rounded-md
            "
          ></div>

          <div className="leftSection relative z-10 flex flex-col justify-between bg-white w-full lg:w-[34.813rem] h-auto sm:h-[18.938rem]">
            <div className="text-xl sm:text-[2.25rem] font-bold leading-snug mb-4">
              Using this website has made my tasks so much easier! I can't imagine my day without it."
            </div>
            <div className="flex items-center gap-3 h-auto sm:h-[3.063rem] w-full sm:w-[17.313rem] mb-4">
              <div className="redboxImage flex-shrink-0">
                <img src="/Rectangle.svg" alt="Red Box" className="w-10 h-10 sm:w-[3.063rem] sm:h-[3.063rem]" />
              </div>
              <div className="profile w-full sm:w-[12rem] h-auto sm:h-[3.063rem]">
                <div className="name text-lg sm:text-[1.225rem] font-bold">Sherri Cronin</div>
                <div className="about text-sm sm:text-base">Project Manager, TechCorp</div>
              </div>
            </div>
            <div className="flex gap-3 w-[5.75rem] h-[2.5rem]">
              <div className="circleWhite flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem] border border-[rgba(255,62,84,1)]">
                <img src="/arrowleft.svg" alt="Arrow Left" />
              </div>
              <div className="circleRed flex items-center justify-center rounded-full w-[2.5rem] h-[2.5rem] bg-[rgba(255,62,84,1)]">
                <img src="/arrowright.svg" alt="Arrow Right" />
              </div>
            </div>
          </div>

          <div className="rightSection z-10 w-full max-w-[21.75rem] pr-4 flex items-center justify-center h-auto sm:h-[23.125rem] border-[1rem] border-y-[rgba(255,62,84,1)] border-r-[rgba(255,62,84,1)] border-l-0">
            <img src="Img-1.svg" alt="Customer Testimonial" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
