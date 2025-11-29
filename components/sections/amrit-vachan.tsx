import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import guruji from "@/public/guruji.jpg";
import subhash from "@/public/subhash.jpg";
import img1 from "@/public/hedgewarji.jpg";
import img3 from "@/public/vivekanand.jpg";

export function AmritVachanSection() {
  const amritVachans = [
    {
      id: 1,
      quote:
        "संघ के लिए हम हैं अपने लिए संघ नहीं है, यह धारणा प्रत्येक स्वयंसेवक की होनी चाहिए। 'सामुद्रो हि तरंगः क्वचन समुद्रो न तरंगः' अर्थात् तरंग समुद्र का अंग है, समुद्र से तरंग का पृथक अस्तित्व नहीं है। यह अभेदता आवश्यक है। यह धारणा हो, तो कौशल्य, कला, समयज्ञता, दृढ़ता आदि गुण स्वयंसेवकों में प्रकट होंगे। ये गुण पूर्ण तन्मय वृत्ति अपनाने से निर्माण होते हैं। यह तन्मयता करने का मार्ग संघ ने बतलाया है।",
      author: "प० पू० श्री गुरुजी",
      image: guruji.src,
    },
    {
      id: 2,
      quote:
        "आज दुनिया में चारों ओर अन्याय, अत्याचार और अधार्मिकता का स्वच्छन्द वातावरण फैला हुआ है। वह जब तक नष्ट नहीं होगा, तब तक हम चाहे जितना तप करें, हमें मोक्ष का अधिकार प्राप्त नहीं हो सकता।",
      author: "नेताजी सुभाषचंद्र बोस",
      image: subhash.src,
    },
    {
      id: 3,
      quote:
        "जब कभी भारत के सच्चे इतिहास का पता लगाया जाएगा। तब यह निःसंदेह प्रमाणित होगा कि धर्म के समान ही विज्ञान, दर्शन, संगीत, साहित्य, गणित, ललितकला आदि में भारत समग्र संसार का आदि गुरु रहा है।",
      author: "स्वामी विवेकानन्द जी",
      image: img3.src,
    },
  
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">अमृत वचन</h1>
        <p className="text-lg text-gray-600">महापुरुषों के प्रेरणादायक विचार</p>
      </div>

      <div className="grid gap-6">
        {amritVachans.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.author}
                className="w-16 h-16 rounded-full object-top object-cover shadow"
              />
              <CardTitle className="text-orange-600">
                अमृत वचन {item.id}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg leading-relaxed text-gray-800 italic">
                  "{item.quote}"
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-orange-600">- {item.author}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
