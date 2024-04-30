import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Employees from "./components/Employees/Employees";
import Hero from "./components/Hero/Hero";
import Industries from "./components/Industries/Industries";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import VideoSection from "./components/VideoSection/VideoSection";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <main className='bg-[#e5dfd7] text-dark min-h-screen'>
      <Navbar />
      <Layout>
        <section className='pt-[10px]'>
          <Hero />
        </section>
        <section className='pt-[200px]'>
          <Industries />
        </section>
        <section className='pt-[200px]'>
          <Employees />
        </section>
        <section className='pt-[150px] lg:pt-[250px]'>
          <VideoSection />
        </section>
        <section className='pt-[150px] lg:pt-[250px]'>
          <Projects />
        </section>
        <section className='pt-[150px] lg:pt-[250px]'>
          <Benefits />
        </section>
        <section className='pt-[150px] lg:pt-[250px] '>
          <About />
        </section>
      </Layout>
    </main>
  );
}

export default App;
