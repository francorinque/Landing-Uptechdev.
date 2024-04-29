import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <main className='bg-[#e5dfd7] text-dark min-h-screen'>
      <Navbar />
      <Layout>
        <section className='pt-[90px]'>
          <Hero />
        </section>
      </Layout>
    </main>
  );
}

export default App;
