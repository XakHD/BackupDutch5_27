import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login Success Page - Startup Pro",
  description: "This is Login Success page for Startup Pro",
  // other metaDescription
};

const LoginSuccessPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[590px] text-center">
                <div className="mb-9 flex justify-center">
                  <svg
                    width="127"
                    height="120"
                    viewBox="0 0 127 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.65945 14.2318C8.22884 13.7167 9.08756 12.014 8.5775 10.4288C8.06735 8.84361 6.38159 7.97623 4.81219 8.4915C3.2428 9.00669 2.38409 10.7094 2.89424 12.2946C3.4043 13.8797 5.09006 14.7471 6.65945 14.2318Z"
                      fill="#ACEFC8"
                    />
                    <path
                      d="M13.1826 4.38495C14.2499 4.03456 14.8338 2.87679 14.4869 1.79886C14.14 0.720921 12.9937 0.131138 11.9265 0.48144C10.8593 0.831832 10.2754 1.98969 10.6223 3.06753C10.9691 4.14547 12.1155 4.73534 13.1826 4.38495Z"
                      fill="#ACEFC8"
                    />
                    <path
                      d="M111.14 14.7433C112.992 13.0341 113.121 10.1324 111.429 8.26205C109.737 6.39179 106.864 6.26115 105.012 7.97031C103.16 9.67948 103.031 12.5813 104.723 14.4515C106.415 16.3219 109.288 16.4525 111.14 14.7433Z"
                      fill="#ACEFC8"
                    />
                    <path
                      d="M125.647 6.37964C126.426 5.65993 126.481 4.4382 125.769 3.65065C125.056 2.86319 123.846 2.80814 123.066 3.52785C122.287 4.24746 122.233 5.46928 122.945 6.25674C123.658 7.0442 124.867 7.09925 125.647 6.37964Z"
                      fill="#ACEFC8"
                    />
                    <path
                      d="M11.91 113.616C12.6896 112.896 12.7441 111.675 12.0316 110.887C11.3191 110.1 10.1095 110.045 9.32985 110.765C8.55018 111.484 8.49572 112.706 9.20819 113.494C9.92066 114.281 11.1303 114.336 11.91 113.616Z"
                      fill="#ACEFC8"
                    />
                    <path
                      d="M59.9031 120C92.7103 120 119.306 93.1363 119.306 59.9998C119.306 26.8628 92.7103 0 59.9031 0C27.096 0 0.500488 26.8628 0.500488 59.9998C0.500488 93.1363 27.096 120 59.9031 120Z"
                      fill="url(#paint0_linear_2219_3179)"
                      fillOpacity="0.5"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M55.5483 31.8879C54.838 32.4932 54.4829 32.7959 54.1036 33.0501C53.2341 33.6328 52.2576 34.0373 51.2308 34.24C50.7828 34.3285 50.3177 34.3656 49.3874 34.4398C47.05 34.6263 45.8813 34.7196 44.9063 35.064C42.6511 35.8605 40.8773 37.6344 40.0807 39.8896C39.7363 40.8646 39.6431 42.0333 39.4565 44.3707C39.3823 45.3009 39.3452 45.7661 39.2568 46.214C39.054 47.2409 38.6496 48.2174 38.0668 49.0868C37.8126 49.4661 37.5099 49.8213 36.9046 50.5316C35.3837 52.3162 34.6233 53.2086 34.1774 54.1416C33.146 56.2994 33.146 58.8081 34.1774 60.9659C34.6233 61.8989 35.3837 62.7912 36.9046 64.5759C37.5098 65.2861 37.8126 65.6414 38.0668 66.0207C38.6496 66.8901 39.054 67.8666 39.2568 68.8935C39.3452 69.3414 39.3823 69.8066 39.4565 70.7368C39.6431 73.0742 39.7363 74.2429 40.0807 75.2179C40.8773 77.4731 42.6511 79.247 44.9063 80.0435C45.8813 80.3879 47.05 80.4812 49.3874 80.6677C50.3177 80.7419 50.7828 80.779 51.2308 80.8675C52.2576 81.0702 53.2341 81.4747 54.1036 82.0574C54.4829 82.3117 54.838 82.6143 55.5483 83.2196C57.333 84.7405 58.2253 85.5009 59.1583 85.9469C61.3162 86.9783 63.8248 86.9783 65.9827 85.9469C66.9156 85.5009 67.808 84.7405 69.5926 83.2196C70.3029 82.6143 70.6581 82.3117 71.0374 82.0574C71.9068 81.4747 72.8833 81.0702 73.9102 80.8675C74.3581 80.779 74.8233 80.7419 75.7536 80.6677C78.0909 80.4812 79.2596 80.3879 80.2347 80.0435C82.4898 79.247 84.2637 77.4731 85.0602 75.2179C85.4046 74.2429 85.4979 73.0742 85.6844 70.7368C85.7586 69.8066 85.7958 69.3414 85.8842 68.8935C86.0869 67.8666 86.4914 66.8901 87.0742 66.0207C87.3284 65.6414 87.631 65.2862 88.2363 64.5759C89.7572 62.7912 90.5177 61.8989 90.9636 60.9659C91.995 58.8081 91.995 56.2994 90.9636 54.1416C90.5177 53.2086 89.7572 52.3163 88.2363 50.5316C87.631 49.8213 87.3284 49.4661 87.0742 49.0868C86.4914 48.2174 86.0869 47.2409 85.8842 46.214C85.7958 45.7661 85.7586 45.3009 85.6844 44.3707C85.4979 42.0333 85.4046 40.8646 85.0602 39.8896C84.2637 37.6344 82.4898 35.8605 80.2347 35.064C79.2596 34.7196 78.0909 34.6263 75.7536 34.4398C74.8233 34.3656 74.3582 34.3285 73.9102 34.24C72.8833 34.0373 71.9068 33.6328 71.0374 33.0501C70.6581 32.7958 70.3029 32.4932 69.5926 31.8879C67.808 30.367 66.9156 29.6066 65.9827 29.1606C63.8248 28.1292 61.3162 28.1292 59.1583 29.1606C58.2253 29.6066 57.333 30.367 55.5483 31.8879Z"
                      fill="#ACEFC8"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M53.1443 34.5011C52.434 35.1064 52.0788 35.409 51.6995 35.6633C50.83 36.246 49.8536 36.6505 48.8267 36.8532C48.3787 36.9417 47.9136 36.9788 46.9833 37.053C44.646 37.2395 43.4773 37.3328 42.5022 37.6772C40.2471 38.4737 38.4732 40.2476 37.6767 42.5028C37.3323 43.4778 37.239 44.6465 37.0525 46.9838C36.9783 47.9141 36.9411 48.3793 36.8527 48.8272C36.65 49.8541 36.2455 50.8306 35.6627 51.7C35.4085 52.0793 35.1059 52.4345 34.5005 53.1448C32.9797 54.9294 32.2192 55.8218 31.7733 56.7548C30.7419 58.9126 30.7419 61.4212 31.7733 63.5791C32.2192 64.5121 32.9797 65.4044 34.5005 67.1891C35.1058 67.8993 35.4085 68.2546 35.6627 68.6338C36.2455 69.5033 36.65 70.4798 36.8527 71.5066C36.9411 71.9546 36.9783 72.4198 37.0525 73.35C37.239 75.6874 37.3323 76.8561 37.6767 77.8311C38.4732 80.0863 40.2471 81.8601 42.5022 82.6567C43.4773 83.0011 44.646 83.0943 46.9833 83.2809C47.9136 83.3551 48.3787 83.3922 48.8267 83.4807C49.8536 83.6834 50.83 84.0879 51.6995 84.6706C52.0788 84.9248 52.434 85.2275 53.1443 85.8328C54.9289 87.3537 55.8213 88.1141 56.7542 88.5601C58.9121 89.5915 61.4207 89.5915 63.5786 88.5601C64.5116 88.1141 65.4039 87.3537 67.1886 85.8328C67.8989 85.2275 68.254 84.9248 68.6333 84.6706C69.5028 84.0879 70.4792 83.6834 71.5061 83.4807C71.9541 83.3922 72.4192 83.3551 73.3495 83.2809C75.6869 83.0943 76.8556 83.0011 77.8306 82.6567C80.0858 81.8601 81.8596 80.0863 82.6562 77.8311C83.0006 76.8561 83.0938 75.6874 83.2803 73.35C83.3546 72.4198 83.3917 71.9546 83.4801 71.5066C83.6829 70.4798 84.0873 69.5033 84.6701 68.6338C84.9243 68.2545 85.227 67.8994 85.8323 67.1891C87.3532 65.4044 88.1136 64.5121 88.5595 63.5791C89.5909 61.4212 89.5909 58.9126 88.5595 56.7548C88.1136 55.8218 87.3532 54.9294 85.8323 53.1448C85.227 52.4345 84.9243 52.0793 84.6701 51.7C84.0873 50.8306 83.6829 49.8541 83.4801 48.8272C83.3917 48.3793 83.3546 47.9141 83.2803 46.9838C83.0938 44.6465 83.0006 43.4778 82.6562 42.5027C81.8596 40.2476 80.0858 38.4737 77.8306 37.6772C76.8556 37.3328 75.6869 37.2395 73.3495 37.053C72.4192 36.9788 71.9541 36.9417 71.5061 36.8532C70.4792 36.6505 69.5028 36.246 68.6333 35.6633C68.254 35.409 67.8989 35.1064 67.1886 34.5011C65.4039 32.9802 64.5116 32.2197 63.5786 31.7738C61.4207 30.7424 58.9121 30.7424 56.7542 31.7738C55.8213 32.2197 54.9289 32.9802 53.1443 34.5011Z"
                      fill="#22AD5C"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M73.3339 60C73.3339 67.3638 67.3644 73.3333 60.0006 73.3333C52.6368 73.3333 46.6672 67.3638 46.6672 60C46.6672 52.6362 52.6368 46.6667 60.0006 46.6667C67.3644 46.6667 73.3339 52.6362 73.3339 60ZM65.3743 55.9595C65.7649 56.3501 65.7649 56.9832 65.3743 57.3738L58.7077 64.0404C58.3172 64.431 57.684 64.431 57.2935 64.0404L54.6268 61.3738C54.2363 60.9832 54.2363 60.3501 54.6268 59.9595C55.0173 59.569 55.6505 59.569 56.041 59.9595L58.0006 61.9191L60.9803 58.9393L63.9601 55.9595C64.3507 55.569 64.9838 55.569 65.3743 55.9595Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2219_3179"
                        x1="59.9033"
                        y1="0"
                        x2="59.9033"
                        y2="120"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ACEFC8" />
                        <stop offset="1" stopColor="#ACEFC8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Logged in successfully!
                </h3>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Thank you so much for being with us!
                </p>
              
                <Link
                  href="/"
                  className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                >
                  Back to Homepage
                </Link>
             
            
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] hidden sm:block">
          <svg
            width="406"
            height="286"
            viewBox="0 0 406 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect
                opacity="0.5"
                x="56.25"
                y="110.344"
                width="116.719"
                height="116.438"
                stroke="url(#paint0_linear_116:1140)"
              />
              <rect
                opacity="0.1"
                x="56.25"
                y="110.344"
                width="116.719"
                height="116.438"
                fill="url(#paint1_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
                stroke="url(#paint2_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M172.688 110.344L229.219 51V167.601L172.688 226.781V110.344Z"
                fill="url(#paint3_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
                stroke="url(#paint4_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M0 169.619L56.25 110.344V226.85L0 286.125V169.619Z"
                fill="url(#paint5_linear_116:1140)"
              />
              <rect
                opacity="0.5"
                x="228.938"
                y="51.2812"
                width="119.25"
                height="116.438"
                stroke="url(#paint6_linear_116:1140)"
              />
              <rect
                opacity="0.1"
                x="228.938"
                y="51.2812"
                width="119.25"
                height="116.438"
                fill="url(#paint7_linear_116:1140)"
              />
              <path
                opacity="0.5"
                d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
                stroke="url(#paint8_linear_116:1140)"
              />
              <path
                opacity="0.1"
                d="M347.906 51.2812L405 2V110.113L347.906 167.719V51.2812Z"
                fill="url(#paint9_linear_116:1140)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_116:1140"
                x1="49.0781"
                y1="112.313"
                x2="148.922"
                y2="131.859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_116:1140"
                x1="179.141"
                y1="209.062"
                x2="32.6026"
                y2="145.47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_116:1140"
                x1="170.016"
                y1="125.25"
                x2="217.542"
                y2="125.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_116:1140"
                x1="233.578"
                y1="113.156"
                x2="146.509"
                y2="143.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_116:1140"
                x1="-3.45633"
                y1="113.316"
                x2="46.311"
                y2="116.426"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_116:1140"
                x1="69.8907"
                y1="189.234"
                x2="84.0124"
                y2="249.947"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_116:1140"
                x1="218.953"
                y1="157.453"
                x2="330.261"
                y2="148.369"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_116:1140"
                x1="348.187"
                y1="46.6406"
                x2="280.112"
                y2="168.552"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_116:1140"
                x1="329"
                y1="190"
                x2="369.525"
                y2="-29.8829"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_116:1140"
                x1="409"
                y1="10"
                x2="331.729"
                y2="34.2741"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 top-0 z-[-1] hidden sm:block">
          <svg
            width="406"
            height="286"
            viewBox="0 0 406 286"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <rect
                opacity="0.5"
                x="57.25"
                y="108.344"
                width="116.719"
                height="116.438"
                stroke="url(#paint0_linear_116:1151)"
              />
              <rect
                opacity="0.1"
                x="57.25"
                y="108.344"
                width="116.719"
                height="116.438"
                fill="url(#paint1_linear_116:1151)"
              />
              <path
                opacity="0.5"
                d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
                stroke="url(#paint2_linear_116:1151)"
              />
              <path
                opacity="0.1"
                d="M173.688 108.344L230.219 49V165.601L173.688 224.781V108.344Z"
                fill="url(#paint3_linear_116:1151)"
              />
              <path
                opacity="0.5"
                d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
                stroke="url(#paint4_linear_116:1151)"
              />
              <path
                opacity="0.1"
                d="M1 167.619L57.25 108.344V224.85L1 284.125V167.619Z"
                fill="url(#paint5_linear_116:1151)"
              />
              <rect
                opacity="0.5"
                x="229.938"
                y="49.2812"
                width="119.25"
                height="116.438"
                stroke="url(#paint6_linear_116:1151)"
              />
              <rect
                opacity="0.1"
                x="229.938"
                y="49.2812"
                width="119.25"
                height="116.438"
                fill="url(#paint7_linear_116:1151)"
              />
              <path
                opacity="0.5"
                d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
                stroke="url(#paint8_linear_116:1151)"
              />
              <path
                opacity="0.1"
                d="M348.906 49.2812L406 0V108.113L348.906 165.719V49.2812Z"
                fill="url(#paint9_linear_116:1151)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_116:1151"
                x1="50.0781"
                y1="110.313"
                x2="149.922"
                y2="129.859"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_116:1151"
                x1="180.141"
                y1="207.062"
                x2="33.6026"
                y2="143.47"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_116:1151"
                x1="171.016"
                y1="123.25"
                x2="218.542"
                y2="123.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_116:1151"
                x1="234.578"
                y1="111.156"
                x2="147.509"
                y2="141.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_116:1151"
                x1="85.5"
                y1="71.5"
                x2="100.174"
                y2="270.716"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_116:1151"
                x1="70.8907"
                y1="187.234"
                x2="85.0124"
                y2="247.947"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_116:1151"
                x1="219.953"
                y1="155.453"
                x2="331.261"
                y2="146.369"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_116:1151"
                x1="349.187"
                y1="44.6406"
                x2="281.112"
                y2="166.552"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_116:1151"
                x1="394.75"
                y1="64.3284"
                x2="409.531"
                y2="110.901"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_116:1151"
                x1="410"
                y1="8.00001"
                x2="332.729"
                y2="32.2741"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default LoginSuccessPage;
