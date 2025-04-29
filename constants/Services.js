import Link from "next/link";
import {
  AlinaShahidImage,
  AnitaSritharanImage,
  GillImage,
  GinaChenImage,
  SamBarramImage,
  swatchImage,
} from "./Images";

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
export const cardData = [
  {
    id: 1,
    number: "01",
    title: "Expertise",
    description:
      "Experienced optometrists committed to delivering quality eye care.",
    iconPath: "/Icons/Optometry-Icon1.webp",
  },
  {
    id: 2,
    number: "02",
    title: "Eye Care For All Ages",
    description: "We offer essential eye care services for every age group.",
    iconPath: "/Icons/Optometry-Icon2.webp",
  },
  {
    id: 3,
    number: "03",
    title: "Personalized Treatment",
    description:
      "Get personalized eye care from the best optometrists in Toronto.",
    iconPath: "/Icons/Optometry-Icon1.webp",
  },
  {
    id: 4,
    number: "04",
    title: "Modern Optical Centre",
    description:
      "Full scope and family friendly optical store for your eyewear needs.",
    iconPath: "/Icons/Optometry-Icon2.webp",
  },
];

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
