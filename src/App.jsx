import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Serene DistriBution | Supply Chain Solutions for Food, Retail & Catering</title>
        <meta name="title" content="Serene DistriBution | Supply Chain Solutions for Food, Retail & Catering" />
        <meta name="description" content="Serene DistriBution is a family-owned business providing reliable supply chain solutions for the food industry, retail, and catering. We are committed to the growth and success of our partners." />
        <meta http-equiv="Content-Language" content="en"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.serenedistribution.com/" />
        <meta property="og:title" content="Serene DistriBution | Trusted Supply Chain Solutions" />
        <meta property="og:description" content="Empowering the food industry, retail, and catering sectors with dependable supply chain services. Partner with Serene DistriBution—a family business that cares." />
        <meta property="og:image" content="https://www.serenedistribution.com/assets/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.serenedistribution.com/" />
        <meta name="twitter:title" content="Serene DistriBution | Trusted Supply Chain Solutions" />
        <meta name="twitter:description" content="Empowering the food industry, retail, and catering sectors with dependable supply chain services. Partner with Serene DistriBution—a family business that cares." />
        <meta name="twitter:image" content="https://www.serenedistribution.com/assets/og-image.jpg" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Serene DistriBution" />
        <meta name="keywords" content="supply chain solutions, food distribution, retail logistics, catering supply, food industry logistics, wholesale food distributor, Serene DistriBution" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.serenedistribution.com/" />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Products />
      <Footer />
    </>
  );
}

export default App;
