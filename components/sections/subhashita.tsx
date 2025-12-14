import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SubhashitaSection() {
  const subhashitas = [
    {
      id: 1,
      sanskrit: "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम् । विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम् ॥",
      meaning:
        "अधिष्ठान (आधार), कर्ता (कर्म करने वाला), करण (इन्द्रियाँ और साधन) जो विभिन्न प्रकार के हैं, विविध और पृथक चेष्टाएँ (कर्म), तथा दैव (ईश्वरीय तत्व) - ये पाँच ही कर्म के कारण हैं।",
    },
    {
      id: 2,
      sanskrit: "बनर् न मानत जलधि जड़, गए तीधन धदन बीधत । बोलेराम सकोप तब, भर् धबनुहोइ न प्रीधत ।।",
      meaning: "श्री रामचन्द्र जी ने तीन दिनों तक समुद्र से विनती की, किन्तु सागर ने कोई उत्तरं नहीं दिया, किन्तु जब क्रोधित होकर श्रीराम ने धनुषबाण उठा लिया तब समुद्र शरीर धारण करके उनके चरणों में आ गिरा। अर्थात अन्ततः शक्ति की भाषा ही सही मार्ग पर लाती है।",
    },
    {
      id: 3,
      sanskrit: "वयमेव करिष्यामो मातृभूमेः सुमंगलम्। प्रतिष्ठां धर्म भूमिश्च नेष्यामः परमोन्नतिम्।।",
      meaning:
        "हम सब अपनी मातृभूमि का मंगल करें और अपनी धर्म भूमि भारत को प्रतिष्ठा के पद पर आसीन करेंगे। अपनी इस मातृभूमि को उन्नत्ति के शिखर पर ले जाएंगे।",
    },

  ]

  return (
    <div className="space-y-8">
      <div className="text-center mt-5">
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
