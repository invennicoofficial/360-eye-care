import Link from "next/link";
import {
  AlinaShahidImage,
  AnitaSritharanImage,
  CataractImage,
  ContactLenspediaImage,
  cornealImage,
  DiabeticImage,
  DryEyeSyndromeImage,
  GillImage,
  GinaChenImage,
  GlaucomaImage,
  IPLTherapyImage,
  lasikImage,
  MacularImage,
  MeibographyImage,
  MyopiaPediaImage,
  octImage,
  PediatricEyeImage,
  PerimetryImage,
  prkImage,
  RetinalImage,
  RFTherapyImage,
  SamBarramImage,
  smileImage,
  SportsVisionImage,
  swatchImage,
  TearOsmolarityImage,
  VisionThreapImage,
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
} from "./Images";

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
    imageLink: "/homeIcons/Comprehensive Eye Exams.png",
    title: "Comprehensive Eye Exams",
    description:
      "Our eye exams help detect issues early and ensure your vision is at its best.",
    buttonText: "Book Your Eye Exam",
    buttonLink: "/book-exam",
  },
  {
    imageLink: "/homeIcons/Eyewear Collection.png",
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
          className="text-combination-100 hover:text-combination-100"
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
          className="text-combination-100 hover:text-combination-100"
        >
          Intense Pulsed Light (IPL)
        </Link>{" "}
        and Radiofrequency (RF) treatments offer lasting relief by addressing
        the root cause of dry eye disease. Our{" "}
        <Link
          href="/our-doctors"
          className="text-combination-100 hover:text-combination-100"
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
          className="text-combination-100 hover:text-combination-100"
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

export const commonEyeServices = [
  {
    label: "Cataracts",
    icon: EyeExamIcon,
    image: CataractImage,
    title: "Understanding Cataracts and Treatment Options",
    description:
      "Cataracts are a common age-related eye condition that causes cloudy vision. Our clinic offers advanced surgical and non-surgical treatments to restore clear vision and improve quality of life. Our team of experts will guide you through the diagnosis, treatment, and recovery process, ensuring personalized care every step of the way.",
  },
  {
    label: "Glaucoma",
    icon: ContactLensIcon,
    image: GlaucomaImage,
    title: "Managing Glaucoma: Diagnosis to Treatment",
    description:
      "Glaucoma is a group of eye diseases that can lead to vision loss if left untreated. Our clinic specializes in early detection and personalized treatment plans to manage glaucoma effectively. From medication to surgical options, we offer comprehensive care to preserve your vision and enhance your quality of life.",
  },
  {
    label: "Dry Eye",
    icon: MyopiaIcon,
    image: DryEyeSyndromeImage,
    title: "Relief from Dry Eye: Causes and Treatments",
    description:
      "Dry eye syndrome is a common condition that occurs when the eyes do not produce enough or poor-quality tears. Our clinic provides advanced diagnostic testing to determine the underlying cause of dry eye and offers personalized treatment plans to alleviate symptoms and improve eye comfort. From prescription eye drops to lifestyle changes, we tailor our approach to meet your unique needs and improve your overall eye health.",
  },
  {
    label: "Diabetic Retinopathy",
    icon: DryEyeIcon,
    image: DiabeticImage,
    title: "Diabetic Retinopathy: Prevention and Treatment",
    description:
      "Diabetic retinopathy is a serious eye condition that affects people with diabetes. If not properly managed, it can lead to vision loss. Our clinic specializes in the early detection and treatment of diabetic retinopathy, offering comprehensive eye exams and advanced treatments to preserve vision and prevent complications. With a focus on patient education and proactive care, we help our patients maintain healthy vision and overall well-being.",
  },
  {
    label: "Macular Degeneration",
    icon: PediatricIcon,
    image: MacularImage,
    title: "Macular Degeneration: Symptoms and Treatments",
    description:
      "Macular degeneration is a leading cause of vision loss in older adults. Our clinic offers state-of-the-art diagnostic testing and personalized treatment plans to manage macular degeneration effectively. From lifestyle modifications to advanced therapies, we provide comprehensive care to slow the progression of the disease and preserve your vision. Our team of experts is committed to helping you maintain healthy vision and quality of life.",
  },
];

export const eyeemergencyData = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Corneal Abrasions",
    description:
      "If you think you have a foreign object in your eye or a corneal abrasion, get medical help immediately.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Chemical Burns",
    description:
      "In case of a chemical burn, wash your eyes with clear water and seek immediate medical attention.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Penetrating Foreign Objects",
    description: "If something gets in your eye, call us immediately.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Sudden Inflammation and Eye Bleeding",
    description:
      "Signs of serious underlying issues requiring urgent attention..",
  },
];

export const selectionGuideData = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Face Shape",
    description:
      "Consider your face shape for flattering frames. Match frames to complement your face shape for stylish looks.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Color and Style",
    description:
      "Choose colors and styles that suit your personality. Select frames that reflect your style and enhance your features.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Comfort and Fit",
    description:
      "Ensure frames fit comfortably for daily wear. Check for proper fit to avoid discomfort and ensure clarity.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Lens Options",
    description:
      "Explore lens types for your vision needs. Discuss lens options with our optician for optimal vision correction.",
  },
];
export const laservisiondata = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "LASIK Eye Surgery",
    description:
      "Refractive surgery to correct vision problems like nearsightedness and astigmatism.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "PRK Vision Correction",
    description:
      "Similar to LASIK but does not involve creating a corneal flap.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Bladeless Laser Surgery",
    description:
      "Advanced technology for precise and blade-free laser vision correction.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Custom Wavefront LASIK",
    description:
      "Personalized treatment that maps the unique characteristics of your eyes.",
  },
];
export const pediatricEyeData = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Vision Care",
    description: "Comprehensive eye care services for children of all ages.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Myopia Control",
    description:
      "Specialized treatments to slow down the progression of nearsightedness.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Eye Exams",
    description:
      "Regular eye exams to monitor and maintain your child’s vision health.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Eyeglasses & Contacts",
    description: "Stylish eyeglasses and comfy contact lenses for kids.",
  },
];

export const laservisionService = [
  {
    label: "PRK",
    icon: EyeExamIcon,
    image: prkImage,
    title: "PRK Laser Vision Correction Treatment",
    description:
      "PRK (Photorefractive Keratectomy) is a type of laser eye surgery used to correct nearsightedness, farsightedness, and astigmatism. It involves removing the cornea’s outer layer before reshaping it with an excimer laser. PRK is often recommended for patients with thin corneas or other corneal irregularities. The procedure typically takes less than 15 minutes per eye, and most patients experience improved vision within a few days to a week. PRK is a safe and effective option for vision correction, offering long-lasting results and minimal risk of complications. If you’re considering PRK, our experienced team can help determine if you’re a candidate and guide you through the process.",
  },
  {
    label: "LASIK",
    icon: ContactLensIcon,
    image: lasikImage,
    title: "LASIK Laser Vision Correction Treatment",
    description:
      "LASIK (Laser-Assisted In Situ Keratomileusis) is a popular laser eye surgery that reshapes the cornea to correct refractive errors such as nearsightedness, farsightedness, and astigmatism. It involves creating a thin flap in the cornea using a femtosecond laser and an excimer laser to reshape the underlying corneal tissue. LASIK is known for its quick recovery time and high success rate, with many patients achieving 20/25 vision or better after the procedure. LASIK offers a permanent solution for vision correction, reducing or eliminating the need for glasses or contact lenses. If you’re interested in LASIK, our skilled LASIK surgeons can determine if you’re a suitable candidate and provide personalized care throughout your journey to clearer vision.",
  },
  {
    label: "SMILE",
    icon: MyopiaIcon,
    image: smileImage,
    title: "SMILE Laser Vision Correction Treatment",
    description:
      "SMILE(Small Incision Lenticule Extraction) is an innovative laser vision correction procedure that corrects myopia (nearsightedness) and astigmatism. Unlike LASIK, which creates a corneal flap, SMILE uses a femtosecond laser to create a small, lens-shaped piece of tissue within the cornea, which is then removed through a small incision. This gentle, minimally invasive procedure preserves more of the cornea’s structural integrity compared to LASIK, making it a suitable option for patients with thin corneas or those at higher risk of dry eye syndrome. SMILE offers rapid visual recovery, with many patients achieving clear vision within a few days. If you’re considering SMILE, our experienced ophthalmologists can assess your candidacy and provide personalized guidance to help you achieve your vision correction goals.",
  },
];

export const advanceddiagnosticsService = [
  {
    label: "OCT Scans",
    icon: EyeExamIcon,
    image: octImage,
    title: "OCT Scans for Detailed Eye Analysis",
    description:
      "OCT (Optical Coherence Tomography) provides high-resolution, cross-sectional retina and optic nerve images. It helps in the early detection and management of eye diseases such as glaucoma, macular degeneration, and diabetic retinopathy. OCT’s noninvasive nature makes it a valuable tool for monitoring and managing various eye conditions.",
  },

  {
    label: "Corneal Topography",
    icon: MyopiaIcon,
    image: cornealImage,
    title: "Corneal Topography for Corneal Health Assessment",
    description:
      "Corneal topography maps the curvature and shape of the cornea, aiding in diagnosing conditions such as astigmatism, keratoconus, and corneal dystrophies. It is also used in preoperative evaluations for procedures like LASIK and contact lens fittings. This technology provides detailed information about the cornea, helping eye care professionals to customize treatment plans for each patient.",
  },
  {
    label: "Meibography",
    icon: MyopiaIcon,
    image: MeibographyImage,
    title: "Meibography for Meibomian Gland Assessment",
    description:
      "Meibography is used to assess the meibomian glands responsible for producing the oily layer of the tear film. This test helps diagnose and manage meibomian gland dysfunction (MGD), a common cause of dry eye syndrome. By evaluating the structure and function of the meibomian glands, meibography helps eye care professionals determine the most appropriate treatment for MGD.  Such treatments include warm compress therapy, lid hygiene,  meibomian gland expression, Omega 3 fatty acids, or procedures such as Intense pulse light (IPL) or Radiofrequency (RF).",
  },
  {
    label: "Tear Osmolarity Testing",
    icon: MyopiaIcon,
    image: TearOsmolarityImage,
    title: "Tear Osmolarity Testing for Dry Eye Diagnosis",
    description:
      "Tear osmolarity testing measures the salt content in tears, an indicator of tear film stability. This test is useful in the diagnosis and management of dry eye disease. The iPen device collects a tear sample, which is then analyzed to determine tear osmolarity levels. By assessing tear osmolarity, eye care professionals can better understand the underlying causes of dry eye and develop personalized treatment plans to improve tear film stability and relieve dry eye symptoms.",
  },
  {
    label: "Perimetry & the Zeiss Humphrey",
    icon: MyopiaIcon,
    image: PerimetryImage,
    title: "Perimetry for Visual Field Assessment",
    description:
      "Perimetry is a test that measures the entire area of peripheral vision that can be seen while the eye is focused on a central point. The Zeiss Humphrey visual field analyzer is a tool used for this test. Perimetry is important for detecting and monitoring conditions that cause visual field loss, such as glaucoma, optic nerve damage, and neurological disorders. By regularly performing perimetry, eye care professionals can assess the progression of these conditions and adjust treatment plans accordingly.",
  },
  {
    label: "Retinal Imaging",
    icon: MyopiaIcon,
    image: RetinalImage,
    title: "Retinal Imaging for Comprehensive Retina Evaluation",
    description:
      "Retinal imaging uses specialized cameras to capture detailed images of the retina, blood vessels, and optic nerve head. These images help in the early detection and management of various eye diseases, including diabetic retinopathy, age-related macular degeneration, and retinal detachments. Retinal imaging is a non-invasive procedure that provides valuable information about the retina’s health, allowing eye care professionals to detect and monitor eye conditions more effectively.",
  },
  {
    label: "IPL Therapy",
    icon: MyopiaIcon,
    image: IPLTherapyImage,
    title: "Advanced IPL Therapy for Dry Eye",
    description:
      "Intense Pulsed Light (IPL) therapy effectively treats dry eye by targeting inflammation and improving tear film stability. It uses controlled light pulses to reduce blockages in the meibomian glands, providing lasting relief and significantly improving overall eye health and comfort for patients suffering from chronic dry eye.",
  },
  {
    label: "RF Therapy",
    icon: MyopiaIcon,
    image: RFTherapyImage,
    title: "Innovative RF Therapy for Dry Eye",
    description:
      "Radiofrequency (RF) therapy enhances dry eye treatment by stimulating collagen production and improving meibomian gland function. This non-invasive technique helps restore natural tear production, alleviating discomfort and irritation. Offering a comfortable and effective solution, RF therapy provides significant relief for chronic dry eye sufferers, improving their overall eye health.",
  },
];

export const pediatricEyeService = [
  {
    label: "Vision Therapy",
    icon: EyeExamIcon,
    image: VisionThreapImage,
    title: "OCT Scans for Detailed Eye Analysis",
    description:
      "Our pediatric optometrists in Toronto provide personalized vision therapy programs to address visual problems that cannot be treated with eyeglasses or contact lenses. Vision therapy is a highly effective non-surgical treatment for lazy eye (amblyopia), eye turns (strabismus), and certain visual processing disorders. Vision therapy helps improve children’s visual skills and abilities through customized exercises and activities, leading to better academic performance and overall quality of life.",
  },

  {
    label: "Myopia Control",
    icon: MyopiaIcon,
    image: MyopiaPediaImage,
    title: "Effective Myopia Control Treatments for Kids",
    description:
      "Myopia, or nearsightedness, is a common vision problem that often develops during childhood and can worsen over time. Our pediatric optometrists offer specialized myopia control treatments in Toronto to slow myopia progression in children. These treatments, such as orthokeratology (Ortho-K) and multifocal contact lenses, are safe and effective and can help reduce the risk of future eye health issues associated with high myopia.",
  },
  {
    label: "Pediatric Eye Exams",
    icon: MyopiaIcon,
    image: PediatricEyeImage,
    title: "Comprehensive Pediatric Eye Exams in Toronto",
    description:
      "Regular eye exams are essential for monitoring your child’s eye health and vision development. Our pediatric optometrists in Toronto conduct comprehensive eye exams specifically designed for children to detect and treat vision problems early. These exams include visual acuity testing, binocular vision assessment, eye health evaluation, and more.We create a comfortable and child-friendly environment to ensure a positive experience for your child during the exam.",
  },
  {
    label: "Contact Lens Fitting",
    icon: MyopiaIcon,
    image: ContactLenspediaImage,
    title: "Expert Contact Lens Fitting for Children",
    description:
      "Contact lenses can be a safe and effective vision correction option for children. Our pediatric optometrists in Toronto specialize in fitting contact lenses for kids, ensuring proper fit, comfort, and vision quality. Whether your child needs contact lenses for sports, activities, or daily wear, we provide personalized fitting services to meet their visual needs and lifestyle.",
  },
  {
    label: "Sports Vision",
    icon: MyopiaIcon,
    image: SportsVisionImage,
    title: "Enhancing Sports Performance Through Vision Training",
    description:
      "Sports vision training focuses on improving visual skills essential for optimal sports performance. Our pediatric optometrists in Toronto offer specialized sports vision training programs to help young athletes enhance their hand-eye coordination, depth perception, visual reaction time, and tracking abilities. By improving these visual skills, young athletes can improve their performance, reduce the risk of sports-related injuries, and gain a competitive edge on the field or court.",
  },
];

export const faqDatapediatric = [
  {
    id: 1,
    question: "Q. At what age should my child have their first eye exam?",
    answer:
      "Children should have their first eye exam at around six months of age, followed by another exam at three years old, and then before starting school. After that, yearly exams are recommended.",
  },
  {
    id: 2,
    question:
      "Q. What are common signs that my child may have a vision problem?",
    answer:
      "Common signs of vision problems in children include frequent eye rubbing, squinting, tilting the head to see better, holding reading materials close to the face, and complaining of headaches or eye strain.",
  },
  {
    id: 3,
    question: "Q. Can my child wear contact lenses?",
    answer:
      "Yes, contact lenses can be a safe and effective option for children, but it depends on their age, maturity level, and ability to handle and care for the lenses. Our optometrists can help determine if contact lenses are suitable for your child.",
  },
  {
    id: 4,
    question: "Q. How can I protect my child's eyes during sports?",
    answer:
      "To protect your child’s eyes during sports, make sure they wear protective eyewear designed for the sport they’re playing. Regular eyeglasses or sunglasses are not sufficient for protecting the eyes during sports",
  },
  {
    id: 5,
    question: "Q. What is vision therapy, and how can it help my child?",
    answer:
      "Vision therapy is a customized program of eye exercises and activities designed to improve visual skills and abilities. It can help children with various vision problems, such as lazy eye (amblyopia), eye alignment issues (strabismus), and focusing problems.",
  },
];

export const Orthokeratology = [
  {
    id: "01",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Non-Surgical and Reversible",
    description:
      "Unlike LASIK or other refractive surgeries, Ortho-K is non-invasive and completely reversible. If the patient discontinues wearing the lenses, the cornea gradually returns to its original shape.",
  },
  {
    id: "02",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Freedom from Daytime Eyewear",
    description:
      "Ortho-K allows patients to experience clear vision without glasses or contact lenses during the day, which can be especially beneficial for athletes, swimmers, and individuals in dusty or dry environments.",
  },
  {
    id: "03",
    icon: "/Icons/Optometry-Icon1.webp",
    title: "Slows Myopia Progression in Children",
    description:
      "Research has shown that Ortho-K can help slow the progression of myopia in children, reducing the risk of developing high myopia and associated complications later in life.",
  },
  {
    id: "04",
    icon: "/Icons/Optometry-Icon2.webp",
    title: "Comfort and Convenience",
    description:
      "For those who find daytime contact lenses uncomfortable or inconvenient, Ortho-K provides a comfortable alternative that fits seamlessly into their nighttime routine.",
  },
];

export const faqVirtualConsult = [
  {
    id: 1,
    question: "What is Tele-optometry?",
    answer:
      "Tele-optometry is the provision of vision and eye health services that are delivered within the scope of practice of optometry using electronic health information, medical and communication technologies, and where the provider and patient are separated by remote distance.",
  },
  {
    id: 2,
    question:
      "What is the difference between Telemedicine, Telehealth and Tele-optometry?",
    answer:
      "Telehealth and Telemedicine are often used interchangeably but are distinguished in terms of their scope. Telemedicine describes the remote delivery of clinical medical services, such as diagnosis and disease management, but Telehealth includes the delivery of health promotion and disease prevention information and therapeutic care. As such, Telemedicine is a part of Telehealth, and Tele-optometry is a part of Telehealth.",
  },
  {
    id: 3,
    question: "Is Tele-optometry safe and what does it involve?",
    answer:
      "Your online consultation may involve video chat, direct messaging, or photo uploads. Your online consultation protects your privacy using encryption technology for any personal information or images that may be shared between you and the doctor on the platform.",
  },
  {
    id: 4,
    question: "What will I need to prepare for before my virtual consultation?",
    answer:
      "You will be asked questions about the nature of your symptoms as well as your health history if relevant, including any medications you are taking.",
  },
  {
    id: 5,
    question: "Is Tele-optometry covered by OHIP or private insurance?",
    answer:
      "As of now (April, 2021) There is no OHIP coverage for telemedical optometry services. Every private insurance will vary in coverage depending on the insurance provider and the specific plan offered. Our office will email you an invoice at the end of your virtual consultation that you can use to submit to your insurance if applicable.",
  },
  {
    id: 6,
    question:
      "How much will the consultation cost and how do I make a payment?",
    answer:
      "The fee to access this service is $75 per consultation. At the end of the consultation the system will prompt you to make an online payment with a valid credit card. Be sure to have your credit card ready before the beginning of your consultation to avoid delays.",
  },
];

export const benefitsData = [
  {
    title: "Clear Vision",
    description: "Achieve sharp, clear vision without the need for glasses.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="4"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Quick Recovery",
    description:
      "Experience fast recovery and return to your daily activities.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 13l3 3 7-7"
        />
      </svg>
    ),
  },
  {
    title: "Long-Term Results",
    description:
      "Enjoy lasting vision improvement with laser vision correction.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="4"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Proven Safety",
    description: "Laser vision correction is a safe and established procedure.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="16"
          height="20"
          rx="1"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <line
          x1="7"
          y1="9"
          x2="15"
          y2="9"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="7"
          y1="13"
          x2="15"
          y2="13"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="7"
          y1="17"
          x2="11"
          y2="17"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path d="M16 3v3h3" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    title: "Enhanced Quality of Life",
    description: "Improved vision can lead to a better quality of life.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="6"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12 6C16 8 16 16 12 18"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12 6C8 8 8 16 12 18"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="9"
          r="1"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
        <circle
          cx="12"
          cy="15"
          r="1"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Treatment",
    description: "Each procedure is tailored to meet your vision needs.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="8"
          r="4"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
];
export const pediatricEyeBenefitsData = [
  {
    title: "Myopia Control",
    description:
      "Effective treatments to slow down myopia progression in children.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="4"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Vision Therapy",
    description:
      "Customized programs to enhance children’s visual skills and abilities.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 13l3 3 7-7"
        />
      </svg>
    ),
  },
  {
    title: "Pediatric Eye Exams",
    description:
      "Comprehensive exams to monitor and maintain your child’s vision health.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="4"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Eyeglasses for Kids",
    description:
      "Stylish and durable eyeglasses designed for children’s active lifestyles.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="16"
          height="20"
          rx="1"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <line
          x1="7"
          y1="9"
          x2="15"
          y2="9"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="7"
          y1="13"
          x2="15"
          y2="13"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="7"
          y1="17"
          x2="11"
          y2="17"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path d="M16 3v3h3" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    title: "Contact Lenses for Children",
    description:
      "Safe and comfortable contact lens options for kids’ vision correction.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="6"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12 6C16 8 16 16 12 18"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12 6C8 8 8 16 12 18"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="9"
          r="1"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
        <circle
          cx="12"
          cy="15"
          r="1"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Eye Care Tips for Parents",
    description:
      "Valuable advice on how to protect and maintain your child’s vision.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="8"
          r="4"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
];

export const advanceddiagnosticsbenefitsData = [
  {
    title: "Digital Retinal Imaging",
    description:
      "High-resolution images of the retina for early disease detection.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="4"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Optical Coherence Tomography (OCT)",
    description:
      "Detailed cross-sectional images of the eye for precise diagnosis.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 13l3 3 7-7"
        />
      </svg>
    ),
  },
  {
    title: "Visual Field Testing",
    description:
      "Assessment of your peripheral vision for early detection of diseases.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="4"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Corneal Topography",
    description:
      "Mapping the cornea’s surface to detect irregularities and conditions.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="3"
          y="3"
          width="16"
          height="20"
          rx="1"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
        />
        <line
          x1="7"
          y1="9"
          x2="15"
          y2="9"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="7"
          y1="13"
          x2="15"
          y2="13"
          strokeWidth="2"
          stroke="currentColor"
        />
        <line
          x1="7"
          y1="17"
          x2="11"
          y2="17"
          strokeWidth="2"
          stroke="currentColor"
        />
        <path d="M16 3v3h3" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    ),
  },
  {
    title: "Pachymetry",
    description:
      "Measurement of corneal thickness is important for glaucoma detection.",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="6"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12 6C16 8 16 16 12 18"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M12 6C8 8 8 16 12 18"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <circle
          cx="12"
          cy="9"
          r="1"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
        <circle
          cx="12"
          cy="15"
          r="1"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Auto Refraction",
    description:
      "Automated measurement of refractive errors for accurate prescriptions..",
    icon: (
      <svg
        className="w-9 h-9 text-combination-100"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="8"
          r="4"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M4 20C4 16 8 14 12 14C16 14 20 16 20 20"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    ),
  },
];
