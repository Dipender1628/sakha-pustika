import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SubhashitaSection() {
  const subhashitas = [
    {
      id: 1,
      sanskrit: "उत्तरं यत् समुद्रस्य हिमाद्रेश्चैव दक्षिणम्। वर्षं तद् भारतं नाम भारती यत्र संततिः।।",
      meaning:
        "पृथ्वी का वह भू-भाग, जो समुद्र के उत्तर और हिमालय के दक्षिण में स्थित है, 'भारतवर्ष' कहलाता है तथा जिसकी संतानें (हम) भारतीय हैं।",
    },
    {
      id: 2,
      sanskrit: "न राष्ट्रं राष्ट्रतां याति यत्र संघटिता जनाः। निदानं राष्ट्र-भावस्य सुसंघटित जीवनम्॥",
      meaning: "जिस राष्ट्र में लोग संघटित नहीं है, वह राष्ट्र राष्ट्रत्व को प्राप्त नहीं होता। सुसंगठित जीवन ही राष्ट्रभाव का मूल कारण है।",
    },
    {
      id: 3,
      sanskrit: "अमन्त्रमक्षरं नास्ति नास्ति मूलमनौषधम्। अयोग्यः पुरुषो नास्ति योजकस्तत्र दुर्लभः॥",
      meaning:
        "कोई ऐसा अक्षर नहीं है, जिसका किसी न किसी मंत्र में उपयोग न होता हो। कोई जड़ी ऐसी नहीं है, जिसका किसी न किसी औषधि में उपयोग न होता हो। उसी प्रकार कोई भी व्यक्ति अयोग्य नहीं है, उसको ठीक से परख कर सही कार्य में लगा देने वाले योजक ही कठिनाई से मिलते हैं।",
    },
    {
      id: 4,
      sanskrit: "सूरा सो पहचानिए जो लरै दीन के हेत, पुरजा-पुरजा कट मरै कबहूं ना छांडे खेत",
      meaning:
        "शूरवीर उसे ही जानना चाहिए जो दीन-दुखियों के लिए लड़े, जो शरीर के टुकड़े-टुकड़े हो जाने पर भी रणभूमि न छोड़े। यह पंक्ति एक पंजाबी कहावत है जो वीर योद्धा के साहस और बलिदान की भावना को दर्शाती है।",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">सुभाषित</h1>
        <p className="text-lg text-gray-600">जीवन मार्गदर्शन के लिए संस्कृत श्लोक</p>
      </div>

      <div className="grid gap-6">
        {subhashitas.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-orange-600">सुभाषित {item.id}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-orange-800 text-center leading-relaxed">{item.sanskrit}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">भावार्थ:</p>
                <p className="text-gray-700 leading-relaxed">{item.meaning}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
