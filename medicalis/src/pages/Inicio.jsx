import React from "react";
import CustomBanner1 from "../components/Utilities/CustomBanner1";
import CustomInfo from "../components/Utilities/CustomInfo";
import CustomCard from "../components/Utilities/CustomCard";
import CustomTittle from "../components/Utilities/CustomTittle";
import CustomBanner2 from "../components/Utilities/CustomBanner2";
import CustomCard2 from "../components/Utilities/CustomCard2";
import CustomCard3 from "../components/Utilities/CustomCard3";
import CustomBanner3 from "../components/Utilities/CustomBanner3";
import CustomReviews from "../components/Utilities/CustomReviews";
import CustomBanner4 from "../components/Utilities/CustomBanner4";
import CustomContent from "../components/Utilities/CustomContent";

const Inicio = () => {
  return (
    <div className="w-[100%] overflow-hidden mx-0">
      {/* INICIO BANNER PRINCIOPAL */}
      <CustomBanner1
        tittle="Your Partner in
        Health and Wellness"
        tittleClass="text-[#274760] text-[2.5rem] font-semibold pt-10"
        description="We are committed to providing you with the best
          medical
          and healthcare services to help you live
          healthier and
          happier."
        descriptionClass="text-[#274760] text-[1.rem] font-medium"
        imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085002/hero_img_adhhaw.png"
        imgClass="h-full w-full"
      ></CustomBanner1>
      {/* FIN BANNER PRINCIOPAL */}

      <CustomInfo
        imgSrc1="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085009/phone_ufsx1m.png"
        tittle1="Hotline"
        description1="123 - 456 - 7890"
        imgSrc2="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084996/ambulance_ckrwdo.png"
        tittle2="Ambulance"
        description2="876 - 256 - 876"
        imgSrc3="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085003/location_jbrk05.png"
        tittle3="Location"
        description3="New York, US"
      ></CustomInfo>
      {/* FIN INFO */}

      {/* INICIO OUR VALUES */}
      <div className="bg-white h-[100%]">
        <CustomTittle
          tittle="Our Values"
          tittleClass="text-[#274760] text-[2.5rem] "
        ></CustomTittle>
        <div className="flex justify-center space-x-12">
          <CustomCard
            containerClass="mt-[2rem]"
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/compassion_gahzom.png"
            tittle="Compassion"
            description="We understand that seeking medical
            care can be a stressful and emotional
            experience, and we strive to create a 
            welcoming and supportive environment
            that pubs our patients at ease and every
            one."
          ></CustomCard>
          <CustomCard
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085000/excellence_kukhuk.png"
            tittle="Excellence"
            description="We are committed to providing excellent
            medical care and services to our 
            patients. We believe in continuously
            improving our skills, knowledge, and
            resources to ensure that we deliver the
            highest quality care possible."
          ></CustomCard>
          <CustomCard
            containerClass="mt-[2rem]"
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085003/integrity_kvyizp.png"
            tittle="Itegrity"
            description="We believe in practicing medicine with
            integrity and honesty. We are 
            transparent in our communication and 
            decision-making processes, and we
            always put our patient's interests firts &
            provide best solution."
          ></CustomCard>
        </div>
        <div className="flex justify-center space-x-20">
          <CustomCard
            containerClass="mt-[2rem]"
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/compassion_gahzom.png"
            tittle="Respect"
            description="We treat all individuals with respect and 
            dignity, regardless of their background,
            beliefs, or circumstances. We believe
            that every person deserves to be treated
            with compassion and kindness."
          ></CustomCard>
          <CustomCard
            containerClass="mt-[2rem]"
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/compassion_gahzom.png"
            tittle="Teamwork"
            description="We believe in working collaboratively
            with our team membersvand other 
            healthcare professionals tos provide
            comprehensive and effective care to our
            patients."
          ></CustomCard>
        </div>
      </div>
      {/* FIN OUR VALUES */}

      {/* INICIO ABOUT US*/}
      <div className="bg-white h-[100vh] w-screen">
        <CustomBanner2
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/aboutus_panvsv.png"
          tittle="About Us"
          subtittle="PRO HEALTH"
          imgSrc2="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085888/arrow-right_kubz4k.png"
          description="ProHealth is a team of experienced
          medical professionals"
          descriptionClass="text-[#8F9FAC] text-[1.2rem] pl-5"
          description2="Dedicated to providing top-quality healthcare services.
          We believe in a holistic approach to healthcare that
          focuses on treating the whole person, not just the ilness
          or symptoms."
          descriptionClass2="text-[#8F9FAC] text-[0.8rem] pl-10 pt-5"
        ></CustomBanner2>
      </div>
      {/* FIN ABOUT US*/}

      {/* INICIP DEPARTMENTS*/}
      <div className="h-[100vh] w-screen">
        <div className="bg-[#A9CFF3] w-[90vw] h-[40vh] rounded-[2rem] shadow-2xl mx-auto flex justify-center">
          <h1 className="text-[#274760] text-[2.5rem] font-semibold py-[4rem]">
            Departments
          </h1>
        </div>
        <div className="flex space-x-8 justify-center relative top-[-7.5rem] z-10">
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/emergency_jbvb0t.png"
            tittle="Emergency 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085008/pediatric_sate7n.png"
            tittle="Pediatric 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085001/gynecology_np4arl.png"
            tittle="Gynecology 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084998/cardiology_wk8gey.png"
            tittle="Cardiology 
            Department"
          ></CustomCard2>
          <CustomCard2
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/neurology_gwcowu.png"
            tittle="Neurology 
            Department"
          ></CustomCard2>
        </div>
        <div className="mt-[-5rem]">
          <div className="w-[90vw] pl-[5vw] pb-[2rem]">
            <h1 className="text-[#274760] text-[2.5rem] font-semibold">
              Departments
            </h1>
          </div>
        </div>
        <div className="flex space-x-32 justify-center">
          <CustomCard3
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/award_qwijid.png"
            tittle="Malcolm Baldrige
              National Quality
              Award"
            description="This award recognizes
              healthcare organizations that
              have demonstrated excellence
              in leadership, strategyc
              planning, customer and
              employee satisfaction, and
              operational efficiency."
          ></CustomCard3>
          <CustomCard3
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/award_qwijid.png"
            tittle="HIMSS Davies
              Award"
            description="This award recognizes
              healthcare organizations that
              have used health information
              technology to improve patient
              aoutcomes and reduce costs."
          ></CustomCard3>
          <CustomCard3
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/award_qwijid.png"
            tittle="Healthgrades 
              National Best
              Hospital"
            description="This recognition is given to
              hospitals that have achieved
              high ratings for clinical quality
              and patient safety across
              multiple specialities and
              procedures."
            descriptionClass="text-[#8F9FAC] text-[1.4rem] pt-5"
          ></CustomCard3>
          <CustomCard3
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/award_qwijid.png"
            tittle="Joint
              Commission Gold
              Seal of Approval"
            description="This recognition is given to
              hospitals that have met
              rigorous standars for patient
              safety and quality of care."
          ></CustomCard3>
        </div>
      </div>
      {/* FIN DEPARTMENTS*/}

      {/* INICIO AGENDAR*/}
      <section className="bg-[#A9CFF3] flex justify-center h-[50vh] w-[100vw] mt-[10rem]">
        <CustomBanner3
          tittle="Don't Let Your Health
          Take a Backseat!"
          description="Schedule an appointment with one of our experienced
          medical professionals today!"
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085008/nurse_obvkei.png"
        ></CustomBanner3>
      </section>
      {/* FIN AGENDAR*/}

      {/* INICIO REVIEWS*/}
      <section className="bg-white h-[100vh] w-[100vw] flex justify-center">
        <CustomReviews
          tittle="Some Reviews"
          subtittle="OF OUR CLIENTS"
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/comillas_tutosi.png"
          description="The pediatrician was great with him and made him feel at 
          ease, and the entire staff was kind and attentive. I recently
          had to bring my child to ProHealth for a minor injury, and I 
          was so impressed with the care he received."
          voteImg="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085011/rating_pbanuu.png"
        ></CustomReviews>
      </section>
      {/* FIN REVIEWS*/}

      {/* INICIO FIND US HERE */}
      <section className=" w-[100%] flex flex-col">
        <CustomBanner4
          tittle="Find Us Here"
          tittleClass="text-[#274760] text-[2rem] font-semibold"
        ></CustomBanner4>
        <div className="w-[90vw] mt-[6rem] bg-red-50 mx-auto">
          <img
            src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/map_kueyba.png"
            alt="img"
            className="w-full h-[60vh]"
          />
        </div>
        <div>
          <CustomContent
            tittle="Don’t Let Your Health
            Take a Backseat!"
            tittleClass="text-[#274760] text-[2rem] font-semibold"
            description="Schedule an appointment with one of our experienced
            medical professionals today!"
            descriptionClass="text-[#8F9FAC] text-[1rem] pt-5"
          ></CustomContent>
        </div>
      </section>
      {/* FIN FIND US HERE */}
    </div>
  );
};

export default Inicio;
