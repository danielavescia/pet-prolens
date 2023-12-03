import "../styles/sobre.css";

const Sobre = () => {
  return (
    <main>
      <section id="sobre-container">
        <div className="sobre-content">
          <h1 className="sobre-content-title">“</h1>
          <p className="sobre-content-paragraph">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent
            scelerisque ex.
          </p>
        </div>

        <img
          src="/photo-sobre.jpg"
          aria-hidden
          alt="Picture of me"
          className="sobre-image"
        />
      </section>
    </main>
  );
};

export default Sobre;
