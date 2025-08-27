import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AmritVachanSection() {
  const amritVachans = [
    {
      id: 1,
      quote:
        "संगठन ही राष्ट्र की प्रमुख शक्ति होती है। संसार में कोई भी समस्या हल करनी हो तो वह शक्ति के आधार पर ही हो सकती है। शक्तिहीन राष्ट्र की कोई भी आकांक्षा कभी भी सफल नहीं होती। परंतु सामर्थ्यशाली राष्ट्र कोई भी काम, जब चाहे तब अपनी इच्छानुसार कर सकता है।",
      author: "परम पूज्य डॉ हेडगेवार जी",
    },
    {
      id: 2,
      quote:
        "छोटी-छोटी बातों को नित्य ध्यान रखें बूंद बूंद मिलकर ही बड़ा जलाशय बनता है। एक एक त्रुटि मिलकर ही बड़ी बड़ी गलतियां होती है, इसलिए शाखाओं में जो शिक्षा मिलती है। उसके किसी भी अंश को नगण्य अथवा कम महत्व का नहीं मानना चाहिए।",
      author: "परम पूज्य श्री गुरुजी",
    },
    {
      id: 3,
      quote:
        "जब कभी भारत के सच्चे इतिहास का पता लगाया जायेगा। तब यह संदेश प्रमाणित होगा कि धर्म के समान ही विज्ञान दर्शन संगीत साहित्य गणित ललित कला आदि में भी भारत समग्र संसार का आदि गुरु रहा है।",
      author: "स्वामी विवेकानंद जी",
    },
    {
      id: 4,
      quote: "सपने वो नहीं होते जो सोते समय आते हैं, बल्कि सपने वो होते हैं जिन्हें पूरा करने से पहले हम सोते नहीं हैं।",
      author: "ए.पी.जे. अब्दुल कलाम",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">अमृत वचन</h1>
        <p className="text-lg text-gray-600">महापुरुषों के प्रेरणादायक विचार</p>
      </div>

      <div className="grid gap-6">
        {amritVachans.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-orange-600">अमृत वचन {item.id}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg leading-relaxed text-gray-800 italic">"{item.quote}"</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-orange-600">- {item.author}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
