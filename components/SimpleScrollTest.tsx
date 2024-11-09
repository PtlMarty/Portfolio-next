"use client";

import { useEffect, useRef, useState } from "react";

const SimpleScrollTest = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isProfileVisible, setIsProfileVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrollTop = contentRef.current.scrollTop;
        console.log("Scroll Top:", scrollTop); // Log scroll position
        console.log("Scrollable Height:", contentRef.current.scrollHeight); // Log total height of content
        console.log("Client Height:", contentRef.current.clientHeight); // Log visible height of container

        const isScrolling = scrollTop > 0;
        console.log("Is Scrolling:", isScrolling); // Log if scrolling detected

        setIsProfileVisible(!isScrolling);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("scroll", handleScroll);
      console.log("Scroll event listener added."); // Log listener attachment
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("scroll", handleScroll);
        console.log("Scroll event listener removed."); // Log cleanup
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Profile section */}
      <div
        style={{ width: "25%", backgroundColor: "#f0f0f0", padding: "20px" }}
      >
        {isProfileVisible && (
          <div style={{ background: "lightblue", padding: "20px" }}>
            Profile
          </div>
        )}
      </div>

      {/* Scrollable content section */}
      <div
        ref={contentRef}
        style={{
          width: "75%",
          height: "100%",
          overflowY: "auto",
          border: "1px solid black",
        }}
      >
        {/* Large dummy content */}
        <div
          style={{
            height: "1500px",
            background: "linear-gradient(to bottom, red, blue)",
          }}
        >
          <h1>Scroll down</h1>
          <p>{"Lorem ipsum ".repeat(100)}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleScrollTest;
