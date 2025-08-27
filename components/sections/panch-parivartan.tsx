import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PanchParivartan() {
  const parivartan = [
    {
      id: 1,
      title: "स्व का बोध",
      description: "अपनी पहचान, संस्कृति और मूल्यों की समझ विकसित करना",
    },
    {
      id: 2,
      title: "नागरिक कर्तव्य",
      description: "राष्ट्र के प्रति अपने दायित्वों को समझना और निभाना",
    },
    {
      id: 3,
      title: "पर्यावरण",
      description: "प्रकृति के संरक्षण और पर्यावरण की सुरक्षा के लिए कार्य करना",
    },
    {
      id: 4,
      title: "सामाजिक समरसता",
      description: "समाज में एकता, भाईचारा और सद्भावना का विकास करना",
    },
    {
      id: 5,
      title: "कुटुम्ब परबोधन",
      description: "पारिवारिक मूल्यों को मजबूत बनाना और संस्कारों का संचार करना",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">पंच परिवर्तन</h1>
        <p className="text-lg text-gray-600">व्यक्तित्व और समाज के पांच आवश्यक परिवर्तन</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parivartan.map((item) => (
          <Card key={item.id} className="hover:shadow-lg transition-shadow h-full">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.id}
                </div>
                <CardTitle className="text-orange-600">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-orange-50 to-yellow-50">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">परिवर्तन का महत्व</h3>
          <p className="text-lg text-gray-800 leading-relaxed text-center">
            ये पांच परिवर्तन व्यक्ति के संपूर्ण विकास के लिए आवश्यक हैं। इनके माध्यम से हम न केवल अपना कल्याण करते हैं बल्कि समाज और राष्ट्र के
            उत्थान में भी योगदान देते हैं। प्रत्येक व्यक्ति को इन पांच क्षेत्रों में निरंतर सुधार के लिए प्रयत्नशील रहना चाहिए।
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
