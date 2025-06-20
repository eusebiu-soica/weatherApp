import React from "react";

import Svg, { Path, Defs, Stop, LinearGradient, G, Ellipse } from "react-native-svg";

export interface IconConditionProps {
    name: any
    isDay: boolean
    color?: string;
    strokeWidth?: number;
    size?: number
}


export function IconCondition({ name, color = "#000", size = 24, strokeWidth = 2, isDay }: IconConditionProps) {
    const icons: any = {
        day: {
            "113": (
                <Svg width={size} height={size} viewBox="0 0 39 39" fill="none">
                    <Path d="M19.1999 27.4664C23.7102 27.4664 27.3665 23.81 27.3665 19.2997C27.3665 14.7894 23.7102 11.1331 19.1999 11.1331C14.6895 11.1331 11.0332 14.7894 11.0332 19.2997C11.0332 23.81 14.6895 27.4664 19.1999 27.4664Z" fill="url(#paint0_linear_118_111)" stroke="#F8AF18" strokeWidth="0.5" strokeMiterlimit="10" />
                    <Path d="M19.1997 6.62993V1.79993V6.62993ZM19.1997 36.7999V31.9699V36.7999ZM28.1597 10.3399L31.5742 6.92548L28.1597 10.3399ZM6.82526 31.6744L10.2397 28.2599L6.82526 31.6744ZM10.2397 10.371L6.82526 6.95659L10.2397 10.371ZM31.5742 31.6744L28.1597 28.2599L31.5742 31.6744ZM6.52971 19.2999H1.69971H6.52971ZM36.6997 19.2999H31.8697H36.6997Z" fill="url(#paint1_linear_118_111)" />
                    <Path d="M19.1997 6.62993V1.79993M19.1997 36.7999V31.9699M28.1597 10.3399L31.5742 6.92548M6.82526 31.6744L10.2397 28.2599M10.2397 10.371L6.82526 6.95659M31.5742 31.6744L28.1597 28.2599M6.52971 19.2999H1.69971M36.6997 19.2999H31.8697" stroke="#FBBF24" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" />
                    <Defs>
                        <LinearGradient id="paint0_linear_118_111" x1="15.1165" y1="12.2297" x2="23.2832" y2="26.3697" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#FFEDBF" />
                            <Stop offset="0.464" stopColor="#FBBF24" />
                            <Stop offset="1" stopColor="#F59E0B" />
                        </LinearGradient>
                        <LinearGradient id="paint1_linear_118_111" x1="10.4497" y1="4.14993" x2="27.9497" y2="34.4499" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#FFEDBF" />
                            <Stop offset="0.464" stopColor="#FBBF24" />
                            <Stop offset="1" stopColor="#F59E0B" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "116": (
                <Svg width={size} height={size} viewBox="0 0 117 87" fill="none">
                    <Path
                        d="M37.3 52.6047C45.75 52.6047 52.6 45.7536 52.6 37.3023C52.6 28.8511 45.75 22 37.3 22C28.85 22 22 28.8511 22 37.3023C22 45.7536 28.85 52.6047 37.3 52.6047Z"
                        fill="url(#paint0_linear_450_299)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.345 11.7426V2M37.345 72.6879V62.9452M55.4478 19.2417L62.3324 12.3573M12.3576 62.3306L19.2422 55.4462M19.2422 19.2417L12.3576 12.3573M62.3324 62.3306L55.4478 55.4462M2 37.3439H11.7429M72.69 37.3439H62.9471"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_450_299)">
                        <Path
                            d="M97.8774 50.2714H97.1861C98.4566 45.033 97.8183 39.5133 95.3857 34.7032C92.9531 29.893 88.8856 26.1074 83.9133 24.0259C78.941 21.9444 73.3896 21.7034 68.2556 23.346C63.1216 24.9887 58.7413 28.4075 55.9009 32.9888C53.6081 31.6293 50.9966 30.9001 48.3312 30.8749C45.6657 30.8497 43.0409 31.5295 40.7228 32.8453C38.4046 34.1612 36.4755 36.0663 35.1308 38.3678C33.7861 40.6693 33.0736 43.2853 33.0655 45.9507C33.0722 46.7761 33.1444 47.5996 33.2816 48.4135C29.3379 49.186 25.822 51.3964 23.4166 54.6155C21.0112 57.8347 19.8879 61.8328 20.2648 65.8336C20.6418 69.8343 22.492 73.5523 25.4564 76.2656C28.4207 78.9788 32.2876 80.4937 36.3061 80.516C36.6659 80.5375 37.0266 80.5375 37.3863 80.516H97.8774C101.888 80.516 105.735 78.9228 108.571 76.0868C111.407 73.2508 113 69.4044 113 65.3937C113 61.383 111.407 57.5366 108.571 54.7006C105.735 51.8646 101.888 50.2714 97.8774 50.2714Z"
                            fill="url(#paint1_linear_450_299)"
                        />
                    </G>
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_450_299"
                            x1={29.65}
                            y1={24.0505}
                            x2={44.9535}
                            y2={50.5521}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_450_299"
                            x1={24.5}
                            y1={12.5}
                            x2={137.999}
                            y2={117.501}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "119": (
                <Svg width={size} height={size} viewBox="0 0 99 66" fill="none">
                    <G filter="url(#filter0_d_457_304)">
                        <Path d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z" fill="url(#paint0_linear_457_304)" />
                    </G>
                    <Defs>

                        <LinearGradient id="paint0_linear_457_304" x1="8.89095" y1="-6.78325" x2="119.321" y2="95.3811" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset="1" stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "122": (
                <Svg width={size} height={size} viewBox="0 0 125 74" fill="none" >
                    <G filter="url(#filter0_d_462_578)">
                        <Path d="M110.06 35.2639H109.606C110.441 31.8474 110.021 28.2474 108.422 25.1102C106.824 21.973 104.15 19.504 100.882 18.1465C97.6137 16.7889 93.9648 16.6317 90.5903 17.7031C87.2159 18.7744 84.3368 21.0042 82.4698 23.9921C80.9628 23.1055 79.2463 22.6298 77.4944 22.6134C75.7424 22.597 74.0172 23.0403 72.4936 23.8985C70.9699 24.7567 69.7019 25.9993 68.8181 27.5003C67.9342 29.0013 67.4659 30.7075 67.4606 32.4459C67.465 32.9842 67.5125 33.5213 67.6026 34.0521C65.0105 34.556 62.6996 35.9976 61.1186 38.0971C59.5375 40.1966 58.7992 42.8042 59.047 45.4135C59.2947 48.0229 60.5109 50.4477 62.4593 52.2173C64.4077 53.9869 66.9493 54.9749 69.5906 54.9895C69.827 55.0035 70.0641 55.0035 70.3006 54.9895H110.06C112.696 54.9895 115.225 53.9504 117.089 52.1007C118.953 50.2511 120 47.7425 120 45.1267C120 42.5109 118.953 40.0022 117.089 38.1526C115.225 36.303 112.696 35.2639 110.06 35.2639Z" fill="url(#paint0_linear_462_578)" />
                        <Path d="M110.06 35.2639H109.606C110.441 31.8474 110.021 28.2474 108.422 25.1102C106.824 21.973 104.15 19.504 100.882 18.1465C97.6137 16.7889 93.9648 16.6317 90.5903 17.7031C87.2159 18.7744 84.3368 21.0042 82.4698 23.9921C80.9628 23.1055 79.2463 22.6298 77.4944 22.6134C75.7424 22.597 74.0172 23.0403 72.4936 23.8985C70.9699 24.7567 69.7019 25.9993 68.8181 27.5003C67.9342 29.0013 67.4659 30.7075 67.4606 32.4459C67.465 32.9842 67.5125 33.5213 67.6026 34.0521C65.0105 34.556 62.6996 35.9976 61.1186 38.0971C59.5375 40.1966 58.7992 42.8042 59.047 45.4135C59.2947 48.0229 60.5109 50.4477 62.4593 52.2173C64.4077 53.9869 66.9493 54.9749 69.5906 54.9895C69.827 55.0035 70.0641 55.0035 70.3006 54.9895H110.06C112.696 54.9895 115.225 53.9504 117.089 52.1007C118.953 50.2511 120 47.7425 120 45.1267C120 42.5109 118.953 40.0022 117.089 38.1526C115.225 36.303 112.696 35.2639 110.06 35.2639Z" stroke="url(#paint1_linear_462_578)" strokeMiterlimit="10" />
                    </G>
                    <G filter="url(#filter1_d_462_578)">
                        <Path d="M89.2857 29.9669H88.613C89.8492 24.8701 89.2282 19.4997 86.8613 14.8196C84.4945 10.1395 80.5369 6.4562 75.6989 4.43099C70.861 2.40579 65.4596 2.17127 60.4643 3.76953C55.469 5.3678 51.207 8.69418 48.4434 13.1515C46.2125 11.8289 43.6716 11.1193 41.0782 11.0948C38.4847 11.0703 35.9309 11.7317 33.6754 13.012C31.4199 14.2922 29.5429 16.1459 28.2345 18.3851C26.9261 20.6244 26.2329 23.1696 26.225 25.7631C26.2315 26.5661 26.3018 27.3673 26.4353 28.1592C22.5981 28.9109 19.1773 31.0615 16.8368 34.1936C14.4964 37.3256 13.4035 41.2157 13.7702 45.1083C14.137 49.0009 15.9372 52.6183 18.8215 55.2582C21.7057 57.8981 25.4681 59.372 29.3781 59.3938C29.7281 59.4147 30.0791 59.4147 30.4291 59.3938H89.2857C93.1881 59.3938 96.9307 57.8436 99.6902 55.0843C102.45 52.325 104 48.5826 104 44.6803C104 40.7781 102.45 37.0357 99.6902 34.2764C96.9307 31.517 93.1881 29.9669 89.2857 29.9669Z" fill="url(#paint2_linear_462_578)" />
                    </G>
                    <G filter="url(#filter2_d_462_578)">
                        <Path d="M56.0601 47.2639H55.6057C56.4408 43.8474 56.0213 40.2474 54.4224 37.1102C52.8235 33.973 50.15 31.504 46.8818 30.1465C43.6137 28.7889 39.9648 28.6317 36.5903 29.7031C33.2159 30.7744 30.3368 33.0042 28.4698 35.9921C26.9628 35.1055 25.2463 34.6298 23.4944 34.6134C21.7424 34.597 20.0172 35.0403 18.4936 35.8985C16.9699 36.7567 15.7019 37.9993 14.8181 39.5003C13.9342 41.0013 13.4659 42.7075 13.4606 44.4459C13.465 44.9842 13.5125 45.5213 13.6026 46.0521C11.0105 46.556 8.6996 47.9976 7.11857 50.0971C5.53754 52.1966 4.79922 54.8042 5.04697 57.4135C5.29473 60.0229 6.51087 62.4477 8.45927 64.2173C10.4077 65.9869 12.9493 66.9749 15.5906 66.9895C15.827 67.0035 16.0641 67.0035 16.3006 66.9895H56.0601C58.6963 66.9895 61.2246 65.9504 63.0887 64.1007C64.9528 62.2511 66 59.7425 66 57.1267C66 54.5109 64.9528 52.0022 63.0887 50.1526C61.2246 48.303 58.6963 47.2639 56.0601 47.2639Z" fill="url(#paint3_linear_462_578)" />
                        <Path d="M56.0601 47.2639H55.6057C56.4408 43.8474 56.0213 40.2474 54.4224 37.1102C52.8235 33.973 50.15 31.504 46.8818 30.1465C43.6137 28.7889 39.9648 28.6317 36.5903 29.7031C33.2159 30.7744 30.3368 33.0042 28.4698 35.9921C26.9628 35.1055 25.2463 34.6298 23.4944 34.6134C21.7424 34.597 20.0172 35.0403 18.4936 35.8985C16.9699 36.7567 15.7019 37.9993 14.8181 39.5003C13.9342 41.0013 13.4659 42.7075 13.4606 44.4459C13.465 44.9842 13.5125 45.5213 13.6026 46.0521C11.0105 46.556 8.6996 47.9976 7.11857 50.0971C5.53754 52.1966 4.79922 54.8042 5.04697 57.4135C5.29473 60.0229 6.51087 62.4477 8.45927 64.2173C10.4077 65.9869 12.9493 66.9749 15.5906 66.9895C15.827 67.0035 16.0641 67.0035 16.3006 66.9895H56.0601C58.6963 66.9895 61.2246 65.9504 63.0887 64.1007C64.9528 62.2511 66 59.7425 66 57.1267C66 54.5109 64.9528 52.0022 63.0887 50.1526C61.2246 48.303 58.6963 47.2639 56.0601 47.2639Z" stroke="url(#paint4_linear_462_578)" strokeMiterlimit="10" />
                    </G>
                    <Defs>

                        <LinearGradient id="paint0_linear_462_578" x1="77.6897" y1="22.2752" x2="114.471" y2="53.952" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.417816" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                        <LinearGradient id="paint1_linear_462_578" x1="79.3727" y1="22.6091" x2="113.451" y2="55.27" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.5" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                        <LinearGradient id="paint2_linear_462_578" x1="17.891" y1="-6.78325" x2="128.321" y2="95.3811" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset="1" stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient id="paint3_linear_462_578" x1="23.6897" y1="34.2752" x2="60.4709" y2="65.952" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.417816" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                        <LinearGradient id="paint4_linear_462_578" x1="25.3727" y1="34.6091" x2="59.4508" y2="67.27" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.5" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                    </Defs>
                </Svg>


            ),

            "143": (
                <Svg width={size} height={size} viewBox="0 0 78 45" fill="none">
                    <Path d="M3 3H66.2812" stroke="url(#paint0_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M12 16H75.2812" stroke="url(#paint1_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M3 29H66.2812" stroke="url(#paint2_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M12 42H75.2812" stroke="url(#paint3_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Defs>
                        <LinearGradient id="paint0_linear_445_682" x1="3" y1="3.5" x2="66.2812" y2="3.5" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient id="paint1_linear_445_682" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient id="paint2_linear_445_682" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient id="paint3_linear_445_682" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                    </Defs>
                </Svg>

            ),

            "176": (
                <Svg width={size} height={size} viewBox="0 0 115 115" fill="none" >
                    <Path d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z" fill="url(#paint0_linear_458_435)" stroke="#F6A823" strokeWidth="0.5" strokeMiterlimit="10" />
                    <Path d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003" stroke="#FFD140" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z" fill="url(#paint1_linear_458_435)" stroke="#F6A823" strokeWidth="0.5" strokeMiterlimit="10" />
                    <Path d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003" stroke="#FFD140" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <G filter="url(#filter0_d_458_435)">
                        <Path d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z" fill="url(#paint2_linear_458_435)" />
                    </G>
                    <Path d="M49 97L48 107" stroke="url(#paint3_linear_458_435)" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M37 87L36 97" stroke="url(#paint4_linear_458_435)" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M67.6453 87L66 97.4203" stroke="url(#paint5_linear_458_435)" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M77.6453 102L76 112.42" stroke="url(#paint6_linear_458_435)" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M93.6453 90L92 100.42" stroke="url(#paint7_linear_458_435)" strokeWidth="5.5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Defs>
                        <LinearGradient id="paint0_linear_458_435" x1="29.9028" y1="24.4545" x2="44.7924" y2="50.2399" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset="0.3" stopColor="#FFD140" />
                            <Stop offset="1" stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient id="paint1_linear_458_435" x1="29.9028" y1="24.4545" x2="44.7924" y2="50.2399" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset="0.3" stopColor="#FFD140" />
                            <Stop offset="1" stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient id="paint2_linear_458_435" x1="24.891" y1="15.2168" x2="135.321" y2="117.381" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="white" />
                            <Stop offset="1" stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient id="paint3_linear_458_435" x1="46.6154" y1="96.8381" x2="53.4624" y2="104.36" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#95BFFF" />
                            <Stop offset="0.45" stopColor="#95BFFF" />
                            <Stop offset="1" stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient id="paint4_linear_458_435" x1="34.6154" y1="86.8381" x2="41.4624" y2="94.3605" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#95BFFF" />
                            <Stop offset="0.45" stopColor="#95BFFF" />
                            <Stop offset="1" stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient id="paint5_linear_458_435" x1="63.7219" y1="86.8312" x2="69.9235" y2="97.5891" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#95BFFF" />
                            <Stop offset="0.45" stopColor="#95BFFF" />
                            <Stop offset="1" stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient id="paint6_linear_458_435" x1="73.7219" y1="101.831" x2="79.9235" y2="112.589" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#95BFFF" />
                            <Stop offset="0.45" stopColor="#95BFFF" />
                            <Stop offset="1" stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient id="paint7_linear_458_435" x1="89.7219" y1="89.8312" x2="95.9235" y2="100.589" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#95BFFF" />
                            <Stop offset="0.45" stopColor="#95BFFF" />
                            <Stop offset="1" stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "179": (
                <Svg width={size} height={size} viewBox="0 0 114 114" fill="none" >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_300)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_463_300)"
                        />
                    </G>
                    <Path
                        d="M50.5774 104.91C52.0336 104.91 53.2141 103.73 53.2141 102.273C53.2141 100.817 52.0336 99.6367 50.5774 99.6367C49.1212 99.6367 47.9407 100.817 47.9407 102.273C47.9407 103.73 49.1212 104.91 50.5774 104.91Z"
                        stroke="url(#paint3_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 104.91L52.8555 103.581M48.2992 100.966L46 99.6367M50.5773 97V99.6367M50.5773 107.547V104.91M48.2992 103.581L46 104.91M55.1547 99.6367L52.8555 100.966"
                        stroke="url(#paint4_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M86.5774 92.9102C88.0336 92.9102 89.2141 91.7297 89.2141 90.2734C89.2141 88.8172 88.0336 87.6367 86.5774 87.6367C85.1212 87.6367 83.9407 88.8172 83.9407 90.2734C83.9407 91.7297 85.1212 92.9102 86.5774 92.9102Z"
                        stroke="url(#paint5_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M91.1547 92.9102L88.8555 91.5812M84.2992 88.9656L82 87.6367M86.5773 85V87.6367M86.5773 95.5469V92.9102M84.2992 91.5812L82 92.9102M91.1547 87.6367L88.8555 88.9656"
                        stroke="url(#paint6_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.5774 93.9102C39.0336 93.9102 40.2141 92.7297 40.2141 91.2734C40.2141 89.8172 39.0336 88.6367 37.5774 88.6367C36.1212 88.6367 34.9407 89.8172 34.9407 91.2734C34.9407 92.7297 36.1212 93.9102 37.5774 93.9102Z"
                        stroke="url(#paint7_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 93.9102L39.8555 92.5812M35.2992 89.9656L33 88.6367M37.5773 86V88.6367M37.5773 96.5469V93.9102M35.2992 92.5812L33 93.9102M42.1547 88.6367L39.8555 89.9656"
                        stroke="url(#paint8_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.5774 109.91C79.0336 109.91 80.2141 108.73 80.2141 107.273C80.2141 105.817 79.0336 104.637 77.5774 104.637C76.1212 104.637 74.9407 105.817 74.9407 107.273C74.9407 108.73 76.1212 109.91 77.5774 109.91Z"
                        stroke="url(#paint9_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M82.1547 109.91L79.8555 108.581M75.2992 105.966L73 104.637M77.5773 102V104.637M77.5773 112.547V109.91M75.2992 108.581L73 109.91M82.1547 104.637L79.8555 105.966"
                        stroke="url(#paint10_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M65.5774 96.9102C67.0336 96.9102 68.2141 95.7297 68.2141 94.2734C68.2141 92.8172 67.0336 91.6367 65.5774 91.6367C64.1212 91.6367 62.9407 92.8172 62.9407 94.2734C62.9407 95.7297 64.1212 96.9102 65.5774 96.9102Z"
                        stroke="url(#paint11_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M70.1547 96.9102L67.8555 95.5812M63.2992 92.9656L61 91.6367M65.5773 89V91.6367M65.5773 99.5469V96.9102M63.2992 95.5812L61 96.9102M70.1547 91.6367L67.8555 92.9656"
                        stroke="url(#paint12_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_300"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_300"
                            x1={48.7211}
                            y1={99.0672}
                            x2={52.4336}
                            y2={105.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_300"
                            x1={47.7719}
                            y1={97.4008}
                            x2={53.3828}
                            y2={107.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_300"
                            x1={84.7211}
                            y1={87.0672}
                            x2={88.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_300"
                            x1={83.7719}
                            y1={85.4008}
                            x2={89.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_300"
                            x1={35.7211}
                            y1={88.0672}
                            x2={39.4336}
                            y2={94.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_300"
                            x1={34.7719}
                            y1={86.4008}
                            x2={40.3828}
                            y2={96.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_463_300"
                            x1={75.7211}
                            y1={104.067}
                            x2={79.4336}
                            y2={110.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_463_300"
                            x1={74.7719}
                            y1={102.401}
                            x2={80.3828}
                            y2={112.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_463_300"
                            x1={63.7211}
                            y1={91.0672}
                            x2={67.4336}
                            y2={97.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint12_linear_463_300"
                            x1={62.7719}
                            y1={89.4008}
                            x2={68.3828}
                            y2={99.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "182": (
                <Svg width={size} height={size} viewBox="0 0 114 114" fill="none" >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_299)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_299)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_299)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_463_299)"
                        />
                    </G>
                    <Path
                        d="M38.5774 97.9102C40.0336 97.9102 41.2141 96.7297 41.2141 95.2734C41.2141 93.8172 40.0336 92.6367 38.5774 92.6367C37.1212 92.6367 35.9407 93.8172 35.9407 95.2734C35.9407 96.7297 37.1212 97.9102 38.5774 97.9102Z"
                        stroke="url(#paint3_linear_463_299)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M43.1547 97.9102L40.8555 96.5812M36.2992 93.9656L34 92.6367M38.5773 90V92.6367M38.5773 100.547V97.9102M36.2992 96.5812L34 97.9102M43.1547 92.6367L40.8555 93.9656"
                        stroke="url(#paint4_linear_463_299)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M91.5774 94.9102C93.0336 94.9102 94.2141 93.7297 94.2141 92.2734C94.2141 90.8172 93.0336 89.6367 91.5774 89.6367C90.1212 89.6367 88.9407 90.8172 88.9407 92.2734C88.9407 93.7297 90.1212 94.9102 91.5774 94.9102Z"
                        stroke="url(#paint5_linear_463_299)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M96.1547 94.9102L93.8555 93.5812M89.2992 90.9656L87 89.6367M91.5773 87V89.6367M91.5773 97.5469V94.9102M89.2992 93.5812L87 94.9102M96.1547 89.6367L93.8555 90.9656"
                        stroke="url(#paint6_linear_463_299)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.5774 109.91C79.0336 109.91 80.2141 108.73 80.2141 107.273C80.2141 105.817 79.0336 104.637 77.5774 104.637C76.1212 104.637 74.9407 105.817 74.9407 107.273C74.9407 108.73 76.1212 109.91 77.5774 109.91Z"
                        stroke="url(#paint7_linear_463_299)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M82.1547 109.91L79.8555 108.581M75.2992 105.966L73 104.637M77.5773 102V104.637M77.5773 112.547V109.91M75.2992 108.581L73 109.91M82.1547 104.637L79.8555 105.966"
                        stroke="url(#paint8_linear_463_299)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.4375 63L53 88.3125H61.4375L57.2188 109.406L78.3125 79.875H65.6562L74.0938 63H61.4375Z"
                        fill="url(#paint9_linear_463_299)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_299"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_299"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_299"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_299"
                            x1={36.7211}
                            y1={92.0672}
                            x2={40.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_299"
                            x1={35.7719}
                            y1={90.4008}
                            x2={41.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_299"
                            x1={89.7211}
                            y1={89.0672}
                            x2={93.4336}
                            y2={95.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_299"
                            x1={88.7719}
                            y1={87.4008}
                            x2={94.3828}
                            y2={97.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_299"
                            x1={75.7211}
                            y1={104.067}
                            x2={79.4336}
                            y2={110.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_299"
                            x1={74.7719}
                            y1={102.401}
                            x2={80.3828}
                            y2={112.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_463_299"
                            x1={67.1562}
                            y1={64.0625}
                            x2={57.1562}
                            y2={110.063}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "185": (
                <Svg width={size} height={size} viewBox="0 0 115 109" fill="none" >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_301)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_301)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_301)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_463_301)"
                        />
                    </G>
                    <Path
                        d="M75 98L74 101"
                        stroke="url(#paint3_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M48 104L47 107"
                        stroke="url(#paint4_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 89L58 92"
                        stroke="url(#paint5_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M89 88L88 91"
                        stroke="url(#paint6_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M35 86L34 89"
                        stroke="url(#paint7_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M44 91L43 94"
                        stroke="url(#paint8_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M75 86L74 89"
                        stroke="url(#paint9_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M67 101L66 104"
                        stroke="url(#paint10_linear_463_301)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_301"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_301"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_301"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_301"
                            x1={72.6154}
                            y1={97.9514}
                            x2={73.664}
                            y2={101.791}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_301"
                            x1={45.6154}
                            y1={103.951}
                            x2={46.664}
                            y2={107.791}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_301"
                            x1={56.6154}
                            y1={88.9514}
                            x2={57.664}
                            y2={92.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_301"
                            x1={86.6154}
                            y1={87.9514}
                            x2={87.664}
                            y2={91.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_301"
                            x1={32.6154}
                            y1={85.9514}
                            x2={33.664}
                            y2={89.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_301"
                            x1={41.6154}
                            y1={90.9514}
                            x2={42.664}
                            y2={94.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_463_301"
                            x1={72.6154}
                            y1={85.9514}
                            x2={73.664}
                            y2={89.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_463_301"
                            x1={64.6154}
                            y1={100.951}
                            x2={65.664}
                            y2={104.791}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "200": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 114 111"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_302)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_302)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_302)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_463_302)"
                        />
                    </G>
                    <Path
                        d="M61.2812 62.9375L52.8438 88.25H61.2812L57.0625 109.344L78.1562 79.8125H65.5L73.9375 62.9375H61.2812Z"
                        fill="url(#paint3_linear_463_302)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_302"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_302"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_302"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_302"
                            x1={67}
                            y1={64}
                            x2={57}
                            y2={110}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "227": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 114 114"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_300)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_463_300)"
                        />
                    </G>
                    <Path
                        d="M50.5774 104.91C52.0336 104.91 53.2141 103.73 53.2141 102.273C53.2141 100.817 52.0336 99.6367 50.5774 99.6367C49.1212 99.6367 47.9407 100.817 47.9407 102.273C47.9407 103.73 49.1212 104.91 50.5774 104.91Z"
                        stroke="url(#paint3_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 104.91L52.8555 103.581M48.2992 100.966L46 99.6367M50.5773 97V99.6367M50.5773 107.547V104.91M48.2992 103.581L46 104.91M55.1547 99.6367L52.8555 100.966"
                        stroke="url(#paint4_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M86.5774 92.9102C88.0336 92.9102 89.2141 91.7297 89.2141 90.2734C89.2141 88.8172 88.0336 87.6367 86.5774 87.6367C85.1212 87.6367 83.9407 88.8172 83.9407 90.2734C83.9407 91.7297 85.1212 92.9102 86.5774 92.9102Z"
                        stroke="url(#paint5_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M91.1547 92.9102L88.8555 91.5812M84.2992 88.9656L82 87.6367M86.5773 85V87.6367M86.5773 95.5469V92.9102M84.2992 91.5812L82 92.9102M91.1547 87.6367L88.8555 88.9656"
                        stroke="url(#paint6_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.5774 93.9102C39.0336 93.9102 40.2141 92.7297 40.2141 91.2734C40.2141 89.8172 39.0336 88.6367 37.5774 88.6367C36.1212 88.6367 34.9407 89.8172 34.9407 91.2734C34.9407 92.7297 36.1212 93.9102 37.5774 93.9102Z"
                        stroke="url(#paint7_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 93.9102L39.8555 92.5812M35.2992 89.9656L33 88.6367M37.5773 86V88.6367M37.5773 96.5469V93.9102M35.2992 92.5812L33 93.9102M42.1547 88.6367L39.8555 89.9656"
                        stroke="url(#paint8_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.5774 109.91C79.0336 109.91 80.2141 108.73 80.2141 107.273C80.2141 105.817 79.0336 104.637 77.5774 104.637C76.1212 104.637 74.9407 105.817 74.9407 107.273C74.9407 108.73 76.1212 109.91 77.5774 109.91Z"
                        stroke="url(#paint9_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M82.1547 109.91L79.8555 108.581M75.2992 105.966L73 104.637M77.5773 102V104.637M77.5773 112.547V109.91M75.2992 108.581L73 109.91M82.1547 104.637L79.8555 105.966"
                        stroke="url(#paint10_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M65.5774 96.9102C67.0336 96.9102 68.2141 95.7297 68.2141 94.2734C68.2141 92.8172 67.0336 91.6367 65.5774 91.6367C64.1212 91.6367 62.9407 92.8172 62.9407 94.2734C62.9407 95.7297 64.1212 96.9102 65.5774 96.9102Z"
                        stroke="url(#paint11_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M70.1547 96.9102L67.8555 95.5812M63.2992 92.9656L61 91.6367M65.5773 89V91.6367M65.5773 99.5469V96.9102M63.2992 95.5812L61 96.9102M70.1547 91.6367L67.8555 92.9656"
                        stroke="url(#paint12_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_300"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_300"
                            x1={48.7211}
                            y1={99.0672}
                            x2={52.4336}
                            y2={105.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_300"
                            x1={47.7719}
                            y1={97.4008}
                            x2={53.3828}
                            y2={107.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_300"
                            x1={84.7211}
                            y1={87.0672}
                            x2={88.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_300"
                            x1={83.7719}
                            y1={85.4008}
                            x2={89.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_300"
                            x1={35.7211}
                            y1={88.0672}
                            x2={39.4336}
                            y2={94.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_300"
                            x1={34.7719}
                            y1={86.4008}
                            x2={40.3828}
                            y2={96.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_463_300"
                            x1={75.7211}
                            y1={104.067}
                            x2={79.4336}
                            y2={110.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_463_300"
                            x1={74.7719}
                            y1={102.401}
                            x2={80.3828}
                            y2={112.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_463_300"
                            x1={63.7211}
                            y1={91.0672}
                            x2={67.4336}
                            y2={97.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint12_linear_463_300"
                            x1={62.7719}
                            y1={89.4008}
                            x2={68.3828}
                            y2={99.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "230": (
                <Svg
                width={size}
                height={size}
                viewBox="0 0 99 96"
                fill="none"
                
              >
                <G filter="url(#filter0_d_477_337)">
                  <Path
                    d="M79.585 29.2462H78.9123C80.1486 24.1494 79.5275 18.779 77.1606 14.0989C74.7938 9.41876 70.8362 5.73549 65.9982 3.71029C61.1603 1.68509 55.7589 1.45057 50.7636 3.04883C45.7683 4.64709 41.5063 7.97347 38.7427 12.4308C36.5118 11.1082 33.9709 10.3986 31.3775 10.3741C28.7841 10.3496 26.2302 11.011 23.9747 12.2913C21.7192 13.5715 19.8422 15.4252 18.5338 17.6644C17.2255 19.9037 16.5322 22.4489 16.5244 25.0423C16.5308 25.8454 16.6011 26.6466 16.7346 27.4385C12.8975 28.1901 9.47657 30.3408 7.13615 33.4729C4.79573 36.6049 3.70279 40.4949 4.06954 44.3876C4.43629 48.2802 6.23656 51.8976 9.1208 54.5375C12.005 57.1774 15.7674 58.6513 19.6774 58.6731C20.0274 58.694 20.3784 58.694 20.7284 58.6731H79.585C83.4874 58.6731 87.23 57.1229 89.9895 54.3636C92.7489 51.6043 94.2991 47.8619 94.2991 43.9596C94.2991 40.0574 92.7489 36.315 89.9895 33.5557C87.23 30.7963 83.4874 29.2462 79.585 29.2462Z"
                    fill="url(#paint0_linear_477_337)"
                  />
                </G>
                <Path
                  d="M21.5774 70.9102C23.0336 70.9102 24.2141 69.7297 24.2141 68.2734C24.2141 66.8172 23.0336 65.6367 21.5774 65.6367C20.1212 65.6367 18.9407 66.8172 18.9407 68.2734C18.9407 69.7297 20.1212 70.9102 21.5774 70.9102Z"
                  stroke="url(#paint1_linear_477_337)"
                  strokeMiterlimit={10}
                />
                <Path
                  d="M26.1547 70.9102L23.8555 69.5812M19.2992 66.9656L17 65.6367M21.5773 63V65.6367M21.5773 73.5469V70.9102M19.2992 69.5812L17 70.9102M26.1547 65.6367L23.8555 66.9656"
                  stroke="url(#paint2_linear_477_337)"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <Path
                  d="M45.5774 67.9102C47.0336 67.9102 48.2141 66.7297 48.2141 65.2734C48.2141 63.8172 47.0336 62.6367 45.5774 62.6367C44.1212 62.6367 42.9407 63.8172 42.9407 65.2734C42.9407 66.7297 44.1212 67.9102 45.5774 67.9102Z"
                  stroke="url(#paint3_linear_477_337)"
                  strokeMiterlimit={10}
                />
                <Path
                  d="M50.1547 67.9102L47.8555 66.5812M43.2992 63.9656L41 62.6367M45.5773 60V62.6367M45.5773 70.5469V67.9102M43.2992 66.5812L41 67.9102M50.1547 62.6367L47.8555 63.9656"
                  stroke="url(#paint4_linear_477_337)"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <Path
                  d="M36.5774 84.9102C38.0336 84.9102 39.2141 83.7297 39.2141 82.2734C39.2141 80.8172 38.0336 79.6367 36.5774 79.6367C35.1212 79.6367 33.9407 80.8172 33.9407 82.2734C33.9407 83.7297 35.1212 84.9102 36.5774 84.9102Z"
                  stroke="url(#paint5_linear_477_337)"
                  strokeMiterlimit={10}
                />
                <Path
                  d="M41.1547 84.9102L38.8555 83.5812M34.2992 80.9656L32 79.6367M36.5773 77V79.6367M36.5773 87.5469V84.9102M34.2992 83.5812L32 84.9102M41.1547 79.6367L38.8555 80.9656"
                  stroke="url(#paint6_linear_477_337)"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
                <Path
                  d="M79.9749 69.0969C80.5306 68.4493 81.2213 67.9657 81.9853 67.6895C82.7492 67.4132 83.5626 67.3529 84.3525 67.5139C85.1424 67.6749 85.8843 68.0523 86.5117 68.6121C87.1392 69.172 87.6325 69.897 87.9477 70.7221C88.2628 71.5472 88.3899 72.4468 88.3176 73.3403C88.2453 74.2337 87.9758 75.0932 87.5333 75.8418C87.0908 76.5904 86.489 77.2047 85.7819 77.6298C85.0747 78.0548 84.2843 78.2774 83.4813 78.2775H49"
                  stroke="url(#paint7_linear_477_337)"
                  strokeWidth={2.5}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeDasharray="35 22"
                />
                <Path
                  d="M63.8295 63.4797C64.3751 62.9063 65.0534 62.4781 65.8036 62.2335C66.5537 61.9889 67.3524 61.9354 68.1281 62.078C68.9037 62.2206 69.6322 62.5547 70.2483 63.0504C70.8644 63.5462 71.3488 64.188 71.6583 64.9186C71.9677 65.6492 72.0925 66.4457 72.0215 67.2368C71.9505 68.0279 71.6859 68.7889 71.2514 69.4517C70.8168 70.1145 70.2259 70.6584 69.5316 71.0348C68.8372 71.4111 68.0611 71.6082 67.2726 71.6083L53.0695 71.5519"
                  stroke="url(#paint8_linear_477_337)"
                  strokeWidth={2.5}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeDasharray="35 22"
                />
                <Path
                  d="M72.3681 92.5202C72.9138 93.0936 73.592 93.5218 74.3422 93.7664C75.0923 94.011 75.891 94.0644 76.6667 93.9218C77.4423 93.7793 78.1708 93.4452 78.7869 92.9494C79.403 92.4537 79.8874 91.8118 80.1969 91.0812C80.5063 90.3506 80.6311 89.5542 80.5601 88.7631C80.4891 87.972 80.2245 87.211 79.79 86.5482C79.3554 85.8853 78.7646 85.3414 78.0702 84.9651C77.3758 84.5887 76.5997 84.3917 75.8112 84.3916H55.7822"
                  stroke="url(#paint9_linear_477_337)"
                  strokeWidth={2.5}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeDasharray="24 15"
                />
                <Defs>
                  <LinearGradient
                    id="paint0_linear_477_337"
                    x1={8.19027}
                    y1={-7.50395}
                    x2={118.62}
                    y2={94.6604}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#CDE8FF" />
                    <Stop offset={1} stopColor="#4BA1ED" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint1_linear_477_337"
                    x1={19.7211}
                    y1={65.0672}
                    x2={23.4336}
                    y2={71.4797}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#86C3DB" />
                    <Stop offset={0.45} stopColor="#86C3DB" />
                    <Stop offset={1} stopColor="#5EAFCF" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint2_linear_477_337"
                    x1={18.7719}
                    y1={63.4008}
                    x2={24.3828}
                    y2={73.1461}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#86C3DB" />
                    <Stop offset={0.45} stopColor="#86C3DB" />
                    <Stop offset={1} stopColor="#5EAFCF" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint3_linear_477_337"
                    x1={43.7211}
                    y1={62.0672}
                    x2={47.4336}
                    y2={68.4797}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#86C3DB" />
                    <Stop offset={0.45} stopColor="#86C3DB" />
                    <Stop offset={1} stopColor="#5EAFCF" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint4_linear_477_337"
                    x1={42.7719}
                    y1={60.4008}
                    x2={48.3828}
                    y2={70.1461}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#86C3DB" />
                    <Stop offset={0.45} stopColor="#86C3DB" />
                    <Stop offset={1} stopColor="#5EAFCF" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint5_linear_477_337"
                    x1={34.7211}
                    y1={79.0672}
                    x2={38.4336}
                    y2={85.4797}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#86C3DB" />
                    <Stop offset={0.45} stopColor="#86C3DB" />
                    <Stop offset={1} stopColor="#5EAFCF" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint6_linear_477_337"
                    x1={33.7719}
                    y1={77.4008}
                    x2={39.3828}
                    y2={87.1461}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#86C3DB" />
                    <Stop offset={0.45} stopColor="#86C3DB" />
                    <Stop offset={1} stopColor="#5EAFCF" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint7_linear_477_337"
                    x1={64.3563}
                    y1={66.5359}
                    x2={76.5823}
                    y2={85.4897}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#D4D7DD" />
                    <Stop offset={0.45} stopColor="#D4D7DD" />
                    <Stop offset={1} stopColor="#BEC1C6" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint8_linear_477_337"
                    x1={60.2095}
                    y1={57.5967}
                    x2={70.5377}
                    y2={75.354}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#D4D7DD" />
                    <Stop offset={0.45} stopColor="#D4D7DD" />
                    <Stop offset={1} stopColor="#BEC1C6" />
                  </LinearGradient>
                  <LinearGradient
                    id="paint9_linear_477_337"
                    x1={63.6126}
                    y1={78.1366}
                    x2={74.6159}
                    y2={97.0618}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#D4D7DD" />
                    <Stop offset={0.45} stopColor="#D4D7DD" />
                    <Stop offset={1} stopColor="#BEC1C6" />
                  </LinearGradient>
                </Defs>
              </Svg>
            ),

            "248": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 80"
                    fill="none"


                >
                    <Path
                        d="M18 76.6562H81.2812"
                        stroke="url(#paint0_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M18 68H81.2812"
                        stroke="url(#paint1_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_304)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint2_linear_463_304)"
                        />
                    </G>
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_304"
                            
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_304"
                            
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_304"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "260": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 80"
                    fill="none"


                >
                    <Path
                        d="M18 76.6562H81.2812"
                        stroke="url(#paint0_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M18 68H81.2812"
                        stroke="url(#paint1_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_304)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint2_linear_463_304)"
                        />
                    </G>
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_304"
                           
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_304"
                           
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_304"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "263": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "266": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "281": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "284": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "293": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 115 115"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_458_435)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_458_435)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_458_435)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_458_435)"
                        />
                    </G>
                    <Path
                        d="M49 97L48 107"
                        stroke="url(#paint3_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37 87L36 97"
                        stroke="url(#paint4_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M67.6453 87L66 97.4203"
                        stroke="url(#paint5_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 102L76 112.42"
                        stroke="url(#paint6_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M93.6453 90L92 100.42"
                        stroke="url(#paint7_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_458_435"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_458_435"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_458_435"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_458_435"
                            x1={46.6154}
                            y1={96.8381}
                            x2={53.4624}
                            y2={104.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_458_435"
                            x1={34.6154}
                            y1={86.8381}
                            x2={41.4624}
                            y2={94.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_458_435"
                            x1={63.7219}
                            y1={86.8312}
                            x2={69.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_458_435"
                            x1={73.7219}
                            y1={101.831}
                            x2={79.9235}
                            y2={112.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_458_435"
                            x1={89.7219}
                            y1={89.8312}
                            x2={95.9235}
                            y2={100.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "296": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 115 115"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_458_435)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_458_435)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_458_435)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_458_435)"
                        />
                    </G>
                    <Path
                        d="M49 97L48 107"
                        stroke="url(#paint3_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37 87L36 97"
                        stroke="url(#paint4_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M67.6453 87L66 97.4203"
                        stroke="url(#paint5_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 102L76 112.42"
                        stroke="url(#paint6_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M93.6453 90L92 100.42"
                        stroke="url(#paint7_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_458_435"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_458_435"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_458_435"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_458_435"
                            x1={46.6154}
                            y1={96.8381}
                            x2={53.4624}
                            y2={104.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_458_435"
                            x1={34.6154}
                            y1={86.8381}
                            x2={41.4624}
                            y2={94.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_458_435"
                            x1={63.7219}
                            y1={86.8312}
                            x2={69.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_458_435"
                            x1={73.7219}
                            y1={101.831}
                            x2={79.9235}
                            y2={112.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_458_435"
                            x1={89.7219}
                            y1={89.8312}
                            x2={95.9235}
                            y2={100.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "299": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "302": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "305": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "308": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "311": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 116 112"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_464_306)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_464_306)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_464_306)">
                        <Path
                            d="M97.2857 50.9669H96.613C97.8492 45.8701 97.2282 40.4997 94.8613 35.8196C92.4945 31.1395 88.5369 27.4562 83.6989 25.431C78.861 23.4058 73.4596 23.1713 68.4643 24.7695C63.469 26.3678 59.207 29.6942 56.4434 34.1515C54.2125 32.8289 51.6716 32.1193 49.0782 32.0948C46.4847 32.0703 43.9309 32.7317 41.6754 34.012C39.4199 35.2922 37.5429 37.1459 36.2345 39.3851C34.9261 41.6244 34.2329 44.1696 34.225 46.7631C34.2315 47.5661 34.3018 48.3673 34.4353 49.1592C30.5981 49.9109 27.1773 52.0615 24.8368 55.1936C22.4964 58.3256 21.4035 62.2157 21.7702 66.1083C22.137 70.0009 23.9372 73.6183 26.8215 76.2582C29.7057 78.8981 33.4681 80.372 37.3781 80.3938C37.7281 80.4147 38.0791 80.4147 38.4291 80.3938H97.2857C101.188 80.3938 104.931 78.8436 107.69 76.0843C110.45 73.325 112 69.5826 112 65.6803C112 61.7781 110.45 58.0357 107.69 55.2764C104.931 52.517 101.188 50.9669 97.2857 50.9669Z"
                            fill="url(#paint2_linear_464_306)"
                        />
                    </G>
                    <Ellipse
                        cx={58.5}
                        cy={95.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_306)"
                    />
                    <Ellipse
                        cx={79.5}
                        cy={107.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_306)"
                    />
                    <Ellipse
                        cx={48.5}
                        cy={107.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_306)"
                    />
                    <Ellipse
                        cx={37.5}
                        cy={88.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint6_linear_464_306)"
                    />
                    <Ellipse
                        cx={90.5}
                        cy={91.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint7_linear_464_306)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_306"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_306"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_306"
                            x1={25.891}
                            y1={14.2168}
                            x2={136.321}
                            y2={116.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_306"
                            x1={58.5}
                            y1={91}
                            x2={58.5}
                            y2={100}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_306"
                            x1={79.5}
                            y1={103}
                            x2={79.5}
                            y2={112}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_306"
                            x1={48.5}
                            y1={103}
                            x2={48.5}
                            y2={112}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_306"
                            x1={37.5}
                            y1={84}
                            x2={37.5}
                            y2={93}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_306"
                            x1={90.5}
                            y1={87}
                            x2={90.5}
                            y2={96}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "314": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_307)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_307)"
                        />
                    </G>
                    <Ellipse
                        cx={41.5}
                        cy={74.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint1_linear_464_307)"
                    />
                    <Ellipse
                        cx={62.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_464_307)"
                    />
                    <Ellipse
                        cx={31.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_307)"
                    />
                    <Ellipse
                        cx={20.5}
                        cy={67.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_307)"
                    />
                    <Ellipse
                        cx={73.5}
                        cy={70.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_307)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_307"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_307"
                            x1={41.5}
                            y1={70}
                            x2={41.5}
                            y2={79}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_307"
                            x1={62.5}
                            y1={82}
                            x2={62.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_307"
                            x1={31.5}
                            y1={82}
                            x2={31.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_307"
                            x1={20.5}
                            y1={63}
                            x2={20.5}
                            y2={72}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_307"
                            x1={73.5}
                            y1={66}
                            x2={73.5}
                            y2={75}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "317": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 115 115"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_464_308)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_464_308)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_464_308)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_464_308)"
                        />
                    </G>
                    <Path
                        d="M34.5774 95.9102C36.0336 95.9102 37.2141 94.7297 37.2141 93.2734C37.2141 91.8172 36.0336 90.6367 34.5774 90.6367C33.1212 90.6367 31.9407 91.8172 31.9407 93.2734C31.9407 94.7297 33.1212 95.9102 34.5774 95.9102Z"
                        stroke="url(#paint3_linear_464_308)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M39.1547 95.9102L36.8555 94.5812M32.2992 91.9656L30 90.6367M34.5773 88V90.6367M34.5773 98.5469V95.9102M32.2992 94.5812L30 95.9102M39.1547 90.6367L36.8555 91.9656"
                        stroke="url(#paint4_linear_464_308)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M79.5774 110.91C81.0336 110.91 82.2141 109.73 82.2141 108.273C82.2141 106.817 81.0336 105.637 79.5774 105.637C78.1212 105.637 76.9407 106.817 76.9407 108.273C76.9407 109.73 78.1212 110.91 79.5774 110.91Z"
                        stroke="url(#paint5_linear_464_308)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M84.1547 110.91L81.8555 109.581M77.2992 106.966L75 105.637M79.5773 103V105.637M79.5773 113.547V110.91M77.2992 109.581L75 110.91M84.1547 105.637L81.8555 106.966"
                        stroke="url(#paint6_linear_464_308)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M65.5774 97.9102C67.0336 97.9102 68.2141 96.7297 68.2141 95.2734C68.2141 93.8172 67.0336 92.6367 65.5774 92.6367C64.1212 92.6367 62.9407 93.8172 62.9407 95.2734C62.9407 96.7297 64.1212 97.9102 65.5774 97.9102Z"
                        stroke="url(#paint7_linear_464_308)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M70.1547 97.9102L67.8555 96.5812M63.2992 93.9656L61 92.6367M65.5773 90V92.6367M65.5773 100.547V97.9102M63.2992 96.5812L61 97.9102M70.1547 92.6367L67.8555 93.9656"
                        stroke="url(#paint8_linear_464_308)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M48 85L47 95"
                        stroke="url(#paint9_linear_464_308)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M88 88L87 98"
                        stroke="url(#paint10_linear_464_308)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M55 103L54 113"
                        stroke="url(#paint11_linear_464_308)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_308"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_308"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_308"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_308"
                            x1={32.7211}
                            y1={90.0672}
                            x2={36.4336}
                            y2={96.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_308"
                            x1={31.7719}
                            y1={88.4008}
                            x2={37.3828}
                            y2={98.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_308"
                            x1={77.7211}
                            y1={105.067}
                            x2={81.4336}
                            y2={111.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_308"
                            x1={76.7719}
                            y1={103.401}
                            x2={82.3828}
                            y2={113.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_308"
                            x1={63.7211}
                            y1={92.0672}
                            x2={67.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_308"
                            x1={62.7719}
                            y1={90.4008}
                            x2={68.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_308"
                            x1={45.6154}
                            y1={84.8381}
                            x2={52.4624}
                            y2={92.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_308"
                            x1={85.6154}
                            y1={87.8381}
                            x2={92.4624}
                            y2={95.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_464_308"
                            x1={52.6154}
                            y1={102.838}
                            x2={59.4624}
                            y2={110.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "320": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_309)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_309)"
                        />
                    </G>
                    <Path
                        d="M18.5774 73.9102C20.0336 73.9102 21.2141 72.7297 21.2141 71.2734C21.2141 69.8172 20.0336 68.6367 18.5774 68.6367C17.1212 68.6367 15.9407 69.8172 15.9407 71.2734C15.9407 72.7297 17.1212 73.9102 18.5774 73.9102Z"
                        stroke="url(#paint1_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M23.1547 73.9102L20.8555 72.5812M16.2992 69.9656L14 68.6367M18.5773 66V68.6367M18.5773 76.5469V73.9102M16.2992 72.5812L14 73.9102M23.1547 68.6367L20.8555 69.9656"
                        stroke="url(#paint2_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M63.5774 88.9102C65.0336 88.9102 66.2141 87.7297 66.2141 86.2734C66.2141 84.8172 65.0336 83.6367 63.5774 83.6367C62.1212 83.6367 60.9407 84.8172 60.9407 86.2734C60.9407 87.7297 62.1212 88.9102 63.5774 88.9102Z"
                        stroke="url(#paint3_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M68.1547 88.9102L65.8555 87.5812M61.2992 84.9656L59 83.6367M63.5773 81V83.6367M63.5773 91.5469V88.9102M61.2992 87.5812L59 88.9102M68.1547 83.6367L65.8555 84.9656"
                        stroke="url(#paint4_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M49.5774 75.9102C51.0336 75.9102 52.2141 74.7297 52.2141 73.2734C52.2141 71.8172 51.0336 70.6367 49.5774 70.6367C48.1212 70.6367 46.9407 71.8172 46.9407 73.2734C46.9407 74.7297 48.1212 75.9102 49.5774 75.9102Z"
                        stroke="url(#paint5_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M54.1547 75.9102L51.8555 74.5812M47.2992 71.9656L45 70.6367M49.5773 68V70.6367M49.5773 78.5469V75.9102M47.2992 74.5812L45 75.9102M54.1547 70.6367L51.8555 71.9656"
                        stroke="url(#paint6_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 63L31 73"
                        stroke="url(#paint7_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M72 66L71 76"
                        stroke="url(#paint8_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M39 81L38 91"
                        stroke="url(#paint9_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_309"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_309"
                            x1={16.7211}
                            y1={68.0672}
                            x2={20.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_309"
                            x1={15.7719}
                            y1={66.4008}
                            x2={21.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_309"
                            x1={61.7211}
                            y1={83.0672}
                            x2={65.4336}
                            y2={89.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_309"
                            x1={60.7719}
                            y1={81.4008}
                            x2={66.3828}
                            y2={91.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_309"
                            x1={47.7211}
                            y1={70.0672}
                            x2={51.4336}
                            y2={76.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_309"
                            x1={46.7719}
                            y1={68.4008}
                            x2={52.3828}
                            y2={78.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_309"
                            x1={29.6154}
                            y1={62.8381}
                            x2={36.4624}
                            y2={70.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_309"
                            x1={69.6154}
                            y1={65.8381}
                            x2={76.4624}
                            y2={73.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_309"
                            x1={36.6154}
                            y1={80.8381}
                            x2={43.4624}
                            y2={88.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "323": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 114 114"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_300)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_463_300)"
                        />
                    </G>
                    <Path
                        d="M50.5774 104.91C52.0336 104.91 53.2141 103.73 53.2141 102.273C53.2141 100.817 52.0336 99.6367 50.5774 99.6367C49.1212 99.6367 47.9407 100.817 47.9407 102.273C47.9407 103.73 49.1212 104.91 50.5774 104.91Z"
                        stroke="url(#paint3_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 104.91L52.8555 103.581M48.2992 100.966L46 99.6367M50.5773 97V99.6367M50.5773 107.547V104.91M48.2992 103.581L46 104.91M55.1547 99.6367L52.8555 100.966"
                        stroke="url(#paint4_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M86.5774 92.9102C88.0336 92.9102 89.2141 91.7297 89.2141 90.2734C89.2141 88.8172 88.0336 87.6367 86.5774 87.6367C85.1212 87.6367 83.9407 88.8172 83.9407 90.2734C83.9407 91.7297 85.1212 92.9102 86.5774 92.9102Z"
                        stroke="url(#paint5_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M91.1547 92.9102L88.8555 91.5812M84.2992 88.9656L82 87.6367M86.5773 85V87.6367M86.5773 95.5469V92.9102M84.2992 91.5812L82 92.9102M91.1547 87.6367L88.8555 88.9656"
                        stroke="url(#paint6_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.5774 93.9102C39.0336 93.9102 40.2141 92.7297 40.2141 91.2734C40.2141 89.8172 39.0336 88.6367 37.5774 88.6367C36.1212 88.6367 34.9407 89.8172 34.9407 91.2734C34.9407 92.7297 36.1212 93.9102 37.5774 93.9102Z"
                        stroke="url(#paint7_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 93.9102L39.8555 92.5812M35.2992 89.9656L33 88.6367M37.5773 86V88.6367M37.5773 96.5469V93.9102M35.2992 92.5812L33 93.9102M42.1547 88.6367L39.8555 89.9656"
                        stroke="url(#paint8_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.5774 109.91C79.0336 109.91 80.2141 108.73 80.2141 107.273C80.2141 105.817 79.0336 104.637 77.5774 104.637C76.1212 104.637 74.9407 105.817 74.9407 107.273C74.9407 108.73 76.1212 109.91 77.5774 109.91Z"
                        stroke="url(#paint9_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M82.1547 109.91L79.8555 108.581M75.2992 105.966L73 104.637M77.5773 102V104.637M77.5773 112.547V109.91M75.2992 108.581L73 109.91M82.1547 104.637L79.8555 105.966"
                        stroke="url(#paint10_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M65.5774 96.9102C67.0336 96.9102 68.2141 95.7297 68.2141 94.2734C68.2141 92.8172 67.0336 91.6367 65.5774 91.6367C64.1212 91.6367 62.9407 92.8172 62.9407 94.2734C62.9407 95.7297 64.1212 96.9102 65.5774 96.9102Z"
                        stroke="url(#paint11_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M70.1547 96.9102L67.8555 95.5812M63.2992 92.9656L61 91.6367M65.5773 89V91.6367M65.5773 99.5469V96.9102M63.2992 95.5812L61 96.9102M70.1547 91.6367L67.8555 92.9656"
                        stroke="url(#paint12_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_300"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_300"
                            x1={48.7211}
                            y1={99.0672}
                            x2={52.4336}
                            y2={105.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_300"
                            x1={47.7719}
                            y1={97.4008}
                            x2={53.3828}
                            y2={107.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_300"
                            x1={84.7211}
                            y1={87.0672}
                            x2={88.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_300"
                            x1={83.7719}
                            y1={85.4008}
                            x2={89.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_300"
                            x1={35.7211}
                            y1={88.0672}
                            x2={39.4336}
                            y2={94.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_300"
                            x1={34.7719}
                            y1={86.4008}
                            x2={40.3828}
                            y2={96.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_463_300"
                            x1={75.7211}
                            y1={104.067}
                            x2={79.4336}
                            y2={110.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_463_300"
                            x1={74.7719}
                            y1={102.401}
                            x2={80.3828}
                            y2={112.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_463_300"
                            x1={63.7211}
                            y1={91.0672}
                            x2={67.4336}
                            y2={97.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint12_linear_463_300"
                            x1={62.7719}
                            y1={89.4008}
                            x2={68.3828}
                            y2={99.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "326": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "329": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "332": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "335": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "338": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "350": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_307)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_307)"
                        />
                    </G>
                    <Ellipse
                        cx={41.5}
                        cy={74.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint1_linear_464_307)"
                    />
                    <Ellipse
                        cx={62.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_464_307)"
                    />
                    <Ellipse
                        cx={31.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_307)"
                    />
                    <Ellipse
                        cx={20.5}
                        cy={67.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_307)"
                    />
                    <Ellipse
                        cx={73.5}
                        cy={70.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_307)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_307"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_307"
                            x1={41.5}
                            y1={70}
                            x2={41.5}
                            y2={79}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_307"
                            x1={62.5}
                            y1={82}
                            x2={62.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_307"
                            x1={31.5}
                            y1={82}
                            x2={31.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_307"
                            x1={20.5}
                            y1={63}
                            x2={20.5}
                            y2={72}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_307"
                            x1={73.5}
                            y1={66}
                            x2={73.5}
                            y2={75}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "353": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 115 115"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_458_435)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_458_435)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_458_435)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_458_435)"
                        />
                    </G>
                    <Path
                        d="M49 97L48 107"
                        stroke="url(#paint3_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37 87L36 97"
                        stroke="url(#paint4_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M67.6453 87L66 97.4203"
                        stroke="url(#paint5_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 102L76 112.42"
                        stroke="url(#paint6_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M93.6453 90L92 100.42"
                        stroke="url(#paint7_linear_458_435)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_458_435"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_458_435"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_458_435"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_458_435"
                            x1={46.6154}
                            y1={96.8381}
                            x2={53.4624}
                            y2={104.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_458_435"
                            x1={34.6154}
                            y1={86.8381}
                            x2={41.4624}
                            y2={94.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_458_435"
                            x1={63.7219}
                            y1={86.8312}
                            x2={69.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_458_435"
                            x1={73.7219}
                            y1={101.831}
                            x2={79.9235}
                            y2={112.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_458_435"
                            x1={89.7219}
                            y1={89.8312}
                            x2={95.9235}
                            y2={100.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "356": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "359": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "362": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 115 115"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_464_308)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_464_308)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_464_308)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_464_308)"
                        />
                    </G>
                    <Path
                        d="M34.5774 95.9102C36.0336 95.9102 37.2141 94.7297 37.2141 93.2734C37.2141 91.8172 36.0336 90.6367 34.5774 90.6367C33.1212 90.6367 31.9407 91.8172 31.9407 93.2734C31.9407 94.7297 33.1212 95.9102 34.5774 95.9102Z"
                        stroke="url(#paint3_linear_464_308)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M39.1547 95.9102L36.8555 94.5812M32.2992 91.9656L30 90.6367M34.5773 88V90.6367M34.5773 98.5469V95.9102M32.2992 94.5812L30 95.9102M39.1547 90.6367L36.8555 91.9656"
                        stroke="url(#paint4_linear_464_308)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M79.5774 110.91C81.0336 110.91 82.2141 109.73 82.2141 108.273C82.2141 106.817 81.0336 105.637 79.5774 105.637C78.1212 105.637 76.9407 106.817 76.9407 108.273C76.9407 109.73 78.1212 110.91 79.5774 110.91Z"
                        stroke="url(#paint5_linear_464_308)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M84.1547 110.91L81.8555 109.581M77.2992 106.966L75 105.637M79.5773 103V105.637M79.5773 113.547V110.91M77.2992 109.581L75 110.91M84.1547 105.637L81.8555 106.966"
                        stroke="url(#paint6_linear_464_308)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M65.5774 97.9102C67.0336 97.9102 68.2141 96.7297 68.2141 95.2734C68.2141 93.8172 67.0336 92.6367 65.5774 92.6367C64.1212 92.6367 62.9407 93.8172 62.9407 95.2734C62.9407 96.7297 64.1212 97.9102 65.5774 97.9102Z"
                        stroke="url(#paint7_linear_464_308)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M70.1547 97.9102L67.8555 96.5812M63.2992 93.9656L61 92.6367M65.5773 90V92.6367M65.5773 100.547V97.9102M63.2992 96.5812L61 97.9102M70.1547 92.6367L67.8555 93.9656"
                        stroke="url(#paint8_linear_464_308)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M48 85L47 95"
                        stroke="url(#paint9_linear_464_308)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M88 88L87 98"
                        stroke="url(#paint10_linear_464_308)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M55 103L54 113"
                        stroke="url(#paint11_linear_464_308)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_308"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_308"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_308"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_308"
                            x1={32.7211}
                            y1={90.0672}
                            x2={36.4336}
                            y2={96.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_308"
                            x1={31.7719}
                            y1={88.4008}
                            x2={37.3828}
                            y2={98.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_308"
                            x1={77.7211}
                            y1={105.067}
                            x2={81.4336}
                            y2={111.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_308"
                            x1={76.7719}
                            y1={103.401}
                            x2={82.3828}
                            y2={113.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_308"
                            x1={63.7211}
                            y1={92.0672}
                            x2={67.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_308"
                            x1={62.7719}
                            y1={90.4008}
                            x2={68.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_308"
                            x1={45.6154}
                            y1={84.8381}
                            x2={52.4624}
                            y2={92.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_308"
                            x1={85.6154}
                            y1={87.8381}
                            x2={92.4624}
                            y2={95.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_464_308"
                            x1={52.6154}
                            y1={102.838}
                            x2={59.4624}
                            y2={110.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "365": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_309)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_309)"
                        />
                    </G>
                    <Path
                        d="M18.5774 73.9102C20.0336 73.9102 21.2141 72.7297 21.2141 71.2734C21.2141 69.8172 20.0336 68.6367 18.5774 68.6367C17.1212 68.6367 15.9407 69.8172 15.9407 71.2734C15.9407 72.7297 17.1212 73.9102 18.5774 73.9102Z"
                        stroke="url(#paint1_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M23.1547 73.9102L20.8555 72.5812M16.2992 69.9656L14 68.6367M18.5773 66V68.6367M18.5773 76.5469V73.9102M16.2992 72.5812L14 73.9102M23.1547 68.6367L20.8555 69.9656"
                        stroke="url(#paint2_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M63.5774 88.9102C65.0336 88.9102 66.2141 87.7297 66.2141 86.2734C66.2141 84.8172 65.0336 83.6367 63.5774 83.6367C62.1212 83.6367 60.9407 84.8172 60.9407 86.2734C60.9407 87.7297 62.1212 88.9102 63.5774 88.9102Z"
                        stroke="url(#paint3_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M68.1547 88.9102L65.8555 87.5812M61.2992 84.9656L59 83.6367M63.5773 81V83.6367M63.5773 91.5469V88.9102M61.2992 87.5812L59 88.9102M68.1547 83.6367L65.8555 84.9656"
                        stroke="url(#paint4_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M49.5774 75.9102C51.0336 75.9102 52.2141 74.7297 52.2141 73.2734C52.2141 71.8172 51.0336 70.6367 49.5774 70.6367C48.1212 70.6367 46.9407 71.8172 46.9407 73.2734C46.9407 74.7297 48.1212 75.9102 49.5774 75.9102Z"
                        stroke="url(#paint5_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M54.1547 75.9102L51.8555 74.5812M47.2992 71.9656L45 70.6367M49.5773 68V70.6367M49.5773 78.5469V75.9102M47.2992 74.5812L45 75.9102M54.1547 70.6367L51.8555 71.9656"
                        stroke="url(#paint6_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 63L31 73"
                        stroke="url(#paint7_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M72 66L71 76"
                        stroke="url(#paint8_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M39 81L38 91"
                        stroke="url(#paint9_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_309"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_309"
                            x1={16.7211}
                            y1={68.0672}
                            x2={20.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_309"
                            x1={15.7719}
                            y1={66.4008}
                            x2={21.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_309"
                            x1={61.7211}
                            y1={83.0672}
                            x2={65.4336}
                            y2={89.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_309"
                            x1={60.7719}
                            y1={81.4008}
                            x2={66.3828}
                            y2={91.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_309"
                            x1={47.7211}
                            y1={70.0672}
                            x2={51.4336}
                            y2={76.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_309"
                            x1={46.7719}
                            y1={68.4008}
                            x2={52.3828}
                            y2={78.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_309"
                            x1={29.6154}
                            y1={62.8381}
                            x2={36.4624}
                            y2={70.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_309"
                            x1={69.6154}
                            y1={65.8381}
                            x2={76.4624}
                            y2={73.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_309"
                            x1={36.6154}
                            y1={80.8381}
                            x2={43.4624}
                            y2={88.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "368": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 114 114"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_463_300)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_300)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_463_300)"
                        />
                    </G>
                    <Path
                        d="M50.5774 104.91C52.0336 104.91 53.2141 103.73 53.2141 102.273C53.2141 100.817 52.0336 99.6367 50.5774 99.6367C49.1212 99.6367 47.9407 100.817 47.9407 102.273C47.9407 103.73 49.1212 104.91 50.5774 104.91Z"
                        stroke="url(#paint3_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 104.91L52.8555 103.581M48.2992 100.966L46 99.6367M50.5773 97V99.6367M50.5773 107.547V104.91M48.2992 103.581L46 104.91M55.1547 99.6367L52.8555 100.966"
                        stroke="url(#paint4_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M86.5774 92.9102C88.0336 92.9102 89.2141 91.7297 89.2141 90.2734C89.2141 88.8172 88.0336 87.6367 86.5774 87.6367C85.1212 87.6367 83.9407 88.8172 83.9407 90.2734C83.9407 91.7297 85.1212 92.9102 86.5774 92.9102Z"
                        stroke="url(#paint5_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M91.1547 92.9102L88.8555 91.5812M84.2992 88.9656L82 87.6367M86.5773 85V87.6367M86.5773 95.5469V92.9102M84.2992 91.5812L82 92.9102M91.1547 87.6367L88.8555 88.9656"
                        stroke="url(#paint6_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.5774 93.9102C39.0336 93.9102 40.2141 92.7297 40.2141 91.2734C40.2141 89.8172 39.0336 88.6367 37.5774 88.6367C36.1212 88.6367 34.9407 89.8172 34.9407 91.2734C34.9407 92.7297 36.1212 93.9102 37.5774 93.9102Z"
                        stroke="url(#paint7_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 93.9102L39.8555 92.5812M35.2992 89.9656L33 88.6367M37.5773 86V88.6367M37.5773 96.5469V93.9102M35.2992 92.5812L33 93.9102M42.1547 88.6367L39.8555 89.9656"
                        stroke="url(#paint8_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.5774 109.91C79.0336 109.91 80.2141 108.73 80.2141 107.273C80.2141 105.817 79.0336 104.637 77.5774 104.637C76.1212 104.637 74.9407 105.817 74.9407 107.273C74.9407 108.73 76.1212 109.91 77.5774 109.91Z"
                        stroke="url(#paint9_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M82.1547 109.91L79.8555 108.581M75.2992 105.966L73 104.637M77.5773 102V104.637M77.5773 112.547V109.91M75.2992 108.581L73 109.91M82.1547 104.637L79.8555 105.966"
                        stroke="url(#paint10_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M65.5774 96.9102C67.0336 96.9102 68.2141 95.7297 68.2141 94.2734C68.2141 92.8172 67.0336 91.6367 65.5774 91.6367C64.1212 91.6367 62.9407 92.8172 62.9407 94.2734C62.9407 95.7297 64.1212 96.9102 65.5774 96.9102Z"
                        stroke="url(#paint11_linear_463_300)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M70.1547 96.9102L67.8555 95.5812M63.2992 92.9656L61 91.6367M65.5773 89V91.6367M65.5773 99.5469V96.9102M63.2992 95.5812L61 96.9102M70.1547 91.6367L67.8555 92.9656"
                        stroke="url(#paint12_linear_463_300)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_300"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_300"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_300"
                            x1={48.7211}
                            y1={99.0672}
                            x2={52.4336}
                            y2={105.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_300"
                            x1={47.7719}
                            y1={97.4008}
                            x2={53.3828}
                            y2={107.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_300"
                            x1={84.7211}
                            y1={87.0672}
                            x2={88.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_300"
                            x1={83.7719}
                            y1={85.4008}
                            x2={89.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_300"
                            x1={35.7211}
                            y1={88.0672}
                            x2={39.4336}
                            y2={94.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_300"
                            x1={34.7719}
                            y1={86.4008}
                            x2={40.3828}
                            y2={96.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_463_300"
                            x1={75.7211}
                            y1={104.067}
                            x2={79.4336}
                            y2={110.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_463_300"
                            x1={74.7719}
                            y1={102.401}
                            x2={80.3828}
                            y2={112.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_463_300"
                            x1={63.7211}
                            y1={91.0672}
                            x2={67.4336}
                            y2={97.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint12_linear_463_300"
                            x1={62.7719}
                            y1={89.4008}
                            x2={68.3828}
                            y2={99.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "371": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "374": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 116 112"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_464_306)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_464_306)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_464_306)">
                        <Path
                            d="M97.2857 50.9669H96.613C97.8492 45.8701 97.2282 40.4997 94.8613 35.8196C92.4945 31.1395 88.5369 27.4562 83.6989 25.431C78.861 23.4058 73.4596 23.1713 68.4643 24.7695C63.469 26.3678 59.207 29.6942 56.4434 34.1515C54.2125 32.8289 51.6716 32.1193 49.0782 32.0948C46.4847 32.0703 43.9309 32.7317 41.6754 34.012C39.4199 35.2922 37.5429 37.1459 36.2345 39.3851C34.9261 41.6244 34.2329 44.1696 34.225 46.7631C34.2315 47.5661 34.3018 48.3673 34.4353 49.1592C30.5981 49.9109 27.1773 52.0615 24.8368 55.1936C22.4964 58.3256 21.4035 62.2157 21.7702 66.1083C22.137 70.0009 23.9372 73.6183 26.8215 76.2582C29.7057 78.8981 33.4681 80.372 37.3781 80.3938C37.7281 80.4147 38.0791 80.4147 38.4291 80.3938H97.2857C101.188 80.3938 104.931 78.8436 107.69 76.0843C110.45 73.325 112 69.5826 112 65.6803C112 61.7781 110.45 58.0357 107.69 55.2764C104.931 52.517 101.188 50.9669 97.2857 50.9669Z"
                            fill="url(#paint2_linear_464_306)"
                        />
                    </G>
                    <Ellipse
                        cx={58.5}
                        cy={95.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_306)"
                    />
                    <Ellipse
                        cx={79.5}
                        cy={107.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_306)"
                    />
                    <Ellipse
                        cx={48.5}
                        cy={107.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_306)"
                    />
                    <Ellipse
                        cx={37.5}
                        cy={88.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint6_linear_464_306)"
                    />
                    <Ellipse
                        cx={90.5}
                        cy={91.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint7_linear_464_306)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_306"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_306"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_306"
                            x1={25.891}
                            y1={14.2168}
                            x2={136.321}
                            y2={116.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_306"
                            x1={58.5}
                            y1={91}
                            x2={58.5}
                            y2={100}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_306"
                            x1={79.5}
                            y1={103}
                            x2={79.5}
                            y2={112}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_306"
                            x1={48.5}
                            y1={103}
                            x2={48.5}
                            y2={112}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_306"
                            x1={37.5}
                            y1={84}
                            x2={37.5}
                            y2={93}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_306"
                            x1={90.5}
                            y1={87}
                            x2={90.5}
                            y2={96}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "377": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_307)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_307)"
                        />
                    </G>
                    <Ellipse
                        cx={41.5}
                        cy={74.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint1_linear_464_307)"
                    />
                    <Ellipse
                        cx={62.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_464_307)"
                    />
                    <Ellipse
                        cx={31.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_307)"
                    />
                    <Ellipse
                        cx={20.5}
                        cy={67.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_307)"
                    />
                    <Ellipse
                        cx={73.5}
                        cy={70.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_307)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_307"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_307"
                            x1={41.5}
                            y1={70}
                            x2={41.5}
                            y2={79}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_307"
                            x1={62.5}
                            y1={82}
                            x2={62.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_307"
                            x1={31.5}
                            y1={82}
                            x2={31.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_307"
                            x1={20.5}
                            y1={63}
                            x2={20.5}
                            y2={72}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_307"
                            x1={73.5}
                            y1={66}
                            x2={73.5}
                            y2={75}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "386": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 115 111"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_464_311)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_464_311)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_464_311)">
                        <Path
                            d="M96.2857 51.9669H95.613C96.8492 46.8701 96.2282 41.4997 93.8613 36.8196C91.4945 32.1395 87.5369 28.4562 82.6989 26.431C77.861 24.4058 72.4596 24.1713 67.4643 25.7695C62.469 27.3678 58.207 30.6942 55.4434 35.1515C53.2125 33.8289 50.6716 33.1193 48.0782 33.0948C45.4847 33.0703 42.9309 33.7317 40.6754 35.012C38.4199 36.2922 36.5429 38.1459 35.2345 40.3851C33.9261 42.6244 33.2329 45.1696 33.225 47.7631C33.2315 48.5661 33.3018 49.3673 33.4353 50.1592C29.5981 50.9109 26.1773 53.0615 23.8368 56.1936C21.4964 59.3256 20.4035 63.2157 20.7702 67.1083C21.137 71.0009 22.9372 74.6183 25.8215 77.2582C28.7057 79.8981 32.4681 81.372 36.3781 81.3938C36.7281 81.4147 37.0791 81.4147 37.4291 81.3938H96.2857C100.188 81.3938 103.931 79.8436 106.69 77.0843C109.45 74.325 111 70.5826 111 66.6803C111 62.7781 109.45 59.0357 106.69 56.2764C103.931 53.517 100.188 51.9669 96.2857 51.9669Z"
                            fill="url(#paint2_linear_464_311)"
                        />
                    </G>
                    <Path
                        d="M29 97L28 107"
                        stroke="url(#paint3_linear_464_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M44 88L43 98"
                        stroke="url(#paint4_linear_464_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M80.6453 98L79 108.42"
                        stroke="url(#paint5_linear_464_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M94.6453 87L93 97.4203"
                        stroke="url(#paint6_linear_464_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.4375 62L54 87.3125H62.4375L58.2188 108.406L79.3125 78.875H66.6562L75.0938 62H62.4375Z"
                        fill="url(#paint7_linear_464_311)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_311"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_311"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_311"
                            x1={24.891}
                            y1={15.2168}
                            x2={135.321}
                            y2={117.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_311"
                            x1={26.6154}
                            y1={96.8381}
                            x2={33.4624}
                            y2={104.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_311"
                            x1={41.6154}
                            y1={87.8381}
                            x2={48.4624}
                            y2={95.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_311"
                            x1={76.7219}
                            y1={97.8312}
                            x2={82.9235}
                            y2={108.589}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_311"
                            x1={90.7219}
                            y1={86.8312}
                            x2={96.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_311"
                            x1={68.1562}
                            y1={63.0625}
                            x2={58.1562}
                            y2={109.063}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "389": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 89"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_312)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_312)"
                        />
                    </G>
                    <Path
                        d="M13 75L12 85"
                        stroke="url(#paint1_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 66L27 76"
                        stroke="url(#paint2_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.6453 76L63 86.4203"
                        stroke="url(#paint3_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M78.6453 65L77 75.4203"
                        stroke="url(#paint4_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M46.4375 40L38 65.3125H46.4375L42.2188 86.4062L63.3125 56.875H50.6562L59.0938 40H46.4375Z"
                        fill="url(#paint5_linear_464_312)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_312"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_312"
                            x1={10.6154}
                            y1={74.8381}
                            x2={17.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_312"
                            x1={25.6154}
                            y1={65.8381}
                            x2={32.4624}
                            y2={73.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_312"
                            x1={60.7219}
                            y1={75.8312}
                            x2={66.9235}
                            y2={86.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_312"
                            x1={74.7219}
                            y1={64.8312}
                            x2={80.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_312"
                            x1={52.1562}
                            y1={41.0625}
                            x2={42.1562}
                            y2={87.0625}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),


            "392": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 114 114"
                    fill="none"


                >
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint0_linear_464_313)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M37.3461 52.2367C45.5677 52.2367 52.2327 45.5708 52.2327 37.3481C52.2327 29.1253 45.5677 22.4595 37.3461 22.4595C29.1244 22.4595 22.4595 29.1253 22.4595 37.3481C22.4595 45.5708 29.1244 52.2367 37.3461 52.2367Z"
                        fill="url(#paint1_linear_464_313)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M37.39 12.4792V3M37.39 71.7766V62.2974M55.0036 19.7755L61.7022 13.0773M13.0778 61.6994L19.7763 55.0011M19.7763 19.7755L13.0778 13.0773M61.7022 61.6994L55.0036 55.0011M3 37.3883H12.4797M71.7799 37.3883H62.3003"
                        stroke="#FFD140"
                        strokeWidth={5.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_464_313)">
                        <Path
                            d="M95.2857 52.9669H94.613C95.8492 47.8701 95.2282 42.4997 92.8613 37.8196C90.4945 33.1395 86.5369 29.4562 81.6989 27.431C76.861 25.4058 71.4596 25.1713 66.4643 26.7695C61.469 28.3678 57.207 31.6942 54.4434 36.1515C52.2125 34.8289 49.6716 34.1193 47.0782 34.0948C44.4847 34.0703 41.9309 34.7317 39.6754 36.012C37.4199 37.2922 35.5429 39.1459 34.2345 41.3851C32.9261 43.6244 32.2329 46.1696 32.225 48.7631C32.2315 49.5661 32.3018 50.3673 32.4353 51.1592C28.5981 51.9109 25.1773 54.0615 22.8368 57.1936C20.4964 60.3256 19.4035 64.2157 19.7702 68.1083C20.137 72.0009 21.9372 75.6183 24.8215 78.2582C27.7057 80.8981 31.4681 82.372 35.3781 82.3938C35.7281 82.4147 36.0791 82.4147 36.4291 82.3938H95.2857C99.1881 82.3938 102.931 80.8436 105.69 78.0843C108.45 75.325 110 71.5826 110 67.6803C110 63.7781 108.45 60.0357 105.69 57.2764C102.931 54.517 99.1881 52.9669 95.2857 52.9669Z"
                            fill="url(#paint2_linear_464_313)"
                        />
                    </G>
                    <Path
                        d="M38.5774 97.9102C40.0336 97.9102 41.2141 96.7297 41.2141 95.2734C41.2141 93.8172 40.0336 92.6367 38.5774 92.6367C37.1212 92.6367 35.9407 93.8172 35.9407 95.2734C35.9407 96.7297 37.1212 97.9102 38.5774 97.9102Z"
                        stroke="url(#paint3_linear_464_313)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M43.1547 97.9102L40.8555 96.5812M36.2992 93.9656L34 92.6367M38.5773 90V92.6367M38.5773 100.547V97.9102M36.2992 96.5812L34 97.9102M43.1547 92.6367L40.8555 93.9656"
                        stroke="url(#paint4_linear_464_313)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M91.5774 94.9102C93.0336 94.9102 94.2141 93.7297 94.2141 92.2734C94.2141 90.8172 93.0336 89.6367 91.5774 89.6367C90.1212 89.6367 88.9407 90.8172 88.9407 92.2734C88.9407 93.7297 90.1212 94.9102 91.5774 94.9102Z"
                        stroke="url(#paint5_linear_464_313)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M96.1547 94.9102L93.8555 93.5812M89.2992 90.9656L87 89.6367M91.5773 87V89.6367M91.5773 97.5469V94.9102M89.2992 93.5812L87 94.9102M96.1547 89.6367L93.8555 90.9656"
                        stroke="url(#paint6_linear_464_313)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.5774 109.91C79.0336 109.91 80.2141 108.73 80.2141 107.273C80.2141 105.817 79.0336 104.637 77.5774 104.637C76.1212 104.637 74.9407 105.817 74.9407 107.273C74.9407 108.73 76.1212 109.91 77.5774 109.91Z"
                        stroke="url(#paint7_linear_464_313)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M82.1547 109.91L79.8555 108.581M75.2992 105.966L73 104.637M77.5773 102V104.637M77.5773 112.547V109.91M75.2992 108.581L73 109.91M82.1547 104.637L79.8555 105.966"
                        stroke="url(#paint8_linear_464_313)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.4375 63L53 88.3125H61.4375L57.2188 109.406L78.3125 79.875H65.6562L74.0938 63H61.4375Z"
                        fill="url(#paint9_linear_464_313)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_313"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_313"
                            x1={29.9028}
                            y1={24.4545}
                            x2={44.7924}
                            y2={50.2399}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_313"
                            x1={23.891}
                            y1={16.2168}
                            x2={134.321}
                            y2={118.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_313"
                            x1={36.7211}
                            y1={92.0672}
                            x2={40.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_313"
                            x1={35.7719}
                            y1={90.4008}
                            x2={41.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_313"
                            x1={89.7211}
                            y1={89.0672}
                            x2={93.4336}
                            y2={95.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_313"
                            x1={88.7719}
                            y1={87.4008}
                            x2={94.3828}
                            y2={97.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_313"
                            x1={75.7211}
                            y1={104.067}
                            x2={79.4336}
                            y2={110.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_313"
                            x1={74.7719}
                            y1={102.401}
                            x2={80.3828}
                            y2={112.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_313"
                            x1={67.1562}
                            y1={64.0625}
                            x2={57.1562}
                            y2={110.063}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),


            "395": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_314)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_314)"
                        />
                    </G>
                    <Path
                        d="M23.5774 74.9102C25.0336 74.9102 26.2141 73.7297 26.2141 72.2734C26.2141 70.8172 25.0336 69.6367 23.5774 69.6367C22.1212 69.6367 20.9407 70.8172 20.9407 72.2734C20.9407 73.7297 22.1212 74.9102 23.5774 74.9102Z"
                        stroke="url(#paint1_linear_464_314)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M28.1547 74.9102L25.8555 73.5812M21.2992 70.9656L19 69.6367M23.5773 67V69.6367M23.5773 77.5469V74.9102M21.2992 73.5812L19 74.9102M28.1547 69.6367L25.8555 70.9656"
                        stroke="url(#paint2_linear_464_314)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M76.5774 71.9102C78.0336 71.9102 79.2141 70.7297 79.2141 69.2734C79.2141 67.8172 78.0336 66.6367 76.5774 66.6367C75.1212 66.6367 73.9407 67.8172 73.9407 69.2734C73.9407 70.7297 75.1212 71.9102 76.5774 71.9102Z"
                        stroke="url(#paint3_linear_464_314)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M81.1547 71.9102L78.8555 70.5812M74.2992 67.9656L72 66.6367M76.5773 64V66.6367M76.5773 74.5469V71.9102M74.2992 70.5812L72 71.9102M81.1547 66.6367L78.8555 67.9656"
                        stroke="url(#paint4_linear_464_314)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint5_linear_464_314)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint6_linear_464_314)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M46.4375 40L38 65.3125H46.4375L42.2188 86.4062L63.3125 56.875H50.6562L59.0938 40H46.4375Z"
                        fill="url(#paint7_linear_464_314)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_314"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_314"
                            x1={21.7211}
                            y1={69.0672}
                            x2={25.4336}
                            y2={75.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_314"
                            x1={20.7719}
                            y1={67.4008}
                            x2={26.3828}
                            y2={77.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_314"
                            x1={74.7211}
                            y1={66.0672}
                            x2={78.4336}
                            y2={72.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_314"
                            x1={73.7719}
                            y1={64.4008}
                            x2={79.3828}
                            y2={74.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_314"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_314"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_314"
                            x1={52.1562}
                            y1={41.0625}
                            x2={42.1562}
                            y2={87.0625}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

        },
        night: {
            "113": (
                <Svg
                width={size}
                height={size}
                viewBox="0 0 77 74"
                fill="none"
               
              >
                <Path
                  d="M44.31 3.58519L47.0725 8.07816C47.1768 8.23118 47.2428 8.40672 47.265 8.59017C47.2871 8.77362 47.2648 8.95967 47.2 9.13285L45.5 14.111C45.4107 14.355 45.4005 14.6206 45.4709 14.8707C45.5413 15.1208 45.6887 15.3427 45.8925 15.5054C46.0962 15.6682 46.3462 15.7636 46.6073 15.7783C46.8684 15.7931 47.1277 15.7263 47.3487 15.5875L51.875 12.8453C52.0291 12.7418 52.2059 12.6763 52.3908 12.6543C52.5756 12.6323 52.763 12.6544 52.9375 12.7188L57.9525 14.4063C58.1983 14.4949 58.4659 14.505 58.7178 14.4351C58.9697 14.3653 59.1933 14.219 59.3573 14.0167C59.5212 13.8144 59.6173 13.5663 59.6322 13.3071C59.647 13.0479 59.5798 12.7905 59.44 12.5711L56.6775 8.07816C56.5731 7.92514 56.5071 7.7496 56.485 7.56615C56.4628 7.3827 56.4851 7.19665 56.55 7.02347L58.25 2.04535C58.3392 1.80131 58.3494 1.53567 58.279 1.28562C58.2086 1.03557 58.0612 0.813625 57.8575 0.65087C57.6537 0.488115 57.4037 0.392699 57.1426 0.377979C56.8815 0.363259 56.6222 0.429974 56.4012 0.568783L51.875 3.31097C51.7208 3.41453 51.544 3.48004 51.3592 3.50205C51.1743 3.52407 50.9869 3.50195 50.8125 3.43753L45.7975 1.75003C45.5516 1.66141 45.284 1.65132 45.0321 1.72118C44.7802 1.79104 44.5566 1.93736 44.3927 2.13964C44.2287 2.34192 44.1326 2.59004 44.1177 2.84925C44.1029 3.10846 44.1701 3.36579 44.31 3.58519Z"
                  fill="#FFD140"
                  stroke="#F6A823"
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M58.8238 33.0113L64.115 33.1589C64.3018 33.1631 64.4855 33.2066 64.6541 33.2866C64.8226 33.3666 64.972 33.4813 65.0925 33.623L68.3438 37.8417C68.5056 38.0446 68.7261 38.1934 68.9758 38.268C69.2254 38.3426 69.492 38.3395 69.7398 38.2591C69.9876 38.1786 70.2045 38.0247 70.3615 37.8181C70.5184 37.6115 70.6078 37.362 70.6175 37.1035L70.7663 31.8511C70.7704 31.6657 70.8143 31.4833 70.8949 31.316C70.9755 31.1488 71.091 31.0004 71.2338 30.8808L75.4838 27.6535C75.6882 27.4928 75.838 27.2739 75.9132 27.0261C75.9884 26.7783 75.9852 26.5136 75.9042 26.2677C75.8231 26.0218 75.6681 25.8064 75.4599 25.6506C75.2518 25.4948 75.0005 25.4061 74.74 25.3964L69.4488 25.2488C69.262 25.2446 69.0783 25.2011 68.9097 25.1211C68.7412 25.0411 68.5917 24.9264 68.4713 24.7847L65.22 20.566C65.0582 20.3631 64.8376 20.2143 64.588 20.1397C64.3384 20.0651 64.0717 20.0682 63.824 20.1487C63.5762 20.2291 63.3593 20.383 63.2023 20.5896C63.0454 20.7963 62.956 21.0457 62.9463 21.3042L62.7975 26.5566C62.7933 26.742 62.7495 26.9244 62.6689 27.0917C62.5883 27.2589 62.4728 27.4073 62.33 27.5269L58.08 30.7542C57.8756 30.9149 57.7258 31.1338 57.6506 31.3816C57.5754 31.6294 57.5786 31.8941 57.6596 32.14C57.7407 32.386 57.8957 32.6013 58.1039 32.7571C58.312 32.9129 58.5633 33.0016 58.8238 33.0113Z"
                  fill="#FFD140"
                  stroke="#F6A823"
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M44.0336 23.582L46.6899 25.9023C46.7848 25.9829 46.8607 26.0833 46.9121 26.1963C46.9636 26.3093 46.9893 26.4322 46.9874 26.5562V30.0578C46.9778 30.2307 47.0234 30.4023 47.1177 30.548C47.2121 30.6937 47.3504 30.8062 47.5129 30.8693C47.6754 30.9324 47.8538 30.943 48.0227 30.8995C48.1917 30.8561 48.3425 30.7608 48.4536 30.6273L50.7911 27.9906C50.8723 27.8964 50.9735 27.821 51.0873 27.77C51.2012 27.7189 51.325 27.6934 51.4499 27.6953H54.9774C55.1516 27.7048 55.3245 27.6596 55.4712 27.5659C55.618 27.4722 55.7313 27.335 55.7949 27.1737C55.8585 27.0124 55.8691 26.8352 55.8254 26.6676C55.7816 26.4999 55.6856 26.3502 55.5511 26.2398L52.8949 23.9195C52.7999 23.8389 52.7241 23.7385 52.6726 23.6255C52.6212 23.5125 52.5955 23.3896 52.5974 23.2656V19.764C52.607 19.5911 52.5614 19.4195 52.467 19.2738C52.3727 19.1281 52.2344 19.0157 52.0719 18.9526C51.9094 18.8894 51.731 18.8788 51.562 18.9223C51.3931 18.9657 51.2423 19.061 51.1311 19.1945L48.7936 21.8312C48.7124 21.9255 48.6113 22.0008 48.4975 22.0519C48.3836 22.1029 48.2598 22.1284 48.1349 22.1265H44.6074C44.4332 22.117 44.2603 22.1623 44.1135 22.2559C43.9667 22.3496 43.8535 22.4869 43.7899 22.6482C43.7263 22.8095 43.7156 22.9866 43.7594 23.1543C43.8032 23.322 43.8991 23.4717 44.0336 23.582Z"
                  fill="#FFD140"
                  stroke="#F6A823"
                  strokeWidth={0.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M66.1525 47.3594C61.5015 47.3927 56.8896 46.516 52.5801 44.7794C48.2706 43.0428 44.3481 40.4803 41.0367 37.2383C37.7253 33.9963 35.0899 30.1383 33.2811 25.8849C31.4723 21.6315 30.5255 17.066 30.495 12.4492C30.5036 9.4935 30.8965 6.55124 31.6637 3.69531C25.3181 4.47828 19.3073 6.96278 14.2773 10.8818C9.24719 14.8009 5.38796 20.0064 3.11424 25.939C0.840517 31.8716 0.238246 38.3071 1.37214 44.5539C2.50603 50.8008 5.33323 56.6229 9.54995 61.3946C13.7667 66.1664 19.2135 69.7075 25.3053 71.6374C31.397 73.5672 37.9033 73.813 44.1252 72.3482C50.3471 70.8834 56.0492 67.7635 60.6191 63.3236C65.1889 58.8837 68.4536 53.2917 70.0625 47.1484C68.7662 47.275 67.47 47.3594 66.1525 47.3594Z"
                  fill="url(#paint0_linear_486_299)"
                  stroke="#F6A823"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Defs>
                  <LinearGradient
                    id="paint0_linear_486_299"
                    x1={13.58}
                    y1={10.5508}
                    x2={48.4658}
                    y2={71.4604}
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop stopColor="#FFFBCB" />
                    <Stop offset={0.3} stopColor="#FFD140" />
                    <Stop offset={1} stopColor="#FCB912" />
                  </LinearGradient>
                </Defs>
              </Svg>
            ),

            "116": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 99 76"
                    fill="none"
                >
                    <Path
                        d="M52.8845 33.2406C49.4759 33.2652 46.0959 32.6179 42.9376 31.3356C39.7793 30.0533 36.9046 28.1612 34.4778 25.7674C32.0509 23.3736 30.1195 20.525 28.7939 17.3843C27.4683 14.2437 26.7745 10.8726 26.752 7.4637C26.7584 5.28126 27.0463 3.10876 27.6086 1C22.9581 1.57813 18.5529 3.41263 14.8665 6.30638C11.1801 9.20014 8.3518 13.0438 6.68545 17.4243C5.0191 21.8048 4.57771 26.5566 5.40871 31.1691C6.23971 35.7817 8.31169 40.0806 11.402 43.604C14.4923 47.1273 18.4842 49.742 22.9487 51.167C27.4131 52.5919 32.1814 52.7734 36.7413 51.6918C41.3011 50.6103 45.4801 48.3065 48.8292 45.0282C52.1783 41.7499 54.5709 37.6209 55.75 33.0849C54.8 33.1783 53.85 33.2406 52.8845 33.2406Z"
                        fill="url(#paint0_linear_445_438)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_445_438)">
                        <Path
                            d="M80.2857 39.9669H79.613C80.8492 34.8701 80.2282 29.4997 77.8613 24.8196C75.4945 20.1395 71.5369 16.4562 66.6989 14.431C61.861 12.4058 56.4596 12.1713 51.4643 13.7695C46.469 15.3678 42.207 18.6942 39.4434 23.1515C37.2125 21.8289 34.6716 21.1193 32.0782 21.0948C29.4847 21.0703 26.9309 21.7317 24.6754 23.012C22.4199 24.2922 20.5429 26.1459 19.2345 28.3851C17.9261 30.6244 17.2329 33.1696 17.225 35.7631C17.2315 36.5661 17.3018 37.3673 17.4353 38.1592C13.5981 38.9109 10.1773 41.0615 7.83683 44.1936C5.49641 47.3256 4.40347 51.2157 4.77022 55.1083C5.13697 59.0009 6.93724 62.6183 9.82148 65.2582C12.7057 67.8981 16.4681 69.372 20.3781 69.3938C20.7281 69.4147 21.0791 69.4147 21.4291 69.3938H80.2857C84.1881 69.3938 87.9307 67.8436 90.6902 65.0843C93.4496 62.325 94.9998 58.5826 94.9998 54.6803C94.9998 50.7781 93.4496 47.0357 90.6902 44.2764C87.9307 41.517 84.1881 39.9669 80.2857 39.9669Z"
                            fill="url(#paint1_linear_445_438)"
                        />
                    </G>
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_445_438"
                            x1={14.3555}
                            y1={6.06193}
                            x2={40.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_445_438"
                            x1={8.89095}
                            y1={3.21675}
                            x2={119.321}
                            y2={105.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "119": (
                <Svg width={size} height={size} viewBox="0 0 99 66" fill="none">
                    <G filter="url(#filter0_d_457_304)">
                        <Path d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z" fill="url(#paint0_linear_457_304)" />
                    </G>
                    <Defs>

                        <LinearGradient id="paint0_linear_457_304" x1="8.89095" y1="-6.78325" x2="119.321" y2="95.3811" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset="1" stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "122": (
                <Svg width={size} height={size} viewBox="0 0 125 74" fill="none" >
                    <G filter="url(#filter0_d_462_578)">
                        <Path d="M110.06 35.2639H109.606C110.441 31.8474 110.021 28.2474 108.422 25.1102C106.824 21.973 104.15 19.504 100.882 18.1465C97.6137 16.7889 93.9648 16.6317 90.5903 17.7031C87.2159 18.7744 84.3368 21.0042 82.4698 23.9921C80.9628 23.1055 79.2463 22.6298 77.4944 22.6134C75.7424 22.597 74.0172 23.0403 72.4936 23.8985C70.9699 24.7567 69.7019 25.9993 68.8181 27.5003C67.9342 29.0013 67.4659 30.7075 67.4606 32.4459C67.465 32.9842 67.5125 33.5213 67.6026 34.0521C65.0105 34.556 62.6996 35.9976 61.1186 38.0971C59.5375 40.1966 58.7992 42.8042 59.047 45.4135C59.2947 48.0229 60.5109 50.4477 62.4593 52.2173C64.4077 53.9869 66.9493 54.9749 69.5906 54.9895C69.827 55.0035 70.0641 55.0035 70.3006 54.9895H110.06C112.696 54.9895 115.225 53.9504 117.089 52.1007C118.953 50.2511 120 47.7425 120 45.1267C120 42.5109 118.953 40.0022 117.089 38.1526C115.225 36.303 112.696 35.2639 110.06 35.2639Z" fill="url(#paint0_linear_462_578)" />
                        <Path d="M110.06 35.2639H109.606C110.441 31.8474 110.021 28.2474 108.422 25.1102C106.824 21.973 104.15 19.504 100.882 18.1465C97.6137 16.7889 93.9648 16.6317 90.5903 17.7031C87.2159 18.7744 84.3368 21.0042 82.4698 23.9921C80.9628 23.1055 79.2463 22.6298 77.4944 22.6134C75.7424 22.597 74.0172 23.0403 72.4936 23.8985C70.9699 24.7567 69.7019 25.9993 68.8181 27.5003C67.9342 29.0013 67.4659 30.7075 67.4606 32.4459C67.465 32.9842 67.5125 33.5213 67.6026 34.0521C65.0105 34.556 62.6996 35.9976 61.1186 38.0971C59.5375 40.1966 58.7992 42.8042 59.047 45.4135C59.2947 48.0229 60.5109 50.4477 62.4593 52.2173C64.4077 53.9869 66.9493 54.9749 69.5906 54.9895C69.827 55.0035 70.0641 55.0035 70.3006 54.9895H110.06C112.696 54.9895 115.225 53.9504 117.089 52.1007C118.953 50.2511 120 47.7425 120 45.1267C120 42.5109 118.953 40.0022 117.089 38.1526C115.225 36.303 112.696 35.2639 110.06 35.2639Z" stroke="url(#paint1_linear_462_578)" strokeMiterlimit="10" />
                    </G>
                    <G filter="url(#filter1_d_462_578)">
                        <Path d="M89.2857 29.9669H88.613C89.8492 24.8701 89.2282 19.4997 86.8613 14.8196C84.4945 10.1395 80.5369 6.4562 75.6989 4.43099C70.861 2.40579 65.4596 2.17127 60.4643 3.76953C55.469 5.3678 51.207 8.69418 48.4434 13.1515C46.2125 11.8289 43.6716 11.1193 41.0782 11.0948C38.4847 11.0703 35.9309 11.7317 33.6754 13.012C31.4199 14.2922 29.5429 16.1459 28.2345 18.3851C26.9261 20.6244 26.2329 23.1696 26.225 25.7631C26.2315 26.5661 26.3018 27.3673 26.4353 28.1592C22.5981 28.9109 19.1773 31.0615 16.8368 34.1936C14.4964 37.3256 13.4035 41.2157 13.7702 45.1083C14.137 49.0009 15.9372 52.6183 18.8215 55.2582C21.7057 57.8981 25.4681 59.372 29.3781 59.3938C29.7281 59.4147 30.0791 59.4147 30.4291 59.3938H89.2857C93.1881 59.3938 96.9307 57.8436 99.6902 55.0843C102.45 52.325 104 48.5826 104 44.6803C104 40.7781 102.45 37.0357 99.6902 34.2764C96.9307 31.517 93.1881 29.9669 89.2857 29.9669Z" fill="url(#paint2_linear_462_578)" />
                    </G>
                    <G filter="url(#filter2_d_462_578)">
                        <Path d="M56.0601 47.2639H55.6057C56.4408 43.8474 56.0213 40.2474 54.4224 37.1102C52.8235 33.973 50.15 31.504 46.8818 30.1465C43.6137 28.7889 39.9648 28.6317 36.5903 29.7031C33.2159 30.7744 30.3368 33.0042 28.4698 35.9921C26.9628 35.1055 25.2463 34.6298 23.4944 34.6134C21.7424 34.597 20.0172 35.0403 18.4936 35.8985C16.9699 36.7567 15.7019 37.9993 14.8181 39.5003C13.9342 41.0013 13.4659 42.7075 13.4606 44.4459C13.465 44.9842 13.5125 45.5213 13.6026 46.0521C11.0105 46.556 8.6996 47.9976 7.11857 50.0971C5.53754 52.1966 4.79922 54.8042 5.04697 57.4135C5.29473 60.0229 6.51087 62.4477 8.45927 64.2173C10.4077 65.9869 12.9493 66.9749 15.5906 66.9895C15.827 67.0035 16.0641 67.0035 16.3006 66.9895H56.0601C58.6963 66.9895 61.2246 65.9504 63.0887 64.1007C64.9528 62.2511 66 59.7425 66 57.1267C66 54.5109 64.9528 52.0022 63.0887 50.1526C61.2246 48.303 58.6963 47.2639 56.0601 47.2639Z" fill="url(#paint3_linear_462_578)" />
                        <Path d="M56.0601 47.2639H55.6057C56.4408 43.8474 56.0213 40.2474 54.4224 37.1102C52.8235 33.973 50.15 31.504 46.8818 30.1465C43.6137 28.7889 39.9648 28.6317 36.5903 29.7031C33.2159 30.7744 30.3368 33.0042 28.4698 35.9921C26.9628 35.1055 25.2463 34.6298 23.4944 34.6134C21.7424 34.597 20.0172 35.0403 18.4936 35.8985C16.9699 36.7567 15.7019 37.9993 14.8181 39.5003C13.9342 41.0013 13.4659 42.7075 13.4606 44.4459C13.465 44.9842 13.5125 45.5213 13.6026 46.0521C11.0105 46.556 8.6996 47.9976 7.11857 50.0971C5.53754 52.1966 4.79922 54.8042 5.04697 57.4135C5.29473 60.0229 6.51087 62.4477 8.45927 64.2173C10.4077 65.9869 12.9493 66.9749 15.5906 66.9895C15.827 67.0035 16.0641 67.0035 16.3006 66.9895H56.0601C58.6963 66.9895 61.2246 65.9504 63.0887 64.1007C64.9528 62.2511 66 59.7425 66 57.1267C66 54.5109 64.9528 52.0022 63.0887 50.1526C61.2246 48.303 58.6963 47.2639 56.0601 47.2639Z" stroke="url(#paint4_linear_462_578)" strokeMiterlimit="10" />
                    </G>
                    <Defs>

                        <LinearGradient id="paint0_linear_462_578" x1="77.6897" y1="22.2752" x2="114.471" y2="53.952" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.417816" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                        <LinearGradient id="paint1_linear_462_578" x1="79.3727" y1="22.6091" x2="113.451" y2="55.27" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.5" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                        <LinearGradient id="paint2_linear_462_578" x1="17.891" y1="-6.78325" x2="128.321" y2="95.3811" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset="1" stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient id="paint3_linear_462_578" x1="23.6897" y1="34.2752" x2="60.4709" y2="65.952" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.417816" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                        <LinearGradient id="paint4_linear_462_578" x1="25.3727" y1="34.6091" x2="59.4508" y2="67.27" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#F8F8F8" />
                            <Stop offset="0.5" stopColor="#D9DEE3" />
                            <Stop offset="1" stopColor="#99A2AA" />
                        </LinearGradient>
                    </Defs>
                </Svg>


            ),

            "143": (
                <Svg width={size} height={size} viewBox="0 0 78 45" fill="none">
                    <Path d="M3 3H66.2812" stroke="url(#paint0_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M12 16H75.2812" stroke="url(#paint1_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M3 29H66.2812" stroke="url(#paint2_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Path d="M12 42H75.2812" stroke="url(#paint3_linear_445_682)" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                    <Defs>
                        <LinearGradient id="paint0_linear_445_682" x1="3" y1="3.5" x2="66.2812" y2="3.5" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient id="paint1_linear_445_682" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient id="paint2_linear_445_682" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient id="paint3_linear_445_682" gradientUnits="userSpaceOnUse">
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset="0.45" stopColor="#D4D7DD" />
                            <Stop offset="1" stopColor="#BEC1C6" />
                        </LinearGradient>
                    </Defs>
                </Svg>

            ),

            "176": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 99 100"
                    fill="none"
                >
                    <Path
                        d="M52.8845 33.2406C49.4759 33.2652 46.0959 32.6179 42.9376 31.3356C39.7793 30.0533 36.9046 28.1612 34.4778 25.7674C32.0509 23.3736 30.1195 20.525 28.7939 17.3843C27.4683 14.2437 26.7745 10.8726 26.752 7.4637C26.7584 5.28126 27.0463 3.10876 27.6086 1C22.9581 1.57813 18.5529 3.41263 14.8665 6.30638C11.1801 9.20014 8.3518 13.0438 6.68545 17.4243C5.0191 21.8048 4.57771 26.5566 5.40871 31.1691C6.23971 35.7817 8.31169 40.0806 11.402 43.604C14.4923 47.1273 18.4842 49.742 22.9487 51.167C27.4131 52.5919 32.1814 52.7734 36.7413 51.6918C41.3011 50.6103 45.4801 48.3065 48.8292 45.0282C52.1783 41.7499 54.5709 37.6209 55.75 33.0849C54.8 33.1783 53.85 33.2406 52.8845 33.2406Z"
                        fill="url(#paint0_linear_472_311)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_311)">
                        <Path
                            d="M80.2857 36.9669H79.613C80.8492 31.8701 80.2282 26.4997 77.8613 21.8196C75.4945 17.1395 71.5369 13.4562 66.6989 11.431C61.861 9.40579 56.4596 9.17127 51.4643 10.7695C46.469 12.3678 42.207 15.6942 39.4434 20.1515C37.2125 18.8289 34.6716 18.1193 32.0782 18.0948C29.4847 18.0703 26.9309 18.7317 24.6754 20.012C22.4199 21.2922 20.5429 23.1459 19.2345 25.3851C17.9261 27.6244 17.2329 30.1696 17.225 32.7631C17.2315 33.5661 17.3018 34.3673 17.4353 35.1592C13.5981 35.9109 10.1773 38.0615 7.83683 41.1936C5.49641 44.3256 4.40347 48.2157 4.77022 52.1083C5.13697 56.0009 6.93724 59.6183 9.82148 62.2582C12.7057 64.8981 16.4681 66.372 20.3781 66.3938C20.7281 66.4147 21.0791 66.4147 21.4291 66.3938H80.2857C84.1881 66.3938 87.9307 64.8436 90.6902 62.0843C93.4496 59.325 94.9998 55.5826 94.9998 51.6803C94.9998 47.7781 93.4496 44.0357 90.6902 41.2764C87.9307 38.517 84.1881 36.9669 80.2857 36.9669Z"
                            fill="url(#paint1_linear_472_311)"
                        />
                    </G>
                    <Path
                        d="M33 82L32 92"
                        stroke="url(#paint2_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 72L20 82"
                        stroke="url(#paint3_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 72L50 82.4203"
                        stroke="url(#paint4_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 87L60 97.4203"
                        stroke="url(#paint5_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 75L76 85.4203"
                        stroke="url(#paint6_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_311"
                            x1={14.3555}
                            y1={6.06193}
                            x2={40.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_311"
                            x1={8.89095}
                            y1={0.21675}
                            x2={119.321}
                            y2={102.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_311"
                            x1={30.6154}
                            y1={81.8381}
                            x2={37.4624}
                            y2={89.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_311"
                            x1={18.6154}
                            y1={71.8381}
                            x2={25.4624}
                            y2={79.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_311"
                            x1={47.7219}
                            y1={71.8312}
                            x2={53.9235}
                            y2={82.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_311"
                            x1={57.7219}
                            y1={86.8312}
                            x2={63.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_311"
                            x1={73.7219}
                            y1={74.8312}
                            x2={79.9235}
                            y2={85.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "179": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 101 102"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_472_312)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_312)">
                        <Path
                            d="M82.2857 40.9669H81.613C82.8492 35.8701 82.2282 30.4997 79.8613 25.8196C77.4945 21.1395 73.5369 17.4562 68.6989 15.431C63.861 13.4058 58.4596 13.1713 53.4643 14.7695C48.469 16.3678 44.207 19.6942 41.4434 24.1515C39.2125 22.8289 36.6716 22.1193 34.0782 22.0948C31.4847 22.0703 28.9309 22.7317 26.6754 24.012C24.4199 25.2922 22.5429 27.1459 21.2345 29.3851C19.9261 31.6244 19.2329 34.1696 19.225 36.7631C19.2315 37.5661 19.3018 38.3673 19.4353 39.1592C15.5981 39.9109 12.1773 42.0615 9.83683 45.1936C7.49641 48.3256 6.40347 52.2157 6.77022 56.1083C7.13697 60.0009 8.93724 63.6183 11.8215 66.2582C14.7057 68.8981 18.4681 70.372 22.3781 70.3938C22.7281 70.4147 23.0791 70.4147 23.4291 70.3938H82.2857C86.1881 70.3938 89.9307 68.8436 92.6902 66.0843C95.4496 63.325 96.9998 59.5826 96.9998 55.6803C96.9998 51.7781 95.4496 48.0357 92.6902 45.2764C89.9307 42.517 86.1881 40.9669 82.2857 40.9669Z"
                            fill="url(#paint1_linear_472_312)"
                        />
                    </G>
                    <Path
                        d="M37.5774 92.9102C39.0336 92.9102 40.2141 91.7297 40.2141 90.2734C40.2141 88.8172 39.0336 87.6367 37.5774 87.6367C36.1212 87.6367 34.9407 88.8172 34.9407 90.2734C34.9407 91.7297 36.1212 92.9102 37.5774 92.9102Z"
                        stroke="url(#paint2_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 92.9102L39.8555 91.5812M35.2992 88.9656L33 87.6367M37.5773 85V87.6367M37.5773 95.5469V92.9102M35.2992 91.5812L33 92.9102M42.1547 87.6367L39.8555 88.9656"
                        stroke="url(#paint3_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73.5774 80.9102C75.0336 80.9102 76.2141 79.7297 76.2141 78.2734C76.2141 76.8172 75.0336 75.6367 73.5774 75.6367C72.1212 75.6367 70.9407 76.8172 70.9407 78.2734C70.9407 79.7297 72.1212 80.9102 73.5774 80.9102Z"
                        stroke="url(#paint4_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M78.1547 80.9102L75.8555 79.5812M71.2992 76.9656L69 75.6367M73.5773 73V75.6367M73.5773 83.5469V80.9102M71.2992 79.5812L69 80.9102M78.1547 75.6367L75.8555 76.9656"
                        stroke="url(#paint5_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M24.5774 81.9102C26.0336 81.9102 27.2141 80.7297 27.2141 79.2734C27.2141 77.8172 26.0336 76.6367 24.5774 76.6367C23.1212 76.6367 21.9407 77.8172 21.9407 79.2734C21.9407 80.7297 23.1212 81.9102 24.5774 81.9102Z"
                        stroke="url(#paint6_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M29.1547 81.9102L26.8555 80.5812M22.2992 77.9656L20 76.6367M24.5773 74V76.6367M24.5773 84.5469V81.9102M22.2992 80.5812L20 81.9102M29.1547 76.6367L26.8555 77.9656"
                        stroke="url(#paint7_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 97.9102C66.0336 97.9102 67.2141 96.7297 67.2141 95.2734C67.2141 93.8172 66.0336 92.6367 64.5774 92.6367C63.1212 92.6367 61.9407 93.8172 61.9407 95.2734C61.9407 96.7297 63.1212 97.9102 64.5774 97.9102Z"
                        stroke="url(#paint8_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 97.9102L66.8555 96.5812M62.2992 93.9656L60 92.6367M64.5773 90V92.6367M64.5773 100.547V97.9102M62.2992 96.5812L60 97.9102M69.1547 92.6367L66.8555 93.9656"
                        stroke="url(#paint9_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M52.5774 84.9102C54.0336 84.9102 55.2141 83.7297 55.2141 82.2734C55.2141 80.8172 54.0336 79.6367 52.5774 79.6367C51.1212 79.6367 49.9407 80.8172 49.9407 82.2734C49.9407 83.7297 51.1212 84.9102 52.5774 84.9102Z"
                        stroke="url(#paint10_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M57.1547 84.9102L54.8555 83.5812M50.2992 80.9656L48 79.6367M52.5773 77V79.6367M52.5773 87.5469V84.9102M50.2992 83.5812L48 84.9102M57.1547 79.6367L54.8555 80.9656"
                        stroke="url(#paint11_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_312"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_312"
                            x1={10.891}
                            y1={4.21675}
                            x2={121.321}
                            y2={106.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_312"
                            x1={35.7211}
                            y1={87.0672}
                            x2={39.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_312"
                            x1={34.7719}
                            y1={85.4008}
                            x2={40.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_312"
                            x1={71.7211}
                            y1={75.0672}
                            x2={75.4336}
                            y2={81.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_312"
                            x1={70.7719}
                            y1={73.4008}
                            x2={76.3828}
                            y2={83.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_312"
                            x1={22.7211}
                            y1={76.0672}
                            x2={26.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_472_312"
                            x1={21.7719}
                            y1={74.4008}
                            x2={27.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_472_312"
                            x1={62.7211}
                            y1={92.0672}
                            x2={66.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_472_312"
                            x1={61.7719}
                            y1={90.4008}
                            x2={67.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_472_312"
                            x1={50.7211}
                            y1={79.0672}
                            x2={54.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_472_312"
                            x1={49.7719}
                            y1={77.4008}
                            x2={55.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "182": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 101 104"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_472_313)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_313)">
                        <Path
                            d="M82.2857 42.9669H81.613C82.8492 37.8701 82.2282 32.4997 79.8613 27.8196C77.4945 23.1395 73.5369 19.4562 68.6989 17.431C63.861 15.4058 58.4596 15.1713 53.4643 16.7695C48.469 18.3678 44.207 21.6942 41.4434 26.1515C39.2125 24.8289 36.6716 24.1193 34.0782 24.0948C31.4847 24.0703 28.9309 24.7317 26.6754 26.012C24.4199 27.2922 22.5429 29.1459 21.2345 31.3851C19.9261 33.6244 19.2329 36.1696 19.225 38.7631C19.2315 39.5661 19.3018 40.3673 19.4353 41.1592C15.5981 41.9109 12.1773 44.0615 9.83683 47.1936C7.49641 50.3256 6.40347 54.2157 6.77022 58.1083C7.13697 62.0009 8.93724 65.6183 11.8215 68.2582C14.7057 70.8981 18.4681 72.372 22.3781 72.3938C22.7281 72.4147 23.0791 72.4147 23.4291 72.3938H82.2857C86.1881 72.3938 89.9307 70.8436 92.6902 68.0843C95.4496 65.325 96.9998 61.5826 96.9998 57.6803C96.9998 53.7781 95.4496 50.0357 92.6902 47.2764C89.9307 44.517 86.1881 42.9669 82.2857 42.9669Z"
                            fill="url(#paint1_linear_472_313)"
                        />
                    </G>
                    <Path
                        d="M25.5774 87.9102C27.0336 87.9102 28.2141 86.7297 28.2141 85.2734C28.2141 83.8172 27.0336 82.6367 25.5774 82.6367C24.1212 82.6367 22.9407 83.8172 22.9407 85.2734C22.9407 86.7297 24.1212 87.9102 25.5774 87.9102Z"
                        stroke="url(#paint2_linear_472_313)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M30.1547 87.9102L27.8555 86.5812M23.2992 83.9656L21 82.6367M25.5773 80V82.6367M25.5773 90.5469V87.9102M23.2992 86.5812L21 87.9102M30.1547 82.6367L27.8555 83.9656"
                        stroke="url(#paint3_linear_472_313)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M78.5774 84.9102C80.0336 84.9102 81.2141 83.7297 81.2141 82.2734C81.2141 80.8172 80.0336 79.6367 78.5774 79.6367C77.1212 79.6367 75.9407 80.8172 75.9407 82.2734C75.9407 83.7297 77.1212 84.9102 78.5774 84.9102Z"
                        stroke="url(#paint4_linear_472_313)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M83.1547 84.9102L80.8555 83.5812M76.2992 80.9656L74 79.6367M78.5773 77V79.6367M78.5773 87.5469V84.9102M76.2992 83.5812L74 84.9102M83.1547 79.6367L80.8555 80.9656"
                        stroke="url(#paint5_linear_472_313)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 99.9102C66.0336 99.9102 67.2141 98.7297 67.2141 97.2734C67.2141 95.8172 66.0336 94.6367 64.5774 94.6367C63.1212 94.6367 61.9407 95.8172 61.9407 97.2734C61.9407 98.7297 63.1212 99.9102 64.5774 99.9102Z"
                        stroke="url(#paint6_linear_472_313)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 99.9102L66.8555 98.5812M62.2992 95.9656L60 94.6367M64.5773 92V94.6367M64.5773 102.547V99.9102M62.2992 98.5812L60 99.9102M69.1547 94.6367L66.8555 95.9656"
                        stroke="url(#paint7_linear_472_313)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M48.4375 53L40 78.3125H48.4375L44.2188 99.4062L65.3125 69.875H52.6562L61.0938 53H48.4375Z"
                        fill="url(#paint8_linear_472_313)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_313"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_313"
                            x1={10.891}
                            y1={6.21675}
                            x2={121.321}
                            y2={108.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_313"
                            x1={23.7211}
                            y1={82.0672}
                            x2={27.4336}
                            y2={88.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_313"
                            x1={22.7719}
                            y1={80.4008}
                            x2={28.3828}
                            y2={90.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_313"
                            x1={76.7211}
                            y1={79.0672}
                            x2={80.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_313"
                            x1={75.7719}
                            y1={77.4008}
                            x2={81.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_313"
                            x1={62.7211}
                            y1={94.0672}
                            x2={66.4336}
                            y2={100.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_472_313"
                            x1={61.7719}
                            y1={92.4008}
                            x2={67.3828}
                            y2={102.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_472_313"
                            x1={54.1562}
                            y1={54.0625}
                            x2={44.1562}
                            y2={100.063}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "185": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_473_314)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_473_314)">
                        <Path
                            d="M81.2857 42.9669H80.613C81.8492 37.8701 81.2282 32.4997 78.8613 27.8196C76.4945 23.1395 72.5369 19.4562 67.6989 17.431C62.861 15.4058 57.4596 15.1713 52.4643 16.7695C47.469 18.3678 43.207 21.6942 40.4434 26.1515C38.2125 24.8289 35.6716 24.1193 33.0782 24.0948C30.4847 24.0703 27.9309 24.7317 25.6754 26.012C23.4199 27.2922 21.5429 29.1459 20.2345 31.3851C18.9261 33.6244 18.2329 36.1696 18.225 38.7631C18.2315 39.5661 18.3018 40.3673 18.4353 41.1592C14.5981 41.9109 11.1773 44.0615 8.83683 47.1936C6.49641 50.3256 5.40347 54.2157 5.77022 58.1083C6.13697 62.0009 7.93724 65.6183 10.8215 68.2582C13.7057 70.8981 17.4681 72.372 21.3781 72.3938C21.7281 72.4147 22.0791 72.4147 22.4291 72.3938H81.2857C85.1881 72.3938 88.9307 70.8436 91.6902 68.0843C94.4496 65.325 95.9998 61.5826 95.9998 57.6803C95.9998 53.7781 94.4496 50.0357 91.6902 47.2764C88.9307 44.517 85.1881 42.9669 81.2857 42.9669Z"
                            fill="url(#paint1_linear_473_314)"
                        />
                    </G>
                    <Path
                        d="M60 89L59 92"
                        stroke="url(#paint2_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M33 95L32 98"
                        stroke="url(#paint3_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M44 80L43 83"
                        stroke="url(#paint4_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M74 79L73 82"
                        stroke="url(#paint5_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M20 77L19 80"
                        stroke="url(#paint6_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M29 82L28 85"
                        stroke="url(#paint7_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M60 77L59 80"
                        stroke="url(#paint8_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M52 92L51 95"
                        stroke="url(#paint9_linear_473_314)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_473_314"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_473_314"
                            x1={9.89095}
                            y1={6.21675}
                            x2={120.321}
                            y2={108.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_473_314"
                            x1={57.6154}
                            y1={88.9514}
                            x2={58.664}
                            y2={92.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_473_314"
                            x1={30.6154}
                            y1={94.9514}
                            x2={31.664}
                            y2={98.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_473_314"
                            x1={41.6154}
                            y1={79.9514}
                            x2={42.664}
                            y2={83.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_473_314"
                            x1={71.6154}
                            y1={78.9514}
                            x2={72.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_473_314"
                            x1={17.6154}
                            y1={76.9514}
                            x2={18.664}
                            y2={80.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_473_314"
                            x1={26.6154}
                            y1={81.9514}
                            x2={27.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_473_314"
                            x1={57.6154}
                            y1={76.9514}
                            x2={58.664}
                            y2={80.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_473_314"
                            x1={49.6154}
                            y1={91.9514}
                            x2={50.664}
                            y2={95.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "200": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_473_315)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_473_315)">
                        <Path
                            d="M81.2857 41.9669H80.613C81.8492 36.8701 81.2282 31.4997 78.8613 26.8196C76.4945 22.1395 72.5369 18.4562 67.6989 16.431C62.861 14.4058 57.4596 14.1713 52.4643 15.7695C47.469 17.3678 43.207 20.6942 40.4434 25.1515C38.2125 23.8289 35.6716 23.1193 33.0782 23.0948C30.4847 23.0703 27.9309 23.7317 25.6754 25.012C23.4199 26.2922 21.5429 28.1459 20.2345 30.3851C18.9261 32.6244 18.2329 35.1696 18.225 37.7631C18.2315 38.5661 18.3018 39.3673 18.4353 40.1592C14.5981 40.9109 11.1773 43.0615 8.83683 46.1936C6.49641 49.3256 5.40347 53.2157 5.77022 57.1083C6.13697 61.0009 7.93724 64.6183 10.8215 67.2582C13.7057 69.8981 17.4681 71.372 21.3781 71.3938C21.7281 71.4147 22.0791 71.4147 22.4291 71.3938H81.2857C85.1881 71.3938 88.9307 69.8436 91.6902 67.0843C94.4496 64.325 95.9998 60.5826 95.9998 56.6803C95.9998 52.7781 94.4496 49.0357 91.6902 46.2764C88.9307 43.517 85.1881 41.9669 81.2857 41.9669Z"
                            fill="url(#paint1_linear_473_315)"
                        />
                    </G>
                    <Path
                        d="M47.4375 52L39 77.3125H47.4375L43.2188 98.4062L64.3125 68.875H51.6562L60.0938 52H47.4375Z"
                        fill="url(#paint2_linear_473_315)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_473_315"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_473_315"
                            x1={9.89095}
                            y1={5.21675}
                            x2={120.321}
                            y2={107.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_473_315"
                            x1={53.1562}
                            y1={53.0625}
                            x2={43.1562}
                            y2={99.0625}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "227": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 101 102"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_472_312)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_312)">
                        <Path
                            d="M82.2857 40.9669H81.613C82.8492 35.8701 82.2282 30.4997 79.8613 25.8196C77.4945 21.1395 73.5369 17.4562 68.6989 15.431C63.861 13.4058 58.4596 13.1713 53.4643 14.7695C48.469 16.3678 44.207 19.6942 41.4434 24.1515C39.2125 22.8289 36.6716 22.1193 34.0782 22.0948C31.4847 22.0703 28.9309 22.7317 26.6754 24.012C24.4199 25.2922 22.5429 27.1459 21.2345 29.3851C19.9261 31.6244 19.2329 34.1696 19.225 36.7631C19.2315 37.5661 19.3018 38.3673 19.4353 39.1592C15.5981 39.9109 12.1773 42.0615 9.83683 45.1936C7.49641 48.3256 6.40347 52.2157 6.77022 56.1083C7.13697 60.0009 8.93724 63.6183 11.8215 66.2582C14.7057 68.8981 18.4681 70.372 22.3781 70.3938C22.7281 70.4147 23.0791 70.4147 23.4291 70.3938H82.2857C86.1881 70.3938 89.9307 68.8436 92.6902 66.0843C95.4496 63.325 96.9998 59.5826 96.9998 55.6803C96.9998 51.7781 95.4496 48.0357 92.6902 45.2764C89.9307 42.517 86.1881 40.9669 82.2857 40.9669Z"
                            fill="url(#paint1_linear_472_312)"
                        />
                    </G>
                    <Path
                        d="M37.5774 92.9102C39.0336 92.9102 40.2141 91.7297 40.2141 90.2734C40.2141 88.8172 39.0336 87.6367 37.5774 87.6367C36.1212 87.6367 34.9407 88.8172 34.9407 90.2734C34.9407 91.7297 36.1212 92.9102 37.5774 92.9102Z"
                        stroke="url(#paint2_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 92.9102L39.8555 91.5812M35.2992 88.9656L33 87.6367M37.5773 85V87.6367M37.5773 95.5469V92.9102M35.2992 91.5812L33 92.9102M42.1547 87.6367L39.8555 88.9656"
                        stroke="url(#paint3_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73.5774 80.9102C75.0336 80.9102 76.2141 79.7297 76.2141 78.2734C76.2141 76.8172 75.0336 75.6367 73.5774 75.6367C72.1212 75.6367 70.9407 76.8172 70.9407 78.2734C70.9407 79.7297 72.1212 80.9102 73.5774 80.9102Z"
                        stroke="url(#paint4_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M78.1547 80.9102L75.8555 79.5812M71.2992 76.9656L69 75.6367M73.5773 73V75.6367M73.5773 83.5469V80.9102M71.2992 79.5812L69 80.9102M78.1547 75.6367L75.8555 76.9656"
                        stroke="url(#paint5_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M24.5774 81.9102C26.0336 81.9102 27.2141 80.7297 27.2141 79.2734C27.2141 77.8172 26.0336 76.6367 24.5774 76.6367C23.1212 76.6367 21.9407 77.8172 21.9407 79.2734C21.9407 80.7297 23.1212 81.9102 24.5774 81.9102Z"
                        stroke="url(#paint6_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M29.1547 81.9102L26.8555 80.5812M22.2992 77.9656L20 76.6367M24.5773 74V76.6367M24.5773 84.5469V81.9102M22.2992 80.5812L20 81.9102M29.1547 76.6367L26.8555 77.9656"
                        stroke="url(#paint7_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 97.9102C66.0336 97.9102 67.2141 96.7297 67.2141 95.2734C67.2141 93.8172 66.0336 92.6367 64.5774 92.6367C63.1212 92.6367 61.9407 93.8172 61.9407 95.2734C61.9407 96.7297 63.1212 97.9102 64.5774 97.9102Z"
                        stroke="url(#paint8_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 97.9102L66.8555 96.5812M62.2992 93.9656L60 92.6367M64.5773 90V92.6367M64.5773 100.547V97.9102M62.2992 96.5812L60 97.9102M69.1547 92.6367L66.8555 93.9656"
                        stroke="url(#paint9_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M52.5774 84.9102C54.0336 84.9102 55.2141 83.7297 55.2141 82.2734C55.2141 80.8172 54.0336 79.6367 52.5774 79.6367C51.1212 79.6367 49.9407 80.8172 49.9407 82.2734C49.9407 83.7297 51.1212 84.9102 52.5774 84.9102Z"
                        stroke="url(#paint10_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M57.1547 84.9102L54.8555 83.5812M50.2992 80.9656L48 79.6367M52.5773 77V79.6367M52.5773 87.5469V84.9102M50.2992 83.5812L48 84.9102M57.1547 79.6367L54.8555 80.9656"
                        stroke="url(#paint11_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_312"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_312"
                            x1={10.891}
                            y1={4.21675}
                            x2={121.321}
                            y2={106.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_312"
                            x1={35.7211}
                            y1={87.0672}
                            x2={39.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_312"
                            x1={34.7719}
                            y1={85.4008}
                            x2={40.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_312"
                            x1={71.7211}
                            y1={75.0672}
                            x2={75.4336}
                            y2={81.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_312"
                            x1={70.7719}
                            y1={73.4008}
                            x2={76.3828}
                            y2={83.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_312"
                            x1={22.7211}
                            y1={76.0672}
                            x2={26.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_472_312"
                            x1={21.7719}
                            y1={74.4008}
                            x2={27.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_472_312"
                            x1={62.7211}
                            y1={92.0672}
                            x2={66.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_472_312"
                            x1={61.7719}
                            y1={90.4008}
                            x2={67.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_472_312"
                            x1={50.7211}
                            y1={79.0672}
                            x2={54.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_472_312"
                            x1={49.7719}
                            y1={77.4008}
                            x2={55.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "230": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 99 96"
                    fill="none"

                >
                    <G filter="url(#filter0_d_477_337)">
                        <Path
                            d="M79.585 29.2462H78.9123C80.1486 24.1494 79.5275 18.779 77.1606 14.0989C74.7938 9.41876 70.8362 5.73549 65.9982 3.71029C61.1603 1.68509 55.7589 1.45057 50.7636 3.04883C45.7683 4.64709 41.5063 7.97347 38.7427 12.4308C36.5118 11.1082 33.9709 10.3986 31.3775 10.3741C28.7841 10.3496 26.2302 11.011 23.9747 12.2913C21.7192 13.5715 19.8422 15.4252 18.5338 17.6644C17.2255 19.9037 16.5322 22.4489 16.5244 25.0423C16.5308 25.8454 16.6011 26.6466 16.7346 27.4385C12.8975 28.1901 9.47657 30.3408 7.13615 33.4729C4.79573 36.6049 3.70279 40.4949 4.06954 44.3876C4.43629 48.2802 6.23656 51.8976 9.1208 54.5375C12.005 57.1774 15.7674 58.6513 19.6774 58.6731C20.0274 58.694 20.3784 58.694 20.7284 58.6731H79.585C83.4874 58.6731 87.23 57.1229 89.9895 54.3636C92.7489 51.6043 94.2991 47.8619 94.2991 43.9596C94.2991 40.0574 92.7489 36.315 89.9895 33.5557C87.23 30.7963 83.4874 29.2462 79.585 29.2462Z"
                            fill="url(#paint0_linear_477_337)"
                        />
                    </G>
                    <Path
                        d="M21.5774 70.9102C23.0336 70.9102 24.2141 69.7297 24.2141 68.2734C24.2141 66.8172 23.0336 65.6367 21.5774 65.6367C20.1212 65.6367 18.9407 66.8172 18.9407 68.2734C18.9407 69.7297 20.1212 70.9102 21.5774 70.9102Z"
                        stroke="url(#paint1_linear_477_337)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M26.1547 70.9102L23.8555 69.5812M19.2992 66.9656L17 65.6367M21.5773 63V65.6367M21.5773 73.5469V70.9102M19.2992 69.5812L17 70.9102M26.1547 65.6367L23.8555 66.9656"
                        stroke="url(#paint2_linear_477_337)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M45.5774 67.9102C47.0336 67.9102 48.2141 66.7297 48.2141 65.2734C48.2141 63.8172 47.0336 62.6367 45.5774 62.6367C44.1212 62.6367 42.9407 63.8172 42.9407 65.2734C42.9407 66.7297 44.1212 67.9102 45.5774 67.9102Z"
                        stroke="url(#paint3_linear_477_337)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M50.1547 67.9102L47.8555 66.5812M43.2992 63.9656L41 62.6367M45.5773 60V62.6367M45.5773 70.5469V67.9102M43.2992 66.5812L41 67.9102M50.1547 62.6367L47.8555 63.9656"
                        stroke="url(#paint4_linear_477_337)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M36.5774 84.9102C38.0336 84.9102 39.2141 83.7297 39.2141 82.2734C39.2141 80.8172 38.0336 79.6367 36.5774 79.6367C35.1212 79.6367 33.9407 80.8172 33.9407 82.2734C33.9407 83.7297 35.1212 84.9102 36.5774 84.9102Z"
                        stroke="url(#paint5_linear_477_337)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M41.1547 84.9102L38.8555 83.5812M34.2992 80.9656L32 79.6367M36.5773 77V79.6367M36.5773 87.5469V84.9102M34.2992 83.5812L32 84.9102M41.1547 79.6367L38.8555 80.9656"
                        stroke="url(#paint6_linear_477_337)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M79.9749 69.0969C80.5306 68.4493 81.2213 67.9657 81.9853 67.6895C82.7492 67.4132 83.5626 67.3529 84.3525 67.5139C85.1424 67.6749 85.8843 68.0523 86.5117 68.6121C87.1392 69.172 87.6325 69.897 87.9477 70.7221C88.2628 71.5472 88.3899 72.4468 88.3176 73.3403C88.2453 74.2337 87.9758 75.0932 87.5333 75.8418C87.0908 76.5904 86.489 77.2047 85.7819 77.6298C85.0747 78.0548 84.2843 78.2774 83.4813 78.2775H49"
                        stroke="url(#paint7_linear_477_337)"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeDasharray="35 22"
                    />
                    <Path
                        d="M63.8295 63.4797C64.3751 62.9063 65.0534 62.4781 65.8036 62.2335C66.5537 61.9889 67.3524 61.9354 68.1281 62.078C68.9037 62.2206 69.6322 62.5547 70.2483 63.0504C70.8644 63.5462 71.3488 64.188 71.6583 64.9186C71.9677 65.6492 72.0925 66.4457 72.0215 67.2368C71.9505 68.0279 71.6859 68.7889 71.2514 69.4517C70.8168 70.1145 70.2259 70.6584 69.5316 71.0348C68.8372 71.4111 68.0611 71.6082 67.2726 71.6083L53.0695 71.5519"
                        stroke="url(#paint8_linear_477_337)"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeDasharray="35 22"
                    />
                    <Path
                        d="M72.3681 92.5202C72.9138 93.0936 73.592 93.5218 74.3422 93.7664C75.0923 94.011 75.891 94.0644 76.6667 93.9218C77.4423 93.7793 78.1708 93.4452 78.7869 92.9494C79.403 92.4537 79.8874 91.8118 80.1969 91.0812C80.5063 90.3506 80.6311 89.5542 80.5601 88.7631C80.4891 87.972 80.2245 87.211 79.79 86.5482C79.3554 85.8853 78.7646 85.3414 78.0702 84.9651C77.3758 84.5887 76.5997 84.3917 75.8112 84.3916H55.7822"
                        stroke="url(#paint9_linear_477_337)"
                        strokeWidth={2.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeDasharray="24 15"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_477_337"
                            x1={8.19027}
                            y1={-7.50395}
                            x2={118.62}
                            y2={94.6604}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_477_337"
                            x1={19.7211}
                            y1={65.0672}
                            x2={23.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_477_337"
                            x1={18.7719}
                            y1={63.4008}
                            x2={24.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_477_337"
                            x1={43.7211}
                            y1={62.0672}
                            x2={47.4336}
                            y2={68.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_477_337"
                            x1={42.7719}
                            y1={60.4008}
                            x2={48.3828}
                            y2={70.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_477_337"
                            x1={34.7211}
                            y1={79.0672}
                            x2={38.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_477_337"
                            x1={33.7719}
                            y1={77.4008}
                            x2={39.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_477_337"
                            x1={64.3563}
                            y1={66.5359}
                            x2={76.5823}
                            y2={85.4897}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_477_337"
                            x1={60.2095}
                            y1={57.5967}
                            x2={70.5377}
                            y2={75.354}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_477_337"
                            x1={63.6126}
                            y1={78.1366}
                            x2={74.6159}
                            y2={97.0618}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "248": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 80"
                    fill="none"


                >
                    <Path
                        d="M18 76.6562H81.2812"
                        stroke="url(#paint0_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M18 68H81.2812"
                        stroke="url(#paint1_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_304)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint2_linear_463_304)"
                        />
                    </G>
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_304"
                           
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_304"
                            
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_304"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "260": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 80"
                    fill="none"


                >
                    <Path
                        d="M18 76.6562H81.2812"
                        stroke="url(#paint0_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M18 68H81.2812"
                        stroke="url(#paint1_linear_463_304)"
                        strokeWidth={5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <G filter="url(#filter0_d_463_304)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint2_linear_463_304)"
                        />
                    </G>
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_304"
                           
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_304"
                            
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#D4D7DD" />
                            <Stop offset={0.45} stopColor="#D4D7DD" />
                            <Stop offset={1} stopColor="#BEC1C6" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_304"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "263": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "266": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "281": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "284": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 87"
                    fill="none"


                >
                    <G filter="url(#filter0_d_463_305)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_463_305)"
                        />
                    </G>
                    <Path
                        d="M59 76L58 79"
                        stroke="url(#paint1_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 82L31 85"
                        stroke="url(#paint2_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M43 67L42 70"
                        stroke="url(#paint3_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 66L72 69"
                        stroke="url(#paint4_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M19 64L18 67"
                        stroke="url(#paint5_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 69L27 72"
                        stroke="url(#paint6_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M59 64L58 67"
                        stroke="url(#paint7_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51 79L50 82"
                        stroke="url(#paint8_linear_463_305)"
                        strokeWidth={3}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_463_305"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_463_305"
                            x1={56.6154}
                            y1={75.9514}
                            x2={57.664}
                            y2={79.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_463_305"
                            x1={29.6154}
                            y1={81.9514}
                            x2={30.664}
                            y2={85.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_463_305"
                            x1={40.6154}
                            y1={66.9514}
                            x2={41.664}
                            y2={70.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_463_305"
                            x1={70.6154}
                            y1={65.9514}
                            x2={71.664}
                            y2={69.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_463_305"
                            x1={16.6154}
                            y1={63.9514}
                            x2={17.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_463_305"
                            x1={25.6154}
                            y1={68.9514}
                            x2={26.664}
                            y2={72.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_463_305"
                            x1={56.6154}
                            y1={63.9514}
                            x2={57.664}
                            y2={67.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_463_305"
                            x1={48.6154}
                            y1={78.9514}
                            x2={49.664}
                            y2={82.7915}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "293": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 99 100"
                    fill="none"
                >
                    <Path
                        d="M52.8845 33.2406C49.4759 33.2652 46.0959 32.6179 42.9376 31.3356C39.7793 30.0533 36.9046 28.1612 34.4778 25.7674C32.0509 23.3736 30.1195 20.525 28.7939 17.3843C27.4683 14.2437 26.7745 10.8726 26.752 7.4637C26.7584 5.28126 27.0463 3.10876 27.6086 1C22.9581 1.57813 18.5529 3.41263 14.8665 6.30638C11.1801 9.20014 8.3518 13.0438 6.68545 17.4243C5.0191 21.8048 4.57771 26.5566 5.40871 31.1691C6.23971 35.7817 8.31169 40.0806 11.402 43.604C14.4923 47.1273 18.4842 49.742 22.9487 51.167C27.4131 52.5919 32.1814 52.7734 36.7413 51.6918C41.3011 50.6103 45.4801 48.3065 48.8292 45.0282C52.1783 41.7499 54.5709 37.6209 55.75 33.0849C54.8 33.1783 53.85 33.2406 52.8845 33.2406Z"
                        fill="url(#paint0_linear_472_311)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_311)">
                        <Path
                            d="M80.2857 36.9669H79.613C80.8492 31.8701 80.2282 26.4997 77.8613 21.8196C75.4945 17.1395 71.5369 13.4562 66.6989 11.431C61.861 9.40579 56.4596 9.17127 51.4643 10.7695C46.469 12.3678 42.207 15.6942 39.4434 20.1515C37.2125 18.8289 34.6716 18.1193 32.0782 18.0948C29.4847 18.0703 26.9309 18.7317 24.6754 20.012C22.4199 21.2922 20.5429 23.1459 19.2345 25.3851C17.9261 27.6244 17.2329 30.1696 17.225 32.7631C17.2315 33.5661 17.3018 34.3673 17.4353 35.1592C13.5981 35.9109 10.1773 38.0615 7.83683 41.1936C5.49641 44.3256 4.40347 48.2157 4.77022 52.1083C5.13697 56.0009 6.93724 59.6183 9.82148 62.2582C12.7057 64.8981 16.4681 66.372 20.3781 66.3938C20.7281 66.4147 21.0791 66.4147 21.4291 66.3938H80.2857C84.1881 66.3938 87.9307 64.8436 90.6902 62.0843C93.4496 59.325 94.9998 55.5826 94.9998 51.6803C94.9998 47.7781 93.4496 44.0357 90.6902 41.2764C87.9307 38.517 84.1881 36.9669 80.2857 36.9669Z"
                            fill="url(#paint1_linear_472_311)"
                        />
                    </G>
                    <Path
                        d="M33 82L32 92"
                        stroke="url(#paint2_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 72L20 82"
                        stroke="url(#paint3_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 72L50 82.4203"
                        stroke="url(#paint4_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 87L60 97.4203"
                        stroke="url(#paint5_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 75L76 85.4203"
                        stroke="url(#paint6_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_311"
                            x1={14.3555}
                            y1={6.06193}
                            x2={40.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_311"
                            x1={8.89095}
                            y1={0.21675}
                            x2={119.321}
                            y2={102.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_311"
                            x1={30.6154}
                            y1={81.8381}
                            x2={37.4624}
                            y2={89.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_311"
                            x1={18.6154}
                            y1={71.8381}
                            x2={25.4624}
                            y2={79.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_311"
                            x1={47.7219}
                            y1={71.8312}
                            x2={53.9235}
                            y2={82.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_311"
                            x1={57.7219}
                            y1={86.8312}
                            x2={63.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_311"
                            x1={73.7219}
                            y1={74.8312}
                            x2={79.9235}
                            y2={85.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "296": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 99 100"
                    fill="none"
                >
                    <Path
                        d="M52.8845 33.2406C49.4759 33.2652 46.0959 32.6179 42.9376 31.3356C39.7793 30.0533 36.9046 28.1612 34.4778 25.7674C32.0509 23.3736 30.1195 20.525 28.7939 17.3843C27.4683 14.2437 26.7745 10.8726 26.752 7.4637C26.7584 5.28126 27.0463 3.10876 27.6086 1C22.9581 1.57813 18.5529 3.41263 14.8665 6.30638C11.1801 9.20014 8.3518 13.0438 6.68545 17.4243C5.0191 21.8048 4.57771 26.5566 5.40871 31.1691C6.23971 35.7817 8.31169 40.0806 11.402 43.604C14.4923 47.1273 18.4842 49.742 22.9487 51.167C27.4131 52.5919 32.1814 52.7734 36.7413 51.6918C41.3011 50.6103 45.4801 48.3065 48.8292 45.0282C52.1783 41.7499 54.5709 37.6209 55.75 33.0849C54.8 33.1783 53.85 33.2406 52.8845 33.2406Z"
                        fill="url(#paint0_linear_472_311)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_311)">
                        <Path
                            d="M80.2857 36.9669H79.613C80.8492 31.8701 80.2282 26.4997 77.8613 21.8196C75.4945 17.1395 71.5369 13.4562 66.6989 11.431C61.861 9.40579 56.4596 9.17127 51.4643 10.7695C46.469 12.3678 42.207 15.6942 39.4434 20.1515C37.2125 18.8289 34.6716 18.1193 32.0782 18.0948C29.4847 18.0703 26.9309 18.7317 24.6754 20.012C22.4199 21.2922 20.5429 23.1459 19.2345 25.3851C17.9261 27.6244 17.2329 30.1696 17.225 32.7631C17.2315 33.5661 17.3018 34.3673 17.4353 35.1592C13.5981 35.9109 10.1773 38.0615 7.83683 41.1936C5.49641 44.3256 4.40347 48.2157 4.77022 52.1083C5.13697 56.0009 6.93724 59.6183 9.82148 62.2582C12.7057 64.8981 16.4681 66.372 20.3781 66.3938C20.7281 66.4147 21.0791 66.4147 21.4291 66.3938H80.2857C84.1881 66.3938 87.9307 64.8436 90.6902 62.0843C93.4496 59.325 94.9998 55.5826 94.9998 51.6803C94.9998 47.7781 93.4496 44.0357 90.6902 41.2764C87.9307 38.517 84.1881 36.9669 80.2857 36.9669Z"
                            fill="url(#paint1_linear_472_311)"
                        />
                    </G>
                    <Path
                        d="M33 82L32 92"
                        stroke="url(#paint2_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 72L20 82"
                        stroke="url(#paint3_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 72L50 82.4203"
                        stroke="url(#paint4_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 87L60 97.4203"
                        stroke="url(#paint5_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 75L76 85.4203"
                        stroke="url(#paint6_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_311"
                            x1={14.3555}
                            y1={6.06193}
                            x2={40.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_311"
                            x1={8.89095}
                            y1={0.21675}
                            x2={119.321}
                            y2={102.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_311"
                            x1={30.6154}
                            y1={81.8381}
                            x2={37.4624}
                            y2={89.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_311"
                            x1={18.6154}
                            y1={71.8381}
                            x2={25.4624}
                            y2={79.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_311"
                            x1={47.7219}
                            y1={71.8312}
                            x2={53.9235}
                            y2={82.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_311"
                            x1={57.7219}
                            y1={86.8312}
                            x2={63.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_311"
                            x1={73.7219}
                            y1={74.8312}
                            x2={79.9235}
                            y2={85.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "299": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "302": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "305": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "308": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "311": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 100 104"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_475_316)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_475_316)">
                        <Path
                            d="M81.2857 42.9669H80.613C81.8492 37.8701 81.2282 32.4997 78.8613 27.8196C76.4945 23.1395 72.5369 19.4562 67.6989 17.431C62.861 15.4058 57.4596 15.1713 52.4643 16.7695C47.469 18.3678 43.207 21.6942 40.4434 26.1515C38.2125 24.8289 35.6716 24.1193 33.0782 24.0948C30.4847 24.0703 27.9309 24.7317 25.6754 26.012C23.4199 27.2922 21.5429 29.1459 20.2345 31.3851C18.9261 33.6244 18.2329 36.1696 18.225 38.7631C18.2315 39.5661 18.3018 40.3673 18.4353 41.1592C14.5981 41.9109 11.1773 44.0615 8.83683 47.1936C6.49641 50.3256 5.40347 54.2157 5.77022 58.1083C6.13697 62.0009 7.93724 65.6183 10.8215 68.2582C13.7057 70.8981 17.4681 72.372 21.3781 72.3938C21.7281 72.4147 22.0791 72.4147 22.4291 72.3938H81.2857C85.1881 72.3938 88.9307 70.8436 91.6902 68.0843C94.4496 65.325 95.9998 61.5826 95.9998 57.6803C95.9998 53.7781 94.4496 50.0357 91.6902 47.2764C88.9307 44.517 85.1881 42.9669 81.2857 42.9669Z"
                            fill="url(#paint1_linear_475_316)"
                        />
                    </G>
                    <Ellipse
                        cx={42.5}
                        cy={87.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_475_316)"
                    />
                    <Ellipse
                        cx={63.5}
                        cy={99.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_475_316)"
                    />
                    <Ellipse
                        cx={32.5}
                        cy={99.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_475_316)"
                    />
                    <Ellipse
                        cx={21.5}
                        cy={80.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_475_316)"
                    />
                    <Ellipse
                        cx={74.5}
                        cy={83.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint6_linear_475_316)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_475_316"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_475_316"
                            x1={9.89095}
                            y1={6.21675}
                            x2={120.321}
                            y2={108.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_475_316"
                            x1={42.5}
                            y1={83}
                            x2={42.5}
                            y2={92}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_475_316"
                            x1={63.5}
                            y1={95}
                            x2={63.5}
                            y2={104}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_475_316"
                            x1={32.5}
                            y1={95}
                            x2={32.5}
                            y2={104}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_475_316"
                            x1={21.5}
                            y1={76}
                            x2={21.5}
                            y2={85}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_475_316"
                            x1={74.5}
                            y1={79}
                            x2={74.5}
                            y2={88}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "314": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_307)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_307)"
                        />
                    </G>
                    <Ellipse
                        cx={41.5}
                        cy={74.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint1_linear_464_307)"
                    />
                    <Ellipse
                        cx={62.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_464_307)"
                    />
                    <Ellipse
                        cx={31.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_307)"
                    />
                    <Ellipse
                        cx={20.5}
                        cy={67.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_307)"
                    />
                    <Ellipse
                        cx={73.5}
                        cy={70.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_307)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_307"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_307"
                            x1={41.5}
                            y1={70}
                            x2={41.5}
                            y2={79}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_307"
                            x1={62.5}
                            y1={82}
                            x2={62.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_307"
                            x1={31.5}
                            y1={82}
                            x2={31.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_307"
                            x1={20.5}
                            y1={63}
                            x2={20.5}
                            y2={72}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_307"
                            x1={73.5}
                            y1={66}
                            x2={73.5}
                            y2={75}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "317": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 100 105"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_475_317)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_475_317)">
                        <Path
                            d="M81.2857 41.9669H80.613C81.8492 36.8701 81.2282 31.4997 78.8613 26.8196C76.4945 22.1395 72.5369 18.4562 67.6989 16.431C62.861 14.4058 57.4596 14.1713 52.4643 15.7695C47.469 17.3678 43.207 20.6942 40.4434 25.1515C38.2125 23.8289 35.6716 23.1193 33.0782 23.0948C30.4847 23.0703 27.9309 23.7317 25.6754 25.012C23.4199 26.2922 21.5429 28.1459 20.2345 30.3851C18.9261 32.6244 18.2329 35.1696 18.225 37.7631C18.2315 38.5661 18.3018 39.3673 18.4353 40.1592C14.5981 40.9109 11.1773 43.0615 8.83683 46.1936C6.49641 49.3256 5.40347 53.2157 5.77022 57.1083C6.13697 61.0009 7.93724 64.6183 10.8215 67.2582C13.7057 69.8981 17.4681 71.372 21.3781 71.3938C21.7281 71.4147 22.0791 71.4147 22.4291 71.3938H81.2857C85.1881 71.3938 88.9307 69.8436 91.6902 67.0843C94.4496 64.325 95.9998 60.5826 95.9998 56.6803C95.9998 52.7781 94.4496 49.0357 91.6902 46.2764C88.9307 43.517 85.1881 41.9669 81.2857 41.9669Z"
                            fill="url(#paint1_linear_475_317)"
                        />
                    </G>
                    <Path
                        d="M19.5774 85.9102C21.0336 85.9102 22.2141 84.7297 22.2141 83.2734C22.2141 81.8172 21.0336 80.6367 19.5774 80.6367C18.1212 80.6367 16.9407 81.8172 16.9407 83.2734C16.9407 84.7297 18.1212 85.9102 19.5774 85.9102Z"
                        stroke="url(#paint2_linear_475_317)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M24.1547 85.9102L21.8555 84.5812M17.2992 81.9656L15 80.6367M19.5773 78V80.6367M19.5773 88.5469V85.9102M17.2992 84.5812L15 85.9102M24.1547 80.6367L21.8555 81.9656"
                        stroke="url(#paint3_linear_475_317)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 100.91C66.0336 100.91 67.2141 99.7297 67.2141 98.2734C67.2141 96.8172 66.0336 95.6367 64.5774 95.6367C63.1212 95.6367 61.9407 96.8172 61.9407 98.2734C61.9407 99.7297 63.1212 100.91 64.5774 100.91Z"
                        stroke="url(#paint4_linear_475_317)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 100.91L66.8555 99.5812M62.2992 96.9656L60 95.6367M64.5773 93V95.6367M64.5773 103.547V100.91M62.2992 99.5812L60 100.91M69.1547 95.6367L66.8555 96.9656"
                        stroke="url(#paint5_linear_475_317)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 87.9102C52.0336 87.9102 53.2141 86.7297 53.2141 85.2734C53.2141 83.8172 52.0336 82.6367 50.5774 82.6367C49.1212 82.6367 47.9407 83.8172 47.9407 85.2734C47.9407 86.7297 49.1212 87.9102 50.5774 87.9102Z"
                        stroke="url(#paint6_linear_475_317)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 87.9102L52.8555 86.5812M48.2992 83.9656L46 82.6367M50.5773 80V82.6367M50.5773 90.5469V87.9102M48.2992 86.5812L46 87.9102M55.1547 82.6367L52.8555 83.9656"
                        stroke="url(#paint7_linear_475_317)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint8_linear_475_317)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 78L72 88"
                        stroke="url(#paint9_linear_475_317)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M40 93L39 103"
                        stroke="url(#paint10_linear_475_317)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_475_317"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_475_317"
                            x1={9.89095}
                            y1={5.21675}
                            x2={120.321}
                            y2={107.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_475_317"
                            x1={17.7211}
                            y1={80.0672}
                            x2={21.4336}
                            y2={86.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_475_317"
                            x1={16.7719}
                            y1={78.4008}
                            x2={22.3828}
                            y2={88.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_475_317"
                            x1={62.7211}
                            y1={95.0672}
                            x2={66.4336}
                            y2={101.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_475_317"
                            x1={61.7719}
                            y1={93.4008}
                            x2={67.3828}
                            y2={103.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_475_317"
                            x1={48.7211}
                            y1={82.0672}
                            x2={52.4336}
                            y2={88.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_475_317"
                            x1={47.7719}
                            y1={80.4008}
                            x2={53.3828}
                            y2={90.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_475_317"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_475_317"
                            x1={70.6154}
                            y1={77.8381}
                            x2={77.4624}
                            y2={85.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_475_317"
                            x1={37.6154}
                            y1={92.8381}
                            x2={44.4624}
                            y2={100.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "320": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_309)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_309)"
                        />
                    </G>
                    <Path
                        d="M18.5774 73.9102C20.0336 73.9102 21.2141 72.7297 21.2141 71.2734C21.2141 69.8172 20.0336 68.6367 18.5774 68.6367C17.1212 68.6367 15.9407 69.8172 15.9407 71.2734C15.9407 72.7297 17.1212 73.9102 18.5774 73.9102Z"
                        stroke="url(#paint1_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M23.1547 73.9102L20.8555 72.5812M16.2992 69.9656L14 68.6367M18.5773 66V68.6367M18.5773 76.5469V73.9102M16.2992 72.5812L14 73.9102M23.1547 68.6367L20.8555 69.9656"
                        stroke="url(#paint2_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M63.5774 88.9102C65.0336 88.9102 66.2141 87.7297 66.2141 86.2734C66.2141 84.8172 65.0336 83.6367 63.5774 83.6367C62.1212 83.6367 60.9407 84.8172 60.9407 86.2734C60.9407 87.7297 62.1212 88.9102 63.5774 88.9102Z"
                        stroke="url(#paint3_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M68.1547 88.9102L65.8555 87.5812M61.2992 84.9656L59 83.6367M63.5773 81V83.6367M63.5773 91.5469V88.9102M61.2992 87.5812L59 88.9102M68.1547 83.6367L65.8555 84.9656"
                        stroke="url(#paint4_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M49.5774 75.9102C51.0336 75.9102 52.2141 74.7297 52.2141 73.2734C52.2141 71.8172 51.0336 70.6367 49.5774 70.6367C48.1212 70.6367 46.9407 71.8172 46.9407 73.2734C46.9407 74.7297 48.1212 75.9102 49.5774 75.9102Z"
                        stroke="url(#paint5_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M54.1547 75.9102L51.8555 74.5812M47.2992 71.9656L45 70.6367M49.5773 68V70.6367M49.5773 78.5469V75.9102M47.2992 74.5812L45 75.9102M54.1547 70.6367L51.8555 71.9656"
                        stroke="url(#paint6_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 63L31 73"
                        stroke="url(#paint7_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M72 66L71 76"
                        stroke="url(#paint8_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M39 81L38 91"
                        stroke="url(#paint9_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_309"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_309"
                            x1={16.7211}
                            y1={68.0672}
                            x2={20.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_309"
                            x1={15.7719}
                            y1={66.4008}
                            x2={21.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_309"
                            x1={61.7211}
                            y1={83.0672}
                            x2={65.4336}
                            y2={89.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_309"
                            x1={60.7719}
                            y1={81.4008}
                            x2={66.3828}
                            y2={91.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_309"
                            x1={47.7211}
                            y1={70.0672}
                            x2={51.4336}
                            y2={76.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_309"
                            x1={46.7719}
                            y1={68.4008}
                            x2={52.3828}
                            y2={78.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_309"
                            x1={29.6154}
                            y1={62.8381}
                            x2={36.4624}
                            y2={70.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_309"
                            x1={69.6154}
                            y1={65.8381}
                            x2={76.4624}
                            y2={73.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_309"
                            x1={36.6154}
                            y1={80.8381}
                            x2={43.4624}
                            y2={88.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "323": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 101 102"
                    fill="none"

                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_472_312)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_312)">
                        <Path
                            d="M82.2857 40.9669H81.613C82.8492 35.8701 82.2282 30.4997 79.8613 25.8196C77.4945 21.1395 73.5369 17.4562 68.6989 15.431C63.861 13.4058 58.4596 13.1713 53.4643 14.7695C48.469 16.3678 44.207 19.6942 41.4434 24.1515C39.2125 22.8289 36.6716 22.1193 34.0782 22.0948C31.4847 22.0703 28.9309 22.7317 26.6754 24.012C24.4199 25.2922 22.5429 27.1459 21.2345 29.3851C19.9261 31.6244 19.2329 34.1696 19.225 36.7631C19.2315 37.5661 19.3018 38.3673 19.4353 39.1592C15.5981 39.9109 12.1773 42.0615 9.83683 45.1936C7.49641 48.3256 6.40347 52.2157 6.77022 56.1083C7.13697 60.0009 8.93724 63.6183 11.8215 66.2582C14.7057 68.8981 18.4681 70.372 22.3781 70.3938C22.7281 70.4147 23.0791 70.4147 23.4291 70.3938H82.2857C86.1881 70.3938 89.9307 68.8436 92.6902 66.0843C95.4496 63.325 96.9998 59.5826 96.9998 55.6803C96.9998 51.7781 95.4496 48.0357 92.6902 45.2764C89.9307 42.517 86.1881 40.9669 82.2857 40.9669Z"
                            fill="url(#paint1_linear_472_312)"
                        />
                    </G>
                    <Path
                        d="M37.5774 92.9102C39.0336 92.9102 40.2141 91.7297 40.2141 90.2734C40.2141 88.8172 39.0336 87.6367 37.5774 87.6367C36.1212 87.6367 34.9407 88.8172 34.9407 90.2734C34.9407 91.7297 36.1212 92.9102 37.5774 92.9102Z"
                        stroke="url(#paint2_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 92.9102L39.8555 91.5812M35.2992 88.9656L33 87.6367M37.5773 85V87.6367M37.5773 95.5469V92.9102M35.2992 91.5812L33 92.9102M42.1547 87.6367L39.8555 88.9656"
                        stroke="url(#paint3_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73.5774 80.9102C75.0336 80.9102 76.2141 79.7297 76.2141 78.2734C76.2141 76.8172 75.0336 75.6367 73.5774 75.6367C72.1212 75.6367 70.9407 76.8172 70.9407 78.2734C70.9407 79.7297 72.1212 80.9102 73.5774 80.9102Z"
                        stroke="url(#paint4_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M78.1547 80.9102L75.8555 79.5812M71.2992 76.9656L69 75.6367M73.5773 73V75.6367M73.5773 83.5469V80.9102M71.2992 79.5812L69 80.9102M78.1547 75.6367L75.8555 76.9656"
                        stroke="url(#paint5_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M24.5774 81.9102C26.0336 81.9102 27.2141 80.7297 27.2141 79.2734C27.2141 77.8172 26.0336 76.6367 24.5774 76.6367C23.1212 76.6367 21.9407 77.8172 21.9407 79.2734C21.9407 80.7297 23.1212 81.9102 24.5774 81.9102Z"
                        stroke="url(#paint6_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M29.1547 81.9102L26.8555 80.5812M22.2992 77.9656L20 76.6367M24.5773 74V76.6367M24.5773 84.5469V81.9102M22.2992 80.5812L20 81.9102M29.1547 76.6367L26.8555 77.9656"
                        stroke="url(#paint7_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 97.9102C66.0336 97.9102 67.2141 96.7297 67.2141 95.2734C67.2141 93.8172 66.0336 92.6367 64.5774 92.6367C63.1212 92.6367 61.9407 93.8172 61.9407 95.2734C61.9407 96.7297 63.1212 97.9102 64.5774 97.9102Z"
                        stroke="url(#paint8_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 97.9102L66.8555 96.5812M62.2992 93.9656L60 92.6367M64.5773 90V92.6367M64.5773 100.547V97.9102M62.2992 96.5812L60 97.9102M69.1547 92.6367L66.8555 93.9656"
                        stroke="url(#paint9_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M52.5774 84.9102C54.0336 84.9102 55.2141 83.7297 55.2141 82.2734C55.2141 80.8172 54.0336 79.6367 52.5774 79.6367C51.1212 79.6367 49.9407 80.8172 49.9407 82.2734C49.9407 83.7297 51.1212 84.9102 52.5774 84.9102Z"
                        stroke="url(#paint10_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M57.1547 84.9102L54.8555 83.5812M50.2992 80.9656L48 79.6367M52.5773 77V79.6367M52.5773 87.5469V84.9102M50.2992 83.5812L48 84.9102M57.1547 79.6367L54.8555 80.9656"
                        stroke="url(#paint11_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_312"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_312"
                            x1={10.891}
                            y1={4.21675}
                            x2={121.321}
                            y2={106.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_312"
                            x1={35.7211}
                            y1={87.0672}
                            x2={39.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_312"
                            x1={34.7719}
                            y1={85.4008}
                            x2={40.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_312"
                            x1={71.7211}
                            y1={75.0672}
                            x2={75.4336}
                            y2={81.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_312"
                            x1={70.7719}
                            y1={73.4008}
                            x2={76.3828}
                            y2={83.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_312"
                            x1={22.7211}
                            y1={76.0672}
                            x2={26.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_472_312"
                            x1={21.7719}
                            y1={74.4008}
                            x2={27.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_472_312"
                            x1={62.7211}
                            y1={92.0672}
                            x2={66.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_472_312"
                            x1={61.7719}
                            y1={90.4008}
                            x2={67.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_472_312"
                            x1={50.7211}
                            y1={79.0672}
                            x2={54.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_472_312"
                            x1={49.7719}
                            y1={77.4008}
                            x2={55.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "326": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "329": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "332": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "335": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "338": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "350": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_307)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_307)"
                        />
                    </G>
                    <Ellipse
                        cx={41.5}
                        cy={74.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint1_linear_464_307)"
                    />
                    <Ellipse
                        cx={62.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_464_307)"
                    />
                    <Ellipse
                        cx={31.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_307)"
                    />
                    <Ellipse
                        cx={20.5}
                        cy={67.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_307)"
                    />
                    <Ellipse
                        cx={73.5}
                        cy={70.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_307)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_307"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_307"
                            x1={41.5}
                            y1={70}
                            x2={41.5}
                            y2={79}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_307"
                            x1={62.5}
                            y1={82}
                            x2={62.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_307"
                            x1={31.5}
                            y1={82}
                            x2={31.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_307"
                            x1={20.5}
                            y1={63}
                            x2={20.5}
                            y2={72}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_307"
                            x1={73.5}
                            y1={66}
                            x2={73.5}
                            y2={75}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "353": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 99 100"
                    fill="none"
                >
                    <Path
                        d="M52.8845 33.2406C49.4759 33.2652 46.0959 32.6179 42.9376 31.3356C39.7793 30.0533 36.9046 28.1612 34.4778 25.7674C32.0509 23.3736 30.1195 20.525 28.7939 17.3843C27.4683 14.2437 26.7745 10.8726 26.752 7.4637C26.7584 5.28126 27.0463 3.10876 27.6086 1C22.9581 1.57813 18.5529 3.41263 14.8665 6.30638C11.1801 9.20014 8.3518 13.0438 6.68545 17.4243C5.0191 21.8048 4.57771 26.5566 5.40871 31.1691C6.23971 35.7817 8.31169 40.0806 11.402 43.604C14.4923 47.1273 18.4842 49.742 22.9487 51.167C27.4131 52.5919 32.1814 52.7734 36.7413 51.6918C41.3011 50.6103 45.4801 48.3065 48.8292 45.0282C52.1783 41.7499 54.5709 37.6209 55.75 33.0849C54.8 33.1783 53.85 33.2406 52.8845 33.2406Z"
                        fill="url(#paint0_linear_472_311)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_311)">
                        <Path
                            d="M80.2857 36.9669H79.613C80.8492 31.8701 80.2282 26.4997 77.8613 21.8196C75.4945 17.1395 71.5369 13.4562 66.6989 11.431C61.861 9.40579 56.4596 9.17127 51.4643 10.7695C46.469 12.3678 42.207 15.6942 39.4434 20.1515C37.2125 18.8289 34.6716 18.1193 32.0782 18.0948C29.4847 18.0703 26.9309 18.7317 24.6754 20.012C22.4199 21.2922 20.5429 23.1459 19.2345 25.3851C17.9261 27.6244 17.2329 30.1696 17.225 32.7631C17.2315 33.5661 17.3018 34.3673 17.4353 35.1592C13.5981 35.9109 10.1773 38.0615 7.83683 41.1936C5.49641 44.3256 4.40347 48.2157 4.77022 52.1083C5.13697 56.0009 6.93724 59.6183 9.82148 62.2582C12.7057 64.8981 16.4681 66.372 20.3781 66.3938C20.7281 66.4147 21.0791 66.4147 21.4291 66.3938H80.2857C84.1881 66.3938 87.9307 64.8436 90.6902 62.0843C93.4496 59.325 94.9998 55.5826 94.9998 51.6803C94.9998 47.7781 93.4496 44.0357 90.6902 41.2764C87.9307 38.517 84.1881 36.9669 80.2857 36.9669Z"
                            fill="url(#paint1_linear_472_311)"
                        />
                    </G>
                    <Path
                        d="M33 82L32 92"
                        stroke="url(#paint2_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 72L20 82"
                        stroke="url(#paint3_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 72L50 82.4203"
                        stroke="url(#paint4_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 87L60 97.4203"
                        stroke="url(#paint5_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 75L76 85.4203"
                        stroke="url(#paint6_linear_472_311)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_311"
                            x1={14.3555}
                            y1={6.06193}
                            x2={40.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_311"
                            x1={8.89095}
                            y1={0.21675}
                            x2={119.321}
                            y2={102.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_311"
                            x1={30.6154}
                            y1={81.8381}
                            x2={37.4624}
                            y2={89.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_311"
                            x1={18.6154}
                            y1={71.8381}
                            x2={25.4624}
                            y2={79.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_311"
                            x1={47.7219}
                            y1={71.8312}
                            x2={53.9235}
                            y2={82.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_311"
                            x1={57.7219}
                            y1={86.8312}
                            x2={63.9235}
                            y2={97.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_311"
                            x1={73.7219}
                            y1={74.8312}
                            x2={79.9235}
                            y2={85.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "356": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "359": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_461_577)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_461_577)"
                        />
                    </G>
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint1_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M21 65L20 75"
                        stroke="url(#paint2_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M51.6453 65L50 75.4203"
                        stroke="url(#paint3_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M61.6453 80L60 90.4203"
                        stroke="url(#paint4_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M77.6453 68L76 78.4203"
                        stroke="url(#paint5_linear_461_577)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_461_577"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_461_577"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_461_577"
                            x1={18.6154}
                            y1={64.8381}
                            x2={25.4624}
                            y2={72.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_461_577"
                            x1={47.7219}
                            y1={64.8312}
                            x2={53.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_461_577"
                            x1={57.7219}
                            y1={79.8312}
                            x2={63.9235}
                            y2={90.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_461_577"
                            x1={73.7219}
                            y1={67.8312}
                            x2={79.9235}
                            y2={78.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "362": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 100 105"
                    fill="none"

                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_475_317)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_475_317)">
                        <Path
                            d="M81.2857 41.9669H80.613C81.8492 36.8701 81.2282 31.4997 78.8613 26.8196C76.4945 22.1395 72.5369 18.4562 67.6989 16.431C62.861 14.4058 57.4596 14.1713 52.4643 15.7695C47.469 17.3678 43.207 20.6942 40.4434 25.1515C38.2125 23.8289 35.6716 23.1193 33.0782 23.0948C30.4847 23.0703 27.9309 23.7317 25.6754 25.012C23.4199 26.2922 21.5429 28.1459 20.2345 30.3851C18.9261 32.6244 18.2329 35.1696 18.225 37.7631C18.2315 38.5661 18.3018 39.3673 18.4353 40.1592C14.5981 40.9109 11.1773 43.0615 8.83683 46.1936C6.49641 49.3256 5.40347 53.2157 5.77022 57.1083C6.13697 61.0009 7.93724 64.6183 10.8215 67.2582C13.7057 69.8981 17.4681 71.372 21.3781 71.3938C21.7281 71.4147 22.0791 71.4147 22.4291 71.3938H81.2857C85.1881 71.3938 88.9307 69.8436 91.6902 67.0843C94.4496 64.325 95.9998 60.5826 95.9998 56.6803C95.9998 52.7781 94.4496 49.0357 91.6902 46.2764C88.9307 43.517 85.1881 41.9669 81.2857 41.9669Z"
                            fill="url(#paint1_linear_475_317)"
                        />
                    </G>
                    <Path
                        d="M19.5774 85.9102C21.0336 85.9102 22.2141 84.7297 22.2141 83.2734C22.2141 81.8172 21.0336 80.6367 19.5774 80.6367C18.1212 80.6367 16.9407 81.8172 16.9407 83.2734C16.9407 84.7297 18.1212 85.9102 19.5774 85.9102Z"
                        stroke="url(#paint2_linear_475_317)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M24.1547 85.9102L21.8555 84.5812M17.2992 81.9656L15 80.6367M19.5773 78V80.6367M19.5773 88.5469V85.9102M17.2992 84.5812L15 85.9102M24.1547 80.6367L21.8555 81.9656"
                        stroke="url(#paint3_linear_475_317)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 100.91C66.0336 100.91 67.2141 99.7297 67.2141 98.2734C67.2141 96.8172 66.0336 95.6367 64.5774 95.6367C63.1212 95.6367 61.9407 96.8172 61.9407 98.2734C61.9407 99.7297 63.1212 100.91 64.5774 100.91Z"
                        stroke="url(#paint4_linear_475_317)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 100.91L66.8555 99.5812M62.2992 96.9656L60 95.6367M64.5773 93V95.6367M64.5773 103.547V100.91M62.2992 99.5812L60 100.91M69.1547 95.6367L66.8555 96.9656"
                        stroke="url(#paint5_linear_475_317)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 87.9102C52.0336 87.9102 53.2141 86.7297 53.2141 85.2734C53.2141 83.8172 52.0336 82.6367 50.5774 82.6367C49.1212 82.6367 47.9407 83.8172 47.9407 85.2734C47.9407 86.7297 49.1212 87.9102 50.5774 87.9102Z"
                        stroke="url(#paint6_linear_475_317)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 87.9102L52.8555 86.5812M48.2992 83.9656L46 82.6367M50.5773 80V82.6367M50.5773 90.5469V87.9102M48.2992 86.5812L46 87.9102M55.1547 82.6367L52.8555 83.9656"
                        stroke="url(#paint7_linear_475_317)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M33 75L32 85"
                        stroke="url(#paint8_linear_475_317)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73 78L72 88"
                        stroke="url(#paint9_linear_475_317)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M40 93L39 103"
                        stroke="url(#paint10_linear_475_317)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_475_317"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_475_317"
                            x1={9.89095}
                            y1={5.21675}
                            x2={120.321}
                            y2={107.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_475_317"
                            x1={17.7211}
                            y1={80.0672}
                            x2={21.4336}
                            y2={86.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_475_317"
                            x1={16.7719}
                            y1={78.4008}
                            x2={22.3828}
                            y2={88.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_475_317"
                            x1={62.7211}
                            y1={95.0672}
                            x2={66.4336}
                            y2={101.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_475_317"
                            x1={61.7719}
                            y1={93.4008}
                            x2={67.3828}
                            y2={103.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_475_317"
                            x1={48.7211}
                            y1={82.0672}
                            x2={52.4336}
                            y2={88.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_475_317"
                            x1={47.7719}
                            y1={80.4008}
                            x2={53.3828}
                            y2={90.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_475_317"
                            x1={30.6154}
                            y1={74.8381}
                            x2={37.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_475_317"
                            x1={70.6154}
                            y1={77.8381}
                            x2={77.4624}
                            y2={85.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_475_317"
                            x1={37.6154}
                            y1={92.8381}
                            x2={44.4624}
                            y2={100.36}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "365": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 93"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_309)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_309)"
                        />
                    </G>
                    <Path
                        d="M18.5774 73.9102C20.0336 73.9102 21.2141 72.7297 21.2141 71.2734C21.2141 69.8172 20.0336 68.6367 18.5774 68.6367C17.1212 68.6367 15.9407 69.8172 15.9407 71.2734C15.9407 72.7297 17.1212 73.9102 18.5774 73.9102Z"
                        stroke="url(#paint1_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M23.1547 73.9102L20.8555 72.5812M16.2992 69.9656L14 68.6367M18.5773 66V68.6367M18.5773 76.5469V73.9102M16.2992 72.5812L14 73.9102M23.1547 68.6367L20.8555 69.9656"
                        stroke="url(#paint2_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M63.5774 88.9102C65.0336 88.9102 66.2141 87.7297 66.2141 86.2734C66.2141 84.8172 65.0336 83.6367 63.5774 83.6367C62.1212 83.6367 60.9407 84.8172 60.9407 86.2734C60.9407 87.7297 62.1212 88.9102 63.5774 88.9102Z"
                        stroke="url(#paint3_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M68.1547 88.9102L65.8555 87.5812M61.2992 84.9656L59 83.6367M63.5773 81V83.6367M63.5773 91.5469V88.9102M61.2992 87.5812L59 88.9102M68.1547 83.6367L65.8555 84.9656"
                        stroke="url(#paint4_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M49.5774 75.9102C51.0336 75.9102 52.2141 74.7297 52.2141 73.2734C52.2141 71.8172 51.0336 70.6367 49.5774 70.6367C48.1212 70.6367 46.9407 71.8172 46.9407 73.2734C46.9407 74.7297 48.1212 75.9102 49.5774 75.9102Z"
                        stroke="url(#paint5_linear_464_309)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M54.1547 75.9102L51.8555 74.5812M47.2992 71.9656L45 70.6367M49.5773 68V70.6367M49.5773 78.5469V75.9102M47.2992 74.5812L45 75.9102M54.1547 70.6367L51.8555 71.9656"
                        stroke="url(#paint6_linear_464_309)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 63L31 73"
                        stroke="url(#paint7_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M72 66L71 76"
                        stroke="url(#paint8_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M39 81L38 91"
                        stroke="url(#paint9_linear_464_309)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_309"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_309"
                            x1={16.7211}
                            y1={68.0672}
                            x2={20.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_309"
                            x1={15.7719}
                            y1={66.4008}
                            x2={21.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_309"
                            x1={61.7211}
                            y1={83.0672}
                            x2={65.4336}
                            y2={89.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_309"
                            x1={60.7719}
                            y1={81.4008}
                            x2={66.3828}
                            y2={91.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_309"
                            x1={47.7211}
                            y1={70.0672}
                            x2={51.4336}
                            y2={76.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_309"
                            x1={46.7719}
                            y1={68.4008}
                            x2={52.3828}
                            y2={78.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_309"
                            x1={29.6154}
                            y1={62.8381}
                            x2={36.4624}
                            y2={70.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_309"
                            x1={69.6154}
                            y1={65.8381}
                            x2={76.4624}
                            y2={73.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_309"
                            x1={36.6154}
                            y1={80.8381}
                            x2={43.4624}
                            y2={88.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "368": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 101 102"
                    fill="none"

                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_472_312)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_472_312)">
                        <Path
                            d="M82.2857 40.9669H81.613C82.8492 35.8701 82.2282 30.4997 79.8613 25.8196C77.4945 21.1395 73.5369 17.4562 68.6989 15.431C63.861 13.4058 58.4596 13.1713 53.4643 14.7695C48.469 16.3678 44.207 19.6942 41.4434 24.1515C39.2125 22.8289 36.6716 22.1193 34.0782 22.0948C31.4847 22.0703 28.9309 22.7317 26.6754 24.012C24.4199 25.2922 22.5429 27.1459 21.2345 29.3851C19.9261 31.6244 19.2329 34.1696 19.225 36.7631C19.2315 37.5661 19.3018 38.3673 19.4353 39.1592C15.5981 39.9109 12.1773 42.0615 9.83683 45.1936C7.49641 48.3256 6.40347 52.2157 6.77022 56.1083C7.13697 60.0009 8.93724 63.6183 11.8215 66.2582C14.7057 68.8981 18.4681 70.372 22.3781 70.3938C22.7281 70.4147 23.0791 70.4147 23.4291 70.3938H82.2857C86.1881 70.3938 89.9307 68.8436 92.6902 66.0843C95.4496 63.325 96.9998 59.5826 96.9998 55.6803C96.9998 51.7781 95.4496 48.0357 92.6902 45.2764C89.9307 42.517 86.1881 40.9669 82.2857 40.9669Z"
                            fill="url(#paint1_linear_472_312)"
                        />
                    </G>
                    <Path
                        d="M37.5774 92.9102C39.0336 92.9102 40.2141 91.7297 40.2141 90.2734C40.2141 88.8172 39.0336 87.6367 37.5774 87.6367C36.1212 87.6367 34.9407 88.8172 34.9407 90.2734C34.9407 91.7297 36.1212 92.9102 37.5774 92.9102Z"
                        stroke="url(#paint2_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M42.1547 92.9102L39.8555 91.5812M35.2992 88.9656L33 87.6367M37.5773 85V87.6367M37.5773 95.5469V92.9102M35.2992 91.5812L33 92.9102M42.1547 87.6367L39.8555 88.9656"
                        stroke="url(#paint3_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M73.5774 80.9102C75.0336 80.9102 76.2141 79.7297 76.2141 78.2734C76.2141 76.8172 75.0336 75.6367 73.5774 75.6367C72.1212 75.6367 70.9407 76.8172 70.9407 78.2734C70.9407 79.7297 72.1212 80.9102 73.5774 80.9102Z"
                        stroke="url(#paint4_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M78.1547 80.9102L75.8555 79.5812M71.2992 76.9656L69 75.6367M73.5773 73V75.6367M73.5773 83.5469V80.9102M71.2992 79.5812L69 80.9102M78.1547 75.6367L75.8555 76.9656"
                        stroke="url(#paint5_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M24.5774 81.9102C26.0336 81.9102 27.2141 80.7297 27.2141 79.2734C27.2141 77.8172 26.0336 76.6367 24.5774 76.6367C23.1212 76.6367 21.9407 77.8172 21.9407 79.2734C21.9407 80.7297 23.1212 81.9102 24.5774 81.9102Z"
                        stroke="url(#paint6_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M29.1547 81.9102L26.8555 80.5812M22.2992 77.9656L20 76.6367M24.5773 74V76.6367M24.5773 84.5469V81.9102M22.2992 80.5812L20 81.9102M29.1547 76.6367L26.8555 77.9656"
                        stroke="url(#paint7_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 97.9102C66.0336 97.9102 67.2141 96.7297 67.2141 95.2734C67.2141 93.8172 66.0336 92.6367 64.5774 92.6367C63.1212 92.6367 61.9407 93.8172 61.9407 95.2734C61.9407 96.7297 63.1212 97.9102 64.5774 97.9102Z"
                        stroke="url(#paint8_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 97.9102L66.8555 96.5812M62.2992 93.9656L60 92.6367M64.5773 90V92.6367M64.5773 100.547V97.9102M62.2992 96.5812L60 97.9102M69.1547 92.6367L66.8555 93.9656"
                        stroke="url(#paint9_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M52.5774 84.9102C54.0336 84.9102 55.2141 83.7297 55.2141 82.2734C55.2141 80.8172 54.0336 79.6367 52.5774 79.6367C51.1212 79.6367 49.9407 80.8172 49.9407 82.2734C49.9407 83.7297 51.1212 84.9102 52.5774 84.9102Z"
                        stroke="url(#paint10_linear_472_312)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M57.1547 84.9102L54.8555 83.5812M50.2992 80.9656L48 79.6367M52.5773 77V79.6367M52.5773 87.5469V84.9102M50.2992 83.5812L48 84.9102M57.1547 79.6367L54.8555 80.9656"
                        stroke="url(#paint11_linear_472_312)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_472_312"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_472_312"
                            x1={10.891}
                            y1={4.21675}
                            x2={121.321}
                            y2={106.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_472_312"
                            x1={35.7211}
                            y1={87.0672}
                            x2={39.4336}
                            y2={93.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_472_312"
                            x1={34.7719}
                            y1={85.4008}
                            x2={40.3828}
                            y2={95.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_472_312"
                            x1={71.7211}
                            y1={75.0672}
                            x2={75.4336}
                            y2={81.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_472_312"
                            x1={70.7719}
                            y1={73.4008}
                            x2={76.3828}
                            y2={83.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_472_312"
                            x1={22.7211}
                            y1={76.0672}
                            x2={26.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_472_312"
                            x1={21.7719}
                            y1={74.4008}
                            x2={27.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_472_312"
                            x1={62.7211}
                            y1={92.0672}
                            x2={66.4336}
                            y2={98.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_472_312"
                            x1={61.7719}
                            y1={90.4008}
                            x2={67.3828}
                            y2={100.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_472_312"
                            x1={50.7211}
                            y1={79.0672}
                            x2={54.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint11_linear_472_312"
                            x1={49.7719}
                            y1={77.4008}
                            x2={55.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "371": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_310)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_310)"
                        />
                    </G>
                    <Path
                        d="M35.5774 81.9102C37.0336 81.9102 38.2141 80.7297 38.2141 79.2734C38.2141 77.8172 37.0336 76.6367 35.5774 76.6367C34.1212 76.6367 32.9407 77.8172 32.9407 79.2734C32.9407 80.7297 34.1212 81.9102 35.5774 81.9102Z"
                        stroke="url(#paint1_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M40.1547 81.9102L37.8555 80.5812M33.2992 77.9656L31 76.6367M35.5773 74V76.6367M35.5773 84.5469V81.9102M33.2992 80.5812L31 81.9102M40.1547 76.6367L37.8555 77.9656"
                        stroke="url(#paint2_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M71.5774 69.9102C73.0336 69.9102 74.2141 68.7297 74.2141 67.2734C74.2141 65.8172 73.0336 64.6367 71.5774 64.6367C70.1212 64.6367 68.9407 65.8172 68.9407 67.2734C68.9407 68.7297 70.1212 69.9102 71.5774 69.9102Z"
                        stroke="url(#paint3_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M76.1547 69.9102L73.8555 68.5812M69.2992 65.9656L67 64.6367M71.5773 62V64.6367M71.5773 72.5469V69.9102M69.2992 68.5812L67 69.9102M76.1547 64.6367L73.8555 65.9656"
                        stroke="url(#paint4_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M22.5774 70.9102C24.0336 70.9102 25.2141 69.7297 25.2141 68.2734C25.2141 66.8172 24.0336 65.6367 22.5774 65.6367C21.1212 65.6367 19.9407 66.8172 19.9407 68.2734C19.9407 69.7297 21.1212 70.9102 22.5774 70.9102Z"
                        stroke="url(#paint5_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M27.1547 70.9102L24.8555 69.5812M20.2992 66.9656L18 65.6367M22.5773 63V65.6367M22.5773 73.5469V70.9102M20.2992 69.5812L18 70.9102M27.1547 65.6367L24.8555 66.9656"
                        stroke="url(#paint6_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint7_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint8_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.5774 73.9102C52.0336 73.9102 53.2141 72.7297 53.2141 71.2734C53.2141 69.8172 52.0336 68.6367 50.5774 68.6367C49.1212 68.6367 47.9407 69.8172 47.9407 71.2734C47.9407 72.7297 49.1212 73.9102 50.5774 73.9102Z"
                        stroke="url(#paint9_linear_464_310)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M55.1547 73.9102L52.8555 72.5812M48.2992 69.9656L46 68.6367M50.5773 66V68.6367M50.5773 76.5469V73.9102M48.2992 72.5812L46 73.9102M55.1547 68.6367L52.8555 69.9656"
                        stroke="url(#paint10_linear_464_310)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_310"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_310"
                            x1={33.7211}
                            y1={76.0672}
                            x2={37.4336}
                            y2={82.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_310"
                            x1={32.7719}
                            y1={74.4008}
                            x2={38.3828}
                            y2={84.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_310"
                            x1={69.7211}
                            y1={64.0672}
                            x2={73.4336}
                            y2={70.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_310"
                            x1={68.7719}
                            y1={62.4008}
                            x2={74.3828}
                            y2={72.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_310"
                            x1={20.7211}
                            y1={65.0672}
                            x2={24.4336}
                            y2={71.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_310"
                            x1={19.7719}
                            y1={63.4008}
                            x2={25.3828}
                            y2={73.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_310"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_464_310"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint9_linear_464_310"
                            x1={48.7211}
                            y1={68.0672}
                            x2={52.4336}
                            y2={74.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint10_linear_464_310"
                            x1={47.7719}
                            y1={66.4008}
                            x2={53.3828}
                            y2={76.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "374": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 100 104"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_475_316)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_475_316)">
                        <Path
                            d="M81.2857 42.9669H80.613C81.8492 37.8701 81.2282 32.4997 78.8613 27.8196C76.4945 23.1395 72.5369 19.4562 67.6989 17.431C62.861 15.4058 57.4596 15.1713 52.4643 16.7695C47.469 18.3678 43.207 21.6942 40.4434 26.1515C38.2125 24.8289 35.6716 24.1193 33.0782 24.0948C30.4847 24.0703 27.9309 24.7317 25.6754 26.012C23.4199 27.2922 21.5429 29.1459 20.2345 31.3851C18.9261 33.6244 18.2329 36.1696 18.225 38.7631C18.2315 39.5661 18.3018 40.3673 18.4353 41.1592C14.5981 41.9109 11.1773 44.0615 8.83683 47.1936C6.49641 50.3256 5.40347 54.2157 5.77022 58.1083C6.13697 62.0009 7.93724 65.6183 10.8215 68.2582C13.7057 70.8981 17.4681 72.372 21.3781 72.3938C21.7281 72.4147 22.0791 72.4147 22.4291 72.3938H81.2857C85.1881 72.3938 88.9307 70.8436 91.6902 68.0843C94.4496 65.325 95.9998 61.5826 95.9998 57.6803C95.9998 53.7781 94.4496 50.0357 91.6902 47.2764C88.9307 44.517 85.1881 42.9669 81.2857 42.9669Z"
                            fill="url(#paint1_linear_475_316)"
                        />
                    </G>
                    <Ellipse
                        cx={42.5}
                        cy={87.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_475_316)"
                    />
                    <Ellipse
                        cx={63.5}
                        cy={99.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_475_316)"
                    />
                    <Ellipse
                        cx={32.5}
                        cy={99.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_475_316)"
                    />
                    <Ellipse
                        cx={21.5}
                        cy={80.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_475_316)"
                    />
                    <Ellipse
                        cx={74.5}
                        cy={83.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint6_linear_475_316)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_475_316"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_475_316"
                            x1={9.89095}
                            y1={6.21675}
                            x2={120.321}
                            y2={108.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_475_316"
                            x1={42.5}
                            y1={83}
                            x2={42.5}
                            y2={92}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_475_316"
                            x1={63.5}
                            y1={95}
                            x2={63.5}
                            y2={104}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_475_316"
                            x1={32.5}
                            y1={95}
                            x2={32.5}
                            y2={104}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_475_316"
                            x1={21.5}
                            y1={76}
                            x2={21.5}
                            y2={85}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_475_316"
                            x1={74.5}
                            y1={79}
                            x2={74.5}
                            y2={88}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "377": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_307)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_307)"
                        />
                    </G>
                    <Ellipse
                        cx={41.5}
                        cy={74.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint1_linear_464_307)"
                    />
                    <Ellipse
                        cx={62.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint2_linear_464_307)"
                    />
                    <Ellipse
                        cx={31.5}
                        cy={86.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint3_linear_464_307)"
                    />
                    <Ellipse
                        cx={20.5}
                        cy={67.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint4_linear_464_307)"
                    />
                    <Ellipse
                        cx={73.5}
                        cy={70.5}
                        rx={3.5}
                        ry={4.5}
                        fill="url(#paint5_linear_464_307)"
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_307"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_307"
                            x1={41.5}
                            y1={70}
                            x2={41.5}
                            y2={79}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_307"
                            x1={62.5}
                            y1={82}
                            x2={62.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_307"
                            x1={31.5}
                            y1={82}
                            x2={31.5}
                            y2={91}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_307"
                            x1={20.5}
                            y1={63}
                            x2={20.5}
                            y2={72}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_307"
                            x1={73.5}
                            y1={66}
                            x2={73.5}
                            y2={75}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#F0F0F0" />
                            <Stop offset={1} stopColor="#ABABAB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "386": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 103 101"
                    fill="none"

                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_476_318)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_476_318)">
                        <Path
                            d="M84.2857 41.9669H83.613C84.8492 36.8701 84.2282 31.4997 81.8613 26.8196C79.4945 22.1395 75.5369 18.4562 70.6989 16.431C65.861 14.4058 60.4596 14.1713 55.4643 15.7695C50.469 17.3678 46.207 20.6942 43.4434 25.1515C41.2125 23.8289 38.6716 23.1193 36.0782 23.0948C33.4847 23.0703 30.9309 23.7317 28.6754 25.012C26.4199 26.2922 24.5429 28.1459 23.2345 30.3851C21.9261 32.6244 21.2329 35.1696 21.225 37.7631C21.2315 38.5661 21.3018 39.3673 21.4353 40.1592C17.5981 40.9109 14.1773 43.0615 11.8368 46.1936C9.49641 49.3256 8.40347 53.2157 8.77022 57.1083C9.13697 61.0009 10.9372 64.6183 13.8215 67.2582C16.7057 69.8981 20.4681 71.372 24.3781 71.3938C24.7281 71.4147 25.0791 71.4147 25.4291 71.3938H84.2857C88.1881 71.3938 91.9307 69.8436 94.6902 67.0843C97.4496 64.325 98.9998 60.5826 98.9998 56.6803C98.9998 52.7781 97.4496 49.0357 94.6902 46.2764C91.9307 43.517 88.1881 41.9669 84.2857 41.9669Z"
                            fill="url(#paint1_linear_476_318)"
                        />
                    </G>
                    <Path
                        d="M17 87L16 97"
                        stroke="url(#paint2_linear_476_318)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M32 78L31 88"
                        stroke="url(#paint3_linear_476_318)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M68.6453 88L67 98.4203"
                        stroke="url(#paint4_linear_476_318)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M82.6453 77L81 87.4203"
                        stroke="url(#paint5_linear_476_318)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M50.4375 52L42 77.3125H50.4375L46.2188 98.4062L67.3125 68.875H54.6562L63.0938 52H50.4375Z"
                        fill="url(#paint6_linear_476_318)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_476_318"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_476_318"
                            x1={12.891}
                            y1={5.21675}
                            x2={123.321}
                            y2={107.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_476_318"
                            x1={14.6154}
                            y1={86.8381}
                            x2={21.4624}
                            y2={94.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_476_318"
                            x1={29.6154}
                            y1={77.8381}
                            x2={36.4624}
                            y2={85.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_476_318"
                            x1={64.7219}
                            y1={87.8312}
                            x2={70.9235}
                            y2={98.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_476_318"
                            x1={78.7219}
                            y1={76.8312}
                            x2={84.9235}
                            y2={87.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_476_318"
                            x1={56.1562}
                            y1={53.0625}
                            x2={46.1562}
                            y2={99.0625}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

            "389": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 89"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_312)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_312)"
                        />
                    </G>
                    <Path
                        d="M13 75L12 85"
                        stroke="url(#paint1_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M28 66L27 76"
                        stroke="url(#paint2_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.6453 76L63 86.4203"
                        stroke="url(#paint3_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M78.6453 65L77 75.4203"
                        stroke="url(#paint4_linear_464_312)"
                        strokeWidth={4}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M46.4375 40L38 65.3125H46.4375L42.2188 86.4062L63.3125 56.875H50.6562L59.0938 40H46.4375Z"
                        fill="url(#paint5_linear_464_312)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_312"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_312"
                            x1={10.6154}
                            y1={74.8381}
                            x2={17.4624}
                            y2={82.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_312"
                            x1={25.6154}
                            y1={65.8381}
                            x2={32.4624}
                            y2={73.3605}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_312"
                            x1={60.7219}
                            y1={75.8312}
                            x2={66.9235}
                            y2={86.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_312"
                            x1={74.7219}
                            y1={64.8312}
                            x2={80.9235}
                            y2={75.5891}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#95BFFF" />
                            <Stop offset={0.45} stopColor="#95BFFF" />
                            <Stop offset={1} stopColor="#5B8AD2" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_312"
                            x1={52.1562}
                            y1={41.0625}
                            x2={42.1562}
                            y2={87.0625}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),


            "392": (
                <Svg
                    width={size}
                    height={size}
                    viewBox="0 0 101 104"
                    fill="none"
                >
                    <Path
                        d="M48.8845 33.2406C45.4759 33.2652 42.0959 32.6179 38.9376 31.3356C35.7793 30.0533 32.9046 28.1612 30.4778 25.7674C28.0509 23.3736 26.1195 20.525 24.7939 17.3843C23.4683 14.2437 22.7745 10.8726 22.752 7.4637C22.7584 5.28126 23.0463 3.10876 23.6086 1C18.9581 1.57813 14.5529 3.41263 10.8665 6.30638C7.18013 9.20014 4.3518 13.0438 2.68545 17.4243C1.0191 21.8048 0.577713 26.5566 1.40871 31.1691C2.23971 35.7817 4.31169 40.0806 7.40201 43.604C10.4923 47.1273 14.4842 49.742 18.9487 51.167C23.4131 52.5919 28.1814 52.7734 32.7413 51.6918C37.3011 50.6103 41.4801 48.3065 44.8292 45.0282C48.1783 41.7499 50.5709 37.6209 51.75 33.0849C50.8 33.1783 49.85 33.2406 48.8845 33.2406Z"
                        fill="url(#paint0_linear_476_319)"
                        stroke="#F6A823"
                        strokeWidth={0.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <G filter="url(#filter0_d_476_319)">
                        <Path
                            d="M82.2857 42.9669H81.613C82.8492 37.8701 82.2282 32.4997 79.8613 27.8196C77.4945 23.1395 73.5369 19.4562 68.6989 17.431C63.861 15.4058 58.4596 15.1713 53.4643 16.7695C48.469 18.3678 44.207 21.6942 41.4434 26.1515C39.2125 24.8289 36.6716 24.1193 34.0782 24.0948C31.4847 24.0703 28.9309 24.7317 26.6754 26.012C24.4199 27.2922 22.5429 29.1459 21.2345 31.3851C19.9261 33.6244 19.2329 36.1696 19.225 38.7631C19.2315 39.5661 19.3018 40.3673 19.4353 41.1592C15.5981 41.9109 12.1773 44.0615 9.83683 47.1936C7.49641 50.3256 6.40347 54.2157 6.77022 58.1083C7.13697 62.0009 8.93724 65.6183 11.8215 68.2582C14.7057 70.8981 18.4681 72.372 22.3781 72.3938C22.7281 72.4147 23.0791 72.4147 23.4291 72.3938H82.2857C86.1881 72.3938 89.9307 70.8436 92.6902 68.0843C95.4496 65.325 96.9998 61.5826 96.9998 57.6803C96.9998 53.7781 95.4496 50.0357 92.6902 47.2764C89.9307 44.517 86.1881 42.9669 82.2857 42.9669Z"
                            fill="url(#paint1_linear_476_319)"
                        />
                    </G>
                    <Path
                        d="M25.5774 87.9102C27.0336 87.9102 28.2141 86.7297 28.2141 85.2734C28.2141 83.8172 27.0336 82.6367 25.5774 82.6367C24.1212 82.6367 22.9407 83.8172 22.9407 85.2734C22.9407 86.7297 24.1212 87.9102 25.5774 87.9102Z"
                        stroke="url(#paint2_linear_476_319)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M30.1547 87.9102L27.8555 86.5812M23.2992 83.9656L21 82.6367M25.5773 80V82.6367M25.5773 90.5469V87.9102M23.2992 86.5812L21 87.9102M30.1547 82.6367L27.8555 83.9656"
                        stroke="url(#paint3_linear_476_319)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M78.5774 84.9102C80.0336 84.9102 81.2141 83.7297 81.2141 82.2734C81.2141 80.8172 80.0336 79.6367 78.5774 79.6367C77.1212 79.6367 75.9407 80.8172 75.9407 82.2734C75.9407 83.7297 77.1212 84.9102 78.5774 84.9102Z"
                        stroke="url(#paint4_linear_476_319)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M83.1547 84.9102L80.8555 83.5812M76.2992 80.9656L74 79.6367M78.5773 77V79.6367M78.5773 87.5469V84.9102M76.2992 83.5812L74 84.9102M83.1547 79.6367L80.8555 80.9656"
                        stroke="url(#paint5_linear_476_319)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M64.5774 99.9102C66.0336 99.9102 67.2141 98.7297 67.2141 97.2734C67.2141 95.8172 66.0336 94.6367 64.5774 94.6367C63.1212 94.6367 61.9407 95.8172 61.9407 97.2734C61.9407 98.7297 63.1212 99.9102 64.5774 99.9102Z"
                        stroke="url(#paint6_linear_476_319)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M69.1547 99.9102L66.8555 98.5812M62.2992 95.9656L60 94.6367M64.5773 92V94.6367M64.5773 102.547V99.9102M62.2992 98.5812L60 99.9102M69.1547 94.6367L66.8555 95.9656"
                        stroke="url(#paint7_linear_476_319)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M48.4375 53L40 78.3125H48.4375L44.2188 99.4062L65.3125 69.875H52.6562L61.0938 53H48.4375Z"
                        fill="url(#paint8_linear_476_319)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_476_319"
                            x1={10.3555}
                            y1={6.06193}
                            x2={36.2116}
                            y2={50.8694}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FFFBCB" />
                            <Stop offset={0.3} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FCB912" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_476_319"
                            x1={10.891}
                            y1={6.21675}
                            x2={121.321}
                            y2={108.381}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="white" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_476_319"
                            x1={23.7211}
                            y1={82.0672}
                            x2={27.4336}
                            y2={88.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_476_319"
                            x1={22.7719}
                            y1={80.4008}
                            x2={28.3828}
                            y2={90.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_476_319"
                            x1={76.7211}
                            y1={79.0672}
                            x2={80.4336}
                            y2={85.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_476_319"
                            x1={75.7719}
                            y1={77.4008}
                            x2={81.3828}
                            y2={87.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_476_319"
                            x1={62.7211}
                            y1={94.0672}
                            x2={66.4336}
                            y2={100.48}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_476_319"
                            x1={61.7719}
                            y1={92.4008}
                            x2={67.3828}
                            y2={102.146}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint8_linear_476_319"
                            x1={54.1562}
                            y1={54.0625}
                            x2={44.1562}
                            y2={100.063}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),


            "395": (
                <Svg
                    width={size} height={size}
                    viewBox="0 0 99 91"
                    fill="none"


                >
                    <G filter="url(#filter0_d_464_314)">
                        <Path
                            d="M80.2857 29.9669H79.613C80.8492 24.8701 80.2282 19.4997 77.8613 14.8196C75.4945 10.1395 71.5369 6.4562 66.6989 4.43099C61.861 2.40579 56.4596 2.17127 51.4643 3.76953C46.469 5.3678 42.207 8.69418 39.4434 13.1515C37.2125 11.8289 34.6716 11.1193 32.0782 11.0948C29.4847 11.0703 26.9309 11.7317 24.6754 13.012C22.4199 14.2922 20.5429 16.1459 19.2345 18.3851C17.9261 20.6244 17.2329 23.1696 17.225 25.7631C17.2315 26.5661 17.3018 27.3673 17.4353 28.1592C13.5981 28.9109 10.1773 31.0615 7.83683 34.1936C5.49641 37.3256 4.40347 41.2157 4.77022 45.1083C5.13697 49.0009 6.93724 52.6183 9.82148 55.2582C12.7057 57.8981 16.4681 59.372 20.3781 59.3938C20.7281 59.4147 21.0791 59.4147 21.4291 59.3938H80.2857C84.1881 59.3938 87.9307 57.8436 90.6902 55.0843C93.4496 52.325 94.9998 48.5826 94.9998 44.6803C94.9998 40.7781 93.4496 37.0357 90.6902 34.2764C87.9307 31.517 84.1881 29.9669 80.2857 29.9669Z"
                            fill="url(#paint0_linear_464_314)"
                        />
                    </G>
                    <Path
                        d="M23.5774 74.9102C25.0336 74.9102 26.2141 73.7297 26.2141 72.2734C26.2141 70.8172 25.0336 69.6367 23.5774 69.6367C22.1212 69.6367 20.9407 70.8172 20.9407 72.2734C20.9407 73.7297 22.1212 74.9102 23.5774 74.9102Z"
                        stroke="url(#paint1_linear_464_314)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M28.1547 74.9102L25.8555 73.5812M21.2992 70.9656L19 69.6367M23.5773 67V69.6367M23.5773 77.5469V74.9102M21.2992 73.5812L19 74.9102M28.1547 69.6367L25.8555 70.9656"
                        stroke="url(#paint2_linear_464_314)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M76.5774 71.9102C78.0336 71.9102 79.2141 70.7297 79.2141 69.2734C79.2141 67.8172 78.0336 66.6367 76.5774 66.6367C75.1212 66.6367 73.9407 67.8172 73.9407 69.2734C73.9407 70.7297 75.1212 71.9102 76.5774 71.9102Z"
                        stroke="url(#paint3_linear_464_314)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M81.1547 71.9102L78.8555 70.5812M74.2992 67.9656L72 66.6367M76.5773 64V66.6367M76.5773 74.5469V71.9102M74.2992 70.5812L72 71.9102M81.1547 66.6367L78.8555 67.9656"
                        stroke="url(#paint4_linear_464_314)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M62.5774 86.9102C64.0336 86.9102 65.2141 85.7297 65.2141 84.2734C65.2141 82.8172 64.0336 81.6367 62.5774 81.6367C61.1212 81.6367 59.9407 82.8172 59.9407 84.2734C59.9407 85.7297 61.1212 86.9102 62.5774 86.9102Z"
                        stroke="url(#paint5_linear_464_314)"
                        strokeMiterlimit={10}
                    />
                    <Path
                        d="M67.1547 86.9102L64.8555 85.5812M60.2992 82.9656L58 81.6367M62.5773 79V81.6367M62.5773 89.5469V86.9102M60.2992 85.5812L58 86.9102M67.1547 81.6367L64.8555 82.9656"
                        stroke="url(#paint6_linear_464_314)"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <Path
                        d="M46.4375 40L38 65.3125H46.4375L42.2188 86.4062L63.3125 56.875H50.6562L59.0938 40H46.4375Z"
                        fill="url(#paint7_linear_464_314)"
                        stroke="#FCB912"
                        strokeWidth={0.5}
                        strokeMiterlimit={10}
                    />
                    <Defs>
                        <LinearGradient
                            id="paint0_linear_464_314"
                            x1={8.89095}
                            y1={-6.78325}
                            x2={119.321}
                            y2={95.3811}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#CDE8FF" />
                            <Stop offset={1} stopColor="#4BA1ED" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint1_linear_464_314"
                            x1={21.7211}
                            y1={69.0672}
                            x2={25.4336}
                            y2={75.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint2_linear_464_314"
                            x1={20.7719}
                            y1={67.4008}
                            x2={26.3828}
                            y2={77.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint3_linear_464_314"
                            x1={74.7211}
                            y1={66.0672}
                            x2={78.4336}
                            y2={72.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint4_linear_464_314"
                            x1={73.7719}
                            y1={64.4008}
                            x2={79.3828}
                            y2={74.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint5_linear_464_314"
                            x1={60.7211}
                            y1={81.0672}
                            x2={64.4336}
                            y2={87.4797}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint6_linear_464_314"
                            x1={59.7719}
                            y1={79.4008}
                            x2={65.3828}
                            y2={89.1461}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#86C3DB" />
                            <Stop offset={0.45} stopColor="#86C3DB" />
                            <Stop offset={1} stopColor="#5EAFCF" />
                        </LinearGradient>
                        <LinearGradient
                            id="paint7_linear_464_314"
                            x1={52.1562}
                            y1={41.0625}
                            x2={42.1562}
                            y2={87.0625}
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop stopColor="#FCB912" />
                            <Stop offset={0.7} stopColor="#FFD140" />
                            <Stop offset={1} stopColor="#FFFBCB" />
                        </LinearGradient>
                    </Defs>
                </Svg>
            ),

        }

    };

    return icons[isDay ? 'day' : 'night'][name] || null;
}
