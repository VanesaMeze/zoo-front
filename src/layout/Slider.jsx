import React, { useEffect, useState } from "react";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [autoPlayInterval, setAutoPlayInterval] = useState(null);

  const slides = [
    {
      src: "https://images.unsplash.com/photo-1601295815181-b70b374bf3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8aW5kaWFuJTIwaGlnaHdheXx8MHx8fHwxNjI4MzA4NzIy&ixlib=rb-1.2.1&q=80&w=1080",
      alt: "Image 1",
    },
    {
      src: "https://static.timesofisrael.com/www/uploads/2020/04/AP_051206013735.jpg",
      alt: "Image 2",
    },
    {
      src: "https://sn4.scholastic.com/content/dam/classroom-magazines/sn4/issues/2020-21/092120/count-me-in/03-SN4-20200921-LionCub-HR.jpg",
      alt: "Image 3",
    },
    {
      src: "https://th.bing.com/th/id/R.305b24f3ce338e33cef5d2adcf9349c1?rik=rNRNmoon7TsVBA&riu=http%3a%2f%2fwww.wallpaperup.com%2fuploads%2fwallpapers%2f2013%2f04%2f04%2f70071%2f95420caa7f85eccadcbc1083b76aa951.jpg&ehk=gdXU6FwYtakV66xX2gF%2f1zca5srHkCVG0q7LfPmXqPg%3d&risl=&pid=ImgRaw&r=0",
      alt: "Image 4",
    },
    {
      src: "https://th.bing.com/th/id/R.a77d898a90f8f575a34446832fedbfce?rik=%2fA0jNV%2bMkKaOqA&pid=ImgRaw&r=0",
      alt: "Image 5",
    },
    {
      src: "https://news.griffith.edu.au/wp-content/uploads/2018/06/animal-animal-photography-crocodile-60644-1.jpg",
      alt: "Image 6",
    },
  ];

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  const showSlide = (index) => {
    setSlideIndex(index);
    return showSlide;
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const startAutoPlay = () => {
    setAutoPlayInterval(setInterval(nextSlide, 3000));
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };

  return (
    <div className="slider">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            style={{
              display: index === slideIndex ? "block" : "none",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              borderRadius: "10px",
              float: "left",
              width: "800px",
              height: "500px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
      <div className="controls">
        <button className="btn button1" onClick={prevSlide}>
          Previous
        </button>{" "}
        <button className=" btn button1" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
