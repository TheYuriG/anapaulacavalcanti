import { WhatsappLogoSVG } from "../components/UI/WhatsappSVG.tsx";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-rose-pink shadow-md">
        <nav className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-primary">
            <a href="/">Ana Paula Cavalcanti</a>
          </div>
          <ul className="flex space-x-8">
            <li>
              <a href="#services" className="text-lg">Services</a>
            </li>
            <li>
              <a href="#about" className="text-lg">About</a>
            </li>
            <li>
              <a href="#contact" className="text-lg">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-semibold mb-4">
          Capillary Treatments & Hair Transplants
        </h1>
        <p className="text-xl">Enhance your natural beauty with expert care</p>
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 transition">
          Book a Consultation
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Hair Transplant</h3>
            <p>Regain your hair with cutting-edge techniques.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">
              Capillary LED Treatment
            </h3>
            <p>Stimulate hair growth with advanced LED technology.</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">MMP Treatment</h3>
            <p>Micro needling therapy for hair rejuvenation.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg">
          We are a team of experienced professionals dedicated to providing
          top-tier hair restoration services. Our approach is personalized and
          uses the latest technology to ensure the best results for our clients.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form
          action="#"
          method="POST"
          className="max-w-lg mx-auto bg-gray-200 p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border rounded-md"
            >
            </textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
          >
            <span class="center">
              Entrar em contato <WhatsappLogoSVG />
            </span>
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          Ana Paula Cavalcanti. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
