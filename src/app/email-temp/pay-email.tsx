

import * as React from "react";
import {
   Section,
  Html,
  Head,
  Body,
  Tailwind,
  Button,
  Container,
  Text,
  Font,
  Link,
  Img,
} from "@react-email/components";

export const PayEmail = ({ name,  htmlTemp }: { name: string;  htmlTemp: string, }) => {
   console.log({ htmlTemp})
  return (
    <Tailwind
      // @ts-ignore
      config={{
        theme: {
          extend: {
            colors: {
              primary: "#ED2124",
              secondary: "#5E6470",
              info: "#1A1C21",
              background: "#FEE9EA",
              blue: "#336DFF",
              supportivePrimary: "#DC3545",
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <Font
            fontFamily="Lexend"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/lexend/v30/RtKJbxU4oo2bp7zj_qMA.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="">
          <Container className="h-20 w-full bg-background md:w-[600px]">
            <Section>
              <div className="flex items-center justify-center pt-[20px] pb-[18px]">
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/logo.png`}
                  alt="Logo"
                  width="180px"
                  height="33px"
                  className="mx-auto"
                />
              </div>
            </Section>
            <Section className="py-[24px] px-[45px]">
              <Section className="px-[37.5px] py-[32px] bg-white">
                                  
                <pre className="text-secondary mb text-base font-normal">
                  {
                   htmlTemp ? htmlTemp : `Dear ${name ? name :""} Dear user please Find the attached pdf`                                    
                  }
                </pre>
              </Section>
            </Section>
            <div style={footerContainer}>
              <div style={imageMakeCenter}>
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/twitter.png`}
                  alt="Twitter"
                />
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/Facebook.png`}
                  alt="Facebook"
                  style={{ marginLeft: "32px" }}
                />
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/instagram.png`}
                  alt="Instagram"
                  style={{ marginLeft: "32px" }}
                />
              </div>
              <div style={flexColumnCenter}>
                <Link
                  href="https://www.visionstransport.com"
                  className="text-supportivePrimary mx-auto underline border-b border-supportivePrimary text-sm mb-4"
                  style={{ textAlign: "center" }}
                >
                  www.visionstransport.com
                </Link>
              </div>
              <div style={flexColumnCenter}>
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/logo.png`}
                  alt="Logo"
                  width="180px"
                  height="33px"
                  className="block mx-auto"
                />
              </div>
            </div>
            <Section className="h-[14px] bg-primary w-full"></Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};



const imageMakeCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 32,
  margin: "0px auto",
  marginBottom: "16px",
  width: "135px",
};

const flexColumnCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const footerContainer = {
  padding: "20px",
  background: "#fff",
};
