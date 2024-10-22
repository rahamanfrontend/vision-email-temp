

import * as React from "react";
import {
  Row,
  Column,
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

export const StatusUpdateTemp = ({ name, status}: { name: string, status: string}) => {
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
          <Container className="h-20 w-full bg-background " style={{ 
            maxWidth: '45rem'
          }}> 
            <Section>
              <div className="flex items-center justify-center pt-[20px] pb-[18px]">
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/logo.png`}
                  alt="Cat"
                  width="180px"
                  height="33px"
                  className="mx-auto"
                />
              </div>
            </Section>
            <Section className="py-[24px] px-6 lg:px-[45px]">
              <Section className="px-[37.5px] py-[32px] bg-white">
                <Text className="text-info text-[20px] font-semibold ">
                    Your Status Update!
                </Text>
                <Text className="text-info text-base mt-[16px] mb-[30px] font-normal capitalize">
                  Hi {name}
                </Text>
                <Text className="text-secondary text-base font-normal">
                   Your Current Status:
                </Text>
                   <Text className="password bg-primary text-white px-[20px] py-[10px] rounded inline-block">
                {status}
                </Text>
                 
              
                <Text className="text-secondary mb-2 text-base font-normal ">
                  Best regards
                </Text>
                <Text className="text-secondary mb text-base font-normal ">
                  Visions Transport Enterprise Sdn Bhd
                  <br />
                  <span className="!text-secondary">
                    www.vizfleettransport.com
                  </span>
                </Text>
              </Section>
            </Section>
            <div
              // className="py-[26px] flex  justify-center  items-center flex-col "
              style={footerContainer}
            >
              <div style={imageMakeCenter}>
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/twitter.png`}
                  alt="Cat"
                  // width="180px"
                  // height="33px"
                  className="block"
                />
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/Facebook.png`}
                  alt="Cat"
                  style={{
                    marginLeft: "16px",
                  }}
                />
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/instagram.png`}
                  alt="Cat"
                  style={{
                    marginLeft: "16px",
                  }}
                />
              </div>
              <div style={flexColumnCenter}>
                <Link
                  href="www.visionstransport.com"
                  className="text-supportivePrimary  mx-auto underline border-b border-supportivePrimary text-sm mb-4"
                  style={{
                    textAlign: "center",
                  }}
                >
                  www.visionstransport.com
                </Link>
              </div>
              <div style={flexColumnCenter}>
                <Img
                  src={`https://visions3.s3.ap-south-1.amazonaws.com/email-assets/logo.png`}
                  alt="Cat"
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
  width: "98px",
};

const flexColumnCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const footerContainer = {
  // display: "flex", // Valid CSS property
  // flexDirection: "column", // Specific valid value for flexDirection
  // justifyContent: "center", // Valid CSS property
  // alignItems: "center", // Valid CSS property
  padding: "20px", // Valid CSS property
  background: "#fff", // Valid CSS property
};