import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from "@/public/vivekanand.jpg";
import img2 from "@/public/netaji_subhash.jpeg";
import img3 from "@/public/Sardar Patel.jpeg";
import img4 from "@/public/rishi_agastya.jpeg";
import img5 from "@/public/sukhdev_ji.jpeg";
import img6 from "@/public/bhagat_singh_ji.jpeg";
import img7 from "@/public/rani_laxmibai_ji.jpeg";
import bgimage from "@/public/bg.jpeg";
import Image from "next/image";
export function HomeSection({
  setActiveSection,
}: {
  setActiveSection: Function;
}) {
  return (
    <div className="space-y-8">
      <div className="w-full lg:h-[100vh] overflow-hidden relative">
        <div className="flex w-full h-full flex-col justify-center  items-center z-[9999999999] absolute">
          {/* <h1 className="text-4xl font-bold text-orange-600 mb-4">
            शाखा पुस्तिका
          </h1>
          <h2 className="text-2xl text-white mb-2">प्रीमियर संस्थान</h2>
          <p className="text-xl text-white">हरियाणा प्रांत</p> */}
          {/* <h1 className="text-white text-9xl bg-gradient-to-r p-[20px] from-green-500 to via-white to-orange-400 font-extrabold bg-clip-text">वंदे मातरम्</h1> */}
        </div>
        <Image
          className="w-full h-full aspect-auto object-fill z-[999]  "
          src={bgimage.src}
          width={1000}
          height={1000}
          alt="hero img"
        />
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
            <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img1.src}
                className="w-full h-full object-cover object-top"
                width={300}
                height={250}
                alt="vivekanand"
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">
                  स्वामी विवेकानंद
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  शिकागो धर्म सम्मेलन में दिया गया ऐतिहासिक भाषण और उनके अमर
                  विचार।
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("vivekananda");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
             <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img2.src}
                className="w-full h-full object-cover object-top"
                width={300}
                height={250}
                alt="dayanand ji"
              />
            </div>

            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">सुभाषित</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  संस्कृत के श्लोक और उनके भावार्थ जो जीवन में मार्गदर्शन प्रदान
                  करते हैं।
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("subhashita");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
             <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img3.src}
                className="w-full h-full object-cover object-top"
                width={300}
                height={250}
                alt="all"
              />
            </div>

            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">अमृत वचन</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  महापुरुषों के प्रेरणादायक वचन, जो जीवन को सही दिशा देते हैं,
                  आत्मविश्वास को मजबूत बनाते हैं।{" "}
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("amrit-vachan");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
            <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img4.src}
                className="w-full h-full object-cover object-top"
                width={300}
                height={250}
                alt="valmiki ji"
              />
            </div>

            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">गीत</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  देशभक्ति और आध्यात्मिक भावनाओं से भरे प्रेरणादायक गीत।
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("geet");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
             <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img5.src}
                className="w-full h-full object-cover object-top"
                width={300}
                height={250}
                alt="balgangadhar ji"
              />
            </div>

            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">प्रेरक प्रसंग</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  जीवन में प्रेरणा देने वाली सच्ची घटनाएं और कहानियां, जो हमें
                  कठिनाइयों से जूझते समय साहस देती हैं।
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("prerak-prasang");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
             <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img6.src}
                className="w-full h-full object-fill object-top"
                width={300}
                height={250}
                alt="dronacharya ji"
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">चर्चा विषय</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  व्यक्तित्व निर्माण, अनुशासन और चरित्र पर गहन चर्चा, जो जीवन
                  मूल्यों को मजबूत बनाती है।
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("charcha");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
             <div className="rounded-[10px] h-[250px] w-[90%] overflow-hidden">
              <Image
                src={img7.src}
                className="w-[100%] h-full object-cover"
                width={300}
                height={250}
                alt="guru gobind singh ji"
              />
            </div>
            <div>
              <CardHeader>
                <CardTitle className="text-orange-600">पंच परिवर्तन</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  व्यक्तित्व और समाज के पाँच आवश्यक परिवर्तन, जो जीवन को दिशा
                  देते हैं।
                </p>
              </CardContent>
            </div>
            <button
              className="group bg-orange-600 flex justify-center items-center gap-2 text-white w-[90%] absolute bottom-4 py-2 rounded-md text-[20px] hover:gap-4  duration-300 shadow-md"
              onClick={() => {
                setActiveSection("panch-parivartan");
              }}
            >
              पूरा पढ़ें{" "}
              <IoIosArrowRoundForward className="text-[30px] font-extrabold" />
            </button>
          </Card>
        </div>
      </div>
    </div>
  );
}
