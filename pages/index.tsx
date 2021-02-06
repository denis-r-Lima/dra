import Head from "next/head";
import Header from "../components/Header";
import TopMenu from "../components/TopMenu";
import { Container } from "../styles/index/styles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dra Aline Lima</title>
        <link rel="icon" href="/img/favico.ico" />
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
      </Container>
    </div>
  );
}
