import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SubhashitaSection() {
  const subhashitas = [
    {
      id: 1,
      sanskrit: "अधिष्ठानंतथा कततता करणंच पृथस्तििम्। धिधििाश्च पृथक्चेष्टा दैिंचौिात्र पञ्चमम्।।",
      meaning:
        "अथत-धकसी भी कार्तको सफलतापूितक करनेके धलए पााँच बातोंकी आिश्यकता होती है-धनधश्चत ध्येर् (लक्ष्य), लक्ष्य को प्राप्त करनेिाला कार्तकतात, धनधश्चत कार्तपद्धधत, कार्तपद्धधत पर चलते हुए धकए गए धभन्न-धभन्न प्रकार सेप्रर्ास, एिंसफलता हेतुभगिान्का आशीिातद ।",
    },
    {
      id: 2,
      sanskrit: "बनर् न मानत जलधि जड़, गए तीधन धदन बीधत । बोलेराम सकोप तब, भर् धबनुहोइ न प्रीधत ।।",
      meaning: "श्री रामचन्द्र जी नेतीन धदनोंतक समुद्र सेधिनती की, धकन्तुसागर नेकोई उत्तरंनहीं धदर्ा, धकन्तुजब क्रोधित होकर श्रीराम नेिनुषबाण उठा धलर्ा तब समुद्र शरीर िारण करके उनकेचरणोंमेंआ धगरा। अथातत्अन्ततः शस्ति की भाषा ही सही मागतपर लाती है।",
    },
    {
      id: 3,
      sanskrit: "िर्मेि कररष्यामो मातृभूमेः सुमंगलम्। प्रधतष्ठांिमतभूधमश्च नेष्यामः परमोन्नधतम्।।",
      meaning:
        "हम सब अपनी मातृभूधम का मंगल करेंऔर अपनी िमतभूधम भारत को प्रधतष्ठा केपद पर आसीन करेंगे। अपनी इस मातृभूधम को उन्नधत्त के धशखर पर लेजाएं गे।",
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
