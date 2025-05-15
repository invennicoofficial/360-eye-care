"use client";
import { useState, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ReviewCarousel() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(3);
  const [visibleReviews, setVisibleReviews] = useState([]);

  useEffect(() => {
    // Simulating a third-party widget service that provides Google reviews
    // In production, you would replace this with the actual widget service API
    const fetchReviewsFromWidget = async () => {
      try {
        // Simulated delay to mimic API call
        await new Promise((resolve) => setTimeout(resolve, 800));

        // This represents the data from a third-party widget service
        const widgetData = [
          {
            id: 1,
            rating: 5,
            text: "All staff very pleasant and helpful. Machine in exam room was dusty. Bring back dog of the month club! All staff very pleasant and helpful. Machine in exam room was dusty. Bring back dog of the month clubAll staff very pleasant and helpful. Machine in exam room was dusty. Bring back dog of the month clubAll staff very pleasant and helpful. Machine in exam room was dusty. Bring back dog of the month clubAll staff very pleasant and helpful. Machine in exam room was dusty. Bring back dog of the month club author: ",
            date: "5/09/2024",
            verified: true,
            avatar: "/api/placeholder/40/40",
            initials: "ES",
          },
          {
            id: 2,
            rating: 5,
            text: "Excellent service, very thorough examination. I felt that the doctor was excellent. Very professional",
            author: "Rick Holden",
            date: "4/09/2024",
            verified: true,
            avatar: "/api/placeholder/40/40",
            initials: "RH",
          },
          {
            id: 3,
            rating: 5,
            text: "A five star experience each time I visit the clinic. Great staff and super customer experience.",
            author: "Sal Salmena",
            date: "4/09/2024",
            verified: true,
            avatar: null,
            initials: "S",
          },
          {
            id: 4,
            rating: 5,
            text: "The optometrists at 360 Eye Care are thorough and professional. My family has been going here for years.",
            author: "Maria Johnson",
            date: "3/09/2024",
            verified: true,
            avatar: null,
            initials: "MJ",
          },
          {
            id: 5,
            rating: 4,
            text: "Great selection of frames and helpful staff. The eye exam was comprehensive and they explained everything clearly.",
            author: "David Cooper",
            date: "2/09/2024",
            verified: true,
            avatar: null,
            initials: "DC",
          },
          {
            id: 6,
            rating: 5,
            text: "Best eye care in the Beaches area! Dr. Miller took time to answer all my questions and concerns.",
            author: "Lisa Patton",
            date: "1/09/2024",
            verified: true,
            avatar: null,
            initials: "LP",
          },
          {
            id: 7,
            rating: 5,
            text: "Modern equipment and knowledgeable staff. They detected an issue that my previous optometrist missed.",
            author: "James Wilson",
            date: "30/08/2024",
            verified: true,
            avatar: null,
            initials: "JW",
          },
          {
            id: 8,
            rating: 5,
            text: "The team at 360 Eye Care made my daughter feel comfortable during her first eye exam. Highly recommend!",
            author: "Susan Blake",
            date: "29/08/2024",
            verified: true,
            avatar: null,
            initials: "SB",
          },
          {
            id: 9,
            rating: 5,
            text: "Quick appointment scheduling and no long wait times. Very efficient service without sacrificing quality.",
            author: "Michael Tran",
            date: "28/08/2024",
            verified: true,
            avatar: null,
            initials: "MT",
          },
          {
            id: 10,
            rating: 4,
            text: "Great experience overall. The only improvement would be more parking options nearby.",
            author: "Rachel Kim",
            date: "27/08/2024",
            verified: true,
            avatar: null,
            initials: "RK",
          },
        ];

        setReviews(widgetData);
        // Show reviews starting from index 0
        updateVisibleReviews(widgetData, 0);
      } catch (error) {
        // console.error("Error fetching reviews from widget:", error);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewsFromWidget();
  }, []);

  const updateVisibleReviews = (allReviews, startIndex) => {
    const reviewsPerPage = 3;
    const visibleReviews = [];

    for (let i = 0; i < reviewsPerPage; i++) {
      const index = (startIndex + i) % allReviews.length;
      visibleReviews.push(allReviews[index]);
    }

    setVisibleReviews(visibleReviews);
  };

  const handleNext = () => {
    const newIndex = (activeIndex + 1) % reviews.length;
    setActiveIndex(newIndex);
    updateVisibleReviews(reviews, newIndex);
  };

  const handlePrev = () => {
    const newIndex = (activeIndex - 1 + reviews.length) % reviews.length;
    setActiveIndex(newIndex);
    updateVisibleReviews(reviews, newIndex);
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    updateVisibleReviews(reviews, index);
  };

  const handleGoogleClick = () => {
    // Open Google reviews for 360 Eye Care Beaches
    window.open(
      "https://www.google.com/maps/place/360+Eye+Care+Beaches/reviews",
      "_blank"
    );
  };

  // Generate stars for ratings
  const renderStars = (rating) => {
    return Array(rating)
      .fill()
      .map((_, i) => (
        <span key={i} className="text-yellow-400 text-2xl">
          ★
        </span>
      ));
  };

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-brand-blue mb-6">
          Happy Clients of Yorkville Rosedale!
        </h1>
        <div className="h-1 w-32 bg-blue-300 mb-10"></div>
        <div className="text-center py-10">Loading reviews...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4 relative">
      <h1 className="text-4xl font-bold text-brand-blue mb-6 font-poppins">
        Happy Clients of Yorkville Rosedale!
      </h1>
      <div className="h-1 w-32 bg-combination-100 mb-10"></div>

      {/* Left arrow */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={handlePrev}
        aria-label="Previous reviews"
      >
        <ChevronLeft size={24} className="text-gray-600" />
      </button>

      <div className="flex flex-row gap-4 overflow-hidden">
        {visibleReviews.map((review) => (
          <div
            key={review.id}
            className="flex-1 bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-center mb-2">
              {renderStars(review.rating)}
            </div>

            <p className="text-center text-gray-600 mb-6">{review.text}</p>

            <div className="flex flex-col items-center">
              {review.avatar ? (
                <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                  <Image
                    src={review.avatar}
                    alt={`Profile picture of ${review.author}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center text-xl mb-2">
                  {review.initials}
                </div>
              )}

              <div className="flex items-center mb-1">
                <span className="font-medium text-gray-500">
                  {review.author}
                </span>
                {review.verified && (
                  <Check size={16} className="ml-1 text-gray-400" />
                )}
              </div>

              <p className="text-gray-500 text-sm mb-2">{review.date}</p>

              <button
                onClick={handleGoogleClick}
                className="cursor-pointer"
                aria-label="View on Google"
              >
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        onClick={handleNext}
        aria-label="Next reviews"
      >
        <ChevronRight size={24} className="text-gray-600" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {reviews.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full ${
              activeIndex === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
