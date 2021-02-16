import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Header from "../components/Header";
import TopMenu from "../components/TopMenu";
import { Container } from "../styles/index/styles";

export default function Home() {
  useEffect(() => {
    const aboutText = document.querySelector("#AboutText");

    const aboutTextObserver = new IntersectionObserver(
      (elements, aboutTextObserver) => {
        elements.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.remove("Hidden");
            aboutTextObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    aboutTextObserver.observe(aboutText);
  });

  useEffect(() => {
    const topMenu = document.querySelector("#TopMenu");
    const Header = document.querySelector("#Header");

    const topMenuObserver = new IntersectionObserver(
      (elements, topMenuObserver) => {
        elements.forEach(e => {
          if (!e.isIntersecting) {
            topMenu.classList.add("Background");
          }
          if (e.isIntersecting) {
            topMenu.classList.remove("Background");
          }
        });
      },
      { rootMargin: "-50%" }
    );

    topMenuObserver.observe(Header);
  });

  return (
    <div>
      <Head>
        <title>Dra Aline Lima</title>
        <link rel="icon" href="/img/favico.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:wght@200&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Dra Aline Lima" />
        <meta name="url" content="https://draalinelima.com.br" />
        <meta
          name="description"
          content="Prezo por um atendimento no qual a paciente se sinta acolhida e segura para confidenciar tudo que for preciso, proporcionando cuidado integral a sua saúde. Busc"
        />
        <meta
          name="keywords"
          content="Parto humanizado cesárea vitória,Parto natural vitória es,Parto normal vitória es,Humanização do parto,Parto Cesárea / Cesariana,Ginecologia / Ginecologista,Gestação de alto risco vitória,pré natal de alto risco vitória es,Obstetra Unimed Vitória,Obstetra VALE,Obstetra Bradesco,Obstetra ams petrobras,Obstetra Amil,Obstetra Banescaixa,Obstetra Sulamerica,Obstetra PASA,Obstetra Mediservice,Ginecologista medsenior"
        />
      </Head>
      <Container>
        <TopMenu />
        <Header />
        <About id="AboutText">
          "Prezo por um atendimento no qual a paciente se sinta acolhida e
          segura 👸🏻🤰 para confidenciar tudo que for preciso, proporcionando
          cuidado integral a sua saúde. Busco constantemente o que há de melhor
          nas condutas diagnósticas 🔬, nos acompanhamentos e tratamentos.
          Também atuo como médica plantonista da maternidade do HUCAM 📌,
          referência do SUS para o acompanhamento de gestantes de alto risco,
          além de participar da formação diária dos novos ginecologistas
          obstetras na residência médica deste hospital. 😘👨🏻👧🏽💖👶🏻👪🌼"
        </About>
      </Container>
    </div>
  );
}
