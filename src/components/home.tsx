import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Rocket, 
  Shield, 
  Zap, 
  Code, 
  Palette, 
  Globe,
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';

function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Built with modern technologies for optimal performance",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-500" />,
      title: "Beautiful Design",
      description: "Carefully crafted UI components with attention to detail",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "10K+", label: "Active Users" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Rating" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
    { icon: <Globe className="w-6 h-6" />, value: "50+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            Welcome to the Future
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Amazing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
              Applications
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create stunning, responsive web applications with our modern React + TypeScript + Tailwind CSS stack. 
            Everything you need to build your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="px-8 py-4 text-lg">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Code className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Platform?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`${feature.color} border-2 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
              Built with Modern Technologies
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Powered by the latest and greatest tools in web development
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="styling">Styling</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
              
              <TabsContent value="frontend" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Badge variant="outline" className="p-3 justify-center">React 18</Badge>
                  <Badge variant="outline" className="p-3 justify-center">TypeScript</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Vite</Badge>
                  <Badge variant="outline" className="p-3 justify-center">React Router</Badge>
                  <Badge variant="outline" className="p-3 justify-center">React Hook Form</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Framer Motion</Badge>
                </div>
              </TabsContent>
              
              <TabsContent value="styling" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Badge variant="outline" className="p-3 justify-center">Tailwind CSS</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Radix UI</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Lucide Icons</Badge>
                  <Badge variant="outline" className="p-3 justify-center">shadcn/ui</Badge>
                  <Badge variant="outline" className="p-3 justify-center">CSS Variables</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Responsive Design</Badge>
                </div>
              </TabsContent>
              
              <TabsContent value="tools" className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Badge variant="outline" className="p-3 justify-center">ESLint</Badge>
                  <Badge variant="outline" className="p-3 justify-center">PostCSS</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Autoprefixer</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Hot Reload</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Build Optimization</Badge>
                  <Badge variant="outline" className="p-3 justify-center">Development Tools</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Join thousands of developers who are already building amazing applications with our platform.
          </p>
          <Button size="lg" className="px-8 py-4 text-lg">
            Start Building Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;