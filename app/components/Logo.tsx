import React from "react";

function Logo(){
  return(
    <div style={{ width: "37px" }}> {/* Define the width of the logo */}
      <img
        src='https://i.ibb.co/znBVWTb/ENVISAGE-LOGO.png'
        alt='logo'
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}
export default Logo;
/*import React from "react";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 394.7 463.86"
      {...props}
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1=".79"
          x2="330.76"
          y1="231.44"
          y2="231.44"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0005ff" />
          <stop offset="1" stopColor="#00d8e1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="0"
          x2="334.06"
          y1="231.16"
          y2="231.16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0500ff" />
          <stop offset="1" stopColor="#00d8e1" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="130.08"
          x2="202.55"
          y1="135.34"
          y2="135.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00d8e1" />
          <stop offset="1" stopColor="#0005ff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="128.88"
          x2="208.09"
          y1="135.33"
          y2="135.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00d8e1" />
          <stop offset="1" stopColor="#0500ff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="204.41"
          x2="278.74"
          y1="82.15"
          y2="82.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0005ff" />
          <stop offset="1" stopColor="#00d8e1" />
        </linearGradient>
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-6"
          x1="202.61"
          x2="287.18"
          y1="82.45"
          y2="82.45"
        />
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-7"
          x1="256.97"
          x2="304.08"
          y1="28.75"
          y2="28.75"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-8"
          x1="252.39"
          x2="305.13"
          y1="28.26"
          y2="28.26"
        />
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-9"
          x1="278.67"
          x2="347.1"
          y1="34.82"
          y2="34.82"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-10"
          x1="274.77"
          x2="348.19"
          y1="34.52"
          y2="34.52"
        />
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-11"
          x1="267.95"
          x2="358.42"
          y1="93.66"
          y2="93.66"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-12"
          x1="266.73"
          x2="359.47"
          y1="94.45"
          y2="94.45"
        />
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-13"
          x1="256.16"
          x2="394.69"
          y1="376.73"
          y2="376.73"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-14"
          x1="251.24"
          x2="395.74"
          y1="376.92"
          y2="376.92"
        />
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-15"
          x1="250.44"
          x2="346.6"
          y1="430.52"
          y2="430.52"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-16"
          x1="249.39"
          x2="347.65"
          y1="430.73"
          y2="430.73"
        />
        <linearGradient
          xlinkHref="#linear-gradient"
          id="linear-gradient-17"
          x1="230.65"
          x2="265.37"
          y1="436.07"
          y2="436.07"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-18"
          x1="229.6"
          x2="266.43"
          y1="434.86"
          y2="434.86"
        />
        <linearGradient
          id="linear-gradient-19"
          x1="257.74"
          x2="270.34"
          y1="170.27"
          y2="170.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0005ff" />
          <stop offset="1" stopColor="#00aeef" />
        </linearGradient>
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-20"
          x1="255.68"
          x2="271.39"
          y1="168.27"
          y2="168.27"
        />
        <linearGradient
          xlinkHref="#linear-gradient-19"
          id="linear-gradient-21"
          x1="245.99"
          x2="255.64"
          y1="166.44"
          y2="166.44"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-22"
          x1="244.06"
          x2="256.69"
          y1="165.63"
          y2="165.63"
        />
        <linearGradient
          xlinkHref="#linear-gradient-19"
          id="linear-gradient-23"
          x1="237.35"
          x2="242.16"
          y1="163.79"
          y2="163.79"
        />
        <linearGradient
          xlinkHref="#linear-gradient-2"
          id="linear-gradient-24"
          x1="235.72"
          x2="243.22"
          y1="163.21"
          y2="163.21"
        />
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g id="Layer_2" data-name="Layer 2">
          <g id="Colour">
            <path
              fill="url(#linear-gradient)"
              d="M236.88 393.37c16.31-1.87 44.85-7.66 71.92-28.29 9.07-6.91 16.28-14.2 21.96-20.94-5.38 1.56-13.76 3.29-24 2.55-8.36-.6-15.16-2.63-19.87-4.47-4.67 6.72-12.8 16.66-25.57 25.4-14.53 9.94-28.5 13.84-36.93 15.51 3.82-3.84 8.74-9.78 12.42-18.06 1.66-3.74 2.76-7.25 3.49-10.35 4.41-2.76 8.86-5.6 13.36-8.55 3.17-2.08 6.3-4.15 9.37-6.23-3.41.53-8.75 1-15.04-.1-8.97-1.58-12.61-5.09-21.4-7.46-4.27-1.15-10.73-2.29-19.25-1.53-5.17 5.21-11.48 10.84-19.05 16.34-12.51 9.09-24.56 15-34.36 18.89 16.16-11.8 24.73-28.64 21.27-43.19-.76-3.2-2.44-7.71-6.5-12.49-11.66-9.42-21.68-16.14-28.41-20.4-18.53-11.72-27.61-14.58-37.81-25.29-8.61-9.04-13.17-18.58-15.59-24.76 4.43 4.12 11.62 9.76 21.75 13.8 6.4 2.56 12.25 3.78 16.89 4.38 13.18 2.41 28.22 6.13 44.39 11.96 27.18 9.81 48.78 22.41 64.7 33.49 30.47-26.48 49.58-36.96 57.34-31.45 3.12 2.22 4.4 7.02 3.85 14.41 2.29-2.07 11.98-11.29 10.96-22.58-1.29-14.22-19.3-28.2-43.74-26.29-11.72 2.29-32.08 4.68-56.35-.78-20.95-4.71-36.51-13.4-45.93-19.68 14.58 3.53 24.84 1.7 31.63-.75 9.84-3.55 14.48-9.16 24.36-9.65 8.13-.4 14.97 2.9 19.49 5.78-1.67-2.6-34.65-52.15-83.63-48.03-14.11 1.19-25.61 6.5-33.9 11.74-7.96-2.81-21.2-8.64-34.07-20.6-11.56-10.75-18.1-22.06-21.61-29.4 7.65.01 17.12-.61 27.74-2.77 9.66-1.97 17.9-4.74 24.53-7.45 10.76-5.87 25.35-12.46 43.38-17.06 14.57-3.71 27.65-5.17 38.3-5.62 3.43-5.38 8.52-12.18 15.83-18.89 8.61-7.91 17.16-12.82 23.49-15.83 3.41-1.45 14.81-6.78 21.96-19.91 7.23-13.27 5.42-25.88 4.77-29.5H21.68C10.14 9.28.79 18.63.79 30.16v402.55c0 11.54 9.35 20.89 20.89 20.89H143.7c27.07-.7 54.14-1.39 81.2-2.09-1.37-6.68-2.94-18.87.66-33.32 2.82-11.31 7.73-19.68 11.32-24.82Z"
            />
            <path
              fill="url(#linear-gradient-2)"
              d="M236.88 393.37c8.99-1.04 17.89-2.89 26.56-5.47 8.66-2.61 17.09-6 25.13-10.15 8.02-4.18 15.6-9.18 22.69-14.79 7.05-5.66 13.53-12.02 19.34-18.95l.21.32c-7.17 2.09-14.69 3.02-22.16 2.71-7.47-.32-14.89-1.86-21.87-4.55l.34-.1c-3.64 5.26-7.79 10.17-12.37 14.64-4.58 4.46-9.58 8.52-14.94 12.02-10.7 7.04-22.77 11.99-35.34 14.5l-1.37.27.99-1c3.84-3.88 7.17-8.26 9.83-13.03 2.67-4.76 4.66-9.89 5.91-15.19l.05-.19.17-.11 11.4-7.32c1.91-1.21 3.77-2.48 5.66-3.72l5.64-3.75.38.97c-4.76.75-9.65.79-14.42.04-2.38-.38-4.75-.94-7.03-1.73-2.29-.79-4.48-1.78-6.66-2.73-4.33-1.95-8.82-3.43-13.49-4.16-4.66-.76-9.41-.86-14.12-.44l.37-.17c-7.59 7.66-15.96 14.54-24.96 20.48-4.49 2.98-9.15 5.71-13.93 8.21-4.78 2.49-9.69 4.75-14.7 6.74l-4.78 1.9 4.15-3.05c4.33-3.18 8.29-6.87 11.68-11.03 1.73-2.05 3.21-4.29 4.6-6.57 1.28-2.34 2.53-4.72 3.37-7.25.51-1.24.78-2.55 1.16-3.82l.38-1.96c.06-.33.13-.65.18-.98l.1-.99c.36-2.63.24-5.31-.15-7.91-.76-5.25-3.3-10.12-6.73-14.16l.1.1c-7.13-5.74-14.5-11.18-22.11-16.26-7.6-5.11-15.49-9.73-23.48-14.25-3.98-2.29-7.98-4.59-11.74-7.32-3.78-2.7-7.23-5.86-10.34-9.29-6.24-6.88-11.08-14.97-14.47-23.59l-1.36-3.47 2.73 2.54c9.8 9.12 22.26 15.33 35.46 17.52.83.14 1.63.26 2.5.38.85.13 1.69.31 2.53.46 1.67.32 3.33.65 5 1 3.32.7 6.63 1.46 9.93 2.27 6.59 1.63 13.13 3.51 19.58 5.62 12.9 4.24 25.51 9.4 37.66 15.47 12.16 6.06 23.87 13.02 35.02 20.77l-1.14.06c5.26-4.57 10.6-9.04 16.1-13.34 5.5-4.28 11.14-8.42 17.11-12.1 2.98-1.84 6.07-3.54 9.3-4.98 3.25-1.38 6.66-2.64 10.41-2.69.93-.03 1.88.11 2.82.32.93.26 1.85.64 2.67 1.2 1.64 1.13 2.75 2.85 3.37 4.6 1.24 3.55 1.21 7.2.98 10.71l-1.6-.78c2.47-2.24 4.67-4.8 6.5-7.56 1.78-2.79 3.25-5.82 3.83-9.03l.21-1.2c.04-.4.06-.81.1-1.21.1-.81.02-1.62 0-2.43-.04-.81-.24-1.6-.35-2.4-.04-.4-.17-.79-.3-1.18l-.36-1.17c-1.07-3.08-2.88-5.9-5.07-8.36-2.17-2.5-4.86-4.53-7.68-6.28-2.81-1.8-5.94-3.05-9.09-4.14-6.38-2-13.17-2.7-19.86-2.2l.11-.02c-8.82 1.71-17.79 2.6-26.78 2.57-8.98-.03-17.96-.89-26.77-2.67-8.81-1.74-17.44-4.39-25.74-7.81-8.3-3.44-16.26-7.68-23.74-12.66l-4.78-3.18 5.58 1.33c6.33 1.51 12.86 2.3 19.31 1.76 3.22-.25 6.41-.83 9.5-1.76 3.09-.91 6.04-2.23 8.92-3.75 2.89-1.51 5.72-3.27 8.87-4.58 3.13-1.35 6.58-2.1 10-2.14 6.9-.17 13.56 2.35 19.21 5.95l-1.45 1.46c-3.11-4.67-6.71-9.11-10.48-13.34-3.79-4.22-7.83-8.21-12.14-11.9-8.57-7.4-18.22-13.62-28.77-17.67-5.27-2.02-10.75-3.48-16.32-4.24-5.58-.78-11.24-.81-16.84-.24-11.21 1.22-22.01 5.35-31.55 11.38l-.42.26-.46-.16c-6.09-2.16-11.98-4.91-17.54-8.21-5.55-3.32-10.81-7.13-15.6-11.47-4.83-4.3-9.19-9.12-13.07-14.29-3.87-5.18-7.24-10.73-10.03-16.56l-.68-1.43h1.58c17.74.04 35.48-3.41 51.9-10.14l-.1.05c12.58-6.86 25.94-12.27 39.75-16.1 13.81-3.83 28.05-6.07 42.36-6.67l-.77.44c5.15-8.08 11.51-15.38 18.82-21.57 3.65-3.09 7.54-5.92 11.61-8.44 2.04-1.26 4.12-2.44 6.25-3.54 1.06-.55 2.14-1.09 3.24-1.6 1.09-.47 2.12-.96 3.15-1.51 8.2-4.35 15.05-11.29 19.08-19.66 4.08-8.33 5.4-18 3.8-27.14l.91.76-228.18-.1h-10.7c-1.18 0-2.4-.03-3.52.05-2.28.12-4.54.6-6.65 1.48-2.1.89-4.06 2.14-5.75 3.67C6.54 16.83 5.1 18.65 4 20.65c-1.09 2.01-1.8 4.22-2.15 6.48-.09.56-.18 1.13-.19 1.7-.02.58-.08 1.13-.07 1.73v10.7l-.05 57.05-.09 114.09-.09 114.09-.06 57.05-.04 28.52-.02 14.26c.01 2.37-.04 4.77.03 7.12.06 2.33.52 4.65 1.4 6.81 1.72 4.32 4.92 8.07 9.01 10.34 2.04 1.14 4.26 1.92 6.56 2.32.58.07 1.15.22 1.73.23l1.75.09h3.57l28.52.05 57.05.08 28.52.04c4.75.06 9.51-.14 14.26-.23l14.26-.35 57.03-1.39-.08.1c-1.01-4.99-1.53-10.08-1.52-15.17 0-5.09.52-10.18 1.55-15.16 1.04-4.98 2.57-9.86 4.6-14.53 2.03-4.66 4.52-9.13 7.44-13.29Zm0 0c-2.91 4.17-5.39 8.64-7.4 13.31-2.01 4.67-3.53 9.55-4.55 14.53-1.01 4.98-1.52 10.06-1.5 15.15 0 5.08.54 10.16 1.56 15.14l.02.1h-.1l-57.03 1.55-14.26.39c-4.75.11-9.5.33-14.26.28l-28.52.04-57.05.08-28.52.04H21.7l-1.81-.08c-.61-.01-1.2-.16-1.8-.23-2.38-.41-4.7-1.22-6.82-2.39-4.25-2.35-7.59-6.23-9.39-10.72-.92-2.24-1.41-4.66-1.48-7.08-.08-2.4-.03-4.76-.05-7.14l-.02-14.26-.04-28.52-.06-57.05-.09-114.09L.06 98.3 0 41.25v-10.7c-.01-.59.05-1.22.07-1.83 0-.62.1-1.23.2-1.84.37-2.44 1.14-4.82 2.31-7 1.18-2.17 2.73-4.13 4.55-5.79 1.83-1.66 3.93-3.01 6.21-3.97 2.28-.96 4.73-1.48 7.19-1.61 1.25-.09 2.41-.05 3.61-.06h10.7l228.18-.1h.78l.13.76c1.67 9.54.31 19.58-3.94 28.29-4.2 8.74-11.34 15.97-19.88 20.51-1.06.57-2.18 1.1-3.26 1.57-1.05.49-2.09 1.01-3.14 1.55-2.08 1.08-4.13 2.24-6.12 3.48-3.99 2.47-7.8 5.24-11.38 8.28-7.16 6.07-13.39 13.23-18.44 21.15l-.27.42-.5.02c-14.17.6-28.26 2.83-41.92 6.62-13.66 3.8-26.88 9.17-39.33 15.96l-.05.03-.05.02C99 123.84 81 127.36 63 127.32l.9-1.43c2.74 5.71 6.04 11.15 9.84 16.22 3.8 5.06 8.08 9.78 12.81 13.99 4.7 4.25 9.85 7.98 15.29 11.23 5.45 3.23 11.22 5.92 17.19 8.03l-.88.1c9.76-6.18 20.85-10.44 32.4-11.7 5.77-.59 11.61-.57 17.35.23 5.75.78 11.38 2.28 16.79 4.35 10.82 4.15 20.67 10.5 29.39 18.02 4.38 3.75 8.48 7.8 12.34 12.08 3.84 4.3 7.46 8.76 10.69 13.6l2.78 4.15-4.22-2.7c-5.42-3.46-11.66-5.79-18.04-5.64-3.18.04-6.3.71-9.23 1.97-2.95 1.23-5.75 2.95-8.71 4.5-2.95 1.55-6.06 2.94-9.3 3.9-3.23.97-6.57 1.58-9.93 1.83-6.72.55-13.46-.28-19.95-1.83l.81-1.85c7.36 4.91 15.21 9.09 23.38 12.49 8.18 3.38 16.68 6 25.36 7.72 8.68 1.75 17.53 2.61 26.38 2.65 8.85.03 17.7-.84 26.4-2.51h.06l.05-.02c6.92-.51 13.96.2 20.62 2.3 3.29 1.14 6.55 2.45 9.5 4.34 2.96 1.84 5.79 3.98 8.11 6.65 2.34 2.63 4.29 5.66 5.46 9.03l.39 1.28c.13.43.28.85.33 1.3.13.89.34 1.77.38 2.66.02.9.1 1.8 0 2.69-.04.45-.06.9-.11 1.34l-.24 1.32c-.65 3.53-2.24 6.76-4.12 9.71-1.94 2.92-4.24 5.58-6.82 7.93l-1.77 1.61.17-2.39c.24-3.38.21-6.86-.86-9.91-.54-1.51-1.43-2.84-2.66-3.69-.62-.43-1.32-.71-2.06-.93-.76-.16-1.54-.29-2.35-.26-3.24.03-6.53 1.19-9.64 2.53-3.12 1.4-6.14 3.05-9.07 4.86-5.87 3.62-11.47 7.71-16.94 11.96-5.46 4.27-10.79 8.72-16.03 13.26l-.55.47-.59-.41c-11.08-7.71-22.71-14.63-34.78-20.66-12.07-6.04-24.59-11.18-37.41-15.4-6.41-2.11-12.9-3.97-19.45-5.6-3.27-.81-6.56-1.57-9.87-2.27-1.65-.35-3.31-.68-4.96-1-.82-.15-1.64-.32-2.47-.45-.82-.11-1.69-.24-2.53-.38-13.53-2.27-26.31-8.67-36.32-18.03l1.36-.93c3.3 8.45 8.03 16.37 14.11 23.11 3.04 3.37 6.39 6.44 10.07 9.09 3.66 2.67 7.62 4.96 11.59 7.26 7.97 4.54 15.91 9.21 23.54 14.36 7.64 5.12 15.04 10.6 22.19 16.38l.05.04.04.05c3.57 4.21 6.23 9.35 7.02 14.88.4 2.75.52 5.55.14 8.3l-.11 1.03c-.05.34-.13.68-.19 1.02l-.4 2.04c-.4 1.32-.69 2.68-1.21 3.96-.88 2.62-2.17 5.07-3.5 7.48-1.44 2.34-2.97 4.64-4.74 6.74-3.48 4.25-7.53 8-11.95 11.24l-.63-1.15c4.97-1.97 9.84-4.19 14.59-6.65s9.37-5.17 13.83-8.11c8.94-5.87 17.26-12.68 24.81-20.27l.15-.15.22-.02c4.79-.41 9.65-.31 14.41.48 4.76.75 9.4 2.3 13.76 4.27 2.19.97 4.34 1.94 6.57 2.71 2.22.78 4.51 1.32 6.84 1.7 4.65.74 9.42.71 14.08-.01l2.41-.37-2.03 1.34-5.65 3.75c-1.89 1.25-3.76 2.51-5.68 3.71l-11.44 7.29.22-.3c-1.29 5.39-3.33 10.6-6.06 15.42-2.71 4.83-6.12 9.26-10.02 13.18l-.39-.72c12.47-2.45 24.47-7.31 35.11-14.26 5.34-3.45 10.31-7.46 14.88-11.88 4.56-4.43 8.71-9.29 12.35-14.51l.13-.18.21.08c6.91 2.7 14.27 4.26 21.69 4.6 7.42.33 14.89-.56 22.03-2.61l.64-.18-.43.51c-5.85 6.92-12.37 13.28-19.46 18.92-7.12 5.6-14.74 10.58-22.79 14.73-8.06 4.12-16.51 7.49-25.19 10.07-8.69 2.55-17.59 4.36-26.59 5.37Z"
            />
            <path
              fill="url(#linear-gradient-3)"
              d="M130.08 131.23c1.33 7.36 7.25 12.85 14.15 13.43 5.63.48 11.18-2.37 14.44-7.3 5.47-.81 11.63-1.4 18.38-1.53 9.66-.19 18.26.6 25.5 1.73-7.66-4.35-23.73-12.03-44.96-11.56-11.47.25-20.9 2.8-27.52 5.23Z"
            />
            <path
              fill="url(#linear-gradient-4)"
              d="M130.08 131.23c.71 3.08 2.21 5.95 4.37 8.19 2.15 2.24 4.97 3.78 7.95 4.39 2.98.63 6.13.23 8.86-1.05 2.74-1.27 5.08-3.35 6.69-5.88l.2-.32.4-.06c7.29-1.15 14.69-1.75 22.08-1.72 3.7.02 7.4.13 11.08.46 3.68.31 7.36.76 11 1.35l-.64 1.84c-5.38-3.07-11.07-5.6-16.96-7.51-2.95-.93-5.95-1.74-8.98-2.41-3.03-.62-6.09-1.17-9.19-1.45-3.09-.35-6.19-.44-9.3-.46-3.11.03-6.22.24-9.31.57-6.2.68-12.31 2.11-18.25 4.07Zm0 0c5.81-2.33 11.92-3.97 18.14-4.94 6.22-.99 12.57-1.15 18.86-.67 6.3.47 12.55 1.65 18.58 3.55 6.03 1.9 11.87 4.43 17.39 7.52l4.76 2.67-5.4-.82c-3.6-.55-7.23-.96-10.86-1.24-3.63-.27-7.28-.45-10.92-.48-7.29-.04-14.59.4-21.82 1.39l.6-.38c-1.88 2.74-4.53 4.94-7.57 6.23s-6.49 1.61-9.68.82c-3.19-.77-6.05-2.62-8.16-5.05-2.11-2.44-3.46-5.47-3.92-8.6Z"
            />
            <path
              fill="url(#linear-gradient-5)"
              d="M231.95 73.3c-12.82 6.32-21.85 14.26-27.54 20.17 5.86 2.56 11.72 5.13 17.58 7.69 3.88-5.6 9.49-12.4 17.36-18.87 14.9-12.25 30.31-17.07 39.39-19.11-9.51-.26-27.4.57-46.79 10.12Z"
            />
            <path
              fill="url(#linear-gradient-6)"
              d="M231.95 73.3c-2.56 1.28-5.06 2.67-7.5 4.16-2.44 1.48-4.79 3.12-7.08 4.83-4.57 3.43-8.76 7.33-12.63 11.5l-.15-.75 17.74 7.32-1.06.3c3.28-4.88 7.02-9.46 11.22-13.6 4.17-4.17 8.82-7.83 13.71-11.1 1.21-.83 2.5-1.56 3.75-2.34 1.29-.71 2.55-1.48 3.86-2.14 2.59-1.39 5.28-2.6 8-3.71 5.44-2.23 11.08-3.91 16.81-5.12l.1 1.03c-4-.16-8.02-.11-12.03.2-4 .31-8 .84-11.94 1.64-3.94.82-7.84 1.83-11.65 3.14-3.8 1.32-7.53 2.87-11.16 4.61Zm0 0c7.24-3.54 14.87-6.28 22.75-8.04 3.94-.89 7.92-1.58 11.94-2.01 4.02-.45 8.07-.63 12.12-.59l4.14.04-4.04.99c-5.63 1.38-11.14 3.22-16.41 5.58-5.27 2.37-10.37 5.11-15.12 8.38-9.57 6.43-17.88 14.65-24.62 24.01l-.43.59-.63-.29-17.42-8.06-.61-.28.47-.46c4.07-4.06 8.49-7.74 13.15-11.07 2.33-1.67 4.74-3.21 7.19-4.69 2.45-1.47 4.97-2.84 7.53-4.1Z"
            />
            <path
              fill="url(#linear-gradient-7)"
              d="M256.97 56.53c6.58-.76 18.08-3.11 28.92-11.47 4.01-3.09 11.52-9.04 15.33-19.5 1.36-3.75 5.91-16.27-.42-21.98-4.35-3.92-11.56-2.38-13.74-1.91-7.65 1.67-11.83 7.16-12.84 8.58-5.35 7.49-3.96 15.68-3.68 17.21.39 2.65.93 8.76-1.96 15.6-3.38 8.01-9.39 12.11-11.61 13.47Z"
            />
            <path
              fill="url(#linear-gradient-8)"
              d="M256.97 56.53c6.67-1.04 13.19-3 19.14-6.08 2.98-1.51 5.82-3.29 8.47-5.32 2.67-2.03 5.2-4.21 7.46-6.64 2.27-2.41 4.24-5.08 5.84-7.96 1.57-2.88 2.73-5.99 3.68-9.18.92-3.17 1.57-6.44 1.46-9.64-.06-3.17-1.19-6.3-3.7-8.02-1.24-.84-2.73-1.34-4.29-1.58-1.56-.22-3.19-.2-4.8 0-3.26.38-6.41 1.28-9.16 3-5.55 3.38-9.41 9.36-10.04 15.9-.19 1.63-.18 3.28-.03 4.91.04.41.09.81.16 1.22.07.42.12.87.16 1.29.08.86.13 1.72.14 2.58.04 3.45-.5 6.9-1.67 10.13-2.29 6.48-6.95 12.01-12.81 15.39Zm0 0c5.63-3.72 9.99-9.3 11.94-15.68.98-3.17 1.45-6.5 1.32-9.81-.03-.83-.1-1.65-.2-2.47-.06-.42-.1-.8-.18-1.22-.08-.42-.15-.86-.2-1.29-.21-1.73-.26-3.47-.1-5.21.28-3.47 1.35-6.9 3.17-9.91 1.81-3.03 4.4-5.53 7.36-7.42 2.98-1.91 6.47-2.93 9.9-3.35 1.74-.21 3.52-.26 5.3-.03 1.78.25 3.58.82 5.15 1.87 1.57 1.05 2.78 2.61 3.51 4.3.74 1.7 1.1 3.52 1.14 5.3.12 3.57-.62 7.01-1.59 10.3-.5 1.66-1.05 3.26-1.7 4.87-.61 1.63-1.42 3.17-2.24 4.69-1.73 3-3.85 5.77-6.25 8.24-2.42 2.46-5.1 4.6-7.88 6.58-2.78 1.99-5.75 3.72-8.84 5.16-3.08 1.46-6.33 2.55-9.61 3.4-3.29.86-6.64 1.41-10.01 1.67Z"
            />
            <path
              fill="url(#linear-gradient-9)"
              d="M278.67 58.19c14.63 3.81 24.63 1.98 31.15-.51 6.17-2.36 10.58-6.27 19.4-7.66 6.62-1.04 12.33-.22 16.17.68.57-13.81 1.13-27.61 1.7-41.42h-37.28c.72 4.28 1.76 14.18-3.06 24.91-7.93 17.64-25.27 23.15-28.09 24Z"
            />
            <path
              fill="url(#linear-gradient-10)"
              d="M278.67 58.19c5.6 1.25 11.32 2.03 17.03 1.77 5.68-.27 11.33-1.48 16.41-3.98 2.55-1.23 5.03-2.71 7.69-3.93 2.65-1.23 5.47-2.18 8.35-2.73 5.77-1.12 11.77-.89 17.48.41l-1.22.93.8-20.71.9-20.71.99 1.03-18.64-.06c-6.21-.03-12.43 0-18.64-.09l.83-.98c.83 5.33.75 10.79-.34 16.06-.54 2.63-1.33 5.22-2.36 7.7-.27.61-.51 1.24-.82 1.84l-.92 1.79c-.57 1.22-1.35 2.32-2.05 3.46-.34.58-.76 1.1-1.16 1.64l-1.22 1.6-1.33 1.5c-.44.51-.89 1-1.38 1.46l-1.43 1.4c-.5.45-1.01.87-1.52 1.31-.5.44-1.02.86-1.56 1.25-.54.4-1.06.81-1.6 1.19-4.37 3.03-9.21 5.4-14.3 6.85Zm0 0c5.02-1.68 9.73-4.21 13.96-7.32 4.17-3.19 7.9-7 10.64-11.46.65-1.13 1.4-2.21 1.93-3.41l.86-1.76c.29-.58.5-1.2.76-1.8.95-2.43 1.66-4.94 2.14-7.5.95-5.12.93-10.41.03-15.52l-.17-.97h1c6.21-.09 12.43-.07 18.64-.1l18.64-.06h1.03l-.04 1.03-.79 20.71-.9 20.71-.05 1.21-1.17-.28c-5.46-1.31-11.18-1.6-16.71-.61-2.77.46-5.46 1.28-8.04 2.41-2.6 1.11-5.1 2.51-7.75 3.72-5.31 2.45-11.17 3.58-16.95 3.57-5.8.02-11.53-.98-17.04-2.56Z"
            />
            <path
              fill="url(#linear-gradient-11)"
              d="M297.05 72.99c-26.62 18.32-28.89 49.1-29.11 52.98 4.29-4.57 11.21-10.82 21.15-15.75 15.24-7.55 29.35-7.94 36.55-7.62 3.12.14 14.15.24 23.49-7.66 4.32-3.66 6.8-7.77 8.17-10.62.67-1.81 1.83-5.8.51-10.32-1.84-6.32-7.77-11.07-15.17-12.31-5.83-.62-26.22-2.05-45.59 11.29Z"
            />
            <path
              fill="url(#linear-gradient-12)"
              d="m297.05 72.99-3.1 2.37-1.55 1.18-1.44 1.32c-.95.88-1.93 1.75-2.87 2.65l-2.63 2.88c-3.36 3.96-6.4 8.22-8.72 12.88-2.35 4.63-4.22 9.49-5.58 14.49-1.36 4.99-2.27 10.12-2.53 15.26l-1.15-.49c5.82-6.41 12.78-11.83 20.52-15.82 7.73-4 16.19-6.57 24.83-7.61 4.32-.51 8.69-.69 13.02-.47 4.17.19 8.38-.36 12.37-1.62 3.97-1.3 7.71-3.31 10.89-6.04 3.18-2.72 5.78-6.13 7.65-9.9l-.02.06c1.14-2.97 1.49-6.27.75-9.37-.73-3.1-2.52-5.92-4.93-8.05-2.41-2.14-5.39-3.63-8.54-4.41-1.56-.41-3.21-.47-4.84-.6-1.64-.11-3.28-.15-4.92-.14-6.57.05-13.13 1.05-19.44 2.93-6.28 1.96-12.29 4.81-17.74 8.52Zm0 0c5.43-3.73 11.43-6.61 17.71-8.61 6.29-1.97 12.86-3.04 19.46-3.22 1.65-.05 3.3-.05 4.95.03 1.65.1 3.31.11 4.96.51 3.25.73 6.37 2.19 8.94 4.37 2.57 2.17 4.54 5.11 5.4 8.42.87 3.31.57 6.86-.58 10.06v.02l-.02.03c-1.86 3.96-4.48 7.58-7.76 10.52-3.28 2.94-7.17 5.19-11.35 6.6-4.19 1.39-8.6 2.02-13.01 1.88-4.24-.18-8.48 0-12.69.53-4.2.54-8.35 1.43-12.41 2.62-4.06 1.21-7.99 2.82-11.79 4.69-7.58 3.78-14.52 8.86-20.44 14.98l-1.3 1.35.15-1.84c.43-5.26 1.5-10.41 3.03-15.42 1.53-5.01 3.56-9.86 6.06-14.44 2.47-4.6 5.57-8.85 9.01-12.75l2.66-2.86c.95-.89 1.92-1.76 2.89-2.63l1.45-1.31 1.56-1.18 3.12-2.35Z"
            />
            <path
              fill="url(#linear-gradient-13)"
              d="M393.3 359.91c-5.02-15.35-19.87-20.16-21.27-20.59-3.75-.75-11.53-1.75-20.41 1.35-13.84 4.84-20.24 16.14-21.76 19.03-4.84 6.82-14.04 17.88-29.07 26.74-18.4 10.84-35.88 12.68-44.62 13 12.79 5.22 61.35 23.83 101.19 11.1 7.11-2.27 19.53-6.43 28.3-18.34 2.81-3.82 12.64-17.02 7.65-32.3Z"
            />
            <path
              fill="url(#linear-gradient-14)"
              d="m393.3 359.91-.69-1.79-.34-.9c-.13-.29-.28-.57-.42-.86l-.85-1.72-1.01-1.63c-1.4-2.13-3.01-4.15-4.9-5.87-1.87-1.74-3.93-3.28-6.13-4.57-2.2-1.29-4.53-2.39-6.96-3.15h.01c-4.1-.78-8.33-.94-12.46-.39-2.07.28-4.11.72-6.09 1.33-.99.32-1.98.65-2.93 1.06-.48.2-.97.38-1.44.59l-1.4.68c-3.73 1.83-7.08 4.37-10.01 7.29-2.9 2.95-5.39 6.32-7.28 9.98l-.02.03-.03.04c-4.15 5.97-8.99 11.48-14.39 16.38-5.4 4.91-11.43 9.11-17.82 12.64-6.42 3.49-13.25 6.21-20.3 8.14-7.06 1.9-14.33 2.97-21.63 3.22l.34-1.9c13.25 5.45 27 9.68 41.03 12.57 14.02 2.83 28.46 4.16 42.72 2.6 7.13-.72 14.13-2.39 20.92-4.73 3.39-1.17 6.7-2.56 9.84-4.29 3.14-1.73 6.08-3.81 8.75-6.21 2.68-2.39 4.98-5.16 7.05-8.1 2.07-2.93 3.86-6.07 5.22-9.39 1.37-3.32 2.28-6.84 2.51-10.43.25-3.58-.19-7.21-1.28-10.64Zm0 0c1.12 3.42 1.58 7.05 1.35 10.65-.21 3.6-1.1 7.14-2.45 10.47-1.34 3.35-3.12 6.5-5.18 9.46-2.05 2.95-4.35 5.76-7.04 8.18-5.33 4.89-11.82 8.37-18.6 10.81-6.77 2.46-13.82 4.26-21 5.1-14.36 1.81-28.94.7-43.13-1.93-7.1-1.31-14.13-3.04-21.04-5.12-6.92-2.07-13.74-4.47-20.43-7.17l-4.25-1.72 4.59-.19c7.15-.29 14.26-1.4 21.16-3.28 3.45-.93 6.85-2.06 10.18-3.36 3.34-1.29 6.55-2.86 9.73-4.5 6.32-3.36 12.24-7.45 17.66-12.14 5.41-4.7 10.29-10.02 14.51-15.83l-.04.07c2.04-3.74 4.66-7.13 7.69-10.09 3.06-2.93 6.53-5.44 10.37-7.23l1.44-.66c.48-.21.99-.38 1.48-.57.98-.39 1.99-.71 3-1.01 2.03-.58 4.11-.98 6.2-1.22 4.19-.45 8.44-.27 12.55.58 2.44.8 4.76 1.94 6.95 3.26 2.19 1.33 4.25 2.87 6.11 4.63 1.89 1.73 3.49 3.76 4.89 5.9l1 1.64.85 1.72c.14.29.29.57.42.86l.34.9.68 1.79Z"
            />
            <path
              fill="url(#linear-gradient-15)"
              d="M295.52 422.78c-19-3.38-34.06-9.58-44.43-14.81-.34 1.26-2.09 8.25 2.04 15.32 4.1 7 10.94 8.92 12.23 9.26 1.75 1.32 4.9 4.06 7.17 8.61 2.52 5.05 2.64 9.67 2.55 11.89l70.98-1.17c.36-4.03.57-8.48.51-13.28-.07-5.41-.46-10.37-1.02-14.81-11.99 1.63-29.48 2.64-50.04-1.02Z"
            />
            <path
              fill="url(#linear-gradient-16)"
              d="M295.52 422.78c-7.71-1.36-15.33-3.28-22.79-5.68-7.45-2.43-14.76-5.32-21.83-8.76l.59-.26c-.62 2.49-.71 5.12-.37 7.66.36 2.54 1.24 4.98 2.53 7.18 1.32 2.18 3.06 4.09 5.11 5.58 2.05 1.48 4.38 2.61 6.81 3.22l.16.04.15.11c3.28 2.42 5.97 5.65 7.74 9.33 1.8 3.68 2.63 7.81 2.49 11.91l-1.05-1.07c11.83-.24 23.66-.32 35.49-.48 5.92-.08 11.83-.14 17.75-.16l17.75-.1-.59.55c.93-9.29.87-18.69-.2-27.99l.33.26c-4.16.51-8.35.87-12.53 1.07-4.19.23-8.38.28-12.57.18-8.38-.21-16.74-1.09-24.98-2.57Zm0 0c8.26 1.41 16.61 2.22 24.98 2.35 4.18.06 8.37-.03 12.55-.29 4.17-.28 8.34-.74 12.47-1.34l.29-.04.04.3c1.28 9.32 1.56 18.78.82 28.18l-.04.54-.55.02-17.74.49c-5.91.18-11.83.31-17.74.42-11.83.22-23.66.54-35.49.69h-1.09l.05-1.07c.16-3.77-.62-7.57-2.2-10.99-1.58-3.43-4.02-6.46-7.02-8.78l.3.15c-2.66-.75-5.11-2.03-7.28-3.69-2.16-1.67-3.97-3.78-5.32-6.14-1.32-2.38-2.17-5-2.47-7.69-.28-2.68-.11-5.41.61-8.01l.14-.5.45.23c6.93 3.59 14.11 6.77 21.52 9.29 7.4 2.56 15.01 4.48 22.72 5.9Z"
            />
            <path
              fill="url(#linear-gradient-17)"
              d="M255.57 435.95c-2.02-.48-7.92-2.14-12.36-7.71-6.59-8.26-4.44-18.14-4.13-19.44-2.45 3.44-7.92 12.11-8.39 24.4-.35 9.21 2.27 16.36 3.98 20.14 3.94 6.63 10.81 10.52 17.71 9.94 5.66-.48 9.45-3.83 10.79-5.14.49-.8 3.54-6.05 1.55-12.46-2.14-6.9-8.35-9.43-9.14-9.73Z"
            />
            <path
              fill="url(#linear-gradient-18)"
              d="M255.57 435.95c-2.87-.67-5.62-1.88-8.04-3.57-2.45-1.66-4.51-3.88-6.09-6.39-.83-1.24-1.43-2.61-1.99-4-.48-1.41-.9-2.86-1.13-4.34-.46-2.97-.46-6 .13-8.99l1.14.52c-2.16 3.19-3.86 6.67-5.17 10.26-1.29 3.6-2.14 7.35-2.51 11.15-.36 3.8-.27 7.64.35 11.41.62 3.77 1.67 7.47 3.22 10.98l-.05-.09c.69 1.15 1.45 2.27 2.32 3.3.88 1.02 1.85 1.96 2.91 2.8 2.13 1.65 4.6 2.9 7.24 3.46 2.64.6 5.43.47 8.04-.33 2.61-.8 5.02-2.27 7.04-4.15l-.04.05c1.14-1.86 1.9-3.98 2.18-6.17.15-1.09.17-2.2.06-3.3-.09-1.1-.33-2.19-.68-3.24-.32-1.06-.83-2.06-1.39-3.01-.6-.93-1.28-1.82-2.05-2.62-1.57-1.57-3.43-2.87-5.49-3.71Zm0 0c2.07.83 3.94 2.11 5.53 3.68.78.8 1.47 1.68 2.08 2.61.56.96 1.1 1.95 1.45 3.01.38 1.05.64 2.15.76 3.26.14 1.11.14 2.24.02 3.36-.25 2.23-.9 4.43-2.02 6.4v.02l-.04.03c-1.99 2.01-4.42 3.63-7.14 4.58-2.71.94-5.68 1.2-8.53.67-2.86-.49-5.56-1.73-7.92-3.41-1.17-.86-2.25-1.83-3.25-2.89-.98-1.08-1.86-2.24-2.63-3.48l-.02-.03-.03-.06c-1.67-3.61-2.92-7.44-3.58-11.39-.66-3.94-.86-7.97-.41-11.95.2-1.99.57-3.96 1.02-5.9.51-1.93 1.12-3.84 1.85-5.69 1.48-3.7 3.47-7.18 5.84-10.35l1.91-2.56-.77 3.08c-.69 2.77-.86 5.71-.55 8.59.14 1.44.48 2.86.88 4.26.47 1.37 1 2.74 1.74 4 1.44 2.54 3.43 4.78 5.82 6.51 2.39 1.72 5.13 2.95 7.99 3.65Z"
            />
            <path
              fill="url(#linear-gradient-19)"
              d="M257.74 190.95c2.79-2.81 7.93-8.74 10.72-17.87 3.25-10.63 1.5-19.63.51-23.49l-11.23 41.36Z"
            />
            <path
              fill="url(#linear-gradient-20)"
              d="M257.74 190.95c2.44-2.84 4.59-5.89 6.3-9.16 1.71-3.27 3.06-6.71 3.93-10.26.45-1.77.8-3.57 1-5.38.21-1.81.36-3.63.34-5.46-.02-3.65-.43-7.3-1.33-10.84h1.98c-1.84 6.75-3.82 13.37-5.91 20.14l-3.18 10.32c-1.07 3.51-2.09 7.03-3.13 10.65Zm0 0c.83-3.27 1.68-6.65 2.48-10.03l2.44-10.36c1.65-7.02 3.42-14.18 5.32-21.24l1-3.73.98 3.74c.97 3.7 1.44 7.53 1.4 11.35-.03 3.82-.6 7.64-1.66 11.31-1.07 3.66-2.65 7.17-4.66 10.37-1 1.61-2.15 3.12-3.36 4.56-1.21 1.44-2.52 2.8-3.94 4.03Z"
            />
            <path
              fill="url(#linear-gradient-21)"
              d="M254.16 169.5c2.82-8.93.89-16.53 0-19.4l-8.17 32.68c2.15-2.12 6.03-6.51 8.17-13.28Z"
            />
            <path
              fill="url(#linear-gradient-22)"
              d="M254.16 169.5c.45-1.58.84-3.18 1.05-4.8.18-1.63.27-3.27.17-4.9-.17-3.26-.85-6.46-1.95-9.48l1.49-.04c-.26 1.38-.54 2.76-.85 4.13-.29 1.38-.61 2.74-.94 4.1-.64 2.73-1.37 5.44-2.09 8.16-.73 2.71-1.51 5.41-2.31 8.1l-2.37 8.09-.62-.36c1.92-1.74 3.66-3.72 5.07-5.93.71-1.1 1.37-2.24 1.92-3.43.55-1.19 1.03-2.41 1.45-3.66Zm0 0c-.77 2.51-1.87 4.91-3.19 7.19-1.34 2.26-2.89 4.42-4.72 6.35l-.89.95.27-1.3 1.72-8.25c.56-2.75 1.15-5.5 1.78-8.24.64-2.73 1.27-5.47 1.99-8.18.35-1.36.71-2.72 1.1-4.07.37-1.35.77-2.7 1.19-4.04l.83-2.65.66 2.61c.82 3.26 1.16 6.62.99 9.93-.17 3.31-.73 6.57-1.73 9.7Z"
            />
            <path
              fill="url(#linear-gradient-23)"
              d="M241.95 163.89c.68-6.91-.38-12.56-1.32-16.09l-3.28 31.98c1.66-3.3 3.9-8.77 4.6-15.9Z"
            />
            <path
              fill="url(#linear-gradient-24)"
              d="M241.95 163.89c.11-1.35.17-2.7.16-4.05-.04-1.35-.12-2.7-.3-4.04-.37-2.67-.98-5.3-1.81-7.83l1.26-.1-.19 4.02-.27 4.01-.37 4-.44 3.99c-.32 2.66-.64 5.32-1.04 7.97l-1.16 7.96-.85-.25c1.32-2.41 2.48-4.93 3.31-7.57.41-1.32.8-2.65 1.05-4.02.27-1.36.48-2.73.63-4.11Zm0 0c-.13 1.38-.31 2.76-.56 4.12-.26 1.36-.53 2.73-.89 4.07-.71 2.69-1.58 5.35-2.74 7.9l-1 2.19.15-2.44.48-8.03c.15-2.68.37-5.35.6-8.02l.37-4 .45-3.99.55-3.98.63-3.97.56-3.5.71 3.4c.56 2.69.88 5.41.95 8.13.04 1.36.07 2.71 0 4.07-.03 1.35-.12 2.7-.26 4.05Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}*/