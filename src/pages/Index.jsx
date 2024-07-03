import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaSify</h1>
        <p className="text-xl text-muted-foreground">The ultimate solution for your business needs</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <p className="text-center text-muted-foreground">Discover the amazing features that make our product unique</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature one description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature two description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature three description goes here.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <img src="https://placehold.co/100x100" alt="Customer 1" />
            </Avatar>
            <div>
              <p className="font-semibold">Customer 1</p>
              <p className="text-muted-foreground">"This product is amazing! It has changed the way we do business."</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Avatar>
              <img src="https://placehold.co/100x100" alt="Customer 2" />
            </Avatar>
            <div>
              <p className="font-semibold">Customer 2</p>
              <p className="text-muted-foreground">"A must-have for any business looking to improve efficiency."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$10/month</p>
              <p>Basic features for small businesses.</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$30/month</p>
              <p>Advanced features for growing businesses.</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$50/month</p>
              <p>All features for large enterprises.</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-4 text-center">
        <Separator />
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground">About</a>
          <a href="/contact" className="text-muted-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground">Privacy Policy</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-muted-foreground">Facebook</a>
          <a href="https://twitter.com" className="text-muted-foreground">Twitter</a>
          <a href="https://linkedin.com" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;