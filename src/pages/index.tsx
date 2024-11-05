import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Landing.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "500 600 400",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Valeria Vecchi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <div className={styles.imgContainer}>
              <Image src="/logo-big.png" width={536} height={230} layout="responsive" alt="logo studio valeria vecchi" />
            </div>
            <div className={styles.logo}>
              <div className={styles.centralItems}>
                <h3 className={styles.comingSoon}>coming soon</h3>
                <div className={styles.buttonContainer}>
                  <a className={styles.linkButton} href="mailto:info@studiovaleriavecchi.it">contattaci</a>
                </div>
              </div>
            </div>
          </main>
          <footer className={styles.footer}>
            <p>P.IVA  01427570195 - Via Cesare Battisti 2 - 26030 Gadesco Pieve Delmona (Cr) Loc. San Marino</p><p>
            tel. 0372 708900 - 334 6279392 - <a href="mailto:info@studiovaleriavecchi.it">info@studiovaleriavecchi.it</a>
            </p>
          </footer>
          <footer className={styles.footerMobile}>
            <p>
              P.IVA  01427570195 </p><p> Via Cesare Battisti 2 26030 </p><p>  Gadesco Pieve Delmona (Cr) </p><p>  Loc. San Marino </p><p>
            tel. 0372 708900 334 6279392  <a href="mailto:info@studiovaleriavecchi.it">info@studiovaleriavecchi.it</a>
            </p>
          </footer>
        </div>
    </>
  ); 
}
