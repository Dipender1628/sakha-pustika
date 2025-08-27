import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoIosArrowRoundForward } from "react-icons/io";
import img1 from "@/public/vivekanand.jpg";
import img2 from "@/public/dayanand ji.jpg";
import img3 from "@/public/amritvachan.jpg";
import img4 from "@/public/valmiki ji.jpg";
import img5 from "@/public/gangadhar ji.jpg";
import img7 from "@/public/Guru_Gobind_Singh_Sahib.jpg";
import heroImg from "@/public/hero img.jpg";

import Image from "next/image";
export function HomeSection({
  setActiveSection,
}: {
  setActiveSection: Function;
}) {
  return (
    <div className="space-y-8">
      <div className="w-full relative">
        <div className="text-center z-[9999999999] mb-4">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            शाखा पुस्तिका
          </h1>
          <h2 className="text-2xl text-gray-700 mb-2">प्रीमियर संस्थान</h2>
          <p className="text-xl text-gray-600">हरियाणा प्रांत</p>
        </div>
        <Image
          className="w-full rounded-2xl object-cover z-[999]"
          src={heroImg.src}
          width={1000}
          height={1000}
          alt="hero img"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow flex justify-center items-center relative overflow-hidden pb-20">
          <Image
            src={img1.src}
            className="w-full h-[250px] object-cover px-5 object-top"
            width={300}
            height={250}
            alt="vivekanand"
          />
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
          <Image
            src={img2.src}
            className="w-full h-[250px] object-cover object-top px-5"
            width={300}
            height={250}
            alt="dayanand ji"
          />

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
          <Image
            src={img3.src}
            className="w-full h-[250px] object-cover object-top px-5"
            width={300}
            height={250}
            alt="maharana pratap ji"
          />

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
          <Image
            src={img4.src}
            className="w-full h-[250px] object-cover object-top px-5"
            width={300}
            height={250}
            alt="vivekanand"
          />

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
          <Image
            src={img5.src}
            className="w-full h-[250px] object-cover object-top px-5"
            width={300}
            height={250}
            alt="balgangadhar"
          />

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
          <Image
            src={img5.src}
            className="w-full h-[250px] object-cover px-5"
            width={300}
            height={250}
            alt="balgangadhar"
          />
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
          <Image
            src={img7.src}
            className="w-full h-[250px] object-cover px-5"
            width={300}
            height={250}
            alt="gobind singh ji"
          />
          <div>
            <CardHeader>
              <CardTitle className="text-orange-600">पंच परिवर्तन</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                व्यक्तित्व और समाज के पाँच आवश्यक परिवर्तन, जो जीवन को दिशा देते
                हैं।
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
  );
}
