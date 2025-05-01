import Link from "next/link";
import {
  AlinaShahidImage,
  AnitaSritharanImage,
  GillImage,
  GinaChenImage,
  SamBarramImage,
  swatchImage,
} from "./Images";
import {
  ContactLensIcon,
  ContactLensImage,
  DryEyeIcon,
  DryEyeImage,
  EyeExamIcon,
  EyeExamImage,
  MyopiaIcon,
  MyopiaImage,
  PediatricEyeCareImage,
  PediatricIcon,
} from "../constants/Images";

import {
  FaEye,
  FaMicroscope,
  FaLightbulb,
  FaRobot,
  FaCamera,
  FaMedkit,
  FaSearchLocation,
} from "react-icons/fa";
export const OptometryServices = [
  {
    imageLink: "/Icons/Optometry-Icon1.webp",
    title: "Comprehensive Eye Exams",
    description:
      "Our eye exams help detect issues early and ensure your vision is at its best.",
    buttonText: "Book Your Eye Exam",
    buttonLink: "/book-exam",
  },
  {
    imageLink: "/Icons/Optometry-Icon2.webp",
    title: "Eyewear Collection",
    description:
      "Choose from our handcrafted and designer frames to suit your style and vision needs",
    buttonText: "Our Eyewear Collections",
    buttonLink: "/",
  },
];
// export const cardData = [
//   {
//     id: 1,
//     number: "01",
//     title: "Expertise",
//     description:
//       "Experienced optometrists committed to delivering quality eye care.",
//     iconPath: "/Icons/Optometry-Icon1.webp",
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Eye Care For All Ages",
//     description: "We offer essential eye care services for every age group.",
//     iconPath: "/Icons/Optometry-Icon2.webp",
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Personalized Treatment",
//     description:
//       "Get personalized eye care from the best optometrists in Toronto.",
//     iconPath: "/Icons/Optometry-Icon1.webp",
//   },
//   {
//     id: 4,
//     number: "04",
//     title: "Modern Optical Centre",
//     description:
//       "Full scope and family friendly optical store for your eyewear needs.",
//     iconPath: "/Icons/Optometry-Icon2.webp",
//   },
// ];

export const slides = [
  {
    title: "360 Eyecare",
    subtitle: "Your Neighbourhood Optometry Clinic",
    buttonText: "Book an Eye Exam",
    buttonLink: "book-exam",
    image: "/Slider1.webp",
  },
  {
    title: "Toronto Optometrists",
    subtitle: "Providing You with Expert Eye Care",
    buttonText: "About Us",
    buttonLink: "about-us",
    image: "/Slider2.webp",
  },
];
export const optometrists = [
  {
    id: 1,
    name: "Dr. Sam Baraam",
    slug: "dr-sam-baraam",
    image: SamBarramImage,
    description:
      "Dr. Sam Baraam is a certified optometrist with advanced training in specialty contact lenses, dry eye and ocular surface disease management.",
    longDescription: `Dr. Sam Baraam is a dedicated optometrist committed to providing accessible, patient-centered, and comprehensive eye care, including specialty services. He completed his post-secondary education in Cellular Biology at the University of Western Ontario before earning his Doctor of Optometry degree from the prestigious Pennsylvania College of Optometry at Salus University.

During his training, Dr. Baraam gained extensive experience in ocular disease at the world-renowned Veterans Affairs Hospital in Connecticut and at SightMD, a leading refractive laser surgery and cataract center in Philadelphia. He further received advanced training in pediatrics and binocular vision, earning clinical honors from the Eye Institute at Salus University; an accolade awarded to those demonstrating both academic and clinical excellence.

Passionate about supporting patients with ocular surface disease, dry eye management, and specialty contact lenses, Dr. Baraam offers advanced in-office treatments, including Intense Pulsed Light (IPL therapy) and Radiofrequency (RF), to ensure the highest level of care. He also specializes in myopia management and provides orthokeratology lens fitting (OrthoK), helping to slow myopia progression in children and young adults.

Beyond his clinical practice, Dr. Baraam participated in the SOSH mission team, where he provided essential eye care to thousands of patients in underserved villages in Belize. He is certified by the Canadian National Boards (CSAO) and has successfully completed all three parts of the U.S. National Board Examinations (NBEO). As an active member of both the Ontario Association of Optometrists and the Canadian Association of Optometrists, he remains at the forefront of his field.

Dr. Baraam is the founder and president of 360 Eyecare, practicing at the Beaches and Yorkville locations. Outside of work, he enjoys running, cycling, and spending quality time with his family and friends.`,
  },
  {
    id: 2,
    name: "Dr. Anita Sritharan",
    slug: "dr-anita-sritharan",
    image: AnitaSritharanImage,
    description:
      "Dr. Anita Sritharan is dedicated to providing patient-centered eye care and developing unique treatment plans based on individual needs.",
    longDescription: `Dr. Anita Sritharan is a dedicated optometrist providing full-scope optometry with a special interest in dry eye treatments and myopia control. She has extensive experience managing conditions such as blepharitis, meibomian gland dysfunction, ocular rosacea, styes, and chalazions. To offer her patients the most effective treatments, she provides advanced in-office treatments, including intense pulsed light (IPL) and radio frequency (RF Therapy). Additionally, Dr. Sritharan specializes in fitting specialty contact lenses, including RGPs and OrthoK lenses.

Dr. Sritharan earned both her Honours Bachelor of Science Degree majoring in Biomedical Sciences, and thereafter received her Doctor of Optometry degree with distinction from the University of Waterloo. During her clinical training she gained valuable experience in binocular vision, pediatrics, low vision, and ocular disease. She is passionate about optometry and is dedicated to delivering patient-centered, comprehensive eye care.

She is licensed by the College of Optometrists of Ontario and certified to prescribe Therapeutic Pharmaceutical Agents. She is also a member of the Ontario Association of Optometrists and the Canadian Association of Optometrists.

On her spare time, she enjoys baking, swimming, and travelling.`,
  },
  {
    id: 3,
    name: "Dr. Gina Chen",
    slug: "dr-gina-chen",
    image: GinaChenImage,
    description:
      "Dr. Gina Chen is a passionate optometrist specializing in Orthokeratology lenses and enjoys practicing comprehensive eye care.",
    longDescription: `Dr. Gina Chen received both her Doctor of Optometry degree and Bachelor of Science degree with honours from the University of Waterloo. During her clinical studies, she obtained extensive training with a focus in retinal diseases, cataracts, and dry eye diseases at the Eye Associates of Pinellas in Pinellas Park, Florida.

She is passionate about her profession and strives to provide quality patient-centred eye care. Her main clinical experiences include primary care, ocular health and therapeutics, contact lenses, pediatrics, and refractive surgery co-management. As nearsightedness is a fast-growing eye condition in children, Dr. Chen has a professional interest in myopia control to slow the progression of nearsightedness in young patients through Orthokeratology (OrthoK) and innovative soft contact lenses.

Dr. Chen is licensed by the College of Optometrists of Ontario and is certified to prescribe Therapeutic Pharmaceutical Agents in Canada. She is a member of both the Ontario Association of Optometrists and the Canadian Association of Optometrists.

Dr. Chen is excited to be a member of the distinguished team at 360 Eyecare and practices out of the Downtown office – Rosedale. She conducts eye examinations with full fluency in English and Mandarin.

In her spare time, she enjoys exercising, travelling, reading, and being a foodie.`,
  },
  {
    id: 4,
    name: "Dr. Harmandeep Gill",
    slug: "dr-harmandeep-gill",
    image: GillImage,
    description:
      "Dr. Harmandeep Gill completed his Bachelor of Science in Biochemistry and Molecular Biology at University of Toronto.",
    longDescription: `Dr. Harmandeep Gill completed his Bachelor of Science in Biochemistry and Molecular Biology at the University of Toronto. He went on to receive his Doctor of Optometry from the University of Waterloo.

During his final year of optometry school, he completed his training in Detroit, Michigan at the John D. Dingell Veterans Affairs Medical Centre. While at the hospital, he gained clinical experience in the treatment and management of ocular diseases.

Dr. Gill works at the Yorkville location in Toronto. Outside of patient care, Dr. Gill enjoys photography, basketball, and squash.`,
  },
  {
    id: 5,
    name: "Dr. Alina Shahid",
    slug: "dr-alina-shahid",
    image: AlinaShahidImage,
    description:
      "Dr. Shahid is passionate about providing thorough eye care and building trusting relationships with her patients.",
    longDescription: `Dr. Alina Shahid graduated from McMaster University with her Bachelor of Science, majoring in Molecular Biology and Genetics. She then completed her Doctor of Optometry from Illinois College of Optometry in Chicago. Dr. Shahid has clinical experience serving diverse patient populations, with extensive training in ocular disease, contact lenses, pediatrics and dry eye disease. Her special interests include the treatment and management of glaucoma, myopia control and refractive surgery co-management. She is licensed to practice optometry in both the U.S. and Canada.

Dr. Shahid is an active member of the Ontario Association of Optometrists and the Canadian Association of Optometrists and is certified to prescribe Therapeutic Pharmaceutical Agents. Outside of the clinic, she has published an article in glaucoma research and has presented at the American Academy of Optometry. She has also received various honours during her clinical training, including membership with the Golden Key International Optometric Honour Society and Beta Sigma Kappa Honour Society.

Dr. Shahid is passionate about providing thorough eye care and building trusting relationships with her patients. She is fluent in English and Urdu. During her spare time, she loves travelling, reading and photography.`,
  },
  {
    id: 6,
    name: "Dr. Deepinder Swatch",
    slug: "dr-deepinder-swatch",
    image: swatchImage,
    description:
      "Dr. Deepinder Swatch has been certified to treat and manage ocular disease and is dedicated to providing thorough eye care.",
    longDescription: `Dr. Deepinder Swatch graduated from the University of Toronto with her Hon. Bachelor of Science in Biology, Chemistry and Philosophy in 2000. She then attended the Illinois College of Optometry and obtained her Doctorate of Optometry in 2005.

She gained a plethora of practical experience during her rotations at the Detroit Veteran’s Hospital, the Kresge Eye Institute and the Illinois Eye Institute. She has been NBEO certified to treat and manage ocular disease in the US since 2005 and Canada since 2006. After working briefly in the US, she moved back to Ontario in 2006 and has been practicing in a private practice setting ever since. She takes pride in providing very thorough and complete eye care to her patients.

Dr. Swatch enjoys learning and staying abreast of the latest developments in eye care in order to best serve her patients’ needs. In her spare time, she loves to bake and is an avid fashion and interior design lover.

She currently works at the Yorkville Rosedale location and looks forward to serving the community.`,
  },
];

export const whyChoose360 = [
  {
    head: "Led by the Best Optometrist in The Beaches, Toronto",
    para: "Our founder, Dr. Sam Baraam, is a highly respected optometrist known for expertise, compassionate care, and dedication to patient well-being.",
  },
  {
    head: "State-of-the-Art Technology & Personalized Eye Care",
    para: "We use cutting-edge diagnostic tools to provide accurate assessments and customized treatment plans for optimal vision health.",
  },
  {
    head: "Comprehensive Eye Care for All Ages",
    para: "We offer eyecare services for every stage of life from pediatric eye exams to senior vision care.",
  },
  {
    head: "Convenient Booking Options",
    para: "While we welcome walk-ins when possible, we offer online and phone bookings to provide efficient service with minimal wait times.",
  },
];

export const whyChoose360Rosedale = [
  {
    head: "Led by a Top-Rated Optometrist",
    para: "Our founder, Dr. Sam Baraam, is highly regarded for his expertise, compassionate approach, and commitment to cutting-edge eye care.",
  },
  {
    head: "Advanced Technology for Precision Eye Health",
    para: "Our clinic utilizes the latest diagnostic tools to detect and manage vision conditions early, ensuring the best outcomes for your eye health.",
  },
  {
    head: "Customized Eye Care for Every Stage of Life",
    para: "We provide specialized services for children, adults, and seniors, addressing everything from vision correction to age-related eye diseases.",
  },
  {
    head: "Flexible Appointment Booking",
    para: "While walk-ins are welcome when possible, we encourage online and phone bookings for a seamless and efficient experience.",
  },
];

export const eyeCareServices = [
  {
    head: "Comprehensive Eye Exams",
    para: (
      <>
        Regular{" "}
        <Link
          href="/eye-exams"
          className="text-combination-200 hover:text-combination-100"
        >
          eye exams in Toronto
        </Link>{" "}
        are essential for maintaining good vision and early detection of eye
        diseases. Our thorough eye exams for children, adults, and seniors
        ensure you enjoy clear vision and long-term eye health.
      </>
    ),
  },
  {
    head: "Advanced Dry Eye Treatment – IPL & RF Therapy",
    para: (
      <>
        If you suffer from dry, irritated, or fatigued eyes, our{" "}
        <Link
          href="/dry-eye-treatment"
          className="text-combination-200 hover:text-combination-100"
        >
          Intense Pulsed Light (IPL)
        </Link>{" "}
        and Radiofrequency (RF) treatments offer lasting relief by addressing
        the root cause of dry eye disease. Our{" "}
        <Link
          href="/our-doctors"
          className="text-combination-200 hover:text-combination-100"
        >
          eye doctors
        </Link>{" "}
        provide customized treatment plans to help restore your eye comfort.
      </>
    ),
  },
  {
    head: "Pediatric Eye Care",
    para: "Children’s vision plays a crucial role in their learning and development. Our pediatric eye exams in The Beaches detect early vision issues such as nearsightedness, lazy eye (amblyopia), and eye coordination problems, ensuring your child sees the world clearly.",
  },
  {
    head: "Emergency Eye Care – Immediate Attention When You Need It Most",
    para: "Eye emergencies require urgent medical attention. If you experience sudden vision loss, severe eye pain, flashes of light, eye infections, or injuries, contact us immediately for emergency care.",
  },
  {
    head: "Eyewear & Contact Lens Fittings",
    para: "If you are looking for stylish and functional eyewear, we carry a wide range of designer frames, prescription glasses, and specialty contact lenses. Our opticians will ensure you have the perfect fit for your lifestyle and vision needs.",
  },
];

export const eyeCareRosedale = [
  {
    head: "Comprehensive Eye Exams",
    para: "Regular eye exams in Toronto are essential for maintaining good vision and early detection of eye diseases. Our thorough eye exams for children, adults, and seniors ensure you enjoy clear vision and long-term eye health.",
  },
  {
    head: "Advanced Dry Eye Treatment – IPL & RF Therapy",
    para: "If you suffer from dry, irritated, or fatigued eyes, our Intense Pulsed Light (IPL) and Radiofrequency (RF) treatments offer lasting relief by addressing the root cause of dry eye disease. Our eye doctors provide customized treatment plans to help restore your eye comfort.",
  },
  {
    head: "Pediatric Eye Care",
    para: "Children’s vision plays a crucial role in their learning and development. Our pediatric eye exams in The Beaches detect early vision issues such as nearsightedness, lazy eye (amblyopia), and eye coordination problems, ensuring your child sees the world clearly.",
  },
  {
    head: "Emergency Eye Care – Immediate Attention When You Need It Most",
    para: "Eye emergencies require urgent medical attention. If you experience sudden vision loss, severe eye pain, flashes of light, eye infections, or injuries, contact us immediately for emergency care.",
  },
  {
    head: "Eyewear & Contact Lens Fittings",
    para: "If you are looking for stylish and functional eyewear, we carry a wide range of designer frames, prescription glasses, and specialty contact lenses. Our opticians will ensure you have the perfect fit for your lifestyle and vision needs.",
  },
];

export const beachesFaqs = [
  {
    head: "Can I visit your clinic for urgent eye care needs?",
    para: "Yes, 360 Eyecare provides emergency services at our Eye Clinic in The Beaches, handling eye injuries, infections, and sudden vision problems.",
  },
  {
    head: "Do you offer contact lens fittings and consultations?",
    para: "Yes, our Optometry provides comprehensive contact lens fittings, including options for Ortho-K lenses for myopia control.",
  },
  {
    head: "Do you provide laser vision correction consultations in The Beaches?",
    para: "Yes, our Optometrist in The Beaches team offers laser vision correction consultations to guide you through pre- and post-operative care.",
  },
  {
    head: "Can I visit your clinic for urgent eye care needs?",
    para: "Yes, 360 Eyecare provides emergency services at our Eye Clinic in The Beaches, handling eye injuries, infections, and sudden vision problems.",
  },
  {
    head: "How often should I have an eye exam?",
    para: (
      <>
        {"=>"} Adults (19–64): Every 1–2 years <br />
        {"=>"} Children (0–18) & Seniors (65+): Annually or as recommended by
        your optometrist
      </>
    ),
  },
  {
    head: "Do you accept vision insurance?",
    para: (
      <>
        Yes! We accept most vision insurance plans.{" "}
        <Link
          href={""}
          className="text-combination-200 hover:text-combination-100"
        >
          Learn more
        </Link>{" "}
        about coverage.
      </>
    ),
  },
];

export const firstRow = [
  {
    src: "/associate/associate1.webp",
    alt: "Canadian Association of Optometrists",
    width: 275,
    height: 32,
  },
  {
    src: "/associate/associate2.webp",
    alt: "Ontario Association of Optometrists",
    width: 250,
    height: 91,
  },
  {
    src: "/associate/associate3.webp",
    alt: "College of Optometrists of Ontario",
    width: 200,
    height: 80,
  },
  {
    src: "/associate/associate4.webp",
    alt: "National Board of Examiners in Optometry",
    width: 305,
    height: 126,
  },
];

export const orgImages = [
  {
    src: "/associate/associate5.webp",
    alt: "World Sight Day Challenge",
    width: 174,
    height: 50,
  },
  {
    src: "/associate/associate6.webp",
    alt: "Optometry Giving Sight",
    width: 174,
    height: 103,
  },
  {
    src: "/associate/associate7.webp",
    alt: "Optometry Giving Sight",
    width: 784,
    height: 165,
  },
];

// Array of card data for easier maintenance and mapping
export const cardData = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Expertise",
    description:
      "Experienced optometrists committed to delivering quality eye care.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Eye Care For All Ages",
    description: "We offer essential eye care services for every age group.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Personalized Treatment",
    description:
      "Get personalized eye care from the best optometrists in Toronto.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Modern Optical Centre",
    description:
      "Full scope and family friendly optical store for your eyewear needs.",
  },
];

export const services = [
  {
    label: "Eye Exams",
    icon: EyeExamIcon,
    image: EyeExamImage,
    title: "Comprehensive Eye Exams by Top Toronto Optometrists",
    description:
      "Comprehensive Eye Exams by Top Toronto Optometrists. Our team of experienced optometrists provides thorough eye exams using advanced technology to assess your vision and eye health. We tailor our exams to your needs, whether you're seeking a routine check-up, have specific concerns, or need a new prescription. By choosing our optometrists near you, you're selecting the best optometrists in Toronto committed to your eye care.",
    services: [
      "Comprehensive Eye Health Assessment",
      "OCT scan and Retinal imaging",
      "Refraction Assessment for Glasses and Contact Lenses",
      "Eye Pressure Measurement (Tonometry)",
      "Visual Fields and other ocular tests",
    ],
  },
  {
    label: "Contact Lens Fitting",
    icon: ContactLensIcon,
    image: ContactLensImage,
    title: "Professional Contact Lens Fittings for You",
    description:
      "Our clinic offers expert contact lens fittings to ensure optimal comfort, vision, and eye health. Our experienced optometrists assess your eyes to recommend the most suitable contact lenses for your lifestyle and needs.",
    services: [
      "Customized Fittings for Comfort",
      "Thorough Eye Health Evaluation",
      "Trial Lenses for Evaluation",
      "Education on Proper Lens Care",
      "Follow-Up Care for Continued Comfort",
    ],
  },
  {
    label: "Myopia Control",
    icon: MyopiaIcon,
    image: MyopiaImage,
    title: "Effective Myopia Control Solutions for Children",
    description:
      "Our clinic offers specialized myopia control treatments for children to slow the progression of nearsightedness. Our personalized approach includes Spectacle therapy, multifocal contact lenses, atropine eye drops, and orthokeratology (Ortho-K) to manage myopia effectively.",
    services: [
      "Spectacle Therapy",
      "Customized Treatment Plans",
      "Multifocal Contact Lenses",
      "Orthokeratology (Ortho-K)",
      "Regular Monitoring and Adjustments",
      "Axial Length measurements",
    ],
  },
  {
    label: "Dry Eye Treatment",
    icon: DryEyeIcon,
    image: DryEyeImage,
    title: "Effective Dry Eye Treatment Solutions",
    description:
      "We offer advanced dry eye treatments to relieve discomfort and improve eye health. We identify the underlying causes and recommend treatments to restore moisture and comfort to your eyes.",
    services: [
      "Comprehensive Dry Eye Evaluation",
      "Lifestyle and Environmental Recommendations",
      "Prescription Eye Drops and Medications",
      "Tear Duct Plugs (Punctal Plugs)",
      "IPL and RF therapy procedures",
    ],
  },
  {
    label: "Pediatric Eye Care",
    icon: PediatricIcon,
    image: PediatricEyeCareImage,
    title: "Comprehensive Pediatric Optometric Services in Toronto",
    description:
      "Our Toronto optometrists specialize in pediatric eye care, providing comprehensive exams, vision therapy, and myopia control solutions. We are dedicated to ensuring your child's vision and eye health are our top priority.",
    services: [
      "Pediatric Eye Exams Tailored for Children",
      "Vision Therapy Services for Visual Development",
      "Myopia Control Solutions to Manage Nearsightedness",
      "Expertise in Treating Children's Eye Conditions",
      "Compassionate and Child-Friendly Care",
    ],
  },
];

export const eyeExamTools = [
  {
    label: "Visual Acuity & Snellen Chart",
    icon: <FaEye className="w-8 h-8" />,
    image: "/eyeexam/eyeexam1.webp",
    title: "Visual Acuity & The Snellen Chart",
    description:
      "The eye chart, officially known as the Snellen chart, is typically the first thing people think of when one says the phrase “eye exam”. The chart has several rows of letters of different sizes, with the largest letter on top and descending in size as you travel down the chart. Many patients recognize it for the big “E” at the top.",
    content:
      "The Snellen chart is used to measure visual acuity. Its creator, Dr. Herman Snellen, created the chart in the 1860s to help measure his patient’s visual ability when compared to what a “standard”, “healthy” or “emmetropic” eye can read from specific distances.",
    paragraph1:
      "The standard distance for acuity is six meters or 20 feet, and by adjusting the size of the letters on the chart, it can simulate what something would look like at further or closer distances. The patient is asked to read lines on the chart, and their ability to do so is compared to the results of the “standard” eye; when paired together, the result is the patient’s visual acuity.",
    paragraph2:
      "For example, if the smallest line a patient can read on the chart is the one designated as “20/40”, then that means that the patient must be 20 feet away to read what a “standard” eye can read clearly at 40 feet. This test is done with and without visual aid devices (glasses, contact lenses, etc.), and is used in conjunction with the phoropter to determine the refractive power required to get as close to 20/20 visual acuity as possible. Depending on a patient’s eyes, they may be able to achieve 20/20 acuity without visual aids, or with the use of visual aids.",
    title2: "What is Visual Acuity used for?",
    paragraph3:
      "Visual acuity is used as an indicator as to whether a patient may require glasses to legally drive – without glasses, a patient may only be able to achieve 20/80, but with glasses, they can comfortably achieve 20/20, for example. Visual acuity is also used to help diagnose and legally define low vision or blindness.",
    paragraph4:
      "Over the years the eye chart has become digitized, allowing the optometrist to randomize the letters to prevent chart memorization by frequent patients. Digitizing the chart also allows the optometrist to flip through the acuity lines at the press of a button, and to easily highlight specific lines for patients to read. With the use of a mirror, the optometrist can use the chart without the exam room needing to be 20 feet in length, making the space more efficient.",
    height: "243",
    width: "243",
  },
  {
    label: "The Phoropter",
    height: "355",
    width: "533",
    icon: <FaMedkit className="w-8 h-8" />,
    image: "/eyeexam/eyeexam2.webp",
    title: "The Phoropter",

    content:
      "One of the staple devices in the eye exam room, its design has had a few changes and modernizations as technology advanced. Also known as a refractor, the phoropter is typically mounted on an arm set up next to the exam chair that can swing and be manipulated in front of the patient’s eyes and face. The device contains many different lenses that can cycle in front of the patient’s eyes via manual or remote control. The optometrist can test and measure the patient’s refractive error by having the patient look through these lenses and evaluate how well they can see the eye chart at the other end of the room.",
    paragraph1:
      "The phoropter contains lenses that help measure spherical power, astigmatism power axis of rotation, and even prism power and direction. Older phoropters were controlled manually by the optometrist spinning specific dials while asking for subjective feedback from the patient as to the level of clarity of their vision with the current selection of lenses. Modern phoropters are controlled remotely with a separate control panel that can save multiple lens selections and combinations at once, allowing the optometrist to rapidly switch between lenses and hone in on the patient’s prescription. With the click of a button, the final readings can then be added to the patient’s chart and easily printed for – or even emailed to – the patient for their use.",
    paragraph2:
      "While phoropters have been around since the 1910s, their design, and function as binocular refraction devices have changed very little, only becoming more efficient as technology has advanced.",
  },
  {
    label: "The Slit Lamp",
    height: "243",
    width: "243",
    icon: <FaLightbulb className="w-8 h-8" />,
    image: "/eyeexam/eyeexam3.webp",
    title: "The Slit Lamp",
    content:
      "The second staple of an optometrist’s exam room, the slit lamp is a powerful binocular microscope that the optometrist will use to examine the physical structures of the eye and evaluate a patient’s eye health. With the patient’s head positioned on the chin rest and against the forehead rest, the optometrist can look through the microscope and examine various points of interest from the front through to the back of the eye. The optometrist can examine the surface of the eye, the lids, and the meibomian glands along the lid margins, or the tear film and evaluate its effectiveness. ",
    paragraph1:
      "By manipulating the powerful light attached to the unit, the optometrist can bounce light inside the eye to see a cross-section of the layers of the cornea, and examine the anterior chamber and the lens between the anterior and posterior chambers. With stronger magnification, the optometrist can look further through an appropriately sized pupil (typically dilated) to see the back of the eye, where the retina, macula, and optic nerve head are.",
    paragraph2:
      "The slit lamp will typically have several smaller devices attached to it that can swing into position as needed. This may include a smaller bright light to aid in achieving a highly detailed view inside the eye or a tonometer to accurately measure the fluid pressure within the eye. While many devices and tools within healthcare have become digital and automatic, the slit lamp relies on the training and intricate manual control of the optometrist and remains one of the most useful tools of diagnostics in the optometrist’s arsenal.",
  },
  {
    label: "The Auto Refractor",
    height: "291",
    width: "244",
    icon: <FaRobot className="w-8 h-8" />,
    image: "/eyeexam/eyeexam4.webp",
    title: "The Auto Refractor",
    content:
      "One of the newer tools at an optometrist’s disposal, the auto-refractor is now a common element either in the exam rooms or during the pretest before the exam with the optometrist. It is a machine with a computer on board that uses light and a digital camera to give a rough measurement of the surface of a patient’s eyes. This provides the doctor with a general reading of the high points and low points of the surface of the eye (known as the keratometry or k-readings) which is useful when determining the best fit for soft contact lenses. The auto-refractor can also give a rough estimate of the patient’s starting or neutral refractive error. While it only provides a rough estimate, it provides a useful starting point for the optometrist in the exam room to work with in determining an accurate refraction and prescription for the patient.",

    paragraph1:
      "Some auto-refractors are fitted with an additional device that uses a pin-point light to measure corneal thickness and ocular fluid pressure less invasively than older methods. The more memorable element of these auto-refractors is the “puff of air” that shoots out of the machine towards the patient’s eye. Sensors on the patient’s side of the machine then measure the pressure of the air that bounces back off the patient’s eye and calculate the internal pressure of the fluids. This method of testing is considered to be preferred as it does not involve touching the patient or the eye, and can be done without administering numbing drops.",
    paragraph2:
      "Auto-refractors can be manually controlled by a trained technician or staff member or can be fully automatic and capable of switching between the patient’s eyes and its functions without operator input, making the pretesting stage quick and efficient.",
  },
  {
    label: "The Retinal Camera",
    height: "286",
    width: "531",
    icon: <FaCamera className="w-8 h-8" />,
    image: "/eyeexam/eyeexam5.webp",
    title: "The Retinal Camera",

    content:
      "Another newer device that’s become a fixture for optometrists and ophthalmologists alike, the retinal camera is a powerful device with a custom camera system, microscope, and onboard computer that is capable of producing high-quality images of the structures located within the back of the eye. Known as fundus photography, the image captured can show the retina, macula, optic nerve, and all the veins and vessels all at once and in impeccable detail.",

    paragraph1:
      "While the slit lamp allows the optometrist to look at the same structures themselves, the photo is useful in seeing the whole of the rear of the eye as one image, and seeing the normally small parts of the eye at a much larger scale and level of detail only available with digital photography. Fundus photography can help detect retina or vitreous tears, damage caused by diabetic eye disease, swelling of the optic nerve, and early warning signs of glaucoma.",
    paragraph2:
      "Some cameras have also been modified with an additional scanning function, and using light waves can produce a cross-section scan of the retinal layers and the macula. Known as the Optical Coherence Tomography, or OCT scan, the scans can help the optometrist detect changes in retinal layer thickness, detect separations or irregularities, and aid in diagnosing conditions such as macular degeneration or diabetic eye disease. OCT scans can help guide treatment plans for conditions like glaucoma.",
    paragraph3:
      "The photos and scans produced by these retinal cameras have been invaluable in the early detection of eye-related diseases and conditions, and more and more optometrists are implementing them as a standard part of a regular exam.",
  },
  {
    label: "The OCT",
    height: "354",
    width: "531",
    icon: <FaMicroscope className="w-8 h-8" />,
    image: "/eyeexam/eyeexam6.webp",
    title: "The OCT (Optical Coherence Tomography)",
    content:
      "Devices like the slit lamp and retinal camera allow optometrists a clear view of the back surface of the eye, but what if a diagnosis requires a deeper look? Conditions such as diabetic retinopathy and glaucoma can cause tissue damage within the layers of specialized cells that make up the retina. Still, that damage may not be visible on the uppermost layer. Age-related macular degeneration will cause the macula to become thinner over time, or cause abnormal blood vessels to grow and burst underneath the retina. So how can an optometrist look deeper within those retinal layers?",
    paragraph1:
      "The OCT, or optical coherence tomography, is another type of imaging test that uses waves of light to capture a cross-section scan of the retina and macula area in the back of the eye. This allows the optometrist to look for changes in retinal layer thickness or density or for any abnormal growths or separation within the layers. It is not an x-ray and does not need to touch the eye at all for these scans, it is more comparable to a quick ultrasound using light instead of sound to produce a clearer image.",
    paragraph2:
      "Because of the importance of the retina and macula, and the limited nature of regeneration or recovery from damage, the OCT has become the standard test alongside retinal imaging for patients diagnosed with or suspected to have diabetes, glaucoma, and macular degeneration.",
  },
  {
    label: "The Visual Fields Test",
    height: "354",
    width: "531",
    icon: <FaSearchLocation className="w-8 h-8" />,
    image: "/eyeexam/eyeexam7.webp",
    title: "The Visual Fields Test",

    content:
      "the devices and instruments in this article, the visual fields test is just as important for diagnosing severe conditions. The visual fields test measures the total width of a patient’s area of vision while they focus on a single point straight ahead, also known as the measure of peripheral vision ability in degrees. This test can detect any blind spots a patient might have or a decrease in peripheral ability over time due to conditions such as glaucoma",
    paragragph1:
      "The ways the visual fields test is administered can vary depending on whether the optometrist or ophthalmologist wants to run a basic check or a more in-depth examination. The detailed visual field test involves the patient looking into a machine called a perimeter and staring at a predetermined fixed point on the screen inside. The patient is then instructed to press a button every time they see a blinking light or moving line appear somewhere else on the screen without looking away from the center. The test is done per eye, with the untested eye covered for the duration, and can take anywhere from three to ten minutes to complete depending on the testing type.",
    paragraph2:
      "In some cases, a patient may only need to have visual field screening once. Other patients may need regular screening on a yearly or bi-annual basis. Certain jobs and careers require a visual field test as a part of their application process, and at least a basic visual field screening is required for new drivers getting their license in Ontario. Should you find yourself requiring a visual field test for any reason, a quick call to your regular optometrist to see if they provide that testing is recommended.",
  },
];
