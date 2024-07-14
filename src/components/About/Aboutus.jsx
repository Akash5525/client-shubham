import React, { useEffect, useRef } from 'react';
import img from '../../Image/anime.jpg';
import img2 from '../../Image/1.jpg';
import img3 from '../../Image/2.jpg';
import img4 from '../../Image/3.jpg';
import img5 from '../../Image/5.jpg';

export function Aboutus() {
  const aboutUsRef = useRef(null);
  const ourStoryRef = useRef(null);
  const milestonesRef = useRef(null);
  const teamRef = useRef(null);
  const servicesRef = useRef(null);

  const handleScrollEffect = (ref) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        } else {
          entry.target.classList.remove('animate-fadeIn');
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  };

  useEffect(() => {
    const cleanUpAboutUs = handleScrollEffect(aboutUsRef);
    const cleanUpOurStory = handleScrollEffect(ourStoryRef);
    const cleanUpMilestones = handleScrollEffect(milestonesRef);
    const cleanUpTeam = handleScrollEffect(teamRef);
    const cleanUpServices = handleScrollEffect(servicesRef);

    return () => {
      cleanUpAboutUs();
      cleanUpOurStory();
      cleanUpMilestones();
      cleanUpTeam();
      cleanUpServices();
    };
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center p-8">
        {/* Intro Section */}
        <div ref={aboutUsRef} className="transition-opacity duration-1000 opacity-0">
          <h5 className="text-gray-700 mb-2 text-sm lg:text-xl tracking-wide uppercase">
            About Us
          </h5>
          <h1 className="text-gray-900 mb-8 text-3xl lg:text-5xl font-bold">
            Crafting Spaces with Vision and Precision
          </h1>
          <p className="mb-12 text-lg font-light max-w-4xl mx-auto text-gray-600">
            At [Your Architecture Firm Name], we believe in transforming ideas into tangible realities. With over a decade of experience in the industry, our team of expert architects and designers is dedicated to creating spaces that inspire and resonate with their purpose.
          </p>
        </div>

        {/* Our Story Section */}
        <div ref={ourStoryRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 transition-opacity duration-1000 opacity-0">
          <img
            src={img}
            alt="Our Story"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <div className="text-left p-6">
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 mb-4">
              Founded in [Year], our journey began with a vision to bring innovative design solutions to life. Over the years, we have expanded our portfolio to include residential, commercial, and industrial projects, each crafted with the highest standards of quality and creativity.
            </p>
            <p className="text-gray-700 mb-4">
              We are committed to sustainable practices and using modern technology to deliver exceptional results. Our team thrives on challenges and works tirelessly to exceed client expectations, every step of the way.
            </p>
            <a href="/portfolio" className="text-blue-600 hover:underline">
              Explore Our Portfolio
            </a>
          </div>
        </div>

        {/* Timeline Section */}
        <div ref={milestonesRef} className="bg-white rounded-lg shadow-lg p-8 mb-16 transition-opacity duration-1000 opacity-0">
          <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-8">
            Our Milestones
          </h2>
          <div className="relative pl-10 lg:pl-20">
            {/* Timeline Entry 1 */}
            <div className="mb-8 flex items-start">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full z-10"></div>
              <div className="absolute left-0 top-0 w-1 bg-blue-600 h-full z-0"></div>
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  2010: Inception
                </h3>
                <p className="text-gray-700">
                  Our firm was established with a mission to innovate and elevate architectural designs. The journey began with a small team of passionate architects.
                </p>
              </div>
            </div>

            {/* Timeline Entry 2 */}
            <div className="mb-8 flex items-start">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full z-10"></div>
              <div className="absolute left-0 top-0 w-1 bg-blue-600 h-full z-0"></div>
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  2015: Expansion
                </h3>
                <p className="text-gray-700">
                  We expanded our operations and moved to a larger office to accommodate our growing team and client base.
                </p>
              </div>
            </div>

            {/* Timeline Entry 3 */}
            <div className="mb-8 flex items-start">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full z-10"></div>
              <div className="absolute left-0 top-0 w-1 bg-blue-600 h-full z-0"></div>
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  2018: Major Project Wins
                </h3>
                <p className="text-gray-700">
                  We secured several high-profile projects that helped establish our reputation as leaders in the industry.
                </p>
              </div>
            </div>

            {/* Timeline Entry 4 */}
            <div className="mb-8 flex items-start">
              <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full z-10"></div>
              <div className="absolute left-0 top-0 w-1 bg-blue-600 h-full z-0"></div>
              <div className="ml-12">
                <h3 className="text-xl font-semibold text-gray-900">
                  2021: Going Global
                </h3>
                <p className="text-gray-700">
                  We expanded our services internationally, opening offices in multiple countries and undertaking global projects.
                </p>
              </div>
            </div>

            {/* Add more timeline entries as needed */}
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef} className="bg-white rounded-lg shadow-lg p-8 mb-16 transition-opacity duration-1000 opacity-0">
          <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Repeat this block for each team member */}
            <div className="text-center">
              <img
                src={img5}
                alt="Team Member 1"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-gray-900 text-xl font-semibold">
                Shubham Dangi
              </h3>
              <p className="text-gray-600">
                Lead Architect
              </p>
            </div>
            <div className="text-center">
              <img
                src={img3}
                alt="Team Member 2"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-gray-900 text-xl font-semibold">
                Mohit dangi
              </h3>
              <p className="text-gray-600">
                Senior Designer
              </p>
            </div>
            <div className="text-center">
              <img
                src={img4}
                alt="Team Member 3"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-gray-900 text-xl font-semibold">
                Akki
              </h3>
              <p className="text-gray-600">
                Project Manager
              </p>
            </div>
            <div className="text-center">
              <img
                src={img5}
                alt="Team Member 4"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-gray-900 text-xl font-semibold">
                Kapil
              </h3>
              <p className="text-gray-600">
                Structural Engineer
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="flex flex-col lg:flex-row bg-gray-200 rounded-lg shadow-lg p-8 transition-opacity duration-1000 opacity-0">
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-gray-900 text-2xl lg:text-3xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-gray-700 mb-6">
              We offer a comprehensive range of architectural services, from initial consultation and design to project management and completion. Our expertise spans various sectors, including residential, commercial, and industrial projects.
            </p>
            <p className="text-gray-700 mb-6">
              Our approach is client-centric, ensuring that every project is tailored to meet the unique needs and aspirations of our clients. We are passionate about creating spaces that are not only functional but also aesthetically pleasing and sustainable.
            </p>
            <a href="/services" className="text-blue-600 hover:underline">
              Learn More About Our Services
            </a>
          </div>
          <img
            src={img}
            alt="Our Services"
            className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
