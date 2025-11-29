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
        "संघ के धलए हम हैंअपनेधलए संघ नहींहै, र्ह िारणा प्रत्येक स्वर्ंसेिक की होनी चाधहए। 'सामुद्रो धह तरंगः क्वचन समुद्रो न तरंगः '- अथातत्तरंग समुद्र का अंग है, समुद्र सेतरंग का पृथक अस्तित्व नहींहै। र्ह अभेदता आिश्यक है। र्ह िारणा हो, तो कौशल्य, कला, समर्ज्ञता, दृढ़ता आधद गुण स्वर्ंसेिकोंमेंप्रकट होंगे। र्ेगुण पूणततन्मर् िृधत्त अपनानेसेधनमातण होतेहैं। र्ह तन्मर्ता करनेका मागतसंघ नेबतलार्ा है।",
      author: "परम पूज्य नेताजी सुभाषचंद्र बोस ",
      image: subhash.src,
    },
    {
      id: 2,
      quote:
        "संघ के धलए हम हैंअपनेधलए संघ नहींहै, र्ह िारणा प्रत्येक स्वर्ंसेिक की होनी चाधहए। 'सामुद्रो धह तरंगः क्वचन समुद्रो न तरंगः '- अथातत्तरंग समुद्र का अंग है, समुद्र सेतरंग का पृथक अस्तित्व नहींहै। र्ह अभेदता आिश्यक है। र्ह िारणा हो, तो कौशल्य, कला, समर्ज्ञता, दृढ़ता आधद गुण स्वर्ंसेिकोंमेंप्रकट होंगे। र्ेगुण पूणततन्मर् िृधत्त अपनानेसेधनमातण होतेहैं। र्ह तन्मर्ता करनेका मागतसंघ नेबतलार्ा है।",
      author: "परम पूज्य श्री गुरुजी",
      image: guruji.src,
    },
    {
      id: 3,
      quote:
        "जब कभी भारत के सच्चे इतिहास का पता लगाया जायेगा। तब यह संदेश प्रमाणित होगा कि धर्म के समान ही विज्ञान दर्शन संगीत साहित्य गणित ललित कला आदि में भी भारत समग्र संसार का आदि गुरु रहा है।",
      author: "स्वामी विवेकानंद जी",
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
